import { SectionHeading } from "@/components/Section";
import FlowPlayer from "@/components/FlowPlayer";
import CtaBand from "@/components/CtaBand";

export default function ProcessPage() {
  return (
    <main>
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow="How we operate"
            heading="Watch the systems run."
            intro="Four real flows from inside the agency — played step by step, exactly as they happen on a live page. This is the operational depth most agencies keep behind the curtain."
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <FlowPlayer />
      </section>
      <CtaBand />
    </main>
  );
}
