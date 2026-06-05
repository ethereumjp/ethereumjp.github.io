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

Deployment is automated via GitHub Actions ([`.github/workflows/publish.yml`](.github/workflows/publish.yml)) to GitHub Pages.

- **CI**: every push to any branch runs type check, lint, and build.
- **Deploy**: only pushes to `main` upload the artifact and publish to Pages.
- **Manual**: trigger via the Actions tab (`Run workflow`) or `gh workflow run publish.yml --ref main`.

### Setup

1. In repo **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
2. Add the build-time secrets under **Settings → Secrets and variables → Actions** (see [`.env.example`](.env.example)):
   - `VITE_AIRTABLE_NEWSLETTER_PAT` / `_BASE` / `_TABLE`
   - `AIRTABLE_EVENTCURATE_PAT` / `_BASE` / `_TABLE`

> Note: `VITE_`-prefixed vars are inlined into the client bundle and are publicly visible by design.

## License

[MIT](LICENSE).
