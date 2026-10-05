"use client";

import { useEffect, useState } from "react";

/** The lock screen's date line: today, in the visitor's own calendar. It
 *  renders after mount so the prerendered page never carries a stale date;
 *  until then it holds its line height. */
export default function LockDate({ className = "" }: { className?: string }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }));
  }, []);
  return (
    <p className={className} aria-hidden>
      {text || " "}
    </p>
  );
}
