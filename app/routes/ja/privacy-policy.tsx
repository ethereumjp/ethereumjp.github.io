import { createRoute } from "honox/factory";
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("privacyPolicy", "ja")}</title>
      <PrivacyPolicyPage locale="ja" currentPath={c.req.path} />
    </>,
  );
});
