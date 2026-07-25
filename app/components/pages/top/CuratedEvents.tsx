import EventThumbnail from "@/components/pages/top/EventThumbnail";
import ExternalLink from "@/components/ui/ExternalLink";
import { type CuratedEvent, formatEventDate } from "@/lib/curated-events";

const formatEventTime = (
  startTime?: string,
  endTime?: string,
): string | null => {
  if (startTime && endTime) {
    return `${startTime} - ${endTime}`;
  }

  return startTime ?? endTime ?? null;
};

const CuratedEvents = ({ events }: { events: CuratedEvent[] }) => (
  <>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] justify-center gap-4">
      {events.map((event) => {
        const modalId = `event-${event.id}`;
        const dialogTitleId = `${modalId}-title`;
        const eventTime = formatEventTime(event.startTime, event.endTime);

        return (
          <article
            key={event.id}
            class="w-full max-w-60 overflow-hidden rounded-lg border transition-colors hover:border-secondary"
          >
            <a
              href={`#${modalId}`}
              class="flex h-full flex-col gap-4 p-4 text-inherit no-underline"
              aria-label={`View details for ${event.name}`}
            >
              <div class="flex justify-end">
                {event.type ? (
                  <p class="w-fit rounded-full border px-2 py-1 text-sm">
                    {event.type}
                  </p>
                ) : null}
              </div>
              <div class="flex items-center justify-center">
                <EventThumbnail name={event.name} thumbnail={event.thumbnail} />
              </div>
              <div class="space-y-2 text-center">
                <h4 class="font-mono text-base font-bold md:text-xl">
                  {event.name}
                </h4>
                <p class="text-sm opacity-75">
                  {formatEventDate(event.startDate, event.endDate)}
                </p>
                {event.venueName ? (
                  <p class="text-sm opacity-90">📍 {event.venueName}</p>
                ) : null}
              </div>
            </a>
            <div
              id={modalId}
              class="fixed inset-0 z-60 hidden items-center justify-center bg-dark/80 px-6 py-8 target:flex"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              role="dialog"
            >
              <a
                href="#schedule"
                class="absolute inset-0 cursor-default"
                aria-label={`Close details for ${event.name}`}
              >
                <span class="sr-only">Close details for {event.name}</span>
              </a>
              <div class="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-lg border bg-light p-6 text-dark shadow-2xl dark:bg-dark dark:text-light">
                <div class="flex items-start justify-between gap-4">
                  <div class="space-y-2">
                    <p class="font-mono text-sm opacity-70">Event</p>
                    <h4 id={dialogTitleId} class="font-mono text-2xl font-bold">
                      {event.name}
                    </h4>
                    {event.type ? (
                      <p class="w-fit rounded-full border px-2 py-1 text-sm">
                        {event.type}
                      </p>
                    ) : null}
                  </div>
                  <a
                    href="#schedule"
                    class="flex items-center justify-center border bg-white px-2 py-1 font-mono text-sm text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
                    aria-label={`Close details for ${event.name}`}
                  >
                    Close
                  </a>
                </div>
                <div class="mt-6 flex justify-center">
                  <EventThumbnail
                    name={event.name}
                    thumbnail={event.thumbnail}
                  />
                </div>
                <dl class="mt-6 divide-y border-y">
                  <div class="grid gap-2 py-3 md:grid-cols-[8rem_1fr]">
                    <dt class="font-mono text-sm opacity-70">Date</dt>
                    <dd>{formatEventDate(event.startDate, event.endDate)}</dd>
                  </div>
                  {eventTime ? (
                    <div class="grid gap-2 py-3 md:grid-cols-[8rem_1fr]">
                      <dt class="font-mono text-sm opacity-70">Time</dt>
                      <dd>{eventTime}</dd>
                    </div>
                  ) : null}
                  {event.venueName ? (
                    <div class="grid gap-2 py-3 md:grid-cols-[8rem_1fr]">
                      <dt class="font-mono text-sm opacity-70">Location</dt>
                      <dd class="space-y-1">
                        <p>
                          {event.venueLink ? (
                            <ExternalLink href={event.venueLink}>
                              {event.venueName}
                            </ExternalLink>
                          ) : (
                            event.venueName
                          )}
                        </p>
                        {event.venueAddress ? (
                          <p class="text-sm opacity-75">{event.venueAddress}</p>
                        ) : null}
                      </dd>
                    </div>
                  ) : null}
                  {event.description ? (
                    <div class="grid gap-2 py-3 md:grid-cols-[8rem_1fr]">
                      <dt class="font-mono text-sm opacity-70">About</dt>
                      <dd class="whitespace-pre-wrap break-words">
                        {event.description}
                      </dd>
                    </div>
                  ) : null}
                  {event.organizerName || event.organizerEmail ? (
                    <div class="grid gap-2 py-3 md:grid-cols-[8rem_1fr]">
                      <dt class="font-mono text-sm opacity-70">Organizer</dt>
                      <dd>
                        {event.organizerEmail ? (
                          <a
                            class="underline decoration-dotted underline-offset-2 hover:text-secondary"
                            href={`mailto:${event.organizerEmail}`}
                          >
                            {event.organizerName ?? event.organizerEmail}
                          </a>
                        ) : (
                          event.organizerName
                        )}
                      </dd>
                    </div>
                  ) : null}
                </dl>
                {event.link || event.groupChatLink ? (
                  <div class="mt-6 flex flex-wrap gap-3">
                    {event.link ? (
                      <ExternalLink className="btn-outline" href={event.link}>
                        Event website
                      </ExternalLink>
                    ) : null}
                    {event.groupChatLink ? (
                      <ExternalLink
                        className="btn-outline"
                        href={event.groupChatLink}
                      >
                        Group chat
                      </ExternalLink>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </>
);

export default CuratedEvents;
