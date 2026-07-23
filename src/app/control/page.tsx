import Link from "next/link";
import { CONTROL } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export default function ControlPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            as="h1"
            eyebrow={CONTROL.eyebrow}
            heading={CONTROL.heading}
            intro={CONTROL.intro}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CONTROL.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.07} className="h-full">
              <div className="card group h-full p-7 transition-colors hover:border-gold-dim">
                <span className="display gold-text text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-lg leading-snug text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt className="border-t border-line hairline-b">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">The test</p>
            <p className="display text-2xl leading-snug text-ink sm:text-3xl">
              Ask any other agency for live dashboard access, your chat logs,
              and a no-lock-in contract.{" "}
              <span className="gold-text">Then ask us.</span>
            </p>
            <p className="mt-6 text-sm text-ink-2">
              See exactly how the transparency works in{" "}
              <Link href="/systems" className="text-gold hover:text-gold-bright">
                the backend
              </Link>{" "}
              or watch{" "}
              <Link href="/process" className="text-gold hover:text-gold-bright">
                how escalations reach you
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </main>
  );
}
