import { CHAT_EXAMPLES } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import FlowPlayer from "@/components/FlowPlayer";
import Reveal from "@/components/Reveal";
import ScreenshotSlot from "@/components/ScreenshotSlot";
import CtaBand from "@/components/CtaBand";

export default function ProcessPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-20 sm:pt-24">
          <SectionHeading
            as="h1"
            eyebrow="How we operate"
            heading="Watch the systems run."
            intro="Four real flows from inside the agency, played step by step, exactly as they happen on a live page. This is the operational depth most agencies keep behind the curtain."
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <FlowPlayer />
      </section>

      <Section alt className="border-t border-line hairline-b">
        <SectionHeading
          eyebrow={CHAT_EXAMPLES.eyebrow}
          heading={CHAT_EXAMPLES.heading}
          intro={CHAT_EXAMPLES.intro}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CHAT_EXAMPLES.shots.map((shot, i) => (
            <Reveal key={shot.file} delay={i * 0.08}>
              <ScreenshotSlot
                file={shot.file}
                label={shot.label}
                aspect="aspect-[4/3]"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
