import { createRoute } from "honox/factory";
import ManifestoPage from "@/components/pages/ManifestoPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("manifesto", "ja")}</title>
      <ManifestoPage locale="ja" currentPath={c.req.path} />
    </>,
  );
});
