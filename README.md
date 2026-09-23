# ETHTokyo 2026 official website

## Features

- Typescript
- [HonoX](https://github.com/honojs/honox)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://github.com/biomejs/biome) linter & formatter

## Prerequisites

- Node.js 24.x
- pnpm 10.x (`corepack enable` will pick up the version pinned in `package.json`)

## Develop

```bash
# set up env vars (fill in the values afterwards)
cp .env.example .env

# develop
pnpm install
pnpm dev

# build & preview
pnpm run preview
```

### Code quality

```bash
pnpm check        # lint + format check (Biome)
pnpm check:fix    # auto-fix lint + format
pnpm lint:fix     # lint only, with fixes
pnpm format:fix   # format only, with fixes
```

A [lefthook](https://github.com/evilmartians/lefthook) pre-commit hook runs these automatically on commit.

## Project structure

```
app/
  routes/        # file-based routes (HonoX)
  components/    # UI components
  server.ts      # SSG entry
  client.ts      # client entry
public/          # static assets served as-is (images, favicon, .well-known)
dist/            # build output (deployed to Pages)
vite.config.ts   # two-pass build: `--mode client` bundle + SSG
```

## Deploy

Vercel is the primary deployment target. The modular GitHub Actions workflows share
the reusable CI workflow in [`.github/workflows/_ci.yml`](.github/workflows/_ci.yml):

- Pull requests deploy a Vercel preview via [`deploy.yml`](.github/workflows/deploy.yml) and [`_vercel.yml`](.github/workflows/_vercel.yml).
- Pushes to `main` deploy production through the same target-aware workflow.
- CI checks run through [`deploy.yml`](.github/workflows/deploy.yml) and [`_ci.yml`](.github/workflows/_ci.yml); the static Pages build is enabled only when the mirror is requested.
- Vercel builds the source with `pnpm build:vercel`, preserving the Hono server function and allowing server/edge routes.
- An optional, manual GitHub Pages mirror is available through [`_ghpages.yml`](.github/workflows/_ghpages.yml).

### Setup

1. Create or link the Vercel project and add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as repository or environment secrets.
2. Add the build-time secrets under **Settings → Secrets and variables → Actions** (see [`.env.example`](.env.example)):
   - `VITE_AIRTABLE_NEWSLETTER_PAT` / `_BASE` / `_TABLE`
   - `AIRTABLE_EVENTCURATE_PAT` / `_BASE` / `_TABLE`

> Note: `VITE_`-prefixed vars are inlined into the client bundle and are publicly visible by design.

To enable the Pages mirror, configure **Settings → Pages → Build and deployment** to use
**GitHub Actions**, then manually run the optional mirror workflow from the Actions tab.

## License

[MIT](LICENSE).
