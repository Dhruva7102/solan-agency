import { CALC } from "@/lib/content";
import { SectionHeading } from "@/components/Section";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";

export default function CalculatorPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow={CALC.eyebrow}
            heading={CALC.heading}
            intro={CALC.intro}
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Calculator />
      </section>
      <CtaBand />
    </main>
  );
}
