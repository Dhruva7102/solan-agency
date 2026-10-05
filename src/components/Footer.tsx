import Link from "next/link";
import { BRAND, NAV_LINKS, FINAL_CTA } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <span className="text-[13px] font-medium tracking-[0.5em] text-gold">{BRAND.wordmark}</span>
            <p className="display mt-4 text-[1.5rem] leading-tight text-ink">{BRAND.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.3em] text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={FINAL_CTA.href} className="btn-gold self-start">
            {FINAL_CTA.button}
          </a>
        </div>
        <p className="mt-12 border-t border-line pt-6 text-[12.5px] leading-relaxed text-muted">
          Revenue figures shown in the calculator are illustrative models, not guarantees.
        </p>
      </div>
    </footer>
  );
}
