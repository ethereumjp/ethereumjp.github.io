import Layout from "@/components/layouts/MainLayout";

const SPONSOR_INQUIRY_URL = "https://forms.ethtokyo.org/p/sponsor-inquiry";

const PREZI_EMBED_URL = "https://prezi.com/p/embed/hj3rsV0YXXOMVBkdCHPf/";
const SupportDeckPage = () => (
  <Layout>
    <section class="w-full px-6 pt-20 pb-10 border-b">
      <div class="max-w-5xl mx-auto flex flex-col gap-5">
        <p class="font-mono text-sm uppercase tracking-normal text-secondary">
          Enterprise sponsors
        </p>
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="flex flex-col gap-4">
            <h1 class="text-4xl font-bold font-mono">Support ETHTokyo</h1>
            <p class="max-w-3xl text-xl leading-relaxed">
              A sponsor deck for teams supporting Ethereum infrastructure,
              developer ecosystems, public goods, and credible community spaces
              in Tokyo.
            </p>
          </div>
          <a
            class="btn shrink-0 text-center"
            href={SPONSOR_INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsor inquiry
          </a>
        </div>
      </div>
    </section>

    <section class="w-full px-6 py-8">
      <div class="max-w-5xl mx-auto flex flex-col gap-4">
        <div class="aspect-video w-full overflow-hidden rounded-lg border bg-dark">
          <iframe
            title="ETHTokyo enterprise sponsor deck"
            src={PREZI_EMBED_URL}
            class="h-full w-full"
            allow="fullscreen; autoplay"
            allowfullscreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <div class="flex flex-col gap-3 text-sm opacity-80 md:flex-row md:items-center md:justify-between">
          <p>
            If the deck does not load, open it directly in a new browser tab.
          </p>
          <a
            class="font-mono underline underline-offset-4"
            href={PREZI_EMBED_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open presentation deck
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default SupportDeckPage;
