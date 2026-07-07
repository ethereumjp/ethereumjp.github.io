import StaticPage from "@/components/pages/StaticPage";
import ExternalLink from "@/components/ui/ExternalLink";
import type { Locale } from "@/i18n";

const MOFA_VISA_EXEMPTION_URL =
  "https://www.mofa.go.jp/j_info/visit/visa/index.html";
const INVITATION_LETTER_FORM_URL = "https://forms.gle/S19Y34Ge3Z6QGFgq8";
const CONTACT_EMAIL = "contact@ethtokyo.org";

const copy = {
  en: {
    title: "Visa Info",
    needVisaTitle: "Do I need a visa to enter Japan?",
    exemptionLead: "Japan grants a",
    exemptionLink: "short-term visa exemption",
    exemptionEnd:
      "to visitors from 74 countries and regions for stays of 15 to 90 days, depending on nationality and passport conditions.",
    officialLead: "Please check the current details on the official",
    officialLink: "Ministry of Foreign Affairs of Japan website",
    officialEnd: "before making travel plans.",
    needVisaHelpTitle: "What if I need a visa?",
    invitationLead:
      "ETHTokyo can provide invitation letters for certain visa types. If you need an invitation letter, please fill out the",
    invitationLink: "invitation letter request form",
    invitationEnd: "and contact the team at",
  },
  ja: {
    title: "ビザ情報",
    needVisaTitle: "日本への入国にビザは必要ですか？",
    exemptionLead:
      "日本は、国籍や旅券の条件に応じて、74の国・地域からの渡航者に15日から90日までの",
    exemptionLink: "短期滞在ビザ免除",
    exemptionEnd: "を認めています。",
    officialLead: "渡航計画を立てる前に、最新情報を公式の",
    officialLink: "外務省ウェブサイト",
    officialEnd: "で確認してください。",
    needVisaHelpTitle: "ビザが必要な場合は？",
    invitationLead:
      "ETHTokyoは、一部のビザ種別について招待状を発行できます。招待状が必要な場合は、",
    invitationLink: "招待状リクエストフォーム",
    invitationEnd: "に記入し、チームまでご連絡ください:",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    needVisaTitle: string;
    exemptionLead: string;
    exemptionLink: string;
    exemptionEnd: string;
    officialLead: string;
    officialLink: string;
    officialEnd: string;
    needVisaHelpTitle: string;
    invitationLead: string;
    invitationLink: string;
    invitationEnd: string;
  }
>;

const VisaInfoPage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const labels = copy[locale];

  return (
    <StaticPage title={labels.title} locale={locale} currentPath={currentPath}>
      <div class="px-4 flex flex-col gap-8">
        <section class="flex flex-col gap-3 border-b pb-8">
          <h2 class="font-mono text-xl font-bold">{labels.needVisaTitle}</h2>
          <p class="leading-loose">
            {labels.exemptionLead}{" "}
            <ExternalLink href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">
              {labels.exemptionLink}
            </ExternalLink>{" "}
            {labels.exemptionEnd}
          </p>
          <p class="leading-loose">
            {labels.officialLead}{" "}
            <ExternalLink href={MOFA_VISA_EXEMPTION_URL}>
              {labels.officialLink}
            </ExternalLink>{" "}
            {labels.officialEnd}
          </p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-mono text-xl font-bold">
            {labels.needVisaHelpTitle}
          </h2>
          <p class="leading-loose">
            {labels.invitationLead}{" "}
            <ExternalLink href={INVITATION_LETTER_FORM_URL}>
              {labels.invitationLink}
            </ExternalLink>{" "}
            {labels.invitationEnd}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </StaticPage>
  );
};

export default VisaInfoPage;
