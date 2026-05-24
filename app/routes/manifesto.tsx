import { createRoute } from "honox/factory";
import ManifestoPage from "@/components/pages/ManifestoPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Manifesto | ETHTokyo '26</title>
      <ManifestoPage />
    </>,
  );
});
