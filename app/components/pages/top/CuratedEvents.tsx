import EventThumbnail from "@/components/pages/top/EventThumbnail";
import ExternalLink from "@/components/ui/ExternalLink";
import { type CuratedEvent, formatEventDate } from "@/lib/curated-events";

const CuratedEvents = ({ events }: { events: CuratedEvent[] }) => (
  <div class="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
    {events.map((event) => (
      <article
        key={event.id}
        class="flex min-h-34 flex-col rounded-lg border p-4"
      >
        <div class="flex items-start gap-3">
          <EventThumbnail name={event.name} thumbnail={event.thumbnail} />
          <div class="min-w-0 flex-1 flex flex-col gap-1">
            <h4 class="truncate font-mono text-base font-bold md:text-xl">
              {event.link ? (
                <ExternalLink href={event.link}>{event.name}</ExternalLink>
              ) : (
                event.name
              )}
            </h4>
            <p class="text-sm opacity-75">
              {formatEventDate(event.startDate, event.endDate)}
            </p>
            {event.type ? <p class="text-sm">{event.type}</p> : null}
          </div>
        </div>

        <div class="mt-4 flex flex-1 flex-col gap-2">
          {event.description ? (
            <p class="text-sm opacity-75">{event.description}</p>
          ) : null}
          {event.groupChatLink ? (
            <ExternalLink className="text-sm" href={event.groupChatLink}>
              Group chat
            </ExternalLink>
          ) : null}
          {event.organizerEmail ? (
            <a
              class="text-sm underline decoration-dotted"
              href={`mailto:${event.organizerEmail}`}
            >
              {event.organizerName ?? event.organizerEmail}
            </a>
          ) : null}
        </div>

        {event.venueName ? (
          <p class="mt-4 text-sm">
            📍{" "}
            {event.venueLink ? (
              <ExternalLink className="text-sm" href={event.venueLink}>
                {event.venueName}
              </ExternalLink>
            ) : (
              event.venueName
            )}
          </p>
        ) : null}
      </article>
    ))}
  </div>
);

export default CuratedEvents;
