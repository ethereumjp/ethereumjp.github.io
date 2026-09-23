import StaticPage from "@/components/pages/StaticPage";
import type { Locale } from "@/i18n";

const copy = {
  en: {
    title: "Brand Assets",
    intro:
      "Official ETHTokyo logo files for press, event pages, social posts, and community materials. Please keep the logo proportions intact and preserve enough contrast around the mark.",
    download: "Download",
    vector: "Vector",
    raster: "Raster",
    variants: "Logo variants",
  },
  ja: {
    title: "ブランドアセット",
    intro:
      "プレス、イベントページ、ソーシャル投稿、コミュニティ資料で利用できるETHTokyo公式ロゴです。ロゴの比率を保ち、周囲に十分なコントラストを確保して使用してください。",
    download: "ダウンロード",
    vector: "ベクター",
    raster: "ラスター",
    variants: "ロゴバリエーション",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    intro: string;
    download: string;
    vector: string;
    raster: string;
    variants: string;
  }
>;

const assets = [
  {
    name: "Black",
    preview: "/assets/LogoBlack.svg",
    svg: "/assets/LogoBlack.svg",
    png: "/assets/LogoBlack.png",
    background: "bg-light",
  },
  {
    name: "Black Color",
    preview: "/assets/LogoBlackColor.svg",
    svg: "/assets/LogoBlackColor.svg",
    png: "/assets/LogoBlackColor.png",
    background: "bg-light",
  },
  {
    name: "Black Fill",
    preview: "/assets/LogoBlackFill.svg",
    svg: "/assets/LogoBlackFill.svg",
    png: "/assets/LogoBlackFill.png",
    background: "bg-light",
  },
  {
    name: "Black Outline",
    preview: "/assets/LogoBlackOutline.svg",
    svg: "/assets/LogoBlackOutline.svg",
    png: "/assets/LogoBlackOutline.png",
    background: "bg-light",
  },
  {
    name: "White",
    preview: "/assets/LogoWhite.svg",
    svg: "/assets/LogoWhite.svg",
    png: "/assets/LogoWhite.png",
    background: "bg-dark",
  },
  {
    name: "White Color",
    preview: "/assets/LogoWhiteColor.svg",
    svg: "/assets/LogoWhiteColor.svg",
    png: "/assets/LogoWhiteColor.png",
    background: "bg-dark",
  },
  {
    name: "White Color Fill",
    preview: "/assets/LogoWhiteColorFill.png",
    svg: undefined,
    png: "/assets/LogoWhiteColorFill.png",
    background: "bg-dark",
  },
  {
    name: "White Fill",
    preview: "/assets/LogoWhiteFill.svg",
    svg: "/assets/LogoWhiteFill.svg",
    png: "/assets/LogoWhiteFill.png",
    background: "bg-dark",
  },
  {
    name: "White Outline",
    preview: "/assets/LogoWhiteOutline.svg",
    svg: "/assets/LogoWhiteOutline.svg",
    png: "/assets/LogoWhiteOutline.png",
    background: "bg-dark",
  },
] as const;

const BrandAssetsPage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const labels = copy[locale];

  return (
    <StaticPage title={labels.title} locale={locale} currentPath={currentPath}>
      <p>{labels.intro}</p>
      <h2 class="pt-6 text-xl font-bold">{labels.variants}</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        {assets.map((asset) => (
          <article key={asset.name} class="overflow-hidden rounded-lg border">
            <div
              class={`flex h-52 items-center justify-center p-8 ${asset.background}`}
            >
              <img
                src={asset.preview}
                alt={`ETHTokyo ${asset.name} logo`}
                class="max-h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="flex items-center justify-between gap-4 p-4">
              <h3 class="font-mono font-bold">{asset.name}</h3>
              <div class="flex gap-3 text-sm">
                {asset.svg ? (
                  <a href={asset.svg} download>
                    {labels.download} {labels.vector}
                  </a>
                ) : null}
                <a href={asset.png} download>
                  {labels.download} {labels.raster}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </StaticPage>
  );
};

export default BrandAssetsPage;
