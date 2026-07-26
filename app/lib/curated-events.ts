import {
  cachePrivateThumbnail,
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
  "1. Event Name"?: string;
  "2. Event Description"?: string;
  "3. Event Type"?: string;
  "4. Event Start Date"?: string;
  "5. Event Start Time (HH:MM)"?: string;
  "6. Event End Date (if multiple days)"?: string;
  "7. Event End Time (HH:MM)"?: string;
  "8. Event Link"?: string;
  "9. Event thumbnail or logo"?: string;
  "10. Venue Name"?: string;
  "11. Venue Address"?: string;
  "12. Venue Link"?: string;
  "13. Link to Event Group Chat"?: string;
  "14. Organizer name"?: string;
  "15. Organizer email"?: string;
};

type AirtableRecord = {
  id: string;
  fields: AirtableCurateFields;
};

type AirtableResponse = {
  records: AirtableRecord[];
  offset?: string;
};

const mapRecord = (record: AirtableRecord): CuratedEvent | null => {
  const { fields } = record;
  const name = fields["1. Event Name"];
  const startDate = fields["4. Event Start Date"];

  if (!name || !startDate) {
    return null;
  }

  return {
    id: record.id,
    responseId: fields["Response ID"],
    name,
    description: fields["2. Event Description"],
    type: fields["3. Event Type"],
    link: fields["8. Event Link"],
    thumbnail: fields["9. Event thumbnail or logo"],
    startDate,
    endDate: fields["6. Event End Date (if multiple days)"],
    startTime: fields["5. Event Start Time (HH:MM)"],
    endTime: fields["7. Event End Time (HH:MM)"],
    venueName: fields["10. Venue Name"],
    venueAddress: fields["11. Venue Address"],
    venueLink: fields["12. Venue Link"],
    groupChatLink: fields["13. Link to Event Group Chat"],
    organizerName: fields["14. Organizer name"],
    organizerEmail: fields["15. Organizer email"],
  };
};

const isFormbricksPrivateStorageUrl = (url: string): boolean =>
  url.includes("formbricks.ethtokyo.org/storage/") && url.includes("/private/");

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

  if (isFormbricksPrivateStorageUrl(sourceUrl) && formbricksPat) {
    return cachePrivateThumbnail(
      sourceUrl,
      { name: event.name, startDate: event.startDate },
      formbricksPat,
    );
  }

  return resolvePublicThumbnailUrl(sourceUrl);
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

  let formbricksThumbnails = new Map<string, string>();
  try {
    formbricksThumbnails = await fetchFormbricksThumbnailMap();
  } catch (error) {
    console.warn(
      `[curated-events] Could not fetch Formbricks thumbnails; continuing without them: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
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
