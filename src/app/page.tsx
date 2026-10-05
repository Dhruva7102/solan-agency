import Link from "next/link";
import {
  BRAND,
  LOCUS,
  HERO_PROOF,
  HEADLINE_STATS,
  REASONS_STRIP,
  RAILS,
  TAKE_LESS,
  NO_CAGE,
  EXCLUSIVE,
  FOUNDER_AUTHORITY,
  INTRO_VIDEO,
  FAQ,
  FINAL_CTA,
} from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import Highlight from "@/components/Highlight";
import VideoSlot, { hasIntroVideo } from "@/components/VideoSlot";
import CtaBand from "@/components/CtaBand";
import LocusPanel from "@/components/LocusPanel";
import StandardDeal from "@/components/StandardDeal";
import { AppIcon, Arrow, Chevron, GoldCheck, Notification } from "@/components/Phone";
import Silk from "@/components/Silk";
import LockDate from "@/components/LockDate";

/* Each reason's own line, from its section label ("01 · Where the $1.5M went"). */
const REASON_LINES: Record<string, string> = Object.fromEntries(
  [RAILS, TAKE_LESS, NO_CAGE, EXCLUSIVE].map((s) => [s.id, s.eyebrow.replace(/^\d+\s*·\s*/, "")])
);

export default function Home() {
  const [firstReceipt, ...otherReceipts] = HERO_PROOF.items;

  return (
    <main>
      {/* ── The lock screen ── */}
      <section className="relative isolate -mt-16 overflow-hidden" aria-labelledby="hero-h">
        <div className="hero-glow absolute inset-x-0 top-0 -z-10 h-[max(100svh,760px)]" aria-hidden />
        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-5 pb-5 pt-[4.25rem] sm:px-6 sm:pb-6 sm:pt-[5.25rem]">
          <LockDate className="text-[14px] text-ink-2" />
          <h1 id="hero-h" className="mt-3 text-center sm:mt-4">
            <span className="display-hero block text-ink">
              We take a <span className="text-gold">smaller cut</span>
            </span>
            <span className="mt-3 block text-[17px] text-ink-2 sm:mt-4 sm:text-[21px]">than the teams we outperform.</span>
          </h1>

          {/* The four figures as one hairline line, opaque so the ribbon passes behind */}
          <dl className="mt-6 grid w-full max-w-[760px] grid-cols-2 border-y border-line bg-bg sm:mt-8 sm:grid-cols-4">
            {HEADLINE_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-baseline gap-2 px-3 py-3 sm:block sm:px-5 sm:py-[18px] ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}
              >
                <dt className="numeral text-[1.375rem] text-gold-bright sm:text-[1.9rem]">{stat.value}</dt>
                <dd className="text-[12px] leading-snug text-ink-2 sm:mt-2 sm:text-[12.5px]">
                  <span className="sm:hidden">{stat.mini}</span>
                  <span className="hidden sm:inline">{stat.short}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-5 flex w-full max-w-[520px] flex-col gap-2 sm:mt-auto sm:pt-6">
            <Silk />
            <Notification app="astor" title="Management, rebuilt" time="now">
              <Highlight text={BRAND.subtag} />
            </Notification>
            <Notification app="locus" title="Locus · Earnings" time="30d">
              <span className="numeral block py-1 text-[1.75rem] text-gold-bright">{firstReceipt.value}</span>
              {firstReceipt.label}
            </Notification>
            {/* the rest of the stack, collapsed behind it */}
            <span aria-hidden className="mx-4 -mt-2.5 h-3 rounded-b-[16px] border border-t-0 border-line bg-[#100e0c]" />
            <span aria-hidden className="mx-8 -mt-2 h-3 rounded-b-[14px] border border-t-0 border-line bg-[#0e0c0b]" />
          </div>

          {/* The dock: proof and deal in the corners, booking in the middle */}
          <div className="mt-5 grid w-full max-w-[560px] grid-cols-[auto_1fr_auto] items-start gap-2 sm:gap-3">
            <Link href="/proof" className="group flex w-14 flex-col items-center gap-2 sm:w-16">
              <span className="grid h-[50px] w-[50px] place-items-center rounded-full border border-line-strong text-ink transition-colors group-hover:border-gold">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-6" />
                </svg>
              </span>
              <span className="text-[12px] text-ink-2">Proof</span>
            </Link>
            <div className="flex flex-col items-center gap-2.5">
              <a href={FINAL_CTA.href} className="btn-gold max-sm:!px-5">
                {FINAL_CTA.button}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <span className="hidden text-center text-[12.5px] text-muted sm:block">We&apos;ll walk your page through it live</span>
            </div>
            <Link href="/deal" className="group flex w-14 flex-col items-center gap-2 sm:w-16">
              <span className="grid h-[50px] w-[50px] place-items-center rounded-full border border-line-strong text-ink transition-colors group-hover:border-gold">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 3h7l4 4v14H7z" />
                  <path d="M14 3v4h4M10 12h5M10 16h5" />
                </svg>
              </span>
              <span className="whitespace-nowrap text-[12px] text-ink-2">The Deal</span>
            </Link>
          </div>
          <span aria-hidden className="mt-3 h-[5px] w-[134px] rounded-full bg-ink/70 sm:mt-4" />
        </div>
      </section>

      {/* ── The four reasons, as widgets ── */}
      <nav aria-label="The four reasons" className="mx-auto max-w-6xl px-5 pt-20 sm:px-6 sm:pt-28">
        <ul className="card list mx-auto max-w-2xl overflow-hidden">
          {REASONS_STRIP.map((r) => (
            <li key={r.id}>
              <a href={`#${r.id}`} className="flex min-h-[4.25rem] items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-surface-2">
                <span>
                  <span className="block text-[16px] font-medium leading-snug text-ink">{r.label}</span>
                  <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">{REASON_LINES[r.id]}</span>
                </span>
                <Chevron className="text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 01 — We built our own rails */}
      <Section id={RAILS.id} className="scroll-mt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-xl text-ink">{RAILS.heading}</h2>
            <a
              href={LOCUS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-[15px] text-gold-bright underline decoration-gold/40 underline-offset-[6px] hover:decoration-gold"
            >
              {LOCUS.linkLabel} <Arrow external />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              {RAILS.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-[18px] leading-[1.7] text-ink" : "mt-5 text-[16px] leading-[1.7] text-ink-2"}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              {RAILS.census.items.map((c) => (
                <div key={c.label} className="card flex flex-col justify-between gap-5 p-4 sm:p-5">
                  <span className="flex items-center gap-2 text-[12px] text-muted">
                    <AppIcon app="locus" size={16} />
                    Locus
                  </span>
                  <span>
                    <span className="numeral block text-[1.9rem] text-gold-bright sm:text-[2.4rem]">{c.value}</span>
                    <span className="mt-1.5 block text-[12.5px] leading-snug text-ink-2">{c.label}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 px-1 text-[12.5px] text-muted">{RAILS.census.note}</p>
          </div>
        </div>
        <div className="mt-14 grid items-start gap-3 md:grid-cols-2">
          {RAILS.panels.map((p) => (
            <LocusPanel key={p.kind} kind={p.kind} label={p.label} />
          ))}
        </div>
      </Section>

      {/* 02 — We take less */}
      <Section id={TAKE_LESS.id} alt className="glow-band scroll-mt-16 border-y border-line">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-xl text-ink">{TAKE_LESS.heading}</h2>
          {TAKE_LESS.paragraphs.map((p, i) => (
            <p key={i} className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.7] text-ink-2">
              {p}
            </p>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <StandardDeal />
          <p className="mt-5 text-center text-[13.5px] leading-relaxed text-muted">
            {TAKE_LESS.note}{" "}
            <Link href="/deal" className="whitespace-nowrap text-gold-bright underline-offset-4 hover:underline">
              See every tier <Arrow />
            </Link>
          </p>
        </div>
      </Section>

      {/* 03 — No cage */}
      <Section id={NO_CAGE.id} className="scroll-mt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-xl text-ink">{NO_CAGE.heading}</h2>
            <p className="mt-7 text-[17px] leading-[1.7] text-ink-2">{NO_CAGE.paragraphs[0]}</p>
            <div className="glass mt-8 p-5">
              <p className="numeral text-[3.2rem] text-gold-bright">92%+</p>
              <p className="mt-2 text-[14px] leading-snug text-ink/80">{NO_CAGE.retention}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="card list overflow-hidden">
              {NO_CAGE.promises.map((p) => (
                <li key={p} className="flex items-start gap-3.5 px-5 py-4 text-[15.5px] leading-relaxed text-ink">
                  <GoldCheck />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 px-1 text-[13px] text-muted">
              Each line mirrors a clause in the agreement you&apos;d sign.{" "}
              <Link href="/deal" className="whitespace-nowrap text-gold-bright underline-offset-4 hover:underline">
                The deal, in full <Arrow />
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* 04 — Exclusives */}
      <Section id={EXCLUSIVE.id} alt className="glow-band scroll-mt-16 border-y border-line">
        <div className="mx-auto max-w-3xl text-center">
          <span className="glass mx-auto grid h-14 w-14 place-items-center !rounded-full text-gold-bright" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="10" rx="2.5" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
          </span>
          <h2 className="display-xl mt-7 text-ink">{EXCLUSIVE.heading}</h2>
          <div className="mt-8 flex flex-col gap-5">
            {EXCLUSIVE.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.7] text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder intro video: only once the file exists */}
      {hasIntroVideo() && (
        <Section className="hairline-b">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow={INTRO_VIDEO.eyebrow} heading={INTRO_VIDEO.heading} center />
            <div className="mt-10">
              <VideoSlot />
            </div>
          </div>
        </Section>
      )}

      {/* Who's behind this: three contact cards, names kept for the call */}
      <Section>
        <SectionHeading eyebrow={FOUNDER_AUTHORITY.eyebrow} heading={FOUNDER_AUTHORITY.heading} />
        <ul className="card list mt-10 max-w-4xl overflow-hidden">
          {FOUNDER_AUTHORITY.founders.map((f) => (
            <li key={f.role} className="grid grid-cols-[3.5rem_1fr] items-start gap-4 px-5 py-5 sm:grid-cols-[4rem_1fr] sm:px-6">
              <span
                className="display grid h-14 w-14 place-items-center rounded-full bg-surface-2 text-[1.35rem] text-gold-bright ring-1 ring-gold-dim/60 sm:h-16 sm:w-16 sm:text-[1.5rem]"
                aria-hidden
              >
                {f.role.replace(/^The\s+/, "").split(/[\s-]+/).map((w) => w[0]).join("").slice(0, 2)}
              </span>
              <span>
                <h3 className="text-[17px] font-semibold leading-snug text-ink">{f.role}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{f.desc}</p>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 px-1 text-[13px] text-muted">{FOUNDER_AUTHORITY.note}</p>
      </Section>

      {/* Receipts: the payouts, as they'd land on your phone */}
      <Section alt className="glow-band border-y border-line">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display-xl text-ink">We&apos;d rather show you dashboards than adjectives.</h2>
            <Link
              href={HERO_PROOF.href}
              className="btn-ghost mt-9"
            >
              {HERO_PROOF.linkLabel} <Arrow />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {[firstReceipt, ...otherReceipts].map((item, i) => (
              <Notification key={item.value} app="locus" title="Locus · Earnings" time={["30d", "1mo", "90d"][i]}>
                <span className="numeral block py-1 text-[2rem] text-gold-bright">{item.value}</span>
                {item.label}
              </Notification>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ: a Messages thread. Tap a question for the answer. */}
      <Section>
        <SectionHeading eyebrow={FAQ.eyebrow} heading={FAQ.heading} />
        <div className="card mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="flex flex-col items-center gap-2 border-b border-line bg-surface-2/60 py-4">
            <AppIcon app="astor" size={44} />
            <span className="text-[12px] text-ink-2">{BRAND.name}</span>
          </div>
          <p className="pt-4 text-center text-[11.5px] text-muted">Tap a question for the answer</p>
          <div className="flex flex-col gap-3 p-4 sm:p-6">
            {FAQ.items.map((item, i) => (
              <details key={item.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-end gap-2 [&::-webkit-details-marker]:hidden">
                  <span className="bubble-in max-w-[85%] px-4 py-2.5 text-[15.5px] leading-snug transition-colors group-hover:bg-[#2c2722]">
                    {item.q}
                  </span>
                </summary>
                <div className="mt-2 flex justify-end">
                  <p className="bubble-out max-w-[85%] px-4 py-3 text-[15px] leading-[1.5]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand expect />
    </main>
  );
}
