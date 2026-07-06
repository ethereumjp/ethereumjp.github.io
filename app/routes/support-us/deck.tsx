import { createRoute } from "honox/factory";
import SupportDeckPage from "@/components/pages/SupportDeckPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Enterprise Sponsor Deck | ETHTokyo '26</title>
      <SupportDeckPage />
    </>,
  );
});
