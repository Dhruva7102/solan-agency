import fs from "node:fs";
import path from "node:path";
import { INTRO_VIDEO } from "@/lib/content";

/**
 * Renders the founder intro video once /public/media/intro.mp4 exists.
 * The check runs on the server at render time, so no request is made (and
 * no 404 logged) while the file is still missing. Until then the frame
 * doubles as a reminder of what's left to record.
 */
export default function VideoSlot() {
  const mediaDir = path.join(process.cwd(), "public", "media");
  const available = fs.existsSync(path.join(mediaDir, INTRO_VIDEO.file));
  const hasPoster =
    available && fs.existsSync(path.join(mediaDir, INTRO_VIDEO.poster));

  return (
    <figure className="card overflow-hidden">
      {available ? (
        <video
          controls
          preload="metadata"
          poster={hasPoster ? `/media/${INTRO_VIDEO.poster}` : undefined}
          className="aspect-video w-full bg-black"
        >
          <source src={`/media/${INTRO_VIDEO.file}`} type="video/mp4" />
        </video>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-[radial-gradient(500px_260px_at_50%_40%,rgba(210,172,97,0.07),transparent)] px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-dim/60 text-gold">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
          <p className="placeholder-chip">
            drop <span className="lowercase">media/{INTRO_VIDEO.file}</span>{" "}
            into /public
          </p>
        </div>
      )}
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {INTRO_VIDEO.caption}
      </figcaption>
    </figure>
  );
}
