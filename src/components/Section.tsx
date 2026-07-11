import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  children,
  className = "",
  alt = false,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section className={`${alt ? "bg-bg-2" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  center = false,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
        {heading}
      </h2>
      {intro && (
        <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{intro}</p>
      )}
    </Reveal>
  );
}
