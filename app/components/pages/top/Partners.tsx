const partners = [
  {
    name: "Devcon",
    href: "https://devcon.org/",
    src: "/images/partners/devcon.svg",
  },
  {
    name: "ETH Taipei",
    href: "https://ethtaipei.org/",
    src: "/images/partners/ethtaipei.png",
  },
  {
    name: "Ethereum Korea",
    href: "https://ethereumkorea.io/",
    src: "/images/partners/ethereumkorea.png",
  },
  {
    name: "ZuCity Japan",
    href: "https://zucity.org/",
    src: "/images/partners/zucityjapan-white.png",
  },
  {
    name: "Web3Privacy Now",
    href: "https://web3privacy.info/",
    src: "/images/partners/web3privacy-logo.png",
  },
  {
    name: "Nyx Foundation",
    href: "https://nyx.foundation/",
    src: "/images/partners/nyxfoundation.svg",
  },
  {
    name: "Hackatsuon",
    href: "https://hackatsuon.com/",
    src: "/images/partners/hackatsuon.png",
  },
] as const;

const Partners = () => (
  <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
    {partners.map((partner) => (
      <a
        key={partner.name}
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-28 items-center justify-center rounded-lg border border-dark/20 bg-dark px-6 py-5 transition-opacity hover:opacity-80 dark:border-light/20"
      >
        <img
          src={partner.src}
          alt={partner.name}
          class="max-h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </a>
    ))}
  </div>
);

export default Partners;
