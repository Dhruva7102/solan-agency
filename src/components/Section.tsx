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
  as: Tag = "h2",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow mb-5 ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <Tag className="display-xl text-ink">{heading}</Tag>
      {intro && (
        <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{intro}</p>
      )}
    </Reveal>
  );
}
