import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FORMBRICKS_HOST = "https://formbricks.ethtokyo.org";
const thumbnailFetchTimeoutMs = 30_000;
const thumbnailFetchAttempts = 3;
// Only the SSG build sets this. Runtime targets do not write optimized copies during request handling.
const thumbnailOutputDir = process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR;

type FormbricksResponse = {
  id: string;
  finished: boolean;
  data: Record<string, unknown>;
};

type FormbricksResponsesResult = {
  data: FormbricksResponse[];
};

type ThumbnailFileInfo = {
  name: string;
  startDate: string;
};

export const buildThumbnailFilename = (
  { name, startDate }: ThumbnailFileInfo,
  fingerprint: string,
): string => {
  const slug = name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const date = startDate.replace(/[^0-9]+/g, "-").replace(/^-|-$/g, "");

  return `${date}-${slug || "event"}-${fingerprint}.webp`;
};

const extractThumbnailUrl = (
  data: Record<string, unknown>,
): string | undefined => {
  for (const value of Object.values(data)) {
    if (!Array.isArray(value) || value.length === 0) {
      continue;
    }

    const url = value[0];
    if (typeof url === "string" && url.includes("/storage/")) {
      return url;
    }
  }

  return undefined;
};

export const fetchFormbricksThumbnailMap = async (): Promise<
  Map<string, string>
> => {
  const apiKey = process.env.FORMBRICKS_EVENT_PAT;
  const surveyId = process.env.FORMBRICKS_EVENT_SURVEY_ID;

  if (!apiKey || !surveyId) {
    return new Map();
  }

  const url = new URL(`${FORMBRICKS_HOST}/api/v2/management/responses`);
  url.searchParams.set("surveyId", surveyId);

  const response = await fetch(url, {
    headers: { "x-api-key": apiKey },
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(
      `Formbricks API error: ${response.status} ${response.statusText}`,
    );
  }

  const result = (await response.json()) as FormbricksResponsesResult;
  const thumbnails = new Map<string, string>();

  for (const item of result.data) {
    if (!item.finished) {
      continue;
    }

    const thumbnailUrl = extractThumbnailUrl(item.data);
    if (thumbnailUrl) {
      thumbnails.set(item.id, thumbnailUrl);
    }
  }

  return thumbnails;
};

export const cacheEventThumbnail = async (
  sourceUrl: string,
  fileInfo: ThumbnailFileInfo,
  apiKey?: string,
): Promise<string | undefined> => {
  if (!thumbnailOutputDir) {
    return undefined;
  }

  const { default: sharp } = await import("sharp");

  for (let attempt = 1; attempt <= thumbnailFetchAttempts; attempt++) {
    try {
      const response = await fetch(sourceUrl, {
        headers: apiKey ? { "x-api-key": apiKey } : undefined,
        signal: AbortSignal.timeout(thumbnailFetchTimeoutMs),
      });

      if (!response.ok) {
        throw new Error(`thumbnail request returned ${response.status}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.startsWith("image/")) {
        throw new Error(`thumbnail response is not an image (${contentType})`);
      }

      const optimizedImage = await sharp(
        Buffer.from(await response.arrayBuffer()),
      )
        .rotate()
        .resize({
          width: 320,
          height: 160,
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
          withoutEnlargement: true,
        })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();
      const fingerprint = createHash("sha256")
        .update(optimizedImage)
        .digest("hex")
        .slice(0, 10);
      const filename = buildThumbnailFilename(fileInfo, fingerprint);
      await mkdir(thumbnailOutputDir, { recursive: true });
      await writeFile(join(thumbnailOutputDir, filename), optimizedImage);

      return `/images/2026/eventthumbnails/${filename}`;
    } catch (error) {
      if (attempt === thumbnailFetchAttempts) {
        console.warn(
          `[event-thumbnail] Could not cache ${sourceUrl} after ${thumbnailFetchAttempts} attempts: ${
            error instanceof Error ? error.message : "unknown error"
          }`,
        );
        return undefined;
      }

      // Back off briefly so a slow origin is not hit by another burst.
      await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  return undefined;
};
