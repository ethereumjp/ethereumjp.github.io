import { createRoute } from "honox/factory";
import VisaInfoPage from "@/components/pages/VisaInfoPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Visa Info | ETHTokyo '26</title>
      <VisaInfoPage />
    </>,
  );
});
