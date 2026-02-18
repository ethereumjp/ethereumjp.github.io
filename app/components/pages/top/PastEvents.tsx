export default function PastEvents() {
  const images = [
    "/images/2025/conf1.jpg",
    "/images/2025/conf2.jpg",
    "/images/2025/conf3.jpg",
    "/images/2025/conf4.jpg",
    "/images/2025/hack1.jpg",
    "/images/2025/hack2.jpg",
  ];

  return (
    <div class="py-10 overflow-hidden">
      <div class="max-w-3xl mx-auto px-4">
        <h3 class="font-bold text-center text-2xl pb-8">Past events</h3>
      </div>
      <div class="flex overflow-hidden gap-2 md:gap-4 marquee py-4">
        <div class="flex shrink-0 justify-start gap-2 md:gap-4 min-w-max animate-marquee">
          {images.map((src, i) => (
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
          {images.map((src, i) => (
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
          href="https://gallery.ethtokyo.org/?t=BF7XUspX#FYTyVpD9puna7U422M2yrniRpJBpF17ByTa7Xegwy4xk"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025 gallery &#x2197;
        </a>
        <a
          class="btn"
          href="https://www.ethtokyo.org/ethtokyo-25/"
          rel="noopener noreferrer"
        >
          2025 web &#x2197;
        </a>
      </div>
    </div>
  );
}
