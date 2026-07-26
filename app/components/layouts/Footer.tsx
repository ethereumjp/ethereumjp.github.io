import LogoIcon from "@/components/icons/Logo";
import NewsletterPopover from "@/components/ui/$NewsletterPopover";
import SimpleIcon from "@/components/ui/SimpleIcon";
import { GITHUB_URL, TELEGRAM_GROUP_LINK, TWITTER_ID } from "@/const";
import type { Locale } from "@/i18n";
import { localizedPath } from "@/i18n";

const footerCopy = {
  en: {
    aboutus: {
      ethereumjapan: "Ethereum Japan",
    },
    press: {
      brandassets: "Brand Assets",
      gallery: "Gallery",
    },
    codeOfConduct: "Code of Conduct",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  ja: {
    aboutus: {
      ethereumjapan: "Ethereum Japan",
    },
    press: {
      brandassets: "ブランドアセット",
      gallery: "ギャラリー",
    },
    codeOfConduct: "行動規範",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
  },
} satisfies Record<
  Locale,
  {
    aboutus: {
      ethereumjapan: string;
    };
    press: {
      brandassets: string;
      gallery: string;
    };
    codeOfConduct: string;
    privacyPolicy: string;
    termsOfService: string;
  }
>;

const Footer = ({ locale }: { locale: Locale }) => {
  const copy = footerCopy[locale];

  return (
    <footer class="max-w-3xl mx-auto flex flex-col gap-8">
      <div class="grid grid-cols-3 gap-4 text-xs">
        <section aria-labelledby="footer-about">
          <h2 id="footer-about" class="mb-2 text-base">
            About Us
          </h2>
          <ul class="space-y-2">
            <li>
              <a
                href="https://ethereum-japan.org/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.aboutus.ethereumjapan}
              </a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="footer-press">
          <h2 id="footer-press" class="mb-2 text-base">
            Press
          </h2>
          <ul class="space-y-2">
            <li>
              <a
                href="https://github.com/ethereumjp/ethereumjp.github.io/tree/main/public/assets"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.press.brandassets}
              </a>
            </li>
            <li>
              <a
                href="https://gallery.ethtokyo.org/?t=BF7XUspX#FYTyVpD9puna7U422M2yrniRpJBpF17ByTa7Xegwy4xk"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.press.gallery}
              </a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="footer-legal">
          <h2 id="footer-legal" class="mb-2 text-base">
            Legal & Trust
          </h2>
          <ul class="space-y-2">
            <li>
              <a href={localizedPath("/code-of-conduct", locale)}>
                {copy.codeOfConduct}
              </a>
            </li>
            <li>
              <a href={localizedPath("/terms-of-service", locale)}>
                {copy.termsOfService}
              </a>
            </li>
            <li>
              <a href={localizedPath("/privacy-policy", locale)}>
                {copy.privacyPolicy}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div class="flex justify-between w-full">
        <ul class="inline-flex gap-4 font-bold">
          <li>
            <a
              href={`https://twitter.com/${TWITTER_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SimpleIcon
                klass="w-5 h-5"
                src="https://cdn.simpleicons.org/x"
                alt="X"
              />
            </a>
          </li>
          <li>
            <a
              href={TELEGRAM_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SimpleIcon
                klass="w-5 h-5"
                src="https://cdn.simpleicons.org/telegram"
                alt="Telegram"
              />
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <SimpleIcon
                klass="w-5 h-5"
                src="https://cdn.simpleicons.org/github"
                alt="github"
              />
            </a>
          </li>
          <li>
            <NewsletterPopover locale={locale} />
          </li>
        </ul>
        <a href={localizedPath("/", locale)}>
          <LogoIcon klass="w-8 h-auto" stroke={32} />
        </a>
      </div>

      {/* <p class="text-sm">&copy;2025 ETHTokyo.</p> */}
    </footer>
  );
};

export default Footer;
