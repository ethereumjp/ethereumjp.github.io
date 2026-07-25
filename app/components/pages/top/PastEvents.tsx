import { pastEventImages } from "@/components/pages/top/data";
import type { Locale } from "@/i18n";

const copy = {
  en: {
    title: "Past events",
    speakers: "Past Speakers",
    sessions: "Past Sessions",
    gallery: "Gallery",
  },
  ja: {
    title: "過去のイベント",
    speakers: "過去の登壇者",
    sessions: "過去の講演内容",
    gallery: "ギャラリー",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    speakers: string;
    sessions: string;
    gallery: string;
  }
>;

const PastEvents = ({ locale }: { locale: Locale }) => {
  const labels = copy[locale];

  return (
    <div class="py-10 overflow-hidden">
      <div class="max-w-3xl mx-auto px-4">
        <h3 class="font-bold text-center text-2xl pb-8">{labels.title}</h3>
      </div>
      <div class="flex overflow-hidden gap-2 md:gap-4 marquee py-4">
        <div class="flex shrink-0 justify-start gap-2 md:gap-4 min-w-max animate-marquee">
          {pastEventImages.map((src, i) => (
            <div key={i} class="h-48 shrink-0">
              <img
                src={src}
                alt={`event footage ${i + 1}`}
                class="h-48 w-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          class="flex shrink-0 justify-start gap-2 md:gap-4 min-w-max animate-marquee"
          aria-hidden="true"
        >
          {pastEventImages.map((src, i) => (
            <div key={`dup-${i}`} class="h-48 shrink-0">
              <img
                src={src}
                alt=""
                class="h-48 w-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-4 gap-4 md:gap-6 justify-center items-center">
        <a
          class="btn"
          href="https://speak.ethtokyo.org/conference-2025/speaker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {labels.speakers} &#x2197;
        </a>
        <a
          class="btn"
          href="https://streameth.org/ethtokyo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {labels.sessions} &#x2197;
        </a>
      </div>
    </div>
  );
};

export default PastEvents;
