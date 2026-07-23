import StaticPage from "@/components/pages/StaticPage";
import type { Locale } from "@/i18n";

const copy = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated:",
    date: "[2026-07-07]",
    intro:
      "These Terms of Service govern your access to and use of the ETHTokyo website, event information, registration flows, and related community activities.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        paragraphs: [
          "By accessing this website, submitting a form, registering for an event, or participating in ETHTokyo-related activities, you agree to these terms and any event-specific policies we publish.",
          "If you do not agree to these terms, please do not use the website or participate in ETHTokyo activities.",
        ],
      },
      {
        title: "2. Event Participation",
        paragraphs: [
          "ETHTokyo events may include conferences, workshops, meetups, hackathons, community gatherings, online channels, and partner-hosted programs.",
          "Participation is subject to capacity, eligibility requirements, venue rules, safety requirements, and our Code of Conduct. We may refuse, cancel, or revoke access when necessary to protect participants, staff, venues, or the integrity of the event.",
        ],
      },
      {
        title: "3. User Submissions",
        paragraphs: [
          "When you submit speaker applications, event submissions, sponsorship inquiries, volunteer forms, or other materials, you confirm that the information is accurate and that you have the right to provide it.",
          "You allow ETHTokyo to review, process, store, and use submitted materials as needed to operate, curate, promote, and document ETHTokyo activities.",
        ],
      },
      {
        title: "4. Payments, Donations, and Sponsorships",
        paragraphs: [
          "Donations, sponsorships, grants, and other contributions are used to support ETHTokyo operations and community programming.",
          "Unless separately agreed in writing, contributions are not refundable. Any invoice, receipt, sponsorship benefit, or recognition is subject to separate written confirmation by the ETHTokyo team.",
        ],
      },
      {
        title: "5. Intellectual Property",
        paragraphs: [
          "The ETHTokyo name, logos, website design, event materials, and related content are owned by ETHTokyo or its contributors, licensors, or partners.",
          "You may not use ETHTokyo branding in a way that implies endorsement, partnership, sponsorship, or official status without written permission.",
        ],
      },
      {
        title: "6. Third-Party Services and Links",
        paragraphs: [
          "The website may link to third-party services for maps, forms, ticketing, payments, presentations, social platforms, or partner events.",
          "ETHTokyo is not responsible for third-party services, websites, policies, availability, content, or transactions.",
        ],
      },
      {
        title: "7. Disclaimers",
        paragraphs: [
          "The website and ETHTokyo activities are provided on an as-is and as-available basis. We do not guarantee that information will always be complete, current, uninterrupted, or error-free.",
          "ETHTokyo does not provide financial, investment, legal, tax, immigration, or travel advice. Participants are responsible for their own decisions, compliance obligations, travel plans, wallets, assets, and personal safety.",
        ],
      },
      {
        title: "8. Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by law, ETHTokyo and its organizers, staff, volunteers, contributors, sponsors, and partners will not be liable for indirect, incidental, consequential, special, punitive, or exemplary damages arising from use of the website or participation in ETHTokyo activities.",
        ],
      },
      {
        title: "9. Changes to These Terms",
        paragraphs: [
          "We may update these Terms of Service from time to time. Updated terms will be posted on this page, and continued use of the website or participation in ETHTokyo activities constitutes acceptance of the updated terms.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          "If you have questions about these Terms of Service, please contact us at:",
          "contact [at] ethtokyo.org",
        ],
      },
    ],
  },
  ja: {
    title: "利用規約",
    lastUpdated: "最終更新:",
    date: "[2025-12-27]",
    intro:
      "本利用規約は、ETHTokyoのウェブサイト、イベント情報、登録フロー、および関連するコミュニティ活動へのアクセスと利用に適用されます。",
    sections: [
      {
        title: "1. 規約への同意",
        paragraphs: [
          "本ウェブサイトへのアクセス、フォームの送信、イベント登録、またはETHTokyo関連活動への参加により、利用者は本規約および当団体が公開するイベント固有のポリシーに同意したものとみなされます。",
          "本規約に同意しない場合は、ウェブサイトの利用およびETHTokyo活動への参加をお控えください。",
        ],
      },
      {
        title: "2. イベント参加",
        paragraphs: [
          "ETHTokyoのイベントには、カンファレンス、ワークショップ、ミートアップ、ハッカソン、コミュニティの集まり、オンラインチャンネル、パートナー主催プログラムなどが含まれる場合があります。",
          "参加は、定員、参加資格、会場規則、安全要件、および行動規範の対象となります。参加者、スタッフ、会場、またはイベントの健全性を守るために必要な場合、当団体は参加を拒否、取消、またはアクセスを取り消すことがあります。",
        ],
      },
      {
        title: "3. 提出物",
        paragraphs: [
          "登壇応募、イベント登録、スポンサー問い合わせ、ボランティアフォーム、その他の資料を提出する場合、利用者は情報が正確であり、それを提供する権利を有していることを確認するものとします。",
          "利用者は、ETHTokyo活動の運営、キュレーション、告知、記録に必要な範囲で、提出物を当団体が確認、処理、保存、利用することを認めるものとします。",
        ],
      },
      {
        title: "4. 支払い、寄付、スポンサーシップ",
        paragraphs: [
          "寄付、スポンサーシップ、助成金、その他の貢献は、ETHTokyoの運営およびコミュニティプログラムの支援に使用されます。",
          "書面で別途合意した場合を除き、貢献金は返金されません。請求書、領収書、スポンサー特典、または掲載については、ETHTokyoチームによる別途の書面確認の対象となります。",
        ],
      },
      {
        title: "5. 知的財産",
        paragraphs: [
          "ETHTokyoの名称、ロゴ、ウェブサイトデザイン、イベント資料、および関連コンテンツは、ETHTokyoまたはその貢献者、ライセンサー、パートナーに帰属します。",
          "書面による許可なく、ETHTokyoのブランドを、承認、提携、スポンサーシップ、または公式な地位を示唆する形で使用することはできません。",
        ],
      },
      {
        title: "6. 第三者サービスとリンク",
        paragraphs: [
          "本ウェブサイトには、地図、フォーム、チケット、支払い、プレゼンテーション、ソーシャルプラットフォーム、パートナーイベントなどの第三者サービスへのリンクが含まれる場合があります。",
          "ETHTokyoは、第三者サービス、ウェブサイト、ポリシー、可用性、コンテンツ、または取引について責任を負いません。",
        ],
      },
      {
        title: "7. 免責事項",
        paragraphs: [
          "本ウェブサイトおよびETHTokyo活動は、現状有姿かつ提供可能な範囲で提供されます。当団体は、情報が常に完全、最新、中断なし、またはエラーなしであることを保証しません。",
          "ETHTokyoは、金融、投資、法律、税務、入国管理、または旅行に関する助言を提供しません。参加者は、自身の判断、法令遵守、渡航計画、ウォレット、資産、および個人の安全について責任を負うものとします。",
        ],
      },
      {
        title: "8. 責任の制限",
        paragraphs: [
          "法令で認められる最大限の範囲において、ETHTokyoおよびその運営者、スタッフ、ボランティア、貢献者、スポンサー、パートナーは、本ウェブサイトの利用またはETHTokyo活動への参加に起因する間接的、付随的、結果的、特別、懲罰的、または例示的な損害について責任を負いません。",
        ],
      },
      {
        title: "9. 本規約の変更",
        paragraphs: [
          "当団体は、本利用規約を随時更新することがあります。更新後の規約は本ページに掲載され、ウェブサイトの継続利用またはETHTokyo活動への参加は、更新後の規約への同意を意味します。",
        ],
      },
      {
        title: "10. お問い合わせ",
        paragraphs: [
          "本利用規約について質問がある場合は、以下までお問い合わせください:",
          "contact [at] ethtokyo.org",
        ],
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    lastUpdated: string;
    date: string;
    intro: string;
    sections: { title: string; paragraphs: string[] }[];
  }
>;

const TermsOfServicePage = ({
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
        <p>
          <strong>{labels.lastUpdated}</strong> {labels.date}
        </p>
        <section>
          <p>{labels.intro}</p>
        </section>
        {labels.sections.map((section) => (
          <section key={section.title}>
            <h2 class="font-bold text-lg mb-2">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} class="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </StaticPage>
  );
};

export default TermsOfServicePage;
