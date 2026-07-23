import { RESULTS, FOUNDER_AUTHORITY } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ScreenshotSlot from "@/components/ScreenshotSlot";
import CtaBand from "@/components/CtaBand";

export default function ResultsPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow={RESULTS.eyebrow}
            heading={RESULTS.heading}
            intro={RESULTS.intro}
          />
        </div>
      </section>

      {/* Churn hero */}
      <Section>
        <Reveal>
          <div className="card-raised grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="display gold-text text-4xl leading-tight sm:text-5xl">
                {RESULTS.churn.stat}
              </p>
              <p className="placeholder-chip mt-4">{RESULTS.churn.placeholderNote}</p>
            </div>
            <p className="text-[15px] leading-relaxed text-ink-2">
              {RESULTS.churn.desc}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Case studies */}
      <Section alt className="border-t border-line hairline-b">
        <SectionHeading
          eyebrow="Case studies"
          heading="Three trajectories, anonymized."
          intro="Real pages from the founding team's current books, names removed, dashboards below. Every figure here is defensible on your call."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {RESULTS.caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 0.08} className="h-full">
              <div className="card flex h-full flex-col p-7">
                <p className="eyebrow self-start rounded-full border border-gold-dim/50 px-3 py-1 !text-[10px]">
                  {cs.tag}
                </p>
                <h3 className="display mt-4 text-lg text-ink">{cs.title}</h3>
                <div className="my-6 flex items-center gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted">
                      Before
                    </p>
                    <p className="display mt-1 text-xl text-ink-2">{cs.before}</p>
                  </div>
                  <span className="text-gold" aria-hidden>
                    →
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted">
                      After · {cs.timeframe}
                    </p>
                    <p className="display gold-text mt-1 text-xl">{cs.after}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">{cs.story}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Earnings screenshots */}
      <Section>
        <SectionHeading
          eyebrow="Receipts"
          heading="Real dashboards, names removed."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {RESULTS.screenshots.map((shot, i) => (
            <Reveal key={shot.file} delay={i * 0.08}>
              <ScreenshotSlot file={shot.file} label={shot.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partner authority reprise */}
      <Section alt className="border-t border-line hairline-b">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{FOUNDER_AUTHORITY.eyebrow}</p>
            <p className="display text-2xl leading-snug text-ink sm:text-3xl">
              The track records behind these numbers are shared,{" "}
              <span className="gold-text">with names</span>, on your call.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </main>
  );
}
