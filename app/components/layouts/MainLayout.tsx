import type { Child } from "hono/jsx";
import Menu from "@/components/layouts/$Menu";
import Footer from "@/components/layouts/Footer";

const Layout = ({ children }: { children: Child }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <div class="w-full pt-8 pb-9 px-6 border-t">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
