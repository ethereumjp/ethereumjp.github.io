import type { Child } from "hono/jsx";
import Layout from "@/components/layouts/MainLayout";

const StaticPage = ({
  title,
  children,
}: {
  title: string;
  children: Child;
}) => {
  return (
    <Layout>
      <div class="max-w-3xl mx-auto flex flex-col gap-4 pb-20 pt-14">
        <h1 class="text-2xl font-bold font-mono pb-6 text-center">{title}</h1>
        {children}
      </div>
    </Layout>
  );
};

export default StaticPage;
