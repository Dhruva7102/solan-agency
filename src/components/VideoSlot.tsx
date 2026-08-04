import fs from "node:fs";
import path from "node:path";
import { INTRO_VIDEO } from "@/lib/content";

const mediaDir = path.join(process.cwd(), "public", "media");

/**
 * True once /public/media/intro.mp4 exists. The home page calls this to
 * decide whether the whole intro section renders at all — while there is
 * no video, a creator sees no gap and no "coming soon" frame. Drop the
 * file in and the section comes back on its own.
 */
export function hasIntroVideo() {
  return fs.existsSync(path.join(mediaDir, INTRO_VIDEO.file));
}

export default function VideoSlot() {
  const hasPoster = fs.existsSync(path.join(mediaDir, INTRO_VIDEO.poster));

  return (
    <figure className="card overflow-hidden">
      <video
        controls
        preload="metadata"
        poster={hasPoster ? `/media/${INTRO_VIDEO.poster}` : undefined}
        className="aspect-video w-full bg-black"
      >
        <source src={`/media/${INTRO_VIDEO.file}`} type="video/mp4" />
      </video>
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {INTRO_VIDEO.caption}
      </figcaption>
    </figure>
  );
}
