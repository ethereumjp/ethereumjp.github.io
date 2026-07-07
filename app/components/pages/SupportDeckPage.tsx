import Layout from "@/components/layouts/MainLayout";
import type { Locale } from "@/i18n";

const SPONSOR_INQUIRY_URL = "https://forms.ethtokyo.org/p/sponsor-inquiry";

const PREZI_EMBED_URL = "https://prezi.com/p/embed/hj3rsV0YXXOMVBkdCHPf/";

const copy = {
  en: {
    eyebrow: "Enterprise sponsors",
    title: "Support ETHTokyo",
    description:
      "A sponsor deck for teams supporting Ethereum infrastructure, developer ecosystems, public goods, and credible community spaces in Tokyo.",
    sponsorInquiry: "Sponsor inquiry",
    iframeTitle: "ETHTokyo enterprise sponsor deck",
    loadHelp:
      "If the deck does not load, open it directly in a new browser tab.",
    openDeck: "Open presentation deck",
  },
  ja: {
    eyebrow: "企業スポンサー",
    title: "ETHTokyoを後援する",
    description:
      "Ethereumインフラ、開発者エコシステム、公共財、そして東京の信頼できるコミュニティスペースを支援するチーム向けのスポンサー資料です。",
    sponsorInquiry: "スポンサー問い合わせ",
    iframeTitle: "ETHTokyo企業スポンサー資料",
    loadHelp:
      "資料が読み込まれない場合は、新しいブラウザタブで直接開いてください。",
    openDeck: "プレゼンテーション資料を開く",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    sponsorInquiry: string;
    iframeTitle: string;
    loadHelp: string;
    openDeck: string;
  }
>;

const SupportDeckPage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const labels = copy[locale];

  return (
    <Layout locale={locale} currentPath={currentPath}>
      <section class="w-full px-6 pt-20 pb-10 border-b">
        <div class="max-w-5xl mx-auto flex flex-col gap-5">
          <p class="font-mono text-sm uppercase tracking-normal text-secondary">
            {labels.eyebrow}
          </p>
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-bold font-mono">{labels.title}</h1>
              <p class="max-w-3xl text-xl leading-relaxed">
                {labels.description}
              </p>
            </div>
            <a
              class="btn shrink-0 text-center"
              href={SPONSOR_INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.sponsorInquiry}
            </a>
          </div>
        </div>
      </section>

      <section class="w-full px-6 py-8">
        <div class="max-w-5xl mx-auto flex flex-col gap-4">
          <div class="aspect-video w-full overflow-hidden rounded-lg border bg-dark">
            <iframe
              title={labels.iframeTitle}
              src={PREZI_EMBED_URL}
              class="h-full w-full"
              allow="fullscreen; autoplay"
              allowfullscreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div class="flex flex-col gap-3 text-sm opacity-80 md:flex-row md:items-center md:justify-between">
            <p>{labels.loadHelp}</p>
            <a
              class="font-mono underline underline-offset-4"
              href={PREZI_EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.openDeck}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportDeckPage;
