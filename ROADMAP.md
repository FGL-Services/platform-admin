# Roadmap — platform-admin

> This file is the source of truth for this repo's roadmap. `platform-hub` aggregates these into the org-wide view.

## Current focus

Bring up the Next.js skeleton with static export deploying cleanly to GitHub Pages, and decide the OAuth approach.

## Up next

1. Install `firebase` and wire `signInWithPopup` (Google provider) in `src/lib/auth.ts`.
2. Add allowlist verification in `platform-api` for Firebase ID tokens.
3. Job queue view (list + filter by state).
4. Cost rollup view (per service, per day).
5. Failure log view.

## Backlog

- Per-customer spend view.
- Per-job timeline (state transitions, Claude calls, signed URL issuance).
- Reviewer queue for `needs_review` jobs.
- Push to a phone (Pushover/ntfy) on failure.

## Done

- 2026-05-19: Initial scaffold.

## Won't do

- **SSR / Next.js API routes.** Static export only.
- **Multi-user UI (RBAC).** Owner-only for now; revisit if a teammate joins.
