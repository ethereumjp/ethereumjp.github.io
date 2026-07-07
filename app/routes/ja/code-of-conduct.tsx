import { createRoute } from "honox/factory";
import CodeOfConductPage from "@/components/pages/CodeOfConductPage";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("codeOfConduct", "ja")}</title>
      <CodeOfConductPage locale="ja" currentPath={c.req.path} />
    </>,
  );
});
