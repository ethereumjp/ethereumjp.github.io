import { createRoute } from "honox/factory";
import BrandAssetsPage from "@/components/pages/BrandAssetsPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("brandAssets", "en")}</title>
      <BrandAssetsPage locale="en" currentPath={c.req.path} />
    </>,
  );
});
