import { createRoute } from "honox/factory";
import TopPage from "@/components/pages/top/index";
import { getPageTitle } from "@/i18n";
import { fetchCuratedEvents } from "@/lib/curated-events";

export default createRoute(async (c) => {
  const events = await fetchCuratedEvents();

  return c.render(
    <>
      <title>{getPageTitle("home", "en")}</title>
      <TopPage locale="en" currentPath={c.req.path} events={events} />
    </>,
  );
});
