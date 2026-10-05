import Link from "next/link";
import { BRAND, FINAL_CTA, CALL_EXPECT } from "@/lib/content";
import { AppIcon } from "./Phone";

/** The close. `expect` adds the "what happens on the call" steps, set as the
 *  call's calendar entry: use it where a creator is closest to booking. The
 *  booking itself is an incoming call from Astor. */
export default function CtaBand({ expect = false }: { expect?: boolean }) {
  return (
    <section className="border-t border-line">
      {expect && (
        <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-6 sm:pt-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <h2 className="display-xl text-ink lg:col-span-5">{CALL_EXPECT.heading}</h2>
            <div className="card overflow-hidden lg:col-span-7">
              <div className="flex items-center gap-4 border-b border-line px-5 py-4 sm:px-6">
                <span className="flex w-11 flex-col items-center rounded-xl bg-surface-2 py-1.5 ring-1 ring-line" aria-hidden>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#e2665a]">Call</span>
                  <span className="display text-[1.4rem] leading-none text-ink">30</span>
                </span>
                <span>
                  <span className="block text-[16px] font-semibold text-ink">Intro call with a founder</span>
                  <span className="block text-[13px] text-muted">30 minutes · video or not</span>
                </span>
              </div>
              <ol className="list">
                {CALL_EXPECT.steps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-x-3 px-5 py-4 sm:px-6">
                    <span className="numeral pt-0.5 text-[1.6rem] text-gold">{i + 1}</span>
                    <span>
                      <span className="block text-[15.5px] font-semibold leading-snug text-ink">{step.title}</span>
                      <span className="mt-1 block text-[14.5px] leading-relaxed text-ink-2">{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Incoming call */}
      <div className="relative isolate mt-24 overflow-hidden sm:mt-32">
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-28">
          <span className="relative grid place-items-center">
            <span className="absolute h-28 w-28 rounded-full border border-gold-dim/40" aria-hidden />
            <AppIcon app="astor" size={88} />
          </span>
          <h2 className="display-xl mt-8 text-ink">{FINAL_CTA.heading}</h2>
          <p className="mt-3 text-[14px] text-muted">{BRAND.name} · Intro call, 30 minutes</p>
          <p className="mx-auto mt-5 max-w-md text-[17px] leading-[1.65] text-ink-2">{FINAL_CTA.body}</p>
          <div className="mt-12 flex items-start justify-center gap-14 sm:gap-20">
            <Link href="/proof" className="group flex flex-col items-center gap-3">
              <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-line-strong text-ink transition-colors group-hover:border-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-6" />
                </svg>
              </span>
              <span className="text-[13px] text-ink-2">See the proof</span>
            </Link>
            <a href={FINAL_CTA.href} className="group flex flex-col items-center gap-3">
              <span className="grid h-[68px] w-[68px] place-items-center rounded-full bg-gold text-gold-ink transition-colors duration-300 group-hover:bg-gold-bright">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                </svg>
              </span>
              <span className="text-[13px] font-medium text-gold-bright">{FINAL_CTA.button}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
