import {
  DEAL_PAGE,
  SERVICES,
  NO_CAGE,
  CALC,
} from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TierCard, { type Tier } from "@/components/TierCard";
import StandardDeal from "@/components/StandardDeal";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";

export default function DealPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            as="h1"
            eyebrow={DEAL_PAGE.eyebrow}
            heading={DEAL_PAGE.heading}
            intro={DEAL_PAGE.intro}
          />
        </div>
      </section>

      {/* Them vs us */}
      <Section>
        <Reveal>
          <StandardDeal />
        </Reveal>
      </Section>

      {/* The tiers */}
      <Section alt className="border-t border-line hairline-b">
        <SectionHeading
          eyebrow={SERVICES.eyebrow}
          heading={SERVICES.heading}
          intro={SERVICES.intro}
        />
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {SERVICES.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="h-full">
              <TierCard tier={tier as Tier} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
            {SERVICES.footnote}
          </p>
        </Reveal>
      </Section>

      {/* The contract, in plain English */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">The exits</p>
            <h2 className="display-xl text-ink">{DEAL_PAGE.contractHeading}</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-2">
              {DEAL_PAGE.contractIntro}
            </p>
            <p className="display gold-text mt-8 text-xl leading-snug">
              {NO_CAGE.retention}
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ul className="card divide-y divide-line p-2">
                {NO_CAGE.promises.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 px-5 py-4 text-[14.5px] leading-relaxed text-ink-2"
                  >
                    <span className="gold-text mt-0.5" aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Calculator */}
      <Section alt id="calculator" className="scroll-mt-20 border-t border-line hairline-b">
        <SectionHeading
          eyebrow={CALC.eyebrow}
          heading={CALC.heading}
          intro={CALC.intro}
        />
        <div className="mt-12">
          <Calculator />
        </div>
      </Section>

      <CtaBand expect />
    </main>
  );
}
