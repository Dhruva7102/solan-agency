import { FINAL_CTA } from "@/lib/content";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="border-t border-line">
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
