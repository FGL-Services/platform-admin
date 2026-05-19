"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    getSession().then((s) => setLoggedIn(!!s));
  }, []);

  if (loggedIn === null) return <main className="p-8">Loading…</main>;
  if (!loggedIn) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">FGL-Services — Admin</h1>
        <p className="mt-2 text-neutral-600">
          Sign in to continue. {/* TODO: render <LoginButton /> from auth.ts */}
        </p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-neutral-600">TODO: job queue, cost rollup, failures.</p>
    </main>
  );
}
