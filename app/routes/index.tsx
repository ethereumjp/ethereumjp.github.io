import { createRoute } from "honox/factory";
import TopPage from "@/components/pages/top/index";
import { fetchCuratedEvents } from "@/lib/curated-events";

export default createRoute(async (c) => {
  const events = await fetchCuratedEvents();

  return c.render(
    <>
      <title>ETHTokyo '26</title>
      <TopPage events={events} />
    </>,
  );
});
