import { createRoute } from "honox/factory";

const FORMBRICKS_ORIGIN = "https://formbricks.ethtokyo.org";

const isPrivateFormbricksStorageUrl = (value: string): boolean => {
  try {
    const url = new URL(value);
    return (
      url.origin === FORMBRICKS_ORIGIN &&
      url.pathname.startsWith("/storage/") &&
      url.pathname.includes("/private/")
    );
  } catch {
    return false;
  }
};

export default createRoute(async (c) => {
  const sourceUrl = c.req.query("url");
  const apiKey = process.env.FORMBRICKS_EVENT_PAT;

  if (!sourceUrl || !isPrivateFormbricksStorageUrl(sourceUrl)) {
    return c.text("Invalid thumbnail URL", 400);
  }

  if (!apiKey) {
    return c.text("Thumbnail service is unavailable", 503);
  }

  const response = await fetch(sourceUrl, {
    headers: { "x-api-key": apiKey },
    signal: AbortSignal.timeout(10000),
  });
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok || !contentType.startsWith("image/")) {
    return c.text("Thumbnail not found", 404);
  }

  return c.body(response.body, 200, {
    "Cache-Control": "public, max-age=3600",
    "Content-Type": contentType,
  });
});
