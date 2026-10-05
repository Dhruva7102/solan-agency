"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS, FINAL_CTA } from "@/lib/content";

/**
 * The status bar. Clear at the top of a page, a dimmed bar once the page
 * scrolls under it.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const frosted = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        frosted
          ? "border-b border-line bg-bg/95"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link href="/" className="flex min-h-11 shrink-0 items-baseline gap-3" aria-label={`${BRAND.name} home`}>
          <span className="text-[14px] font-medium tracking-[0.34em] text-ink">{BRAND.wordmark}</span>
          <span className="hidden text-[12px] text-muted sm:inline">
            Management
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-11 items-center text-[14px] transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span aria-hidden className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
          <a
            href={FINAL_CTA.href}
            className="flex min-h-10 items-center rounded-full border border-line-strong px-4 text-[14px] font-medium text-ink transition-colors hover:border-gold"
          >
            {FINAL_CTA.button}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={FINAL_CTA.href}
            className="flex min-h-10 items-center rounded-full border border-line-strong px-4 text-[14px] font-medium text-ink"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M5 9h14" />
                  <path d="M5 15h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="md:hidden">
          <div className="mx-auto max-w-6xl px-5 pb-5">
            <div className="glass list overflow-hidden">
              {/* The wordmark is the only other way home, and on a phone it
                  doesn't read as a button, so the menu says it outright. */}
              {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-14 items-center justify-between px-5 text-[17px] text-ink"
                  >
                    {link.label}
                    {active ? (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                    ) : (
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-muted" aria-hidden>
                        <path d="M1 1l6 6-6 6" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
