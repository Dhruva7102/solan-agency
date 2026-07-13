import { SERVICES, FAQ } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export default function ServicesPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow={SERVICES.eyebrow}
            heading={SERVICES.heading}
            intro={SERVICES.intro}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.07} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  tier.featured
                    ? "border-gold-dim bg-[linear-gradient(180deg,rgba(210,172,97,0.08),rgba(18,18,26,0.4))]"
                    : "card"
                }`}
              >
                {tier.featured && (
                  <p className="eyebrow mb-4 !text-[10px]">Most common start</p>
                )}
                <h3 className="display text-xl text-ink">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="display gold-text text-4xl">{tier.rate}</span>
                  <span className="text-xs text-muted">{tier.rateNote}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  {tier.blurb}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] leading-snug text-ink-2">
                      <span className="mt-0.5 text-gold" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
            {SERVICES.footnote}
          </p>
        </Reveal>
      </Section>

      <Section alt className="border-t border-line hairline-b">
        <SectionHeading eyebrow={FAQ.eyebrow} heading={FAQ.heading} />
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {FAQ.items.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 0.06}>
              <details className="card group px-6 py-1 open:border-gold-dim/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-line pb-5 pt-4 text-sm leading-relaxed text-ink-2">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
