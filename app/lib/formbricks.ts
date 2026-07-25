import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FORMBRICKS_HOST = "https://formbricks.ethtokyo.org";
const THUMBNAIL_OUTPUT_DIR = join(
  process.cwd(),
  "public/images/2026/eventthumbnails",
);

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

const extensionFromContentType = (contentType: string): string => {
  if (contentType.includes("png")) {
    return "png";
  }
  if (contentType.includes("jpeg") || contentType.includes("jpg")) {
    return "jpg";
  }
  if (contentType.includes("webp")) {
    return "webp";
  }
  if (contentType.includes("gif")) {
    return "gif";
  }
  if (contentType.includes("svg")) {
    return "svg";
  }
  return "bin";
};

export const buildThumbnailFilename = (
  { name, startDate }: ThumbnailFileInfo,
  extension: string,
): string => {
  const slug = name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const date = startDate.replace(/[^0-9]+/g, "-").replace(/^-|-$/g, "");

  return `${date}-${slug || "event"}.${extension}`;
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

export const cachePrivateThumbnail = async (
  sourceUrl: string,
  fileInfo: ThumbnailFileInfo,
  apiKey: string,
): Promise<string | undefined> => {
  try {
    const response = await fetch(sourceUrl, {
      headers: { "x-api-key": apiKey },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return undefined;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.startsWith("image/")) {
      return undefined;
    }

    const extension = extensionFromContentType(contentType);
    const filename = buildThumbnailFilename(fileInfo, extension);
    await mkdir(THUMBNAIL_OUTPUT_DIR, { recursive: true });
    await writeFile(
      join(THUMBNAIL_OUTPUT_DIR, filename),
      Buffer.from(await response.arrayBuffer()),
    );

    return `/images/2026/eventthumbnails/${filename}`;
  } catch {
    return undefined;
  }
};
