/* The ribbon: one gold silk ribbon that drifts across the first screen and
   passes behind the receipts. Place it inside the notification stack's
   wrapper; it spans the viewport from there and sits behind every solid
   surface. Its route never crosses type: on the sides it stays below the
   headline, and in the middle it runs behind the cards. */

const SHEEN = [
  ["0", "#6f5d3e"],
  [".14", "#d9c193"],
  [".24", "#8a7550"],
  [".42", "#ecdcb8"],
  [".58", "#9c8458"],
  [".74", "#e2cfa6"],
  [".86", "#8a7550"],
  ["1", "#d4bb8c"],
] as const;

function Sheen({ id, width }: { id: string; width: number }) {
  return (
    <defs>
      <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={width} y2="0">
        {SHEEN.map(([offset, color]) => (
          <stop key={offset} offset={offset} stopColor={color} />
        ))}
      </linearGradient>
    </defs>
  );
}

export default function Silk() {
  return (
    <>
      {/* From sm up: a long, shallow drape from edge to edge */}
      <svg
        aria-hidden
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-1/2 top-[-170px] -z-[5] hidden h-[520px] w-screen -translate-x-1/2 drop-shadow-[0_12px_14px_rgba(0,0,0,0.5)] sm:block"
      >
        <Sheen id="silk-wide" width={1440} />
        <path
          className="silk-path"
          pathLength={1}
          d="M-20 70 C 160 90, 260 240, 400 290 S 600 336, 720 336 S 960 326, 1060 288 S 1290 100, 1460 70"
          fill="none"
          stroke="url(#silk-wide)"
          strokeWidth="18"
          opacity="0.66"
        />
        <path
          className="silk-path"
          pathLength={1}
          d="M-20 63 C 160 83, 260 233, 400 283 S 600 329, 720 329 S 960 319, 1060 281 S 1290 93, 1460 63"
          fill="none"
          stroke="rgba(255,248,228,0.22)"
          strokeWidth="1.2"
        />
      </svg>

      {/* Phones: a short run through the gap above the stack, then behind it */}
      <svg
        aria-hidden
        viewBox="0 0 390 420"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-1/2 top-[-56px] -z-[5] h-[420px] w-screen -translate-x-1/2 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] sm:hidden"
      >
        <Sheen id="silk-narrow" width={390} />
        <path
          className="silk-path"
          pathLength={1}
          d="M-10 30 C 90 24, 190 38, 270 88 S 370 230, 400 300"
          fill="none"
          stroke="url(#silk-narrow)"
          strokeWidth="12"
          opacity="0.66"
        />
      </svg>
    </>
  );
}
