/**
 * Faithful renders of the real Altyr Pro product views, in the genuine
 * "Obsidian Clarity" product language (pure-black canvas, raised glass,
 * rose→amber accent, platinum numerals, tier badges — see altyr-ui.css).
 *
 * These mirror the layout and metrics of the actual app components
 * (ChatterShiftDashboard, AttributedFansPanel, FanContextPanel, the
 * automation view) and are populated with representative big-book data.
 * No proprietary source is copied — only the published design system is
 * reimplemented. Everything below is illustrative, not a real page.
 */

function Chrome({ view }: { view: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-3.5 py-2.5">
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
      </span>
      <span className="ml-1.5 text-[0.7rem] tracking-wide text-white/40">
        Altyr Pro <span className="text-white/65">/ {view}</span>
      </span>
      <span className="altyr-live ml-auto">
        <span className="altyr-live-dot" /> live
      </span>
    </div>
  );
}

/* ── 1. Chatter quality — "My shift" scorecard ─────────────────────── */
function ShiftPanel() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex items-baseline justify-between">
        <p className="altyr-eyebrow text-[0.6rem]">This shift · Revenue</p>
        <span className="altyr-chip altyr-chip-rose !py-0.5 text-[0.6rem]">QA 96</span>
      </div>
      <p className="altyr-numeric text-[2.4rem]">$8,420</p>

      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "PPV close", v: "47%" },
          { k: "Messages", v: "312" },
          { k: "Avg reply", v: "41s" },
        ].map((s) => (
          <div key={s.k} className="altyr-inset px-2.5 py-2">
            <p className="altyr-display-num text-[1.05rem] text-white/95">{s.v}</p>
            <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.16em] text-white/40">{s.k}</p>
          </div>
        ))}
      </div>

      <div className="altyr-inset flex items-center gap-2.5 px-3 py-2.5">
        <span className="altyr-avatar altyr-avatar-sm">JD</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.78rem] text-white/90">Next action · re-engage</p>
          <p className="text-[0.62rem] text-white/40">
            Suggested PPV · <span className="text-white/80">$65</span> · in persona
          </p>
        </div>
        <span className="altyr-chip !py-0.5 text-[0.6rem] text-white/50">9d quiet</span>
      </div>
    </div>
  );
}

/* ── 2. Automation & sequencing ────────────────────────────────────── */
function AutomationPanel() {
  const rows = [
    { name: "Expired-fan winback", seg: "2,140 fans", chip: "6:00 PM", tone: "amber" },
    { name: "Unopened-PPV nudge", seg: "486 fans", chip: "in 2h", tone: "" },
    { name: "Silent-whale alert", seg: "23 fans", chip: "live", tone: "rose" },
  ];
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <p className="altyr-eyebrow text-[0.6rem]">Active sequences</p>

      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.name} className="altyr-inset flex items-center gap-2.5 px-3 py-2">
            <span className="altyr-toggle" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.78rem] text-white/90">{r.name}</p>
              <p className="text-[0.6rem] text-white/40">{r.seg}</p>
            </div>
            <span
              className={`altyr-chip !py-0.5 text-[0.6rem] ${
                r.tone === "amber" ? "altyr-chip-amber" : r.tone === "rose" ? "altyr-chip-rose" : "text-white/50"
              }`}
            >
              {r.chip}
            </span>
          </div>
        ))}
      </div>

      <div className="altyr-inset flex items-center justify-between px-3 py-3">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { k: "Sent today", v: "4,120" },
            { k: "Opened", v: "71%" },
            { k: "Converted", v: "18%" },
          ].map((s) => (
            <div key={s.k}>
              <p className="altyr-display-num text-[0.95rem] text-white/95">{s.v}</p>
              <p className="text-[0.55rem] uppercase tracking-[0.14em] text-white/40">{s.k}</p>
            </div>
          ))}
        </div>
        <div className="text-right">
          <p className="altyr-numeric text-[1.25rem]">$12.4k</p>
          <p className="text-[0.55rem] uppercase tracking-[0.14em] text-white/40">Recovered</p>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Analytics — revenue attribution ────────────────────────────── */
