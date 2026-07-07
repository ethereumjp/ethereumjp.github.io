import Layout from "@/components/layouts/MainLayout";
import ExternalLink from "@/components/ui/ExternalLink";
import { BANKING_INFO } from "@/const";

const SPONSOR_INQUIRY_URL = "https://forms.ethtokyo.org/p/sponsor-inquiry";

const contributionUses = [
  "City-wide community event infrastructure",
  "Accessible venues for workshops, salons, and meetups",
  "Recording, streaming, and archival costs",
  "Speaker and builder support for public-goods programming",
];

const DonatePage = () => (
  <Layout>
    <section id="donate" class="w-full px-6 pt-20 pb-12 border-b">
      <div class="max-w-3xl mx-auto flex flex-col gap-6">
        <p class="font-mono text-sm uppercase tracking-normal text-secondary">
          Support ETHTokyo
        </p>
        <h1 class="text-4xl font-bold font-mono">Contribute to ETHTokyo</h1>
        <p class="text-sm leading-loose">
          ETHTokyo is operated by an independent non-profit association.
        </p>
        <p class="text-sm leading-loose">
          We are supported by mission-aligned partners across the ecosystem,
          with neutrality and independence built directly into our foundation.
        </p>
        <p class="text-sm leading-loose">
          Your contributions help us keep Ethereum spaces in Tokyo credible,
          open, and independent.
        </p>
      </div>
    </section>

    <section class="w-full px-6 py-12 border-b">
      <div class="max-w-3xl mx-auto grid gap-5 md:grid-cols-2">
        <article class="border rounded-lg p-5 flex flex-col gap-4">
          <div>
            <p class="font-mono text-sm opacity-70">Ethereum</p>
            <h2 class="font-mono text-xl font-bold mt-1">
              ETH and ERC-20 contributions
            </h2>
          </div>
          <p class="text-sm leading-loose">
            We can receive ETH, stablecoins, or other ERC-20 assets on Ethereum
            mainnet. Send your contribution onchain.
          </p>
          <a
            class="font-mono underline underline-offset-4"
            href="#crypto-donation"
          >
            CONTRIBUTE
          </a>
        </article>

        <article class="border rounded-lg p-5 flex flex-col gap-4">
          <div>
            <p class="font-mono text-sm opacity-70">Fiat</p>
            <h2 class="font-mono text-xl font-bold mt-1">
              Bank transfer <br /> (with invoice support)
            </h2>
          </div>
          <p class="text-sm leading-loose">
            For organizations that require receipts or invoices, please contact
            us with your required billing information.
          </p>
          <a
            class="font-mono underline underline-offset-4"
            href="#fiat-donation"
          >
            CONTRIBUTE
          </a>
        </article>
      </div>
    </section>

    <section class="w-full px-6 py-12 border-b">
      <div class="max-w-3xl mx-auto flex flex-col gap-5">
        <h2 class="font-mono text-2xl font-bold">What donations fund</h2>
        <ul class="grid gap-3 md:grid-cols-2">
          {contributionUses.map((item) => (
            <li key={item} class="border-l-2 border-secondary pl-4 py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section class="w-full px-6 py-12">
      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        <h2 class="font-mono text-2xl font-bold">Enterprise sponsorship</h2>
        <p>
          If your team wants visibility across ETHTokyo Week, developer
          relations access, ecosystem programming, or a deeper partnership with
          the Tokyo Ethereum community, review the sponsor deck and reach out
          through the inquiry form.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <a class="btn-outline text-center" href="/support-us/deck">
            More details
          </a>
          <a
            class="btn text-center"
            href={SPONSOR_INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsor inquiry
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
        aria-label="Close payment modal"
      >
        <span class="sr-only">Close payment modal</span>
      </a>
      <div class="relative w-full max-w-md rounded-lg border bg-light p-6 text-dark shadow-2xl dark:bg-dark dark:text-light">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-mono text-sm opacity-70">Send to</p>
            <h2 class="font-mono text-2xl font-bold">
              <ExternalLink href="http://etherscan.io/address/ethjp.eth">
                ethjp.eth
              </ExternalLink>
            </h2>
            <br />
            <p class="font-mono text-xs opacity-70">
              Accepts ETH, stablecoins, or any other ERC-20 on Ethereum mainnet.
            </p>
          </div>
          <button type="button">
            <a
              href="#donate"
              class="flex h-full w-full py-1 px-2 items-center justify-center border font-mono text-sm 
              bg-white text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
              aria-label="Close payment modal"
            >
              close
            </a>
          </button>
        </div>
        <div class="mt-5 rounded-lg border bg-white p-4">
          <img
            src="/images/donate-qr.png"
            alt="ETHTokyo crypto donation payment QR code"
            class="mx-auto h-auto w-full max-w-72"
          />
        </div>
        <div class="text-center font-mono">
          <p class="mt-4 text-sm opacity-80">CONTRIBUTION ADDRESS</p>
          <p class="mt-4 text-sm opacity-80">
            0x379cED533c784ED13123CC95BCb2fB600f85960A
          </p>
          <p class="mt-8 text-xs opacity-80">
            Please confirm network and token details in your wallet before
            sending any funds.
          </p>
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
        aria-label="Close banking information modal"
      >
        <span class="sr-only">Close banking information modal</span>
      </a>
      <div class="relative w-full max-w-md rounded-lg border bg-light p-6 text-dark shadow-2xl dark:bg-dark dark:text-light">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-mono text-sm opacity-70">Fiat donation</p>
            <h2 class="font-mono text-2xl font-bold">Bank transfer</h2>
          </div>
          <button type="button">
            <a
              href="#donate"
              class="flex h-full w-full py-1 px-2 items-center justify-center border font-mono text-sm 
              bg-white text-dark hover:bg-dark hover:text-white dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
              aria-label="Close banking information modal"
            >
              close
            </a>
          </button>
        </div>
        <dl class="mt-6 divide-y border-y font-mono text-sm">
          <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt class="opacity-70">Bank</dt>
            <dd>{BANKING_INFO.bank}</dd>
          </div>
          <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt class="opacity-70">Branch</dt>
            <dd>{BANKING_INFO.branch}</dd>
          </div>
          <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt class="opacity-70">Account</dt>
            <dd>{BANKING_INFO.account_no}</dd>
          </div>
          <div class="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt class="opacity-70">Name</dt>
            <dd>{BANKING_INFO.account_name}</dd>
          </div>
        </dl>
        <p class="mt-4 text-xs opacity-80">
          To get a donation receipt, please message us at{" "}
          <a href="mailto:billing@ethtokyo.org">billing@ethtokyo.org</a>.
        </p>
      </div>
    </div>
  </Layout>
);

export default DonatePage;
