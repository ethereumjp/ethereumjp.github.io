import { cacheEventThumbnail, fetchFormbricksThumbnailMap } from "./formbricks";

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
  "Event name"?: string;
  "Event description"?: string;
  "Event type"?: string;
  "Event starts on"?: string;
  "Event starts at (HH:MM)"?: string;
  "Event ends on (if multiple days)"?: string;
  "Event ends at (HH:MM)"?: string;
  "Event link"?: string;
  "Thumbnail URL"?: string | AirtableAttachment[];
  "Venue Name"?: string;
  "Venue Address"?: string;
  "Venue link"?: string;
  "Link to Group Chat"?: string;
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
  const name = fields["Event name"];
  const startDate = fields["Event starts on"];

  if (!name || !startDate) {
    return null;
  }

  return {
    id: record.id,
    responseId: fields["Response ID"],
    name,
    description: fields["Event description"],
    type: fields["Event type"],
    link: fields["Event link"],
    thumbnail: getAirtableThumbnailUrl(fields["Thumbnail URL"]),
    startDate,
    endDate: fields["Event ends on (if multiple days)"],
    startTime: fields["Event starts at (HH:MM)"],
    endTime: fields["Event ends at (HH:MM)"],
    venueName: fields["Venue Name"],
    venueAddress: fields["Venue Address"],
    venueLink: fields["Venue link"],
    groupChatLink: fields["Link to Group Chat"],
    organizerName: fields["Organizer name"],
    organizerEmail: fields["Organizer email"],
  };
};

const isFormbricksPrivateStorageUrl = (url: string): boolean =>
  url.includes("formbricks.ethtokyo.org/storage/") && url.includes("/private/");

const isStaticThumbnailBuild = Boolean(
  process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR,
);
const thumbnailDownloadConcurrency = 4;

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

    if (!isStaticThumbnailBuild) {
      return `/api/event-thumbnail?url=${encodeURIComponent(sourceUrl)}`;
    }

    const cachedThumbnail = await cacheEventThumbnail(
      sourceUrl,
      { name: event.name, startDate: event.startDate },
      formbricksPat,
    );

    return cachedThumbnail;
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

  return cachedThumbnail;
};

const resolveEventThumbnails = async (
  events: CuratedEvent[],
  formbricksThumbnails: Map<string, string>,
): Promise<CuratedEvent[]> => {
  const resolvedEvents = [...events];
  let nextIndex = 0;

  const worker = async (): Promise<void> => {
    while (nextIndex < events.length) {
      const index = nextIndex++;
      const event = events[index];
      resolvedEvents[index] = {
        ...event,
        thumbnail: await resolveEventThumbnail(event, formbricksThumbnails),
      };
    }
  };

  await Promise.all(
    Array.from(
      { length: Math.min(thumbnailDownloadConcurrency, events.length) },
      worker,
    ),
  );

  return resolvedEvents;
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

  // SSG awaits this function before it renders either locale. Keep the
  // downloads bounded: a burst of requests can make Formbricks or Airtable
  // attachments time out, which previously left a partially built schedule.
  return resolveEventThumbnails(events, formbricksThumbnails);
};

let curatedEventsPromise: Promise<CuratedEvent[]> | undefined;
const staticCuratedEventsPromiseKey = Symbol.for(
  "ethtokyo.static-curated-events-promise",
);

type StaticCuratedEventsCache = typeof globalThis & {
  [staticCuratedEventsPromiseKey]?: Promise<CuratedEvent[]>;
};

export const fetchCuratedEvents = (): Promise<CuratedEvent[]> => {
  if (isStaticThumbnailBuild) {
    const cache = globalThis as StaticCuratedEventsCache;
    cache[staticCuratedEventsPromiseKey] ??= loadCuratedEvents().catch(
      (error) => {
        console.warn(
          `[curated-events] Could not fetch Airtable events; using the fallback schedule: ${
            error instanceof Error ? error.message : "unknown error"
          }`,
        );
        return [];
      },
    );
    return cache[staticCuratedEventsPromiseKey];
  }

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
