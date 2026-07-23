import StaticPage from "@/components/pages/StaticPage";
import type { Locale } from "@/i18n";

const copy = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    date: "[2025-12-27]",
    intro:
      "ETHTokyo (“we”, “us”, or “the event”) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data when you visit https://ethtokyo.org or participate in ETHTokyo-related activities.",
    sections: [
      {
        title: "1. Information We Collect",
        paragraphs: [
          "We only collect personal data that you voluntarily provide to us. This may include:",
          "We do not collect personal data automatically beyond what is technically required to operate the event.",
        ],
        items: [
          "Email address — When you sign up for event updates, register for the event, or contact us.",
        ],
      },
      {
        title: "2. How We Use Your Information",
        paragraphs: [
          "We use the collected information solely for the following purposes:",
          "We do not sell, rent, or trade your personal data to third parties, unless required by law.",
        ],
        items: [
          "Communicating event-related information",
          "Sending important updates or announcements",
          "Responding to inquiries and support requests",
        ],
      },
      {
        title: "3. Third-Party Services",
        paragraphs: [
          "We may use third-party services for basic operations such as:",
          "These services may process limited data (such as email addresses or IP addresses) only as necessary to provide their functionality and in accordance with their own privacy policies.",
        ],
        items: [
          "Website hosting",
          "Email delivery",
          "Event registration tools",
        ],
      },
      {
        title: "4. Data Retention",
        paragraphs: [
          "We retain personal data only for as long as necessary to operate the event and communicate with participants.",
        ],
      },
      {
        title: "5. Your Rights",
        paragraphs: [
          "You will reserve the right at all times to:",
          "To exercise these rights, please contact us using the details below.",
        ],
        items: [
          "Access your personal data",
          "Request correction of inaccurate data",
          "Request deletion of your data",
          "Withdraw consent at any time",
        ],
      },
      {
        title: "6. Data Security",
        paragraphs: [
          "We take reasonable technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        title: "7. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page. Continued use of the website after changes constitutes acceptance of the updated policy.",
        ],
      },
      {
        title: "8. Contact",
        paragraphs: [
          "If you have any questions about this Privacy Policy or how your data is handled, please contact us at:",
          "privsec [at] ethtokyo.org",
        ],
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新:",
    date: "[2025-12-27]",
    intro:
      "ETHTokyo（以下「当団体」「私たち」または「本イベント」）は、みなさまのプライバシーを尊重します。本プライバシーポリシーは、https://ethtokyo.org を訪問する場合、またはETHTokyo関連の活動に参加する場合に、私たちが収集する情報、その利用方法、個人データに関する権利について説明します。",
    sections: [
      {
        title: "1. 収集する情報",
        paragraphs: [
          "私たちは、みなさまが自発的に提供する個人データのみを収集します。これには以下が含まれる場合があります:",
          "本イベントの運営に技術的に必要な範囲を超えて、個人データを自動的に収集することはありません。",
        ],
        items: [
          "メールアドレス — イベント更新情報の登録、イベント参加登録、またはお問い合わせの際に提供されるもの。",
        ],
      },
      {
        title: "2. 情報の利用方法",
        paragraphs: [
          "収集した情報は、以下の目的に限って利用します:",
          "法令により要求される場合を除き、個人データを第三者に販売、貸与、または取引することはありません。",
        ],
        items: [
          "イベント関連情報の連絡",
          "重要な更新やお知らせの送信",
          "お問い合わせやサポート依頼への対応",
        ],
      },
      {
        title: "3. 第三者サービス",
        paragraphs: [
          "私たちは、以下のような基本的な運営のために第三者サービスを利用する場合があります:",
          "これらのサービスは、機能提供に必要な範囲で、メールアドレスやIPアドレスなどの限定的なデータを、それぞれのプライバシーポリシーに従って処理する場合があります。",
        ],
        items: ["ウェブサイトホスティング", "メール配信", "イベント登録ツール"],
      },
      {
        title: "4. データの保持",
        paragraphs: [
          "個人データは、本イベントの運営および参加者との連絡に必要な期間に限って保持します。",
        ],
      },
      {
        title: "5. みなさまの権利",
        paragraphs: [
          "みなさまは常に以下の権利を有します:",
          "これらの権利を行使する場合は、下記の連絡先までお問い合わせください。",
        ],
        items: [
          "個人データへのアクセス",
          "不正確なデータの訂正請求",
          "データの削除請求",
          "いつでも同意を撤回すること",
        ],
      },
      {
        title: "6. データセキュリティ",
        paragraphs: [
          "私たちは、みなさまのデータを保護するために合理的な技術的・組織的措置を講じます。ただし、インターネット上の送信方法に完全に安全なものはなく、絶対的な安全性を保証することはできません。",
        ],
      },
      {
        title: "7. 本ポリシーの変更",
        paragraphs: [
          "本プライバシーポリシーは随時更新される場合があります。変更は本ページに掲載されます。変更後にウェブサイトを継続して利用することは、更新後のポリシーへの同意を意味します。",
        ],
      },
      {
        title: "8. お問い合わせ",
        paragraphs: [
          "本プライバシーポリシーまたはデータの取り扱いについて質問がある場合は、以下までお問い合わせください:",
          "privsec [at] ethtokyo.org",
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
    sections: { title: string; paragraphs: string[]; items?: string[] }[];
  }
>;

const PrivacyPolicyPage = ({
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
          <p>
            {labels.intro.includes("https://ethtokyo.org")
              ? labels.intro.split("https://ethtokyo.org")[0]
              : labels.intro}
            <strong>https://ethtokyo.org</strong>
            {labels.intro.includes("https://ethtokyo.org")
              ? labels.intro.split("https://ethtokyo.org")[1]
              : ""}
          </p>
        </section>
        {labels.sections.map((section) => (
          <section key={section.title}>
            <h2 class="font-bold text-lg mb-2">{section.title}</h2>
            <p>{section.paragraphs[0]}</p>
            {section.items ? (
              <ul class="list-disc px-6">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </StaticPage>
  );
};

export default PrivacyPolicyPage;
