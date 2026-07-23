import Link from "next/link";
import { BRAND, NAV_LINKS, FINAL_CTA } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <span className="display gold-text text-lg font-semibold tracking-wide">
              {BRAND.wordmark}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {BRAND.tagline}
              {" "}Shared privately with creators we&apos;re in conversation
              with.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={FINAL_CTA.href} className="btn-gold self-start">
            {FINAL_CTA.button}
          </a>
        </div>
        <p className="mt-12 text-xs leading-relaxed text-muted">
          Confidential. This material is provided for the recipient only, so
          please don&apos;t redistribute the link or access code. Revenue
          figures shown in calculators are illustrative models, not guarantees.
        </p>
      </div>
    </footer>
  );
}
