import LogoIcon from "@/components/icons/Logo";
import NewsletterPopover from "@/components/ui/$NewsletterPopover";
import SimpleIcon from "@/components/ui/SimpleIcon";
import { GITHUB_URL, TELEGRAM_GROUP_LINK, TWITTER_ID } from "@/const";
import type { Locale } from "@/i18n";
import { localizedPath } from "@/i18n";

const footerCopy = {
  en: {
    codeOfConduct: "Code of Conduct",
    privacyPolicy: "Privacy Policy",
  },
  ja: {
    codeOfConduct: "行動規範",
    privacyPolicy: "プライバシーポリシー",
  },
} satisfies Record<Locale, { codeOfConduct: string; privacyPolicy: string }>;

const Footer = ({ locale }: { locale: Locale }) => {
  const copy = footerCopy[locale];

  return (
    <div class="max-w-3xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <ul class="inline-flex gap-4 font-bold">
        <li>
          <a
            href={`https://twitter.com/${TWITTER_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcon
              klass="w-4 h-4"
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
              klass="w-4 h-4"
              src="https://cdn.simpleicons.org/telegram"
              alt="Telegram"
            />
          </a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <SimpleIcon
              klass="w-4 h-4"
              src="https://cdn.simpleicons.org/github"
              alt="github"
            />
          </a>
        </li>
        <li>
          <NewsletterPopover locale={locale} />
        </li>
      </ul>
      <ul class="inline-flex gap-4 text-sm [>a]:font-mono">
        <li>
          <a href={localizedPath("/code-of-conduct", locale)}>
            {copy.codeOfConduct}
          </a>
        </li>
        <li>
          <a href={localizedPath("/privacy-policy", locale)}>
            {copy.privacyPolicy}
          </a>
        </li>
        <li>
          <a href={localizedPath("/", locale)}>
            <LogoIcon klass="w-8 h-auto" stroke={32} />
          </a>
        </li>
      </ul>
      {/* <p class="text-sm">&copy;2025 ETHTokyo.</p> */}
    </div>
  );
};

export default Footer;
