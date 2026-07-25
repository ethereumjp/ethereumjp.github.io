import { html } from "hono/html";
import { SITE_DOMAIN, SITE_URL } from "@/const";
import type { Locale } from "@/i18n";
import {
  canonicalUrl,
  localizedPath,
  metaByLocale,
  withoutLocalePrefix,
} from "@/i18n";

const Meta = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const meta = metaByLocale[locale];
  const basePath = withoutLocalePrefix(currentPath);
  const enPath = localizedPath(basePath, "en");
  const jaPath = localizedPath(basePath, "ja");
  const currentUrl = canonicalUrl(currentPath);

  return (
    <>
      <meta name="description" content={meta.siteDescription} />
      <link rel="canonical" href={currentUrl} />
      {/*
        Hono deduplicates <link> elements by href, but language alternates
        intentionally share URLs with the canonical and x-default links.
      */}
      {html`<link rel="alternate" hreflang="en" href="${canonicalUrl(enPath)}" />
        <link rel="alternate" hreflang="ja" href="${canonicalUrl(jaPath)}" />
        <link rel="alternate" hreflang="x-default" href="${SITE_URL}" />`}
      <meta
        property="og:locale"
        content={locale === "ja" ? "ja_JP" : "en_US"}
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.siteTitle} />
      <meta property="og:description" content={meta.siteDescription} />
      <meta property="og:image" content={`${SITE_URL}images/ogp.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={SITE_DOMAIN} />
      <meta property="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={meta.siteTitle} />
      <meta name="twitter:description" content={meta.siteDescription} />
      <meta name="twitter:image" content={`${SITE_URL}images/ogp.png`} />
    </>
  );
};

export default Meta;
