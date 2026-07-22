"use client";

import { useMemo, useState } from "react";
import { CALC } from "@/lib/content";

/* Validated series palette (dataviz six checks, dark surface #14141C) */
const SERIES = [
  { key: "subs", label: "Subscriptions", color: "var(--series-subs)" },
  { key: "chat", label: "PPV & messages", color: "var(--series-chat)" },
  { key: "tips", label: "Tips", color: "var(--series-tips)" },
  { key: "customs", label: "Customs", color: "var(--series-customs)" },
] as const;

type SeriesKey = (typeof SERIES)[number]["key"];

const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

const moneyShort = (n: number) =>
  n >= 1000 ? "$" + (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k" : "$" + Math.round(n);

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-[13px] font-medium text-ink-2">{label}</span>
        <span className="text-sm font-semibold tabular-nums text-ink">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
      {hint && <p className="mt-1.5 text-[11px] text-muted">{hint}</p>}
    </label>
  );
}

const PRESETS = [
  {
    label: "Just starting",
    values: { subs: 150, subPrice: 7.99, ppv: 400, tips: 100, customs: 0 },
  },
  {
    label: "Established",
    values: { subs: 1200, subPrice: 9.99, ppv: 3000, tips: 800, customs: 500 },
  },
  {
    label: "Big page",
    values: { subs: 8000, subPrice: 12.99, ppv: 20000, tips: 4000, customs: 2500 },
  },
] as const;

const TIERS = [
  { key: "systems", label: "Systems & Consulting", split: 15, fixed: true },
  { key: "chatting", label: "Chatting & Sexting", split: 30, fixed: true },
  { key: "growth", label: "Growth", split: 40, fixed: false },
  { key: "full", label: "Full Management", split: 45, fixed: false },
] as const;

