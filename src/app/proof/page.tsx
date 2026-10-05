import { RESULTS, CHAT_EXAMPLES } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import ScreenshotSlot from "@/components/ScreenshotSlot";
import CtaBand from "@/components/CtaBand";
import Testimonials from "@/components/Testimonials";

export default function ProofPage() {
  const [statFigure, ...statRest] = RESULTS.churn.stat.split(" ");

  return (
    <main>
      <section className="relative isolate -mt-16 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-44">
          <SectionHeading as="h1" heading={RESULTS.heading} intro={RESULTS.intro} />

          {/* Retention first: the number that says models stay */}
          <div className="glass mt-12 grid gap-8 p-6 sm:p-9 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="numeral gold-text text-[5rem] sm:text-[6.5rem]">{statFigure}</p>
              <p className="display text-[1.8rem] leading-tight text-ink">{statRest.join(" ")}</p>
              <p className="mt-4 text-[14px] font-medium text-gold-bright">{RESULTS.churn.figures}</p>
            </div>
            <p className="text-[17px] leading-[1.7] text-ink-2">{RESULTS.churn.desc}</p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <Section alt className="border-y border-line">
        <SectionHeading
          heading="Three trajectories, anonymized."
          intro="Real pages from the founding team's current books, names removed, dashboards below. Every figure here is defensible on your call."
        />
        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {RESULTS.caseStudies.map((cs) => (
            <article key={cs.title} className="card flex h-full flex-col p-6 sm:p-7">
              <span className="self-start rounded-full bg-gold/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-bright">
                {cs.tag}
              </span>
              <h3 className="mt-5 text-[17px] font-semibold leading-snug text-ink">{cs.title}</h3>
              <dl className="list my-6 border-y border-line">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Before</dt>
                  <dd className="numeral whitespace-nowrap text-[1.7rem] text-ink-2">{cs.before}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">After · {cs.timeframe}</dt>
                  <dd className="numeral gold-text whitespace-nowrap text-right text-[1.9rem] sm:text-[2.2rem]">{cs.after}</dd>
                </div>
              </dl>
              <p className="text-[15px] leading-relaxed text-ink-2">{cs.story}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Earnings screenshots */}
      <Section>
        <SectionHeading heading="Real dashboards, names removed." />
        <div className="mt-12 grid items-start gap-x-4 gap-y-8 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {RESULTS.screenshots.map((shot) => (
            <ScreenshotSlot key={shot.file} file={shot.file} label={shot.label} />
          ))}
        </div>
      </Section>

      {/* Chat receipts: how the money actually lands */}
      <Section alt className="border-y border-line">
        <SectionHeading heading={CHAT_EXAMPLES.heading} intro={CHAT_EXAMPLES.intro} />
        <div className="mt-12 grid items-start gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHAT_EXAMPLES.shots.map((shot) => (
            <ScreenshotSlot key={shot.file} file={shot.file} label={shot.label} aspect="aspect-[9/16]" />
          ))}
        </div>
      </Section>

      {/* Partner authority reprise */}
      <Section>
        <p className="display mx-auto max-w-3xl text-center text-[clamp(1.9rem,3.6vw,3rem)] leading-tight text-ink">
          The track records behind these numbers are shared, <span className="text-gold-bright">with names</span>, on your call.
        </p>
      </Section>

      <Testimonials />

      <CtaBand expect />
    </main>
  );
}
