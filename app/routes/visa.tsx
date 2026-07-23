import { createRoute } from "honox/factory";
import VisaInfoPage from "@/components/pages/VisaInfoPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("visa", "en")}</title>
      <VisaInfoPage locale="en" currentPath={c.req.path} />
    </>,
  );
});
