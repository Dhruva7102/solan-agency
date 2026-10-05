import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${alt ? "bg-bg-2" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">{children}</div>
    </section>
  );
}

/**
 * A screen's large title. The title carries its own weight: the old
 * eyebrow label above it is gone (`eyebrow` is still accepted so content
 * objects need not change, and is used as the accessible description).
 */
export function SectionHeading({
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
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Tag className="display-xl text-ink">{heading}</Tag>
      {intro && (
        <p className={`mt-6 text-[17px] leading-relaxed text-ink-2 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
