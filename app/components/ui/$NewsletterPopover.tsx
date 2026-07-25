import { useState } from "hono/jsx";
import SimpleIcon from "@/components/ui/SimpleIcon";
import type { Locale } from "@/i18n";

const target = "newsletter";

const newsletterCopy = {
  en: {
    title: "Newsletter",
    description: "Stay updated with the latest news and announcements",
    sending: "Sending...",
    subscribed: "Subscribed",
    failed: "Failed.",
    subscribe: "Subscribe",
    close: "Close newsletter signup",
  },
  ja: {
    title: "Newsletter",
    description: "最新ニュースとお知らせを受け取る",
    sending: "送信中...",
    subscribed: "登録済み",
    failed: "失敗しました",
    subscribe: "登録",
    close: "ニュースレター登録を閉じる",
  },
} satisfies Record<
  Locale,
  {
    title: string;
    description: string;
    sending: string;
    subscribed: string;
    failed: string;
    subscribe: string;
    close: string;
  }
>;

const NewsletterDialog = ({ locale }: { locale: Locale }) => {
  const [sendStatus, setSendStatus] = useState(0);
  const copy = newsletterCopy[locale];

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSendStatus(1);

    const form = e.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!emailInput.checkValidity()) {
      setSendStatus(3);
      emailInput.reportValidity();
      return;
    }

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_NEWSLETTER_BASE}/${import.meta.env.VITE_AIRTABLE_NEWSLETTER_TABLE}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_NEWSLETTER_PAT}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Email: email,
            },
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to subscribe");
      }

      const record = await response.json();
      setSendStatus(2);
      console.log(
        JSON.stringify({
          message: "SUCCESS",
          address: email,
          record: record.id,
        }),
      );
    } catch (err) {
      setSendStatus(3);
      console.error(err);
      // Optional: Show error to user
    }
  };

  const getNewsletterButtonLabel = () => {
    switch (sendStatus) {
      case 1:
        return copy.sending;
      case 2:
        return copy.subscribed;
      case 3:
        return copy.failed;
      default:
        return copy.subscribe;
    }
  };

  return (
    <>
      <button
        popovertarget={target}
        popovertargetAction="show"
        type="button"
        class="hover:text-secondary"
      >
        <SimpleIcon
          klass="w-5 h-5"
          src="https://cdn.simpleicons.org/substack"
          alt="substack"
        />
      </button>
      <div
        id={target}
        popover="auto"
        class="fixed bg-transparent bottom-18 left-6 top-auto z-50"
      >
        <div class="w-screen-sm block mx-auto rounded-lg py-8 px-6 border style-base shadow-lg">
          <h5 class="font-bold font-mono mb-2">{copy.title}</h5>
          <p class="text-sm font-normal mb-4">{copy.description}</p>
          <form onSubmit={handleSubmit} class="grid grid-cols-3 gap-4">
            <input
              name="email"
              type="email"
              class="col-span-2"
              placeholder="your@email"
              autocomplete="email"
              required
            />
            <button
              class="col-span-1 btn flex-1"
              type="submit"
              disabled={sendStatus === 1 || sendStatus === 2}
            >
              {getNewsletterButtonLabel()}
            </button>
          </form>
          <button
            class="absolute top-2 right-2 cursor-pointer w-6 h-6"
            popovertarget={target}
            popovertargetAction="hide"
            type="button"
            aria-label={copy.close}
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsletterDialog;
