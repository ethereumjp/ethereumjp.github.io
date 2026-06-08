import { pastEventImages } from "@/components/pages/top/data";

const PastEvents = () => {
  return (
    <div class="py-10 overflow-hidden">
      <div class="max-w-3xl mx-auto px-4">
        <h3 class="font-bold text-center text-2xl pb-8">Past events</h3>
      </div>
      <div class="flex overflow-hidden gap-2 md:gap-4 marquee py-4">
        <div class="flex shrink-0 justify-start gap-2 md:gap-4 min-w-max animate-marquee">
          {pastEventImages.map((src, i) => (
            <div key={i} class="h-48 shrink-0">
              <img
                src={src}
                alt={`Past event ${i + 1}`}
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
      <div class="flex pt-4 gap-6 justify-center items-center">
        <a
          class="btn"
          href="https://speak.ethtokyo.org/conference-2025/speaker/"
          rel="noopener noreferrer"
        >
          Past Speakers &#x2197;
        </a>
        <a
          class="btn"
          href="https://streameth.org/ethtokyo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Past Sessions &#x2197;
        </a>
        <a
          class="btn"
          href="https://gallery.ethtokyo.org/?t=BF7XUspX#FYTyVpD9puna7U422M2yrniRpJBpF17ByTa7Xegwy4xk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gallery &#x2197;
        </a>
      </div>
    </div>
  );
};

export default PastEvents;
