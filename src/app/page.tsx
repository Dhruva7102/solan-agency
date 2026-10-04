import Link from "next/link";
import {
  BRAND,
  LOCUS,
  HERO_PROOF,
  HEADLINE_STATS,
  REASONS_STRIP,
  RAILS,
  TAKE_LESS,
  STANDARD_DEAL,
  NO_CAGE,
  EXCLUSIVE,
  FOUNDER_AUTHORITY,
  INTRO_VIDEO,
  FAQ,
  FINAL_CTA,
} from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Highlight from "@/components/Highlight";
import CountUp from "@/components/CountUp";
import VideoSlot, { hasIntroVideo } from "@/components/VideoSlot";
import CtaBand from "@/components/CtaBand";
import LocusPanel from "@/components/LocusPanel";
import StandardDeal from "@/components/StandardDeal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-glow hairline-b relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
          <Reveal>
            <p className="eyebrow mb-8 justify-center">Management, rebuilt</p>
            <h1 className="display-hero mx-auto max-w-4xl">
              We take a <span className="gold-text italic">smaller cut</span>
              <br className="hidden sm:block" /> than the teams we outperform.
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-2">
              <Highlight text={BRAND.subtag} />
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/proof" className="btn-gold">
                See the proof <span aria-hidden>→</span>
              </Link>
              <Link href="/deal" className="btn-ghost">
                See the deal
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

          {/* Above the fold: what's true of the whole operation. */}
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

      {/* The four reasons, as an anchor strip */}
      <nav
        aria-label="The four reasons"
        className="hairline-b border-t border-line bg-bg-2/60"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {REASONS_STRIP.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="group flex min-h-14 items-center gap-3 px-6 py-4 transition-colors hover:bg-surface"
            >
              <span className="display gold-text text-sm">{r.num}</span>
              <span className="text-[13px] leading-snug text-ink-2 transition-colors group-hover:text-ink">
                {r.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* 01 — We built our own rails */}
      <Section id={RAILS.id} className="scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">{RAILS.eyebrow}</p>
            <h2 className="display-xl text-ink">{RAILS.heading}</h2>
            <a
              href={LOCUS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center text-sm text-gold transition-transform hover:translate-x-0.5"
            >
              {LOCUS.linkLabel} <span aria-hidden>&nbsp;↗</span>
            </a>
          </Reveal>
          <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-3">
            {RAILS.paragraphs.map((p, i) => (
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
            <Reveal delay={0.15}>
              <div className="card p-6">
                <p className="text-xs text-muted">{RAILS.census.note}</p>
                <dl className="mt-4 grid grid-cols-3 gap-4">
                  {RAILS.census.items.map((c) => (
                    <div key={c.label}>
                      <dt className="numeral gold-text text-2xl sm:text-[1.9rem]">
                        {c.value}
                      </dt>
                      <dd className="mt-1 text-[11.5px] leading-snug text-ink-2">
                        {c.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {RAILS.panels.map((p, i) => (
            <Reveal key={p.kind} delay={(i % 2) * 0.08}>
              <LocusPanel kind={p.kind} label={p.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 02 — We take less */}
      <Section
        id={TAKE_LESS.id}
        alt
        className="glow-band hairline-b scroll-mt-20 border-t border-line"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6 justify-center">{TAKE_LESS.eyebrow}</p>
            <h2 className="display-xl text-ink">{TAKE_LESS.heading}</h2>
            {TAKE_LESS.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-ink-2"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-12">
          <StandardDeal />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-sm text-muted">
            {TAKE_LESS.note}{" "}
            <Link
              href="/deal"
              className="text-gold underline-offset-4 hover:underline"
            >
              See every tier →
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* 03 — No cage */}
      <Section id={NO_CAGE.id} className="scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">{NO_CAGE.eyebrow}</p>
            <h2 className="display-xl text-ink">{NO_CAGE.heading}</h2>
            <p className="mt-8 text-[15px] leading-relaxed text-ink-2">
              {NO_CAGE.paragraphs[0]}
            </p>
            <p className="display gold-text mt-8 text-xl leading-snug">
              {NO_CAGE.retention}
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ul className="card divide-y divide-line p-2">
                {NO_CAGE.promises.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 px-5 py-4 text-[14.5px] leading-relaxed text-ink-2"
                  >
                    <span className="gold-text mt-0.5" aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-xs text-muted">
                Each line mirrors a clause in the agreement you&apos;d sign.{" "}
                <Link
                  href="/deal"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  The deal, in full →
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 04 — Exclusives */}
      <Section
        id={EXCLUSIVE.id}
        alt
        className="hairline-b scroll-mt-20 border-t border-line"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6 justify-center">{EXCLUSIVE.eyebrow}</p>
            <h2 className="display-xl text-ink">{EXCLUSIVE.heading}</h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 text-left sm:text-center">
            {EXCLUSIVE.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[15px] leading-relaxed text-ink-2">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder intro video — only once the file exists */}
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

      {/* Who's behind this */}
      <Section>
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
          <p className="mt-6 text-xs italic text-muted">
            {FOUNDER_AUTHORITY.note}
          </p>
        </Reveal>
      </Section>

      {/* Receipts band */}
      <Section alt className="glow-band hairline-b border-t border-line">
        <Reveal>
          <p className="eyebrow mb-5">Receipts</p>
          <h2 className="display-xl max-w-2xl text-ink">
            We&apos;d rather show you dashboards than adjectives.
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

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow={FAQ.eyebrow} heading={FAQ.heading} />
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
          {FAQ.items.map((item, i) => (
            <Reveal key={item.q} delay={(i % 3) * 0.05}>
              <details className="card group p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="gold-text shrink-0 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand expect />
    </main>
  );
}