export default function Calculator() {
  // Where the page is today (monthly, as read off the OnlyFans dashboard)
  const [subs, setSubs] = useState(1200);
  const [subPrice, setSubPrice] = useState(9.99);
  const [ppv, setPpv] = useState(3000);
  const [tips, setTips] = useState(800);
  const [customs, setCustoms] = useState(500);

  // Assumptions
  const [uplift, setUplift] = useState(4);
  const [growth, setGrowth] = useState(8);

  // Split
  const [tierKey, setTierKey] = useState<(typeof TIERS)[number]["key"]>("chatting");
  const [customSplit, setCustomSplit] = useState(40);

  const tier = TIERS.find((t) => t.key === tierKey)!;
  const split = tier.fixed ? tier.split : customSplit;

  const calc = useMemo(() => {
    const subRev = subs * subPrice;
    const today: Record<SeriesKey, number> = {
      subs: subRev,
      chat: ppv,
      tips,
      customs,
    };
    const withSolan: Record<SeriesKey, number> = {
      subs: subRev,
      chat: ppv * uplift,
      tips: tips * uplift,
      customs: customs * uplift,
    };
    const todayTotal = Object.values(today).reduce((a, b) => a + b, 0);
    const solanTotal = Object.values(withSolan).reduce((a, b) => a + b, 0);
    const months = Array.from({ length: 12 }, (_, i) =>
      solanTotal * Math.pow(1 + growth / 100, i)
    );
    return { today, withSolan, todayTotal, solanTotal, months };
  }, [subs, subPrice, ppv, tips, customs, uplift, growth]);

  const takeHome = calc.solanTotal * (1 - split / 100);
  const delta = takeHome - calc.todayTotal;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[380px_1fr]">
      {/* ————— Inputs ————— */}
      <div className="card p-7 lg:sticky lg:top-24">
        <p className="eyebrow mb-4">Your page today</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setSubs(p.values.subs);
                setSubPrice(p.values.subPrice);
                setPpv(p.values.ppv);
                setTips(p.values.tips);
                setCustoms(p.values.customs);
              }}
              className="rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-2 transition-colors hover:border-gold-dim hover:text-ink"
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <Slider
            label="Active subscribers"
            value={subs}
            display={subs.toLocaleString("en-US")}
            min={0}
            max={25000}
            step={100}
            onChange={setSubs}
          />
          <Slider
            label="Subscription price"
            value={subPrice}
            display={subPrice === 0 ? "Free page" : "$" + subPrice.toFixed(2)}
            min={0}
            max={50}
            step={0.5}
            onChange={setSubPrice}
          />
          <Slider
            label="PPV & message revenue / month"
            value={ppv}
            display={money(ppv)}
            min={0}
            max={50000}
            step={100}
            onChange={setPpv}
          />
          <Slider
            label="Tips / month"
            value={tips}
            display={money(tips)}
            min={0}
            max={20000}
            step={100}
            onChange={setTips}
          />
          <Slider
            label="Customs / month"
            value={customs}
            display={money(customs)}
            min={0}
            max={20000}
            step={100}
            onChange={setCustoms}
          />
        </div>

        <div className="mt-8 border-t border-line pt-7">
          <p className="eyebrow mb-6">Assumptions</p>
          <div className="flex flex-col gap-6">
            <Slider
              label="Month-one uplift on chat-driven revenue"
              value={uplift}
              display={uplift + "×"}
              min={1}
              max={10}
              step={0.5}
              onChange={setUplift}
              hint={CALC.upliftNote}
            />
            <Slider
              label="Assumed monthly growth after month one"
              value={growth}
              display={growth + "%"}
              min={0}
              max={25}
              step={1}
              onChange={setGrowth}
              hint="Your assumption — marketing engine compounds; set it to whatever you believe."
            />
          </div>
        </div>
      </div>

      {/* ————— Results ————— */}
      <div className="flex flex-col gap-6">
        {/* Headline tiles */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Today (gross)
            </p>
            <p className="display mt-2 text-3xl text-ink-2">
              {money(calc.todayTotal)}
            </p>
            <p className="mt-1 text-[11px] text-muted">per month, your inputs</p>
          </div>
          <div className="card-raised border-gold-dim p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-gold">
              Month one with us (gross)
            </p>
            <p className="display gold-text mt-2 text-3xl">
              {money(calc.solanTotal)}
            </p>
            <p className="mt-1 text-[11px] text-muted">
              {uplift}× on PPV, messages, tips &amp; customs
            </p>
          </div>
          <div className="card p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Your take-home
            </p>
            <p className="display mt-2 text-3xl text-ink">{money(takeHome)}</p>
            <p className="mt-1 text-[11px] text-muted">
              after the {split}% {tier.label} split
            </p>
          </div>
        </div>

        {delta > 0 && (
          <div className="rounded-xl border border-gold-dim/50 bg-[rgba(210,172,97,0.06)] px-5 py-4 text-sm text-ink-2">
            Even after the split, that&apos;s{" "}
            <strong className="text-gold">{money(delta)} more per month</strong>{" "}
            in your pocket than running the page yourself today.
          </div>
        )}

        <StackedComparison today={calc.today} solan={calc.withSolan} />

        <Projection
          months={calc.months}
          todayTotal={calc.todayTotal}
          split={split}
        />

        {/* Split selector */}
        <div className="card p-7">
          <p className="eyebrow mb-2">The split</p>
          <p className="mb-6 text-sm leading-relaxed text-ink-2">
            Single service lines are a transparent flat rate — 15% for Systems &
            Consulting, 30% for Chatting & Sexting. Stacked tiers carry more
            overhead and are set individually at onboarding — the slider below is
            illustrative.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {TIERS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTierKey(t.key)}
                className={`rounded-xl border px-4 py-3.5 text-left transition-colors ${
                  tierKey === t.key
                    ? "border-gold-dim bg-[rgba(210,172,97,0.08)]"
                    : "border-line hover:border-line-strong"
                }`}
              >
                <span className="block text-sm font-medium text-ink">
                  {t.label}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {t.fixed ? `${t.split}% — fixed` : "custom — set at onboarding"}
                </span>
              </button>
            ))}
          </div>
          {!tier.fixed && (
            <div className="mt-6">
              <Slider
                label={`Illustrative ${tier.label} split`}
                value={customSplit}
                display={customSplit + "%"}
                min={30}
                max={55}
                step={1}
                onChange={setCustomSplit}
              />
            </div>
          )}
        </div>

        <p className="text-[11px] leading-relaxed text-muted">
          Model, not guarantee. Figures are gross platform earnings as shown on
          your dashboard; the platform fee applies equally to both scenarios and
          is omitted. Your real projection is built at onboarding from your
          page&apos;s actual data.
        </p>
      </div>
    </div>
  );
}

