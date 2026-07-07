import { createRoute } from "honox/factory";
import TermsOfServicePage from "@/components/pages/TermsOfServicePage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("termsOfService", "ja")}</title>
      <TermsOfServicePage locale="ja" currentPath={c.req.path} />
    </>,
  );
});
