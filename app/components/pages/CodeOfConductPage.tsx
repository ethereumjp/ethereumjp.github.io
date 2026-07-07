import StaticPage from "@/components/pages/StaticPage";
import type { Locale } from "@/i18n";

const copy = {
  en: {
    title: "Code of Conduct",
    lastUpdated: "Last updated:",
    date: "[2025-12-27]",
    sections: [
      {
        title: "1. Harassment & Consent",
        intro: "We operate on a strict opt-in protocol.",
        items: [
          {
            title: "Respecting boundaries",
            body: 'If someone says "no," "stop," or physically disengages, the transaction is void. Continuing to push-whether for a debate, a pitch, or a chat-is a violation of the non-aggression principle.',
          },
          {
            title: "Assume Zero Consent",
            body: 'Do not touch anyone without explicit permission. Do not photograph anyone wearing a "no photo" indicator where we have them.',
          },
          {
            title: "Scope",
            body: "This applies to all venues, afterparties, and the official digital channels.",
          },
        ],
      },
      {
        title: "2. Shilling & Spam",
        intro:
          "Attention is the scarcest resource out here now. Do not steal it.",
        items: [
          {
            title: "Signal vs noise",
            body: "Do not corner people to pitch your tokens. Aggressive shilling is taxes on our collective cognitive load. Engage on fundamental engineering or philosophy and let price talk in the market.",
          },
          {
            title: "Recruitment",
            body: "Headhunting is acceptable; pestering builders in the flow state is not. Read the room.",
          },
        ],
      },
      {
        title: "3. Property & Commons",
        intro:
          "Do not let the space devolve into another tragedy of the commons.",
        items: [
          {
            title: "Property rights",
            body: "Never touch another person's keyboard or unlocked laptop (or anything not explicitly yours, really). Building trustless systems does not absolve us of the need for physical integrity.",
          },
          {
            title: "The Commons",
            body: "Minimize your negative externalities. Respect the space(s) that you occupy. Leave the environment in a better condition than you found it.",
          },
        ],
      },
      {
        title: "4. Physical Security",
        intro:
          "The decentralized future requires each of us to be capable of self-regulation. Do not force us to be the leviathan.",
        items: [
          {
            title: "Zero Tolerance",
            body: "Any act of harm towards participants or staff-violence, doxxing, or harassment-results in immediate, permanent exclusion.",
          },
          {
            title: "Dispute Resolution",
            body: "In the event of a dispute, resolution will be determined by the sole discretion of the event staff team.",
          },
        ],
      },
    ],
  },
  ja: {
    title: "行動規範",
    lastUpdated: "最終更新:",
    date: "[2025-12-27]",
    sections: [
      {
        title: "1. ハラスメントと同意",
        intro: "私たちは厳格なオプトインの原則で運営します。",
        items: [
          {
            title: "境界の尊重",
            body: "誰かが「いいえ」「やめて」と言ったり、身体的に距離を取った場合、そのやり取りは終了です。議論、ピッチ、雑談のいずれであっても、押し続けることは非侵害原則への違反です。",
          },
          {
            title: "同意はゼロから始まる",
            body: "明示的な許可なく誰かに触れないでください。「撮影不可」の表示を身につけている人を撮影しないでください。",
          },
          {
            title: "適用範囲",
            body: "本規範は、すべての会場、アフターパーティー、公式デジタルチャンネルに適用されます。",
          },
        ],
      },
      {
        title: "2. 宣伝とスパム",
        intro: "注意は最も希少な資源です。それを奪わないでください。",
        items: [
          {
            title: "シグナルとノイズ",
            body: "トークンの売り込みのために人を囲い込まないでください。攻撃的な宣伝は、私たち全体の認知負荷に対する税です。基礎的なエンジニアリングや思想について対話し、価格の話は市場に任せましょう。",
          },
          {
            title: "リクルーティング",
            body: "ヘッドハンティングは許容されますが、集中しているビルダーをしつこく邪魔することは許容されません。場の空気を読んでください。",
          },
        ],
      },
      {
        title: "3. 財産とコモンズ",
        intro: "この場をコモンズの悲劇にしないでください。",
        items: [
          {
            title: "財産権",
            body: "他人のキーボード、ロックされていないラップトップ、または明示的に自分のものでないものには触れないでください。トラストレスなシステムを構築することは、物理的な完全性への配慮を不要にするものではありません。",
          },
          {
            title: "コモンズ",
            body: "負の外部性を最小限にしてください。自分が利用する空間を尊重し、見つけたときより良い状態で残してください。",
          },
        ],
      },
      {
        title: "4. 物理的な安全",
        intro:
          "分散化された未来には、私たち一人ひとりが自律的に行動できることが求められます。運営に強制的な介入者の役割を担わせないでください。",
        items: [
          {
            title: "ゼロトレランス",
            body: "参加者またはスタッフへの危害、暴力、ドックス、ハラスメントは、即時かつ恒久的な排除の対象となります。",
          },
          {
            title: "紛争解決",
            body: "紛争が発生した場合、解決方法はイベントスタッフチームの単独の裁量により決定されます。",
          },
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
    sections: {
      title: string;
      intro: string;
      items: { title: string; body: string }[];
    }[];
  }
>;

const CodeOfConductPage = ({
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
        {labels.sections.map((section) => (
          <section key={section.title}>
            <h2 class="font-bold text-lg mb-2">{section.title}</h2>
            <p class="pb-2">{section.intro}</p>
            <ul class="list-disc px-6 space-y-1.5">
              {section.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>: {item.body}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </StaticPage>
  );
};

export default CodeOfConductPage;
