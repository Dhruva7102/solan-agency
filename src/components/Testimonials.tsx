import { TESTIMONIALS } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Testimonials() {
  // Only real, permissioned quotes render. While every item is still marked
  // `sample`, the whole section stays off the page — a creator never sees
  // words no model actually said.
  const real = TESTIMONIALS.items.filter((item) => !item.sample && item.quote);
  if (real.length === 0) return null;

  return (
    <Section alt className="border-t border-line hairline-b">
      <SectionHeading
        eyebrow={TESTIMONIALS.eyebrow}
        heading={TESTIMONIALS.heading}
        intro={TESTIMONIALS.intro}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {real.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} className="h-full">
            <figure className="card lift flex h-full flex-col justify-between p-7">
              {item.quote ? (
                <>
                  <blockquote className="text-[15px] leading-relaxed text-ink">
                    <span className="display gold-text mr-1 text-2xl leading-none">
                      &ldquo;
                    </span>
                    {item.quote}
                  </blockquote>
                  {item.attribution && (
                    <figcaption className="mt-6 border-t border-line pt-4 text-xs text-muted">
                      {item.attribution}
                    </figcaption>
                  )}
                </>
              ) : (
                <div className="flex min-h-40 flex-col items-center justify-center gap-3 text-center">
                  <span className="display gold-text text-3xl leading-none" aria-hidden>
                    &ldquo;
                  </span>
                  <p className="placeholder-chip">
                    awaiting a real quote from a model on the team
                  </p>
                </div>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
