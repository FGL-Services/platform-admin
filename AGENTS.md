# AGENTS.md — platform-admin

## Purpose

The owner's internal ops dashboard for FGL-Services. Read-heavy view of job state, cost, margin, and failures. Source is public; UI is OAuth-gated so the deployed app is useless without a login.

## Where this fits in the bigger picture

Request flow: `platform-web` → `platform-api` → pipelines → GCS. `platform-admin` reads from `platform-api` to surface operational state to the owner. It does not participate in the runtime request flow.

## Tech stack and key dependencies

- Next.js 15+ App Router with `output: 'export'`
- React 19, TypeScript, Tailwind CSS, ESLint
- Firebase Authentication (Google provider) via the `firebase` JS SDK.

## Conventions

- **Folder structure:**
  - `src/app/` — pages (route per dashboard view).
  - `src/components/` — reusable components.
  - `src/lib/api.ts` — fetch wrapper for `platform-api`. Attaches bearer token if logged in.
  - `src/lib/auth.ts` — OAuth flow; the only file allowed to touch token state.
- **Naming:** kebab-case files, PascalCase exports.
- **Testing:** TODO.
- **Error handling:** Result-style returns from `api.ts`. Render an error banner; never throw in render.
- **Logging/observability:** none. If we add one, must respect that this is an internal dashboard — no third-party trackers.

## What to read first

1. `README.md`
2. `src/lib/auth.ts` (the gating decision)
3. `src/lib/api.ts`
4. `src/app/page.tsx`
5. `.github/workflows/deploy.yml`

## Roadmap location

- This repo: [ROADMAP.md](./ROADMAP.md)
- Aggregated view: <https://fgl-services.github.io/platform-hub/roadmap/>

## Out of scope

- Customer-facing flows.
- Write paths for billing or job mutation beyond what `platform-api` exposes.
- Direct database, Pub/Sub, or BQ access from the browser.

## Cost discipline

This app's biggest cost lever is **how aggressively it queries `platform-api`** — particularly the BQ-backed cost-rollup endpoints. Cache aggressively in the client; debounce live-refresh; don't auto-poll faster than every 30s.
