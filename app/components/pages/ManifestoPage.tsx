import StaticPage from "@/components/pages/StaticPage";
import type { Locale } from "@/i18n";

const manifestoCopy = {
  en: {
    title: "Manifesto",
    intro: [
      "ETHTokyo exists, because Tokyo is one of the few places where the contradictions of Ethereum can be held without immediately resolving them.",
      "Protocol and culture. Finance and art. Public goods and private ambition. Cypherpunk sovereignty and institutional legitimacy. Technological acceleration and sustainable continuity.",
      "This is the terrain.",
      "ETHTokyo is not defined by whether we run a hackathon, a conference, a meetup, a dinner, a research salon, or a public gathering. Formats change. Ethereum does not need another event for the sake of an event. What remains is our reason.",
      "We are here to coordinate the people building credible, open, programmable systems from Tokyo.",
      "Ethereum has crossed an important threshold. It is no longer merely a speculative frontier or an experiment in alternative money. The stack is becoming real: programmable accounts, cheaper data, rollups, zero-knowledge proofs, privacy-preserving systems, autonomous agents, decentralized infrastructure, and new forms of digital organization are all converging.",
      "The question is no longer whether Ethereum can exist.",
      "The question is what kind of world it will make possible.",
      "ETHTokyo exists to raise that question.",
    ],
    sections: [
      {
        title: "Our thesis",
        paragraphs: [
          "ETHTokyo is not defined by a single format, venue, or hackathon. It is a coordination layer for cypherpunks in Tokyo: a place where builders, researchers, artists, operators, founders, institutions, and independent weirdos can gather around a shared civilizational question.",
          "What should a credible, open, programmable society look like from Tokyo?",
        ],
      },
      {
        title: "Why now?",
        paragraphs: [
          "Ethereum is no longer just a speculative frontier. The protocol stack has matured. Account abstraction, cheaper data, rollups, privacy research, restaking, ZK, hardware verification, and agentic execution are converging into a new design space.",
          "The question is no longer whether Ethereum can technically exist. Rather, we're here to ask: what kind of real-world order will it make possible?",
        ],
      },
    ],
    principlesTitle: "Our principles",
    principles: [
      {
        title: "No Permissions Asked",
        body: "Anyone should be able to build, fork, join, contribute, exit, and create without asking institutional permission.",
      },
      {
        title: "Commons over Capture",
        body: "Technology only matters if it sustains infrastructure, knowledge, norms, and commons that outlive individual cycles.",
      },
      {
        title: "Intent over Interface",
        body: "Technology should expand human agency first and foremost beyond wallet UX, dashboards, and manual transaction clicking.",
      },
      {
        title: "Don't Trust, Verify",
        body: "We must escape self-referential token games; serious systems should make claims checkable, whether they concern code, assets, compute, or institutional infrastructure. The physical reality is our substrate.",
      },
      {
        title: "Privacy by Default",
        body: "Privacy is not a niche feature or a criminal suspicion; it is a precondition for freedom, security, experimentation, and dignity.",
      },
      {
        title: "We are Plural",
        body: "Decentralization's strength comes from many clients, L2s, apps, cultures, teams, and scenes, not one official path.",
      },
      {
        title: "Glocal Connection",
        body: "ETHTokyo aims to connect global cypherpunks to Tokyo's actual cultural, institutional, and underground reality.",
      },
    ],
    closingSections: [
      {
        title: "What ETHTokyo does",
        paragraphs: [
          "ETHTokyo convenes, curates, and coordinates. We are not here to civilize the edge until it becomes harmless. We are here to protect the edge from becoming isolated, illegible, or wasted.",
          "ETHTokyo acts as the coordination layer, not a factional machine, sponsor vehicle, or narrative cartel.",
        ],
      },
      {
        title: "Closing call",
        paragraphs: [
          "Tokyo has always been a city of contradiction; hypermodern and ancient, orderly and chaotic, corporate and underground, disciplined and playful. That contradiction is essential to a flourishing human life. ETHTokyo exists to make that contradiction productive for Ethereum.",
        ],
      },
    ],
  },
  ja: {
    title: "我々の理念",
    intro: [
      "ETHTokyoが存在するのは、東京がEthereumの抱える矛盾を、急いで単純化することなく、そのまま引き受けることのできる数少ない場所のひとつだからである。",
      "Ethereumは、いくつもの相反する力の上に成り立っている。サイファーパンク的な主権を掲げながら、制度的な正統性も求められている。公共財でありながら、私的な野心と資本を引き寄せている。金融のインフラでありながら、アート、ゲーム、コミュニティ、実験的な組織の土壌でもある。世界中に開かれたプロトコルでありながら、サブカル的な文脈とそれを共有する人間同士の相互関係の上に根づいている。",
      "東京もまた、同じ種類の矛盾を抱える都市である。極端に近代的でありながら、古い作法と記憶が失われていない。巨大な資本と制度の中心でありながら、路地裏では前衛的な文化や実験的な生活が様々展開されている。効率と秩序の街でありながら、過剰で、個人的で、奇妙な表現が生まれ続ける場所でもある。",
      "だからこそ、東京はEthereumを単なる技術、単なる金融、単なるコミュニティとしてではなく、それらが同時に存在する複雑な現実として受け止めることができると我々は考える。",
      "プロトコルと文化。金融とアート。公共財と私的な野心。サイファーパンク的な主権と制度的な正統性。技術的な加速と、持続的な継続性。",
      "我々が立っているこの場所は、そうした矛盾の狭間にある。",
      "ETHTokyoは、ハッカソン、カンファレンス、ミートアップ、ワークショップといったような開催形式によって定義されるものではない。形式は変わる。しかし、我々が存在する理由は変わらない。もっと自由で、便利で、ワクワクできる未来をつくる人々を繋ぐために我々はここにいる。",
      "Ethereumは、既にこの10年間一度も停止し続けず稼働しており、機能面に関しても既に重要な閾値を越えている。もはや問うべきは、Ethereumが存在し得るかどうかではない。",
      "問うべきは、これがどのような世界を可能にするのかである。",
      "ETHTokyoは、その問いを掲げるために存在する。",
    ],

    sections: [
      {
        title: "我々の問い",
        paragraphs: [
          "ETHTokyoは、単一の形式、会場、ハッカソンによって定義されるものではなく、東京のサイファーパンクのためのコーディネーションレイヤーである。",
          "東京から見た、信頼でき、開かれ、プログラム可能な社会とはどのようなものであるべきか。",
        ],
      },
      {
        title: "なぜ今なのか？",
        paragraphs: [
          "Ethereumはもはや単なる投機的フロンティアではない。アカウント抽象化、安価なデータストレージ、プライバシー研究、ハードウェア検証、エージェント実行等が新しい設計空間へと収束しつつある、成熟したプロトコルスタックである。",
          "問いは、Ethereumが技術的に存在できるかどうかではなく、それがどのような現実世界の秩序を可能にするのかである。",
        ],
      },
    ],
    principlesTitle: "我々の原則",
    principles: [
      {
        title: "No Permissions Asked",
        body: "誰もが、制度的な許可を求めることなく、構築し、フォークし、参加し、貢献し、退出し、創造できる必要がある。",
      },
      {
        title: "Commons over Capture",
        body: "技術に意味があるのは、個別のサイクルを超えて残るインフラ、知識、規範、コモンズを支えることができるとき。",
      },
      {
        title: "Intent over Interface",
        body: "技術は、ウォレットUX、ダッシュボード、手動のトランザクション操作等ではなく、人間の主体性を拡張するべき。",
      },
      {
        title: "Don't Trust, Verify",
        body: "自己参照的なトークンゲームから抜け出さなければならない。真に実用的なシステムは、コード、資産、計算、制度的インフラのいずれに関する主張であっても、検証可能である必要がある。物理的な現実こそが我々の基盤である。",
      },
      {
        title: "Privacy by Default",
        body: "プライバシーはニッチな機能でも犯罪の疑いでもない。自由、安全、実験、尊厳の前提条件である。",
      },
      {
        title: "We are Plural",
        body: "分散化の強さは、多くのクライアント、L2、アプリ、文化、チーム、シーンから生まれる。ひとつの公式な道は存在しない。",
      },
      {
        title: "Glocal Connection",
        body: "ETHTokyoは、世界中のサイファーパンクを、東京の実際の文化、制度、現実の生活へと接続することを目指す。",
      },
    ],
    closingSections: [
      {
        title: "我々が担う役割",
        paragraphs: [
          "ETHTokyoは、人を集め、見極め、つなぎ、コーディネートする。私たちの目的は、Ethereumのエッジにある思想や実験を、無害な「安全性」へと丸め込むことではない。むしろ、その鋭さが孤立し、誤解され、あるいは使われないまま失われてしまわないように、必要な文脈と接続を与えることにある。",
          "ETHTokyoは、その場を調整するための装置である。",
        ],
      },

      {
        title: "終わりに",
        paragraphs: [
          "東京は常に矛盾の都市だ。現代的でありながら伝統的で、秩序の中に混沌があり、規律が強いようで遊び心もある。その矛盾は、豊かな人間の生にとって本質的なものである。ETHTokyoは、その矛盾をEthereumにとって生産的なものにするために存在する。",
        ],
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    intro: string[];
    sections: { title: string; paragraphs: string[] }[];
    principlesTitle: string;
    principles: { title: string; body: string }[];
    closingSections: { title: string; paragraphs: string[] }[];
  }
>;

const ManifestoPage = ({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) => {
  const copy = manifestoCopy[locale];

  return (
    <StaticPage title={copy.title} locale={locale} currentPath={currentPath}>
      <div class="px-4 flex flex-col gap-4">
        {copy.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2 class="font-bold text-lg mb-2">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={paragraph} class={index === 0 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <section>
          <h2 class="font-bold text-lg mb-2">{copy.principlesTitle}</h2>
          <ol class="list-decimal ml-6 space-y-1">
            {copy.principles.map((principle) => (
              <li key={principle.title}>
                <strong>{principle.title}</strong> - {principle.body}
              </li>
            ))}
          </ol>
        </section>

        {copy.closingSections.map((section) => (
          <section key={section.title}>
            <h2 class="font-bold text-lg mb-2">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} class="mb-4">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </StaticPage>
  );
};

export default ManifestoPage;
