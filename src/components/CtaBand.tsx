import { FINAL_CTA, CALL_EXPECT } from "@/lib/content";
import Reveal from "./Reveal";

/** `expect` shows the "what happens on the call" steps: use it on the pages
 *  where a creator is closest to booking, not on every page. */
export default function CtaBand({ expect = false }: { expect?: boolean }) {
  return (
    <section className="border-t border-line">
      {expect && (
        <div className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
          <Reveal>
            <p className="eyebrow mb-3 text-center">{CALL_EXPECT.eyebrow}</p>
            <h2 className="display mx-auto max-w-xl text-center text-2xl leading-tight tracking-tight sm:text-3xl">
              {CALL_EXPECT.heading}
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CALL_EXPECT.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07} className="h-full">
                <li className="card lift h-full p-6">
                  <span className="display gold-text text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[15px] font-semibold leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    {step.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      )}
      <div className="hero-glow mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="display mx-auto max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl">
            {FINAL_CTA.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
            {FINAL_CTA.body}
          </p>
          <a href={FINAL_CTA.href} className="btn-gold mt-8">
            {FINAL_CTA.button}
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
