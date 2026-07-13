"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex shrink-0 items-baseline gap-2 py-4">
          <span className="display gold-text text-lg font-semibold tracking-wide">
            {BRAND.wordmark}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted sm:inline">
            agency
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="-mb-px flex items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [mask-image:linear-gradient(90deg,#000_92%,transparent)] sm:[mask-image:none] [&::-webkit-scrollbar]:hidden"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 px-3 py-4 text-[13px] transition-colors ${
                  active
                    ? "border-gold text-ink"
                    : "border-transparent text-ink-2 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
