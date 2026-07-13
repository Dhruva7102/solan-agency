"use client";

import { useEffect, useState } from "react";
import { INTRO_VIDEO } from "@/lib/content";

/**
 * Renders the founder intro video once /media/intro.mp4 exists in /public.
 * Until then, shows a styled placeholder frame. Hidden entirely? No — the
 * placeholder doubles as a reminder of what to record.
 */
export default function VideoSlot() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(`/media/${INTRO_VIDEO.file}`, { method: "HEAD" })
      .then((r) =>
        setAvailable(r.ok && !r.headers.get("content-type")?.includes("text/html"))
      )
      .catch(() => setAvailable(false));
  }, []);

  return (
    <figure className="card overflow-hidden">
      {available ? (
        <video
          controls
          preload="metadata"
          poster={`/media/${INTRO_VIDEO.poster}`}
          className="aspect-video w-full bg-black"
        >
          <source src={`/media/${INTRO_VIDEO.file}`} type="video/mp4" />
        </video>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-[radial-gradient(500px_260px_at_50%_40%,rgba(210,172,97,0.07),transparent)] px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-dim/60 text-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
          {available === false && (
            <p className="placeholder-chip">
              drop <span className="lowercase">media/{INTRO_VIDEO.file}</span> into /public
            </p>
          )}
        </div>
      )}
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {INTRO_VIDEO.caption}
      </figcaption>
    </figure>
  );
}
