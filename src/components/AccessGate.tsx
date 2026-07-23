"use client";

import { useActionState } from "react";
import { unlock, type UnlockState } from "@/lib/access";
import { BRAND } from "@/lib/content";

export default function AccessGate() {
  const [state, action, pending] = useActionState<UnlockState, FormData>(
    unlock,
    {}
  );

  return (
    <main className="hero-glow flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <p className="eyebrow mb-6">Private — by invitation</p>
        <h1 className="display text-5xl tracking-tight sm:text-6xl">
          <span className="gold-text">{BRAND.wordmark}</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          {BRAND.tagline}
          {" "}This site is shared personally with creators we&apos;re in
          conversation with.
        </p>

        <form action={action} className="mt-10">
          <div className="card flex items-center gap-2 p-2 focus-within:border-gold-dim">
            <input
              type="password"
              name="code"
              required
              autoFocus
              aria-label="Access code"
              placeholder="Access code"
              autoComplete="off"
              className="w-full bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-none"
            />
            <button
              type="submit"
              disabled={pending}
              className="btn-gold shrink-0 !px-5 !py-2.5 text-sm disabled:opacity-60"
            >
              {pending ? "Checking…" : "Enter"}
            </button>
          </div>
          {state.error && (
            <p className="mt-4 text-sm text-[#e66767]">{state.error}</p>
          )}
        </form>

        <p className="mt-12 text-xs text-muted">
          Don&apos;t have a code? It comes with your intro call.
        </p>
      </div>
    </main>
  );
}
