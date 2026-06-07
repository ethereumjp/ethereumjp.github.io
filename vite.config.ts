import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import { join } from "node:path";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig, loadEnv, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";
const basePlugins = [tailwindcss(), tsconfigPaths()];

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

const copyCuratedImagesPlugin = (): Plugin => ({
  name: "copy-curated-images",
  closeBundle: async () => {
    const source = join(process.cwd(), "public/images/curated");
    const destination = join(process.cwd(), "dist/images/curated");

    if (!existsSync(source)) {
      return;
    }

    await cp(source, destination, { recursive: true });
  },
});

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "./app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name]-[hash].[ext]",
          },
        },
      },
      plugins: [...basePlugins, client()],
    };
  }

  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: buildTimeEnvDefine(env),
    build: {
      emptyOutDir: false,
    },
    plugins: [
      ...basePlugins,
      honox(),
      ssg({ entry }),
      copyCuratedImagesPlugin(),
    ],
  };
});
