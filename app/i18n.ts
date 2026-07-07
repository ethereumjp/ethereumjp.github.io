import { SITE_URL } from "@/const";

export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const detectLocaleFromPath = (path: string): Locale =>
  path === "/ja" || path.startsWith("/ja/") ? "ja" : DEFAULT_LOCALE;

export const withoutLocalePrefix = (path: string) => {
  if (path === "/ja") {
    return "/";
  }

  if (path.startsWith("/ja/")) {
    return path.slice(3) || "/";
  }

  return path || "/";
};

export const localizedPath = (href: string, locale: Locale) => {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("#") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }

  const basePath = withoutLocalePrefix(href);

  if (locale === "ja") {
    return basePath === "/" ? "/ja" : `/ja${basePath}`;
  }

  return basePath;
};

export const switchLocalePath = (currentPath: string, locale: Locale) =>
  localizedPath(withoutLocalePrefix(currentPath), locale);

export const canonicalUrl = (path: string) => {
  const normalizedPath = path === "/" ? "" : path.replace(/^\//, "");
  return new URL(normalizedPath, SITE_URL).toString();
};

export const metaByLocale = {
  en: {
    siteTitle: "ETHTokyo 2026",
    siteDescription:
      "ETHTokyo'26 is the premier Ethereum festival in Japan for builders and cypherpunks, hosted at the heart of Tokyo metropolis.",
  },
  ja: {
    siteTitle: "ETHTokyo 2026",
    siteDescription:
      "ETHTokyo'26は、東京の中心で開催されるビルダーとサイファーパンクのための日本最大級のEthereumフェスティバルです。",
  },
} satisfies Record<
  Locale,
  {
    siteTitle: string;
    siteDescription: string;
  }
>;

const pageTitles = {
  home: {
    en: "ETHTokyo '26",
    ja: "ETHTokyo '26",
  },
  manifesto: {
    en: "Manifesto | ETHTokyo '26",
    ja: "マニフェスト | ETHTokyo '26",
  },
  visa: {
    en: "Visa Info | ETHTokyo '26",
    ja: "ビザ情報 | ETHTokyo '26",
  },
  donate: {
    en: "Support | ETHTokyo '26",
    ja: "寄付・支援 | ETHTokyo '26",
  },
  sponsorDeck: {
    en: "Enterprise Sponsor Deck | ETHTokyo '26",
    ja: "スポンサー資料 | ETHTokyo '26",
  },
  codeOfConduct: {
    en: "Code of Conduct | ETHTokyo '26",
    ja: "行動規範 | ETHTokyo '26",
  },
  privacyPolicy: {
    en: "Privacy Policy | ETHTokyo '26",
    ja: "プライバシーポリシー | ETHTokyo '26",
  },
} satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pageTitles;

export const getPageTitle = (page: PageKey, locale: Locale) =>
  pageTitles[page][locale];
