import path from "node:path";
import { readImageSize } from "@/lib/imageSize";

/**
 * Renders /public/screenshots/<file> at its natural aspect ratio.
 *
 * These are receipts: earnings dashboards run from 1.67 to 2.75 wide, so
 * forcing them into a shared 16:9 box with object-cover sliced the figures
 * off the sides. Intrinsic width/height come off the file header on the
 * server, which keeps the browser reserving the right space (no layout
 * shift) without cropping anything.
 *
 * `aspect` only shapes the empty placeholder frame.
 */
export default function ScreenshotSlot({
  file,
  label,
  className = "",
  aspect = "aspect-[16/9]",
}: {
  file: string;
  label: string;
  className?: string;
  aspect?: string;
}) {
  const size = readImageSize(
    path.join(process.cwd(), "public", "screenshots", file)
  );

  return (
    <figure className={`card overflow-hidden ${className}`}>
      {size ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`/screenshots/${file}`}
          alt={label}
          width={size.width}
          height={size.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      ) : (
        <div
          className={`flex ${aspect} flex-col items-center justify-center gap-3 bg-[radial-gradient(400px_200px_at_50%_40%,rgba(210,172,97,0.06),transparent)] px-6 text-center`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-muted"
            aria-hidden
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="10" r="1.6" />
            <path d="M4 17l5-4 3 2.5L16 12l4 4" />
          </svg>
          <p className="text-sm font-medium text-ink-2">{label}</p>
          <p className="placeholder-chip">
            drop <span className="lowercase">screenshots/{file}</span> into
            /public
          </p>
        </div>
      )}
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
