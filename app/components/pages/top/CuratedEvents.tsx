import EventThumbnail from "@/components/pages/top/EventThumbnail";
import ExternalLink from "@/components/ui/ExternalLink";
import { type CuratedEvent, formatEventDate } from "@/lib/curated-events";

const CuratedEvents = ({ events }: { events: CuratedEvent[] }) => (
  <div class="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
    {events.map((event) => (
      <article
        key={event.id}
        class="max-h-96 w-60 flex flex-col rounded-lg border p-4"
      >
        <div class="gap-3">
          <div class="flex items-center justify-center pb-4">
            <EventThumbnail name={event.name} thumbnail={event.thumbnail} />
          </div>
          <div class="space-y-2 text-center justify-center">
            <h4 class="font-mono text-base font-bold md:text-xl">
              {event.link ? (
                <ExternalLink href={event.link}>{event.name}</ExternalLink>
              ) : (
                event.name
              )}
            </h4>
            <p class="text-sm opacity-75">
              {formatEventDate(event.startDate, event.endDate)}
            </p>
            {event.venueName ? (
              <p class="text-sm">
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
          </div>
        </div>

        <div class="mt-4 flex flex-1 flex-col gap-2">
          {event.description ? (
            <p class="truncate text-sm opacity-75">{event.description}</p>
          ) : null}
          {event.groupChatLink ? (
            <ExternalLink className="text-sm" href={event.groupChatLink}>
              Group chat
            </ExternalLink>
          ) : null}
          <div class="flex justify-between">
            {event.organizerEmail ? (
              <a
                class="text-sm underline decoration-dotted py-1"
                href={`mailto:${event.organizerEmail}`}
              >
                {event.organizerName ?? event.organizerEmail}
              </a>
            ) : null}
            {event.type ? (
              <p class="text-sm border rounded-full py-1 px-2">{event.type}</p>
            ) : null}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default CuratedEvents;
