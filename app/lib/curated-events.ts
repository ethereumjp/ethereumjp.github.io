import {
  cacheEventThumbnail,
  fetchFormbricksThumbnailMap,
} from "@/lib/formbricks";

export type CuratedEvent = {
  id: string;
  responseId?: string;
  name: string;
  description?: string;
  type?: string;
  link?: string;
  thumbnail?: string;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  venueName?: string;
  venueAddress?: string;
  venueLink?: string;
  organizerName?: string;
  organizerEmail?: string;
  groupChatLink?: string;
};

type AirtableCurateFields = {
  Featured?: string;
  "Response ID"?: string;
  "Event Name"?: string;
  "Event Description"?: string;
  "Event Type"?: string;
  "Event Start Date"?: string;
  "Event Start Time (HH:MM)"?: string;
  "Event End Date (if multiple days)"?: string;
  "Event End Time (HH:MM)"?: string;
  "Event Link"?: string;
  "Thumbnail URL"?: string | AirtableAttachment[];
  "Venue Name"?: string;
  "Venue Address"?: string;
  "Venue Link"?: string;
  "Link to Event Group Chat"?: string;
  "Organizer name"?: string;
  "Organizer email"?: string;
};

type AirtableAttachment = {
  url?: string;
};

type AirtableRecord = {
  id: string;
  fields: AirtableCurateFields;
};

type AirtableResponse = {
  records: AirtableRecord[];
  offset?: string;
};

const getAirtableThumbnailUrl = (
  thumbnail: AirtableCurateFields["Thumbnail URL"],
): string | undefined => {
  if (typeof thumbnail === "string") {
    return thumbnail;
  }

  return thumbnail?.find((attachment) => typeof attachment.url === "string")
    ?.url;
};

const mapRecord = (record: AirtableRecord): CuratedEvent | null => {
  const { fields } = record;
  const name = fields["Event Name"];
  const startDate = fields["Event Start Date"];

  if (!name || !startDate) {
    return null;
  }

  return {
    id: record.id,
    responseId: fields["Response ID"],
    name,
    description: fields["Event Description"],
    type: fields["Event Type"],
    link: fields["Event Link"],
    thumbnail: getAirtableThumbnailUrl(fields["Thumbnail URL"]),
    startDate,
    endDate: fields["Event End Date (if multiple days)"],
    startTime: fields["Event Start Time (HH:MM)"],
    endTime: fields["Event End Time (HH:MM)"],
    venueName: fields["Venue Name"],
    venueAddress: fields["Venue Address"],
    venueLink: fields["Venue Link"],
    groupChatLink: fields["Link to Event Group Chat"],
    organizerName: fields["Organizer name"],
    organizerEmail: fields["Organizer email"],
  };
};

const isFormbricksPrivateStorageUrl = (url: string): boolean =>
  url.includes("formbricks.ethtokyo.org/storage/") && url.includes("/private/");

const isStaticThumbnailBuild = Boolean(
  process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR,
);

const resolvePublicThumbnailUrl = async (
  url: string,
): Promise<string | undefined> => {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(5000),
    });
    const contentType = response.headers.get("content-type") ?? "";

    if (response.ok && contentType.startsWith("image/")) {
      return url;
    }
  } catch {
    // Unreachable or non-image URLs fall back to the placeholder in the UI.
  }

  return undefined;
};

const resolveEventThumbnail = async (
  event: CuratedEvent,
  formbricksThumbnails: Map<string, string>,
): Promise<string | undefined> => {
  const formbricksPat = process.env.FORMBRICKS_EVENT_PAT;
  const responseId = event.responseId;

  let sourceUrl = event.thumbnail;
  if (responseId && formbricksThumbnails.has(responseId)) {
    sourceUrl = formbricksThumbnails.get(responseId);
  }

  if (!sourceUrl) {
    return undefined;
  }

  if (isFormbricksPrivateStorageUrl(sourceUrl)) {
    if (!formbricksPat) {
      return undefined;
    }

    return cacheEventThumbnail(
      sourceUrl,
      { name: event.name, startDate: event.startDate },
      formbricksPat,
    );
  }

  // Airtable attachment URLs are retrieved at request time on runtime targets.
  // Do not preflight them with HEAD: Airtable may reject it even though the
  // browser's normal image GET succeeds.
  if (!isStaticThumbnailBuild) {
    return sourceUrl;
  }

  const cachedThumbnail = await cacheEventThumbnail(sourceUrl, {
    name: event.name,
    startDate: event.startDate,
  });

  return cachedThumbnail ?? resolvePublicThumbnailUrl(sourceUrl);
};

export const formatEventDate = (
  startDate: string,
  endDate?: string,
): string => {
  const start = new Date(`${startDate}T00:00:00`);
  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const startDay = start.getDate();

  if (!endDate || endDate === startDate) {
    return `${startMonth} ${startDay}`;
  }

  const end = new Date(`${endDate}T00:00:00`);
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });
  const endDay = end.getDate();

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}`;
  }

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
};

const compareEventsByStart = (a: CuratedEvent, b: CuratedEvent): number =>
  a.startDate.localeCompare(b.startDate) ||
  (a.startTime ?? "").localeCompare(b.startTime ?? "");

const loadCuratedEvents = async (): Promise<CuratedEvent[]> => {
  const pat = process.env.AIRTABLE_EVENTCURATE_PAT;
  const base = process.env.AIRTABLE_EVENTCURATE_BASE;
  const table = process.env.AIRTABLE_EVENTCURATE_TABLE;

  if (!pat || !base || !table) {
    console.warn(
      "[curated-events] AIRTABLE_EVENTCURATE_* env vars are not set; skipping fetch",
    );
    return [];
  }

  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const url = new URL(`https://api.airtable.com/v0/${base}/${table}`);
    url.searchParams.set("filterByFormula", '{Featured}="Yes"');

    if (offset) {
      url.searchParams.set("offset", offset);
    }

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${pat}` },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(
        `Airtable API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as AirtableResponse;
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  const events = records
    .map(mapRecord)
    .filter((event): event is CuratedEvent => event !== null)
    .sort(compareEventsByStart);

  const formbricksThumbnails = new Map<string, string>();
  if (isStaticThumbnailBuild) {
    try {
      const thumbnails = await fetchFormbricksThumbnailMap();
      for (const [responseId, url] of thumbnails) {
        formbricksThumbnails.set(responseId, url);
      }
    } catch (error) {
      console.warn(
        `[curated-events] Could not fetch Formbricks thumbnails; continuing without them: ${
          error instanceof Error ? error.message : "unknown error"
        }`,
      );
    }
  }

  return Promise.all(
    events.map(async (event) => ({
      ...event,
      thumbnail: await resolveEventThumbnail(event, formbricksThumbnails),
    })),
  );
};

let curatedEventsPromise: Promise<CuratedEvent[]> | undefined;

export const fetchCuratedEvents = (): Promise<CuratedEvent[]> => {
  curatedEventsPromise ??= loadCuratedEvents().catch((error) => {
    console.warn(
      `[curated-events] Could not fetch Airtable events; using the fallback schedule: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
    return [];
  });

  return curatedEventsPromise;
};
