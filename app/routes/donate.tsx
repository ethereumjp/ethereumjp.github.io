import { createRoute } from "honox/factory";
import DonatePage from "@/components/pages/DonatePage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("donate", "en")}</title>
      <DonatePage locale="en" currentPath={c.req.path} />
    </>,
  );
});
