import Link from "next/link";
import { ULTRAPRO, COMPARE_DIMENSIONS } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import AltyrProPanel from "@/components/AltyrProPanel";
import CompareTable from "@/components/CompareTable";
import CtaBand from "@/components/CtaBand";

export default function SystemsPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            as="h1"
            eyebrow={ULTRAPRO.eyebrow}
            heading={ULTRAPRO.heading}
            intro={ULTRAPRO.intro}
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-sm italic leading-relaxed text-muted">
              {ULTRAPRO.note}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              {COMPARE_DIMENSIONS.map((d, i) => (
                <a
                  key={d.key}
                  href={`#${d.key}`}
                  className="btn-ghost !min-h-11 !px-4 !py-2 text-xs"
                >
                  {String(i + 1).padStart(2, "0")} — {d.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {COMPARE_DIMENSIONS.map((dim, i) => (
        <Section key={dim.key} alt={i % 2 === 1} className="hairline-b">
          <div id={dim.key} className="scroll-mt-24">
            <SectionHeading
              eyebrow={`${String(i + 1).padStart(2, "0")} / 04`}
              heading={dim.title}
              intro={dim.pitch}
            />
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl border-l-2 border-gold-dim pl-4 text-[15px] leading-relaxed text-ink">
                {dim.youGet}
              </p>
            </Reveal>
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-5">
              <Reveal className="min-w-0 lg:col-span-3">
                <CompareTable rows={dim.rows} />
              </Reveal>
              <Reveal delay={0.1} className="min-w-0 lg:col-span-2">
                <AltyrProPanel kind={dim.key} label={dim.screenshot.label} />
              </Reveal>
            </div>
            {dim.receipt && (
              <Reveal delay={0.15}>
                <p className="mt-6 text-sm leading-relaxed text-ink-2">
                  {dim.receipt.text}{" "}
                  <Link
                    href={dim.receipt.href}
                    className="whitespace-nowrap text-gold underline-offset-4 hover:underline"
                  >
                    See the dashboard <span aria-hidden>→</span>
                  </Link>
                </p>
              </Reveal>
            )}
          </div>
        </Section>
      ))}

      <Section>
        <Reveal>
          <p className="mx-auto max-w-xl text-center text-xs italic leading-relaxed text-muted">
            {ULTRAPRO.disclaimer}
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </main>
  );
}
