import { createRoute } from "honox/factory";
import TopPage from "@/components/pages/top/index";
import { getPageTitle } from "@/i18n";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{getPageTitle("home", "ja")}</title>
      <TopPage locale="ja" currentPath={c.req.path} />
    </>,
  );
});
