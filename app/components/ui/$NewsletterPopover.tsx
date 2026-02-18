import { useState } from "hono/jsx";
import SimpleIcon from "@/components/ui/SimpleIcon";

const target = "newsletter";

const validateEmailAddress = (email: string) => {
  const re =
    /^([a-zA-Z0-9_-]+(?:.[a-zA-Z0-9_-]+)*)@((?:[a-zA-Z0-9_-]+.)*[a-zA-Z0-9_][a-zA-Z0-9_-]{0,66})[.]([a-z]{2,6}(?:.[a-z]{2})?)$/;
  return re.test(email);
};

export default function NewsletterDialog() {
  const [sendStatus, setSendStatus] = useState(0);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSendStatus(1);

    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value as string;

    if (!validateEmailAddress(email)) {
      setSendStatus(3);
      throw new Error("Invalid email address.");
    }

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/${import.meta.env.VITE_AIRTABLE_TABLE}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}`,
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
        return "Sending...";
      case 2:
        return "Subscribed";
      case 3:
        return "Failed.";
      default:
        return "Subscribe";
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
          klass="w-4 h-4"
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
          <h5 class="font-bold font-mono mb-2">Newsletter</h5>
          <p class="text-sm font-normal mb-4">
            Stay updated with the latest news and announcements
          </p>
          <form onSubmit={handleSubmit} class="grid grid-cols-3 gap-4">
            <input
              name="email"
              type="email"
              class="col-span-2"
              placeholder="your@email"
            />
            <button class="col-span-1 btn flex-1" type="submit">
              {getNewsletterButtonLabel()}
            </button>
          </form>
          <button
            class="absolute top-2 right-2 cursor-pointer w-6 h-6"
            popovertarget={target}
            popovertargetAction="hidden"
            type="button"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}
