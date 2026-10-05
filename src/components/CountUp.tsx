/**
 * Renders a display figure ("$0 → $37.3k", "+119%"). It used to count up
 * from zero on scroll, which meant every figure read "$0" until it was in
 * view, in captures and without script. The site's motion now lives in the
 * lock screen waking, so figures render as themselves. The props are kept so
 * call sites need not change.
 */
export default function CountUp({
  value,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  return <span className={className}>{value}</span>;
}
