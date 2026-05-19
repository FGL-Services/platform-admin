// Fetch wrapper for platform-api. Attaches the bearer token from auth.ts
// (once that's implemented).

import { getSession } from "./auth";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.fgl-services.example";

export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export async function api<T>(
  path: string,
  init?: RequestInit,
): Promise<Result<T>> {
  const session = await getSession();
  const headers: Record<string, string> = {
    "content-type": "application/json",
    ...((init?.headers as Record<string, string>) ?? {}),
  };
  // TODO: once auth.ts returns a token, attach it here.
  if (session) headers["x-admin-user"] = session.userId;

  try {
    const res = await fetch(`${BASE_URL}${path}`, { ...init, headers });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    return { ok: true, data: (await res.json()) as T };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
