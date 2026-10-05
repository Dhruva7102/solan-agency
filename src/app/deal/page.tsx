import { DEAL_PAGE, SERVICES, NO_CAGE, CALC } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import TierCard, { type Tier } from "@/components/TierCard";
import StandardDeal from "@/components/StandardDeal";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";
import { GoldCheck } from "@/components/Phone";

export default function DealPage() {
  return (
    <main>
      <section className="relative isolate -mt-16 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-44">
          <SectionHeading as="h1" heading={DEAL_PAGE.heading} intro={DEAL_PAGE.intro} />
          <div className="mt-12 max-w-4xl">
            <StandardDeal />
          </div>
        </div>
      </section>

      {/* The tiers */}
      <Section alt className="border-y border-line">
        <SectionHeading heading={SERVICES.heading} intro={SERVICES.intro} />
        <div className="mt-12 grid items-stretch gap-3 lg:grid-cols-3">
          {SERVICES.tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier as Tier} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-muted">{SERVICES.footnote}</p>
      </Section>

      {/* The contract, in plain English */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-xl text-ink">{DEAL_PAGE.contractHeading}</h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-ink-2">{DEAL_PAGE.contractIntro}</p>
            <div className="glass mt-8 p-5">
              <p className="numeral gold-text text-[3.6rem]">92%+</p>
              <p className="mt-2 text-[14px] leading-snug text-ink/80">{NO_CAGE.retention}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="card list overflow-hidden">
              {NO_CAGE.promises.map((p) => (
                <li key={p} className="flex items-start gap-3.5 px-5 py-4 text-[15.5px] leading-relaxed text-ink">
                  <GoldCheck />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Calculator */}
      <Section alt id="calculator" className="scroll-mt-16 border-y border-line">
        <SectionHeading heading={CALC.heading} intro={CALC.intro} />
        <div className="mt-12">
          <Calculator />
        </div>
      </Section>

      <CtaBand expect />
    </main>
  );
}
