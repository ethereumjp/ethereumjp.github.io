import StaticPage from "@/components/pages/StaticPage";
import ExternalLink from "@/components/ui/ExternalLink";

const MOFA_VISA_EXEMPTION_URL =
  "https://www.mofa.go.jp/j_info/visit/visa/index.html";
const INVITATION_LETTER_FORM_URL = "https://forms.gle/S19Y34Ge3Z6QGFgq8";
const CONTACT_EMAIL = "contact@ethtokyo.org";

const VisaInfoPage = () => (
  <StaticPage title="Visa Info">
    <div class="px-4 flex flex-col gap-8">
      <section class="flex flex-col gap-3 border-b pb-8">
        <h2 class="font-mono text-xl font-bold">
          Do I need a visa to enter Japan?
        </h2>
        <p class="leading-loose">
          Japan grants a{" "}
          <ExternalLink href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">
            short-term visa exemption
          </ExternalLink>{" "}
          to visitors from 74 countries and regions for stays of 15 to 90 days,
          depending on nationality and passport conditions.
        </p>
        <p class="leading-loose">
          Please check the current details on the official{" "}
          <ExternalLink href={MOFA_VISA_EXEMPTION_URL}>
            Ministry of Foreign Affairs of Japan website
          </ExternalLink>{" "}
          before making travel plans.
        </p>
      </section>

      <section class="flex flex-col gap-3">
        <h2 class="font-mono text-xl font-bold">What if I need a visa?</h2>
        <p class="leading-loose">
          ETHTokyo can provide invitation letters for certain visa types. If you
          need an invitation letter, please fill out the{" "}
          <ExternalLink href={INVITATION_LETTER_FORM_URL}>
            invitation letter request form
          </ExternalLink>{" "}
          and contact the team at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </div>
  </StaticPage>
);

export default VisaInfoPage;
