import type { Child } from "hono/jsx";
import EventThumbnail from "@/components/pages/top/EventThumbnail";
import ExternalLink from "@/components/ui/ExternalLink";
import { type CuratedEvent, formatEventDate } from "@/lib/curated-events";

const isSafeMarkdownLink = (href: string): boolean => {
  if (href.startsWith("#") || href.startsWith("/") || href.startsWith("./")) {
    return true;
  }

  try {
    const protocol = new URL(href).protocol;
    return (
      protocol === "http:" || protocol === "https:" || protocol === "mailto:"
    );
  } catch {
    return false;
  }
};

const renderInlineMarkdown = (value: string, key: string): Child[] =>
  value
    .split(
      /(\[[^\]]+\]\([^\s)]+\)|`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_)/,
    )
    .map((part, index) => {
      const partKey = `${key}-${index}`;
      const link = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);

      if (link) {
        const [, label, href] = link;
        return isSafeMarkdownLink(href) ? (
          <a
            key={partKey}
            href={href}
            class="underline decoration-dotted underline-offset-2 hover:text-secondary"
          >
            {renderInlineMarkdown(label, partKey)}
          </a>
        ) : (
          label
        );
      }

      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={partKey} class="rounded bg-dark/10 px-1 dark:bg-light/10">
            {part.slice(1, -1)}
          </code>
        );
      }

      if (
        (part.startsWith("**") && part.endsWith("**")) ||
        (part.startsWith("__") && part.endsWith("__"))
      ) {
        return (
          <strong key={partKey}>
            {renderInlineMarkdown(part.slice(2, -2), partKey)}
          </strong>
        );
      }

      if (
        (part.startsWith("*") && part.endsWith("*")) ||
        (part.startsWith("_") && part.endsWith("_"))
      ) {
        return (
          <em key={partKey}>
            {renderInlineMarkdown(part.slice(1, -1), partKey)}
          </em>
        );
      }

      return part;
    });

const MarkdownContent = ({ content }: { content: string }) => {
  const blocks: Child[] = [];
  const lines = content.split(/\r?\n/);
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }

    const value = paragraph.join(" ");
    blocks.push(
      <p key={`paragraph-${blocks.length}`}>
        {renderInlineMarkdown(value, `paragraph-${blocks.length}`)}
      </p>,
    );
    paragraph = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    const listItem = line.match(/^[-*+]\s+(.+)$/);
    const numberedListItem = line.match(/^\d+[.)]\s+(.+)$/);

    if (!line.trim()) {
      flushParagraph();
    } else if (heading) {
      flushParagraph();
      const Heading = `h${heading[1].length}` as
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";
      blocks.push(
        <Heading key={`heading-${blocks.length}`} class="font-mono font-bold">
          {renderInlineMarkdown(heading[2], `heading-${blocks.length}`)}
        </Heading>,
      );
    } else if (listItem || numberedListItem) {
      flushParagraph();
      const ordered = Boolean(numberedListItem);
      const items: string[] = [];

      while (index < lines.length) {
        const item = lines[index].match(
          ordered ? /^\d+[.)]\s+(.+)$/ : /^[-*+]\s+(.+)$/,
        );
        if (!item) {
          break;
        }
        items.push(item[1]);
        index += 1;
      }
      index -= 1;

      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List
          key={`list-${blocks.length}`}
          class={
            ordered ? "list-decimal space-y-1 pl-5" : "list-disc space-y-1 pl-5"
          }
        >
          {items.map((item, itemIndex) => (
            <li key={`list-item-${itemIndex}`}>
              {renderInlineMarkdown(item, `list-${blocks.length}-${itemIndex}`)}
            </li>
          ))}
        </List>,
      );
    } else {
      paragraph.push(line);
    }
  }

  flushParagraph();

  return <div class="space-y-3 wrap-break-word">{blocks}</div>;
};

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
            class="w-full max-w-60 mx-auto overflow-hidden rounded-lg border transition-colors hover:border-secondary"
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
              <div class="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-lg border bg-light p-6 text-center text-dark shadow-2xl dark:bg-dark dark:text-light md:text-left">
                <div class="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between">
                  <div class="flex flex-col items-center space-y-2 md:items-start">
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
                      <dd>
                        <MarkdownContent content={event.description} />
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
                  <div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
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
