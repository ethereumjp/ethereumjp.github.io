import Layout from "@/components/layouts/MainLayout";
import ExternalLink from "@/components/ui/ExternalLink";
import { BANKING_INFO } from "@/const";
import type { Locale } from "@/i18n";
import { localizedPath } from "@/i18n";

const SPONSOR_INQUIRY_URL = "https://forms.ethtokyo.org/p/sponsor-inquiry";

const copy = {
  en: {
    eyebrow: "Support ETHTokyo",
    title: "Contribute to ETHTokyo",
    intro: [
      "ETHTokyo is operated by an independent non-profit association.",
      "We are supported by mission-aligned partners across the ecosystem, with neutrality and independence built directly into our foundation.",
      "Your contributions help us keep Ethereum spaces in Tokyo credible, open, and independent.",
    ],
    ethereum: "Ethereum",
    cryptoTitle: "ETH and ERC-20 contributions",
    cryptoText:
      "We can receive ETH, stablecoins, or other ERC-20 assets on Ethereum mainnet. Send your contribution onchain.",
    fiat: "Fiat",
    fiatTitle: "Bank transfer (with invoice support)",
    fiatText:
      "For organizations that require receipts or invoices, please contact us with your required billing information.",
    contribute: "CONTRIBUTE",
    fundTitle: "What donations fund",
    contributionUses: [
      "City-wide community event infrastructure",
      "Accessible venues for workshops, salons, and meetups",
      "Recording, streaming, and archival costs",
      "Speaker and builder support for public-goods programming",
    ],
    sponsorshipTitle: "Enterprise sponsorship",
    sponsorshipText:
      "If your team wants visibility across ETHTokyo Week, developer relations access, ecosystem programming, or a deeper partnership with the Tokyo Ethereum community, review the sponsor deck and reach out through the inquiry form.",
    moreDetails: "More details",
    sponsorInquiry: "Sponsor inquiry",
    closePayment: "Close payment modal",
    closeBanking: "Close banking information modal",
    sendTo: "Send to",
    cryptoNote:
      "Accepts ETH, stablecoins, or any other ERC-20 on Ethereum mainnet.",
    close: "close",
    contributionAddress: "CONTRIBUTION ADDRESS",
    walletWarning:
      "Please confirm network and token details in your wallet before sending any funds.",
    fiatDonation: "Fiat donation",
    bankTransfer: "Bank transfer",
    bank: "Bank",
    branch: "Branch",
    account: "Account",
    name: "Name",
    receipt:
      "To get a donation receipt, please message us at billing@ethtokyo.org.",
  },
  ja: {
    eyebrow: "ETHTokyoを支援する",
    title: "ETHTokyoに貢献する",
    intro: [
      "ETHTokyoは独立した非営利団体によって運営されています。",
      "私たちは、エコシステム全体のミッションに共感するパートナーから支援を受けながら、中立性と独立性を基盤に組み込んでいます。",
      "みなさまの貢献は、東京のEthereumの場を信頼でき、開かれ、独立したものとして保つために使われます。",
    ],
    ethereum: "Ethereum",
    cryptoTitle: "ETH・ERC-20でのご支援",
    cryptoText:
      "Ethereum mainnet上のETH、ステーブルコイン、その他ERC-20資産を受け取れます。オンチェーンでご送付ください。",
    fiat: "法定通貨",
    fiatTitle: "銀行振込 (請求書対応可)",
    fiatText:
      "領収書や請求書が必要な組織の方は、必要な請求情報を添えてお問い合わせください。",
    contribute: "支援する",
    fundTitle: "ご支援の用途",
    contributionUses: [
      "中立的で開かれたEthereumの公共的な場の維持",
      "多分野の専門家と深く接続できる機会の提供",
      "動画収録・配信・資料アーカイブの制作",
      "Ethereum RPC等のインフラ維持・提供",
    ],
    sponsorshipTitle: "企業スポンサーシップ",
    sponsorshipText:
      "ETHTokyo Weekでの露出、開発者リレーション、エコシステムプログラム、または東京のEthereumコミュニティとのより深い連携を希望するチームは、スポンサー資料を確認し、お問い合わせフォームからご連絡ください。",
    moreDetails: "詳細を見る",
    sponsorInquiry: "スポンサー問い合わせ",
    closePayment: "支払いモーダルを閉じる",
    closeBanking: "銀行情報モーダルを閉じる",
    sendTo: "送付先",
    cryptoNote:
      "Ethereum mainnet上のETH、ステーブルコイン、その他ERC-20を受け付けています。",
    close: "x",
    contributionAddress: "寄付アドレス",
    walletWarning:
      "送金前に、ウォレット上でネットワークとトークン情報を必ず確認してください。",
    fiatDonation: "法定通貨での寄付",
    bankTransfer: "銀行振込",
    bank: "銀行",
    branch: "支店",
    account: "口座",
    name: "名義",
    receipt: "領収書等が必要な場合は billing@ethtokyo.org までご連絡ください。",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string[];
    ethereum: string;
    cryptoTitle: string;
    cryptoText: string;
    fiat: string;
    fiatTitle: string;
    fiatText: string;
    contribute: string;
    fundTitle: string;
    contributionUses: string[];
    sponsorshipTitle: string;
    sponsorshipText: string;
    moreDetails: string;
    sponsorInquiry: string;
    closePayment: string;
    closeBanking: string;
    sendTo: string;
    cryptoNote: string;
    close: string;
    contributionAddress: string;
    walletWarning: string;
    fiatDonation: string;
    bankTransfer: string;
    bank: string;
    branch: string;
    account: string;
    name: string;
    receipt: string;
  }
>;

const DonatePage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const labels = copy[locale];

  return (
    <Layout locale={locale} currentPath={currentPath}>
      <section id="donate" class="w-full px-6 pt-20 pb-12 border-b">
        <div class="max-w-3xl mx-auto flex flex-col gap-6">
          <p class="font-mono text-sm uppercase tracking-normal text-secondary">
            {labels.eyebrow}
          </p>
          <h1 class="text-4xl font-bold font-mono">{labels.title}</h1>
          {labels.intro.map((paragraph) => (
            <p key={paragraph} class="text-sm leading-loose">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section class="w-full px-6 py-12 border-b">
        <div class="max-w-3xl mx-auto grid gap-5 md:grid-cols-2">
          <article class="border rounded-lg p-5 flex flex-col gap-4">
            <div>
              <p class="font-mono text-sm opacity-70">{labels.ethereum}</p>
              <h2 class="font-mono text-xl font-bold mt-1">
                {labels.cryptoTitle}
              </h2>
            </div>
            <p class="text-sm leading-loose">{labels.cryptoText}</p>
            <a
              class="font-mono underline underline-offset-4"
              href="#crypto-donation"
            >
              {labels.contribute}
            </a>
          </article>

          <article class="border rounded-lg p-5 flex flex-col gap-4">
            <div>
              <p class="font-mono text-sm opacity-70">{labels.fiat}</p>
              <h2 class="font-mono text-xl font-bold mt-1">
                {labels.fiatTitle}
              </h2>
            </div>
            <p class="text-sm leading-loose">{labels.fiatText}</p>
            <a
              class="font-mono underline underline-offset-4"
              href="#fiat-donation"
            >
              {labels.contribute}
            </a>
          </article>
        </div>
      </section>

      <section class="w-full px-6 py-12 border-b">
        <div class="max-w-3xl mx-auto flex flex-col gap-5">
          <h2 class="font-mono text-2xl font-bold">{labels.fundTitle}</h2>
          <ul class="grid gap-3 md:grid-cols-2">
            {labels.contributionUses.map((item) => (
              <li key={item} class="border-l-2 border-secondary pl-4 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section class="w-full px-6 py-12">
        <div class="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 class="font-mono text-2xl font-bold">
            {labels.sponsorshipTitle}
          </h2>
          <p>{labels.sponsorshipText}</p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <a
              class="btn-outline text-center"
              href={localizedPath("/support-us/deck", locale)}
            >
              {labels.moreDetails}
            </a>
            <a
              class="btn text-center"
              href={SPONSOR_INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.sponsorInquiry}
            </a>
          </div>
        </div>
      </section>
      <div
        id="crypto-donation"
        class="fixed inset-0 z-60 hidden items-center justify-center bg-dark/80 px-6 py-8 target:flex"
        aria-modal="true"
        role="dialog"
      >
        <a
          href="#donate"
          class="absolute inset-0 cursor-default"
          aria-label={labels.closePayment}
        >
          <span class="sr-only">{labels.closePayment}</span>
        </a>
        <div class="relative w-full max-w-md rounded-lg border bg-light p-6 text-dark shadow-2xl dark:bg-dark dark:text-light">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="font-mono text-sm opacity-70">{labels.sendTo}</p>
              <h2 class="font-mono text-2xl font-bold">
                <ExternalLink href="https://etherscan.io/address/ethjp.eth">
                  ethjp.eth
                </ExternalLink>
              </h2>
              <br />
              <p class="font-mono text-xs opacity-70">{labels.cryptoNote}</p>
            </div>
            <a
              href="#donate"
              class="flex py-1 px-2 items-center justify-center border font-mono text-sm bg-white text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
              aria-label={labels.closePayment}
            >
              {labels.close}
            </a>
          </div>
          <div class="mt-5 rounded-lg border bg-white p-4">
            <img
              src="/images/donate-qr.png"
              alt="ETHTokyo crypto donation payment QR code"
              class="mx-auto h-auto w-full max-w-72"
            />
          </div>
          <div class="text-center font-mono">
            <p class="mt-4 text-sm opacity-80">{labels.contributionAddress}</p>
            <p class="mt-4 text-sm opacity-80">
              0x379cED533c784ED13123CC95BCb2fB600f85960A
            </p>
            <p class="mt-8 text-xs opacity-80">{labels.walletWarning}</p>
          </div>
        </div>
      </div>
      <div
        id="fiat-donation"
        class="fixed inset-0 z-60 hidden items-center justify-center bg-dark/80 px-6 py-8 target:flex"
        aria-modal="true"
        role="dialog"
      >
        <a
          href="#donate"
          class="absolute inset-0 cursor-default"
          aria-label={labels.closeBanking}
        >
          <span class="sr-only">{labels.closeBanking}</span>
        </a>
        <div class="relative w-full max-w-md rounded-lg border bg-light p-6 text-dark shadow-2xl dark:bg-dark dark:text-light">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="font-mono text-sm opacity-70">{labels.fiatDonation}</p>
              <h2 class="font-mono text-2xl font-bold">
                {labels.bankTransfer}
              </h2>
            </div>
            <a
              href="#donate"
              class="flex py-1 px-2 items-center justify-center border font-mono text-sm bg-white text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
              aria-label={labels.closeBanking}
            >
              {labels.close}
            </a>
          </div>
          <dl class="mt-6 divide-y border-y font-mono text-sm">
            <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
              <dt class="opacity-70">{labels.bank}</dt>
              <dd>{BANKING_INFO.bank}</dd>
            </div>
            <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
              <dt class="opacity-70">{labels.branch}</dt>
              <dd>{BANKING_INFO.branch}</dd>
            </div>
            <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
              <dt class="opacity-70">{labels.account}</dt>
              <dd>{BANKING_INFO.account_no}</dd>
            </div>
            <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
              <dt class="opacity-70">{labels.name}</dt>
              <dd>{BANKING_INFO.account_name}</dd>
            </div>
          </dl>
          <p class="mt-4 text-xs opacity-80">{labels.receipt}</p>
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
