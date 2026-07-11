import { ULTRAPRO, COMPARE_DIMENSIONS } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ScreenshotSlot from "@/components/ScreenshotSlot";
import CompareTable from "@/components/CompareTable";
import CtaBand from "@/components/CtaBand";

export default function SystemsPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow={ULTRAPRO.eyebrow}
            heading={ULTRAPRO.heading}
            intro={ULTRAPRO.intro}
          />
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              {COMPARE_DIMENSIONS.map((d, i) => (
                <a
                  key={d.key}
                  href={`#${d.key}`}
                  className="btn-ghost !px-4 !py-2 text-xs"
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
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-5">
              <Reveal className="lg:col-span-3">
                <CompareTable rows={dim.rows} />
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-2">
                <ScreenshotSlot file={dim.screenshot.file} label={dim.screenshot.label} />
              </Reveal>
            </div>
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