function AttributionPanel() {
  const fans = [
    { in: "AR", name: "arctic_wolf", spend: "$4,820", at: "2h" },
    { in: "MK", name: "mkdaniels", spend: "$3,110", at: "5h" },
    { in: "TS", name: "the_sax", spend: "$2,640", at: "1d" },
    { in: "LV", name: "lakeview88", spend: "$1,975", at: "1d" },
  ];
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="altyr-eyebrow text-[0.6rem]">Attributed · 30 days</p>
          <p className="altyr-numeric mt-1 text-[2rem]">$148,320</p>
        </div>
        <span className="altyr-chip !py-0.5 text-[0.6rem] text-white/50">6 of 5,412</span>
      </div>

      <div className="altyr-inset overflow-hidden !p-0">
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-white/[0.06] px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-white/40">
          <span>Fan</span>
          <span className="text-right">Total spend</span>
          <span className="text-right">Attr.</span>
        </div>
        {fans.map((f) => (
          <div
            key={f.name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-white/[0.03] px-3 py-2 text-[0.74rem] last:border-0"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="altyr-avatar altyr-avatar-sm">{f.in}</span>
              <span className="truncate text-white/85">{f.name}</span>
              <span className="altyr-chip !py-0 !px-1.5 text-[0.55rem] text-white/40">exact</span>
            </span>
            <span className="text-right text-white/90">{f.spend}</span>
            <span className="text-right text-[0.66rem] text-white/40">{f.at}</span>
          </div>
        ))}
      </div>
      <p className="text-[0.6rem] text-white/40">Every dollar traced to chatter, message and fan.</p>
    </div>
  );
}

/* ── 4. Fan CRM — fan context ──────────────────────────────────────── */
function FanPanel() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex items-center gap-3">
        <span className="altyr-avatar">AR</span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 text-[0.86rem] font-medium text-white/95">
            arctic_wolf
            <span className="altyr-tier altyr-tier-diamond">Diamond</span>
          </p>
          <p className="text-[0.62rem] text-white/40">Subscribed 14 mo · last seen 2h ago</p>
        </div>
      </div>

      <div>
        <p className="altyr-eyebrow text-[0.6rem]">Lifetime spend</p>
        <p className="altyr-numeric mt-1 text-[2.2rem]">$24,880</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "Purchases", v: "214" },
          { k: "Avg unlock", v: "$116" },
          { k: "Monthly", v: "$2,140" },
        ].map((s) => (
          <div key={s.k} className="altyr-inset px-2.5 py-2">
            <p className="altyr-display-num text-[1rem] text-white/95">{s.v}</p>
            <p className="mt-0.5 text-[0.55rem] uppercase tracking-[0.14em] text-white/40">{s.k}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        <span className="altyr-chip altyr-chip-amber !py-0.5 text-[0.6rem]">PPV $14.2k</span>
        <span className="altyr-chip altyr-chip-rose !py-0.5 text-[0.6rem]">Tips $6.1k</span>
        <span className="altyr-chip !py-0.5 text-[0.6rem]">Customs $4.6k</span>
      </div>

      <div className="altyr-inset px-3 py-2.5">
        <p className="text-[0.55rem] uppercase tracking-[0.16em] text-white/35">Notable</p>
        <p className="mt-1 text-[0.72rem] leading-snug text-white/70">
          Prefers voice notes after 11pm. Anniversary Apr 9. Never sell wrestling PPVs.
        </p>
      </div>
    </div>
  );
}

const VIEWS: Record<string, { view: string; body: React.ReactNode }> = {
  qa: { view: "My shift", body: <ShiftPanel /> },
  automation: { view: "Automation", body: <AutomationPanel /> },
  analytics: { view: "Attribution", body: <AttributionPanel /> },
  crm: { view: "Fan context", body: <FanPanel /> },
};

export default function AltyrProPanel({
  kind,
  label,
  className = "",
}: {
  kind: keyof typeof VIEWS | string;
  label: string;
  className?: string;
}) {
  const v = VIEWS[kind];
  if (!v) return null;
  return (
    <figure className={`card overflow-hidden ${className}`}>
      <div className="altyr-ui">
        <Chrome view={v.view} />
        {v.body}
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {label} <span className="text-muted/70">· illustrative product render</span>
      </figcaption>
    </figure>
  );
}
