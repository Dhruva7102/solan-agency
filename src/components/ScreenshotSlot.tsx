"use client";

import { useState } from "react";

/**
 * Renders /screenshots/<file> once it exists in /public/screenshots.
 * Until the real screenshot is dropped in, shows a styled placeholder
 * frame telling you exactly which file to add.
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
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`card overflow-hidden ${className}`}>
      <div className="relative">
        {/* Probe: invisible until it actually loads */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/screenshots/${file}`}
          alt={label}
          onLoad={() => setLoaded(true)}
          className={
            loaded
              ? `${aspect} w-full object-cover object-top`
              : "absolute h-0 w-0 opacity-0"
          }
        />
        {!loaded && (
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
              drop <span className="lowercase">screenshots/{file}</span> into /public
            </p>
          </div>
        )}
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
