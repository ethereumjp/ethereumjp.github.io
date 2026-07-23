import Logo from "@/components/icons/LogoGradient";
import Layout from "@/components/layouts/MainLayout";
import Contributors from "@/components/pages/top/$Contributors";
import {
  getInvolvementLinks,
  scheduleItems,
} from "@/components/pages/top/data";
import PastEvents from "@/components/pages/top/PastEvents";
import ScheduleFallback from "@/components/pages/top/ScheduleFallback";
import Section from "@/components/pages/top/Section";
import ActionLink from "@/components/ui/ActionLink";
import ExternalLink from "@/components/ui/ExternalLink";
import type { Locale } from "@/i18n";
import { localizedPath } from "@/i18n";

const copy = {
  en: {
    date: "🗓️ September 19-27, 2026",
    location: "📍 Tokyo, Japan",
    whatTitle: "What is ETHTokyo?",
    whatParagraphs: [
      "ETHTokyo is a Tokyo-based Ethereum community and coordination layer, bringing together builders, researchers, artists, founders, institutions, public-goods contributors, and independent communities around a shared cypherpunk ethos and optimism for the future.",
      "We exist to advance the development, adoption, and cultural relevance of Ethereum from Tokyo — through credible, open, permissionless spaces for people building the next generation of programmable, verifiable, and privacy-preserving systems. Our role is to help Ethereum in Tokyo become more connected, credible, permissionless, and alive — not through one venue or one official narrative, but through a city-wide network of people and events.",
    ],
    weekSummary:
      "ETHTokyo Week 2026 will take place from September 19 to 27, featuring community-led events, conferences, workshops, meetups, dinners, hackathons, and other Ethereum-adjacent gatherings across Tokyo.",
    readMore: "Read more",
    scheduleTitle: "Schedule",
    weekSchedule: "ETHTokyo week&nbsp;:&nbsp;Sep 19-27, 2026",
    getInvolved: "Get Involved",
    accessTitle: "Access",
    travelTitle: "✈️ Traveling to Tokyo",
    travelIntro: "Tokyo has two airports:",
    travelOutro: "They are both well connected with the railway system.",
    urbanTitle: "🚇 Urban Transportation",
    urbanText:
      "Tokyo is a city optimized for public transportation. Most of the times, the quickest and easiest way to getting from A to B is by trains and buses. If you are staying longer than just a few days, you might want to consider purchasing a",
    urbanTextEnd:
      "card at for the best experience, which can be obtained at pretty much any train station. You can use these cards to ride the buses also.",
    scooterTitle: "🛴 Scooters & Bikes",
    scooterText:
      "Depending on the area, you will also find scooters and bikes that you can grab around the city, using apps like",
    scooterTextEnd:
      "You should take precaution to stay safe since the streets in Tokyo are generally narrow and crowded.",
    taxiTitle: "🚖 Taxis",
    taxiText: "Taxis are available through apps like",
    teamTitle: "Our Team",
  },
  ja: {
    date: "🗓️ 9/19-27 2026",
    location: "📍 東京",
    whatTitle: "ETHTokyoとは",
    whatParagraphs: [
      "ETHTokyoは、分散型エコシステムを推進するための祭典です。",
      "最先端の研究者や技術者が世界中から東京に集まるカンファレンスや、賞金をかけてものづくりを競うハッカソン、クリエイター達によるデジタル芸術展など、様々なイベントが開催されます。",
      "ETHTokyoの役割は、Ethereumが基盤インフラとして広範に普及してゆく中で、都市全体に広がるネットワークのコーディネーションを通して、Ethereumを世代を超えた活用が可能となる堅牢なエコシステムへと育てることです。",
    ],
    weekSummary:
      "ETHTokyo Week 2026は9月19日から27日まで開催されます。東京各地で、コミュニティ主導の各種イベント、カンファレンス、ハッカソン、ワークショップ、交流会、食事会等が行われます。",
    readMore: "詳しく読む",
    scheduleTitle: "スケジュール",
    weekSchedule: "ETHTokyo Week&nbsp;:&nbsp;2026年9月19日-27日",
    getInvolved: "参加する",
    accessTitle: "アクセス",
    travelTitle: "✈️ 東京への渡航",
    travelIntro: "東京には2つの空港があります:",
    travelOutro: "どちらも鉄道網との接続が良好です。",
    urbanTitle: "🚇 都市内交通",
    urbanText:
      "東京は公共交通機関が非常に発達した都市です。多くの場合、A地点からB地点へ移動する最も早く簡単な方法は電車やバスです。数日以上滞在する場合は、",
    urbanTextEnd:
      "カードの購入を検討すると便利です。ほとんどの駅で入手でき、バスでも利用できます。",
    scooterTitle: "🛴 スクーターと自転車",
    scooterText:
      "エリアによっては、市内で利用できるスクーターや自転車もあります。利用には",
    scooterTextEnd:
      "などのアプリが使えます。東京の道は一般的に狭く混雑しているため、安全に十分注意してください。",
    taxiTitle: "🚖 タクシー",
    taxiText: "タクシーは次のようなアプリから利用できます:",
    teamTitle: "主催チーム",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

const scheduleDateByLocale: Record<Locale, Record<string, string>> = {
  en: {
    "2026-09-23": "Sep 23",
    "2026-09-25": "Sep 25",
    "2026-09-28": "Sept 28 - Oct 5",
  },
  ja: {
    "2026-09-23": "9月23日",
    "2026-09-25": "9月25日",
    "2026-09-28": "9月28日 - 10月5日",
  },
};

const TopPage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const labels = copy[locale];
  const involvementLinks = getInvolvementLinks(locale);

  return (
    <Layout locale={locale} currentPath={currentPath}>
      <section class="w-full pt-20 pb-8 px-6 border-b">
        <div class="max-w-3xl mx-auto flex flex-col gap-4">
          <Logo klass="max-w-80 h-auto mx-auto pl-4" stroke={12} />
          <h1 class="text-4xl mt-14 font-mono font-bold">ETHTokyo week 2026</h1>
          <p class="text-2xl">
            {labels.date}
            <br />
            {labels.location}
          </p>
        </div>
      </section>

      <Section title={labels.whatTitle}>
        {(labels.whatParagraphs as string[]).map((paragraph, index) => (
          <p key={paragraph} class={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
        <p class="mt-4">{labels.weekSummary}</p>
        <div class="flex items-center justify-center pt-4">
          <a class="btn mx-auto" href={localizedPath("/manifesto", locale)}>
            {labels.readMore}
          </a>
        </div>
      </Section>

      <Section title={labels.scheduleTitle}>
        <ul class="list-disc list-outside pl-6 mb-6">
          <li
            class="text-lg"
            dangerouslySetInnerHTML={{ __html: labels.weekSchedule as string }}
          />
          {[...scheduleItems]
            // Display labels can contain ranges, so sort by ISO start date.
            .sort((a, b) => a.dateSortKey.localeCompare(b.dateSortKey))
            .map((item) => (
              <li key={item.href} class="ml-4">
                <ExternalLink href={item.href}>{item.label}</ExternalLink>
                &nbsp;:&nbsp;{" "}
                {scheduleDateByLocale[locale][item.dateSortKey] ?? item.date}
              </li>
            ))}
        </ul>

        <div class="max-w-3xl mx-auto">
          <h3 class="font-bold text-center text-2xl pb-5">
            {labels.getInvolved}
          </h3>
          <div class="grid gap-6 grid-cols-2 md:grid-cols-4 items-stretch justify-center">
            {involvementLinks.map((item) => (
              <ActionLink
                key={item.href}
                href={localizedPath(item.href, locale)}
                icon={item.icon}
              >
                {item.label}
              </ActionLink>
            ))}
          </div>
        </div>
      </Section>

      <Section title={labels.accessTitle}>
        <div class="flex flex-col gap-6">
          <div>
            <h4 class="font-bold text-lg mb-2">{labels.travelTitle}</h4>
            <div>
              {labels.travelIntro}&nbsp;
              <ExternalLink href="https://maps.app.goo.gl/pEzYqQj1HuTY3ctD7">
                Narita International Airport (NRT)
              </ExternalLink>
              &nbsp;{locale === "ja" ? "と" : "and"}&nbsp;
              <ExternalLink href="https://maps.app.goo.gl/C1rgT7mBmtXzULy68">
                Haneda International Airport (HND)
              </ExternalLink>
              . {labels.travelOutro}
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-2">{labels.urbanTitle}</h4>
            <div class="flex flex-col gap-4">
              <p>
                {labels.urbanText}&nbsp;
                <ExternalLink href="https://www.jreast.co.jp/multi/en/pass/suica.html">
                  SUICA
                </ExternalLink>
                &nbsp;{locale === "ja" ? "または" : "or"}&nbsp;
                <ExternalLink href="https://www.pasmo.co.jp/visitors/en/">
                  PASMO
                </ExternalLink>
                &nbsp; {labels.urbanTextEnd}
              </p>
              <p>
                <strong>{labels.scooterTitle}</strong> : {labels.scooterText}{" "}
                <ExternalLink href="https://play.google.com/store/apps/details?id=sc.luup.luup">
                  LUUP
                </ExternalLink>
                &nbsp;{locale === "ja" ? "や" : "and"}&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.limebike">
                  LIME
                </ExternalLink>
                {locale === "ja" ? " " : ". "}
                {labels.scooterTextEnd}
              </p>
              <p>
                <strong>{labels.taxiTitle}</strong> : {labels.taxiText}&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.dena.automotive.taxibell">
                  GO
                </ExternalLink>
                &nbsp;{locale === "ja" ? "や" : "and"}&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.ubercab">
                  Uber
                </ExternalLink>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div class="w-full pt-8 pb-9">
        <PastEvents locale={locale} />
      </div>

      <Section title={labels.teamTitle} className="border-t">
        <Contributors />
      </Section>
    </Layout>
  );
};

export default TopPage;
