# platform-admin

> Internal ops dashboard for the FGL-Services owner. Next.js + TypeScript + Tailwind, static export to GitHub Pages, OAuth-gated.

[![Status](https://img.shields.io/badge/status-scaffolding-yellow)]()

Part of the [FGL-Services](https://github.com/FGL-Services) platform. Engineering hub: [platform-hub](https://github.com/FGL-Services/platform-hub).

## What this repo does

The owner's view of the platform. Surfaces what `platform-web` and the pipelines hide:

- Job queue (everything in flight, with state).
- Cost per job and margin per service (from `claudelog` BQ rollups via `platform-api`).
- Failures and retries.
- Customer list and per-customer spend.

Source is public. **UI is gated by OAuth.** The deployed app shows nothing useful without a valid login. Initially the owner is the only authorized user; expand via an allowlist on the API side.

## What this repo does NOT do

- No write paths beyond what `platform-api` already exposes — this is mostly a viewer.
- No backend secrets. Everything in this repo is public source. Secrets (OAuth client secret, etc.) live in `platform-api` or whatever auth bridge ends up running.
- No customer-facing flows — that's `platform-web`.

## Tech stack

- Next.js 15+ (App Router) with `output: 'export'`
- React 19, TypeScript, Tailwind CSS, ESLint
- Auth: **Firebase Authentication** (Google provider). Static-export-friendly. `platform-api` verifies Firebase ID tokens and enforces an allowlist.
- Deployed to GitHub Pages from `gh-pages`.

## Local development

```sh
npm install
npm run dev
# http://localhost:3000
# Set NEXT_PUBLIC_API_BASE_URL and NEXT_PUBLIC_OAUTH_CLIENT_ID in .env.local
```

## Deployment

GitHub Actions builds and deploys to `gh-pages` on push to `main`. Pages must be enabled in repo settings.

## Related repos

- [platform-api](https://github.com/FGL-Services/platform-api) — the read APIs this dashboard hits, and the allowlist enforcement.
- [platform-web](https://github.com/FGL-Services/platform-web) — sibling app.

## Roadmap

- This repo: [ROADMAP.md](./ROADMAP.md)
- Org-wide: <https://fgl-services.github.io/platform-hub/roadmap/>
