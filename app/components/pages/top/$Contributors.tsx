import { contributors } from "@/components/pages/top/data";
import ExternalLink from "@/components/ui/ExternalLink";

const getInitial = (name: string) => name.charAt(0).toUpperCase();

const getLinkLabel = (href: string) => {
  const hostname = new URL(href).hostname.replace(/^www\./, "");
  if (hostname === "github.com") {
    return "GitHub";
  }
  if (hostname === "twitter.com" || hostname === "x.com") {
    return "Twitter";
  }
  return "Website";
};

const handleAvatarError = (event: Event, handle: string) => {
  const image = event.currentTarget as HTMLImageElement;

  if (image.dataset.fallbackLoaded === "true") {
    image.hidden = true;
    return;
  }

  image.dataset.fallbackLoaded = "true";
  image.src = `https://metadata.ens.domains/mainnet/avatar/${handle}`;
};

const Contributors = () => (
  <div class="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
    {contributors.map((contributor) => (
      <article
        key={contributor.handle}
        class="flex min-h-34 flex-col justify-between rounded-lg border p-4"
      >
        <div class="flex items-center gap-3">
          <div class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border font-mono text-xl font-bold">
            <span class="">{getInitial(contributor.name)}</span>
            <img
              src={`https://euc.li/${contributor.handle}`}
              alt={`${contributor.handle} profile`}
              class="absolute object-cover"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              onError={(event: Event) =>
                handleAvatarError(event, contributor.handle)
              }
            />
          </div>
          <div class="min-w-0">
            <h4 class="truncate font-mono font-bold">{contributor.name}</h4>
            <p class="text-sm opacity-75">@{contributor.handle}</p>
          </div>
        </div>
        <div class="mt-5 flex items-end justify-between gap-3">
          <p class="text-sm">{contributor.role}</p>
          <ExternalLink className="text-sm" href={contributor.href}>
            {getLinkLabel(contributor.href)}
          </ExternalLink>
        </div>
      </article>
    ))}
  </div>
);

export default Contributors;
