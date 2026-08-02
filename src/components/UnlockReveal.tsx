"use client";

import { useEffect, useState } from "react";

export const UNLOCK_FLAG = "astor:just-unlocked";

/**
 * Plays a one-time gold reveal the first time the site renders after the
 * access gate is cleared, so entering the code feels like a door opening.
 * The flag is set by the gate on submit and consumed here.
 */
export default function UnlockReveal() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let flagged = false;
    try {
      flagged = sessionStorage.getItem(UNLOCK_FLAG) === "1";
      if (flagged) sessionStorage.removeItem(UNLOCK_FLAG);
    } catch {
      return;
    }
    if (!flagged) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setPlaying(true);
    const t = setTimeout(() => setPlaying(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!playing) return null;

  return (
    <div aria-hidden>
      <div className="unlock-veil" />
      <div className="unlock-line" />
    </div>
  );
}
