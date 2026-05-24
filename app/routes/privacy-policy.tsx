import { createRoute } from "honox/factory";
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Privacy Policy | ETHTokyo '26</title>
      <PrivacyPolicyPage />
    </>,
  );
});
