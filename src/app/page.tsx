import Link from "next/link";
import {
  BRAND,
  HERO_PROOF,
  HEADLINE_STATS,
  MANIFESTO,
  FOUNDER_AUTHORITY,
  INTRO_VIDEO,
  FINAL_CTA,
} from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import CountUp from "@/components/CountUp";
import VideoSlot, { hasIntroVideo } from "@/components/VideoSlot";
import CtaBand from "@/components/CtaBand";

const SECTION_CARDS = [
  {
    href: "/systems",
    step: "01",
    title: "The Backend",
    desc: "Altyr Pro vs Inflow: the side-by-side no one else can show you.",
  },
  {
    href: "/services",
    step: "02",
    title: "Services & Rates",
    desc: "Transparent single-service rates from 15%, and honest answers to the hard questions.",
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
      <section className="hero-glow hairline-b relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
          <Reveal>
            <p className="eyebrow mb-8 justify-center">Private creator briefing</p>
            <h1 className="display-hero mx-auto max-w-4xl">
              A different <span className="gold-text italic">type</span> of
              <br className="hidden sm:block" /> management.
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-2">
              <Highlight text={BRAND.subtag} />
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/calculator" className="btn-gold">
                Run your numbers <span aria-hidden>→</span>
              </Link>
              <Link href="/systems" className="btn-ghost">
                See the backend
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted">
              Or{" "}
              <a
                href={FINAL_CTA.href}
                className="text-gold underline-offset-4 hover:underline"
              >
                book an intro call
              </a>{" "}
              and we&apos;ll walk your page through it live.
            </p>
          </Reveal>

          {/* Above the fold: what's true of the whole operation. A claim
              about every page we run lands harder than one page's number. */}
          <Reveal delay={0.15}>
            <div className="mt-16">
              <hr className="rule-fade" />
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
                {HEADLINE_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="numeral gold-text text-[2.75rem] sm:text-[3.5rem]">
                      {stat.value.includes("/") ? (
                        stat.value
                      ) : (
                        <CountUp value={stat.value} />
                      )}
                    </dt>
                    <dd className="mx-auto mt-3 max-w-[22ch] text-[12.5px] leading-relaxed text-ink-2">
                      {stat.short}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Then the individual receipts, at full scale */}
      <Section alt className="glow-band hairline-b">
        <Reveal>
          <p className="eyebrow mb-5">Pages we run</p>
          <h2 className="display-xl max-w-2xl text-ink">
            What that looks like on a single page.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {HERO_PROOF.items.map((item, i) => (
            <Reveal
              key={item.value}
              delay={i * 0.08}
              className="bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 sm:p-8"
            >
              <p className="numeral gold-text text-[2.75rem] sm:text-[3.25rem]">
                <CountUp value={item.value} />
              </p>
              <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-ink-2">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <Link
            href={HERO_PROOF.href}
            className="mt-8 inline-flex min-h-11 items-center text-sm text-gold transition-transform hover:translate-x-0.5"
          >
            {HERO_PROOF.linkLabel} <span aria-hidden>&nbsp;→</span>
          </Link>
        </Reveal>
      </Section>

      {/* Founder intro video — only once the file is actually in /public/media */}
      {hasIntroVideo() && (
        <Section className="hairline-b">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow={INTRO_VIDEO.eyebrow}
              heading={INTRO_VIDEO.heading}
              center
            />
            <Reveal delay={0.1} className="mt-10">
              <VideoSlot />
            </Reveal>
          </div>
        </Section>
      )}

      {/* Manifesto — editorial: statement left, argument offset right */}
      <Section className="relative overflow-hidden">
        <span
          aria-hidden
          className="ghost-figure -right-6 top-0 hidden text-[16rem] lg:block"
        >
          &rdquo;
        </span>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">{MANIFESTO.eyebrow}</p>
            <h2 className="display-xl text-ink">{MANIFESTO.heading}</h2>
          </Reveal>
          <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-3">
            {MANIFESTO.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p
                  className={
                    i === 0
                      ? "text-[17px] leading-relaxed text-ink"
                      : "text-[15px] leading-relaxed text-ink-2"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
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
              <div className="card lift h-full p-7">
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
          heading="Everything we do, shown, not described."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTION_CARDS.map((card, i) => (
            <Reveal key={card.href} delay={(i % 3) * 0.06} className="h-full">
              <Link
                href={card.href}
                className="card lift group flex h-full flex-col justify-between p-7"
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

      <CtaBand expect />
    </main>
  );
}