/* ————— Stacked bar comparison ————— */

function StackedComparison({
  today,
  solan,
}: {
  today: Record<SeriesKey, number>;
  solan: Record<SeriesKey, number>;
}) {
  const [tip, setTip] = useState<{ label: string; value: string } | null>(null);
  const todayTotal = Object.values(today).reduce((a, b) => a + b, 0);
  const solanTotal = Object.values(solan).reduce((a, b) => a + b, 0);
  const max = Math.max(todayTotal, solanTotal, 1);

  const bars: { name: string; data: Record<SeriesKey, number>; total: number }[] = [
    { name: "Today", data: today, total: todayTotal },
    { name: "Month one with us", data: solan, total: solanTotal },
  ];

  return (
    <div className="card p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">
          Where the money comes from
        </h3>
        <div className="flex flex-wrap gap-4">
          {SERIES.map((s) => (
            <span key={s.key} className="flex items-center gap-1.5 text-[11px] text-ink-2">
              <span
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex h-64 items-end justify-center gap-16 sm:gap-24">
        {bars.map((bar) => (
          <div key={bar.name} className="flex h-full w-28 flex-col justify-end sm:w-36">
            <p className="mb-2 text-center text-sm font-semibold tabular-nums text-ink">
              {money(bar.total)}
            </p>
            <div className="flex flex-col-reverse gap-[2px]" style={{ height: `${(bar.total / max) * 82}%` }}>
              {SERIES.map((s) => {
                const v = bar.data[s.key];
                if (v <= 0) return null;
                return (
                  <div
                    key={s.key}
                    className="min-h-[3px] w-full cursor-default first:rounded-b-[4px] last:rounded-t-[4px] transition-opacity hover:opacity-80"
                    style={{
                      background: s.color,
                      flexGrow: v,
                      flexBasis: 0,
                    }}
                    onMouseEnter={() =>
                      setTip({ label: `${bar.name} — ${s.label}`, value: money(v) })
                    }
                    onMouseLeave={() => setTip(null)}
                  />
                );
              })}
            </div>
            <p className="mt-3 border-t border-line-strong pt-2 text-center text-xs text-muted">
              {bar.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 h-5 text-center text-xs text-ink-2" aria-live="polite">
        {tip ? (
          <span>
            {tip.label}: <strong className="text-ink">{tip.value}</strong>
          </span>
        ) : (
          <span className="text-muted">Hover a segment for detail</span>
        )}
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer text-xs text-muted hover:text-ink-2">
          View as table
        </summary>
        <table className="mt-3 w-full text-left text-xs">
          <thead>
            <tr className="border-b border-line text-muted">
              <th className="py-2 font-medium">Stream</th>
              <th className="py-2 text-right font-medium">Today</th>
              <th className="py-2 text-right font-medium">Month one</th>
            </tr>
          </thead>
          <tbody>
            {SERIES.map((s) => (
              <tr key={s.key} className="border-b border-line">
                <td className="py-2 text-ink-2">{s.label}</td>
                <td className="py-2 text-right tabular-nums text-ink-2">
                  {money(today[s.key])}
                </td>
                <td className="py-2 text-right tabular-nums text-ink">
                  {money(solan[s.key])}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2 font-semibold text-ink">Total</td>
              <td className="py-2 text-right font-semibold tabular-nums text-ink">
                {money(todayTotal)}
              </td>
              <td className="py-2 text-right font-semibold tabular-nums text-ink">
                {money(solanTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </details>
    </div>
  );
}

/* ————— 12-month projection line chart ————— */

function Projection({
  months,
  todayTotal,
  split,
}: {
  months: number[];
  todayTotal: number;
  split: number;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const W = 640;
  const H = 240;
  const PAD = { l: 46, r: 16, t: 16, b: 28 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  const maxY = Math.max(...months, todayTotal, 1) * 1.08;
  const x = (i: number) => PAD.l + (i / 11) * innerW;
  const y = (v: number) => PAD.t + innerH - (v / maxY) * innerH;

  const solanPath = months.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const gridVals = [0.25, 0.5, 0.75, 1].map((f) => maxY * f);

  return (
    <div className="card p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">
          12-month trajectory (gross)
        </h3>
        <div className="flex gap-4 text-[11px] text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="h-[2px] w-4 rounded bg-gold" /> With us
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="h-[2px] w-4 rounded"
              style={{
                background:
                  "repeating-linear-gradient(90deg, var(--muted) 0 4px, transparent 4px 7px)",
              }}
            />
            Today, unchanged
          </span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-5 w-full"
        role="img"
        aria-label="Projected monthly gross revenue over twelve months compared with today's baseline"
        onMouseLeave={() => setHover(null)}
      >
        {gridVals.map((v) => (
          <g key={v}>
            <line
              x1={PAD.l}
              x2={W - PAD.r}
              y1={y(v)}
              y2={y(v)}
              stroke="rgba(240,236,227,0.07)"
              strokeWidth="1"
            />
            <text
              x={PAD.l - 8}
              y={y(v) + 3}
              textAnchor="end"
              fontSize="10"
              fill="var(--muted)"
            >
              {moneyShort(v)}
            </text>
          </g>
        ))}
        <line
          x1={PAD.l}
          x2={W - PAD.r}
          y1={y(0)}
          y2={y(0)}
          stroke="rgba(240,236,227,0.16)"
          strokeWidth="1"
        />

        {/* baseline: today */}
        <line
          x1={x(0)}
          x2={x(11)}
          y1={y(todayTotal)}
          y2={y(todayTotal)}
          stroke="var(--muted)"
          strokeWidth="2"
          strokeDasharray="4 5"
        />

        {/* projection */}
        <polyline
          points={solanPath}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* hover targets + markers */}
        {months.map((v, i) => (
          <g key={i}>
            <rect
              x={x(i) - innerW / 22 / 2 - 8}
              y={PAD.t}
              width={innerW / 11}
              height={innerH}
              fill="transparent"
              onMouseEnter={() => setHover(i)}
            />
            {(hover === i || i === 11) && (
              <>
                <circle
                  cx={x(i)}
                  cy={y(v)}
                  r="4.5"
                  fill="var(--gold)"
                  stroke="var(--surface)"
                  strokeWidth="2"
                />
                <text
                  x={x(i)}
                  y={y(v) - 12}
                  textAnchor={i > 9 ? "end" : "middle"}
                  fontSize="11"
                  fontWeight="600"
                  fill="var(--ink)"
                >
                  {moneyShort(v)}
                </text>
              </>
            )}
          </g>
        ))}

        {[0, 2, 4, 6, 8, 10].map((i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            fontSize="10"
            fill="var(--muted)"
          >
            M{i + 1}
          </text>
        ))}
      </svg>

      <p className="mt-3 text-[11px] text-muted" aria-live="polite">
        {hover !== null ? (
          <>
            Month {hover + 1}: gross {money(months[hover])} · your take-home
            after {split}%:{" "}
            <strong className="text-ink-2">
              {money(months[hover] * (1 - split / 100))}
            </strong>
          </>
        ) : (
          "Hover the chart for month-by-month detail, including take-home."
        )}
      </p>
    </div>
  );
}
