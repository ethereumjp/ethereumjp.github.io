import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";
import Meta from "@/components/layouts/Meta";
import { detectLocaleFromPath } from "@/i18n";

export default jsxRenderer(({ children }, c) => {
  const currentPath = c.req.path;
  const locale = detectLocaleFromPath(currentPath);

  return (
    <html lang={locale} class="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=IBM+Plex+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Meta locale={locale} currentPath={currentPath} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("ethtokyo.theme") || localStorage.getItem("theme");
            const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
            document.documentElement.classList.toggle("dark", isDark);
          `,
          }}
        />
        <Link href="/app/style.css" rel="stylesheet" />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js"></script>
        ) : (
          <script type="module" src="/app/client.ts"></script>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
});
