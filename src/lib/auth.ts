// Auth: Firebase Authentication.
//
// The owner already runs Firebase, so we lean on Firebase Auth for the admin
// gate. Static-export-friendly (Firebase JS SDK runs entirely in the browser).
//
// Flow:
//   1. User hits the app. getSession() asks Firebase for the current user.
//   2. If unauthenticated, render <LoginButton /> which calls login() →
//      signInWithPopup (Google provider).
//   3. After login, getIdToken() is attached as a Bearer token on every
//      platform-api call (see ./api.ts).
//   4. platform-api verifies the Firebase ID token server-side and checks the
//      caller's UID/email against an allowlist (owner-only at first).
//
// Env vars (NEXT_PUBLIC_ prefix — values are not secrets; the security
// boundary is the allowlist enforced by platform-api):
//   NEXT_PUBLIC_FIREBASE_API_KEY
//   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
//   NEXT_PUBLIC_FIREBASE_PROJECT_ID
//
// TODO: install `firebase` and replace the stubs below.

export type Session = { uid: string; email: string | null; idToken: string };

export async function getSession(): Promise<Session | null> {
  // TODO: import { getAuth, onAuthStateChanged } from "firebase/auth"; await idToken.
  return null;
}

export async function login(): Promise<never> {
  // TODO: signInWithPopup(getAuth(), new GoogleAuthProvider()).
  throw new Error("auth not yet implemented — see src/lib/auth.ts");
}

export async function logout(): Promise<void> {
  // TODO: signOut(getAuth()).
}
