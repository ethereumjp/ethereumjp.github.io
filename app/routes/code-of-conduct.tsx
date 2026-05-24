import { createRoute } from "honox/factory";
import CodeOfConductPage from "@/components/pages/CodeOfConductPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Code of Conduct | ETHTokyo '26</title>
      <CodeOfConductPage />
    </>,
  );
});
