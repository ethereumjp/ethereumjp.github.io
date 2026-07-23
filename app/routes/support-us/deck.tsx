import { createRoute } from "honox/factory";
import SupportDeckPage from "@/components/pages/SupportDeckPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("sponsorDeck", "en")}</title>
      <SupportDeckPage locale="en" currentPath={c.req.path} />
    </>,
  );
});
