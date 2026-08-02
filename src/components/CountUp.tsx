"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts the numbers inside a display string up from zero when it scrolls
 * into view, preserving everything around them ("$0 → $37.3k", "+119%").
 * Reduced-motion users get the final value immediately.
 */
export default function CountUp({
  value,
  duration = 1.4,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setProgress(1);
      return;
    }
    let frame = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = (t - start) / 1000;
      const p = Math.min(elapsed / duration, 1);
      // ease-out cubic: fast off the line, settles on the number
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, duration]);

  // Split into number / non-number chunks so symbols and words survive.
  const rendered = value.replace(/\d+(\.\d+)?/g, (match) => {
    const target = parseFloat(match);
    const decimals = match.includes(".") ? match.split(".")[1].length : 0;
    const current = target * progress;
    return current.toFixed(decimals);
  });

  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  );
}
