import { existsSync } from "node:fs";
import { readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import nodeBuild from "@hono/vite-build/node";
import vercelBuild from "@hono/vite-build/vercel";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig, loadEnv, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";
const renderEntry = "./app/server-render.ts";
const basePlugins = [tailwindcss(), tsconfigPaths()];
// The SSG plugin runs an internal Vite server. Writing generated files under
// public/ can restart that server while it is closing and leave the build alive.
const eventThumbnailStagingDir = join(
  tmpdir(),
  `ethtokyo-eventthumbnails-${process.pid}`,
);

const buildTimeEnvKeys = [
  "AIRTABLE_EVENTCURATE_PAT",
  "AIRTABLE_EVENTCURATE_BASE",
  "AIRTABLE_EVENTCURATE_TABLE",
  "FORMBRICKS_EVENT_PAT",
  "FORMBRICKS_EVENT_SURVEY_ID",
] as const;

const buildTimeEnvDefine = (
  env: Record<string, string>,
): Record<string, string> =>
  Object.fromEntries(
    buildTimeEnvKeys.map((key) => [
      `process.env.${key}`,
      JSON.stringify(env[key] ?? ""),
    ]),
  );

const emitEventThumbnailsPlugin = (): Plugin => ({
  name: "emit-event-thumbnails",
  apply: "build",
  // The SSG plugin downloads thumbnails while rendering routes in its
  // generateBundle hook. Run after it so the staged images become build assets.
  enforce: "post",
  generateBundle: {
    order: "post",
    handler: async function () {
      if (!existsSync(eventThumbnailStagingDir)) {
        return;
      }

      const files = await readdir(eventThumbnailStagingDir, {
        withFileTypes: true,
      });
      await Promise.all(
        files
          .filter((file) => file.isFile())
          .map(async (file) => {
            this.emitFile({
              type: "asset",
              fileName: `images/2026/eventthumbnails/${file.name}`,
              source: await readFile(join(eventThumbnailStagingDir, file.name)),
            });
          }),
      );
    },
  },
  async closeBundle() {
    await rm(eventThumbnailStagingDir, { recursive: true, force: true });
  },
});

const preloadEventThumbnailsPlugin = (): Plugin => ({
  name: "preload-event-thumbnails",
  apply: "build",
  // This runs before SSG so every thumbnail request has settled before pages
  // render. Failed requests deliberately use the event-card fallback.
  async buildStart() {
    await rm(eventThumbnailStagingDir, { recursive: true, force: true });
    process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR = eventThumbnailStagingDir;

    const { fetchCuratedEvents } = await import("./app/lib/curated-events");
    await fetchCuratedEvents();
  },
});

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    const isVercelClientBuild = process.env.VERCEL_CLIENT_BUILD === "true";

    return {
      build: {
        ...(isVercelClientBuild
          ? {
              outDir: ".vercel/output/static",
              emptyOutDir: true,
              copyPublicDir: false,
            }
          : {}),
        rollupOptions: {
          input: ["./app/client.ts", "./app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: (asset) =>
              asset.name === "style.css"
                ? "static/style.css"
                : "static/assets/[name]-[hash].[ext]",
          },
        },
      },
      plugins: [...basePlugins, client()],
    };
  }

  const env = loadEnv(mode, process.cwd(), "");

  if (mode === "render") {
    return {
      define: {
        "process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR": "undefined",
      },
      build: {
        emptyOutDir: false,
      },
      ssr: {
        external: ["sharp"],
      },
      plugins: [
        ...basePlugins,
        honox(),
        nodeBuild({
          entry: renderEntry,
          port: 10000,
        }),
      ],
    };
  }

  if (mode === "vercel") {
    return {
      define: {
        ...buildTimeEnvDefine(env),
        "process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR": "undefined",
      },
      build: {
        emptyOutDir: false,
      },
      ssr: {
        external: ["sharp"],
      },
      plugins: [...basePlugins, honox(), vercelBuild({ entry })],
    };
  }

  return {
    define: {
      ...buildTimeEnvDefine(env),
      "process.env.ETHTOKYO_EVENT_THUMBNAIL_DIR":
        mode === "production"
          ? JSON.stringify(eventThumbnailStagingDir)
          : "undefined",
    },
    build: {
      emptyOutDir: false,
    },
    ssr: {
      external: ["sharp"],
    },
    plugins: [
      ...basePlugins,
      honox(),
      preloadEventThumbnailsPlugin(),
      ssg({ entry }),
      emitEventThumbnailsPlugin(),
    ],
  };
});
