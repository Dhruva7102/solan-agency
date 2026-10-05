import type { ReactNode } from "react";

/**
 * Formerly a scroll-triggered fade on every block. The site now spends its
 * motion once, on the lock screen waking and the notifications arriving, so
 * this renders its children as they are: visible by default, in every
 * capture, with or without script. `delay` is kept so call sites need not
 * change.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
