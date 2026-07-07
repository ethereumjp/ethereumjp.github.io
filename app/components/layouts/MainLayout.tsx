import type { Child } from "hono/jsx";
import Menu from "@/components/layouts/$Menu";
import Footer from "@/components/layouts/Footer";
import type { Locale } from "@/i18n";

const Layout = ({
  children,
  locale,
  currentPath,
}: {
  children: Child;
  locale: Locale;
  currentPath: string;
}) => {
  return (
    <>
      <Menu locale={locale} currentPath={currentPath} />
      <main>{children}</main>
      <div class="w-full pt-8 pb-9 px-6 border-t">
        <Footer locale={locale} />
      </div>
    </>
  );
};

export default Layout;
