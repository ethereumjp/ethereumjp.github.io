import { createRoute } from "honox/factory";
import DonatePage from "@/components/pages/DonatePage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Donate | ETHTokyo '26</title>
      <DonatePage />
    </>,
  );
});
