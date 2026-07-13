import Link from "next/link";
import {
  BRAND,
  HEADLINE_STATS,
  MANIFESTO,
  FOUNDER_AUTHORITY,
} from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

const SECTION_CARDS = [
  {
    href: "/systems",
    step: "01",
    title: "The Backend",
    desc: "Ultra Pro vs Inflow — the side-by-side no other agency can show you.",
  },
  {
    href: "/services",
    step: "02",
    title: "Services & Rates",
    desc: "Transparent 30% single-service tiers — and honest answers to the hard questions.",
  },
  {
    href: "/calculator",
    step: "03",
    title: "Calculator",
    desc: "Put in your numbers. See what 4× on chat-driven revenue looks like.",
  },
  {
    href: "/process",
    step: "04",
    title: "How We Operate",
    desc: "Watch the actual flows: a fan's DM, an escalation, your first 30 days.",
  },
  {
    href: "/control",
    step: "05",
    title: "Your Control",
    desc: "Individual onboarding, full dashboard access, no lock-in.",
  },
  {
    href: "/results",
    step: "06",
    title: "Results",
    desc: "$0 → $37.3k launches, $222.8k takeover months, real dashboards.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-glow hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
          <Reveal>
            <p className="eyebrow mb-6">Private creator briefing</p>
            <h1 className="display mx-auto max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              A different <span className="gold-text">type</span> of agency.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-2">
              {BRAND.subtag}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/systems" className="btn-gold">
                See the backend <span aria-hidden>→</span>
              </Link>
              <Link href="/calculator" className="btn-ghost">
                Run your numbers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <Section alt className="hairline-b">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HEADLINE_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="card h-full p-6">
                <p className="display gold-text text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium leading-snug text-ink">
                  {stat.label}
                </p>
                <p
                  className={`mt-2 text-xs leading-relaxed text-muted ${
                    "placeholder" in stat && stat.placeholder ? "italic" : ""
                  }`}
                >
                  {stat.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Manifesto */}
      <Section>
        <SectionHeading eyebrow={MANIFESTO.eyebrow} heading={MANIFESTO.heading} />
        <div className="mt-10 grid max-w-4xl gap-6">
          {MANIFESTO.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-2">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Founders */}
      <Section alt className="hairline-b border-t border-line">
        <SectionHeading
          eyebrow={FOUNDER_AUTHORITY.eyebrow}
          heading={FOUNDER_AUTHORITY.heading}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FOUNDER_AUTHORITY.founders.map((f, i) => (
            <Reveal key={f.role} delay={i * 0.08}>
              <div className="card h-full p-7">
                <div className="mb-5 h-10 w-10 rounded-full border border-gold-dim bg-[radial-gradient(circle_at_35%_30%,rgba(232,203,139,0.35),rgba(151,120,63,0.15))]" />
                <h3 className="display text-lg text-ink">{f.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xs italic text-muted">{FOUNDER_AUTHORITY.note}</p>
        </Reveal>
      </Section>

      {/* Explore cards */}
      <Section>
        <SectionHeading
          eyebrow="The walkthrough"
          heading="Everything we do, shown — not described."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTION_CARDS.map((card, i) => (
            <Reveal key={card.href} delay={(i % 3) * 0.06} className="h-full">
              <Link
                href={card.href}
                className="card group flex h-full flex-col justify-between p-7 transition-colors hover:border-gold-dim"
              >
                <div>
                  <span className="display gold-text text-lg">{card.step}</span>
                  <h3 className="display mt-2 text-xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {card.desc}
                  </p>
                </div>
                <span className="mt-6 text-sm text-gold transition-transform group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
