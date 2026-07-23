/**
 * Branded mock panels of the Altyr Pro UI.
 *
 * These are illustrative product renders, NOT screenshots of a live page.
 * All names, figures and fans below are fictional and generic on purpose —
 * nothing here maps to a real creator or fan. Used on /systems to show what
 * each capability looks like in the product without exposing real data.
 */

const SERIES = {
  chat: "var(--series-chat)",
  subs: "var(--series-subs)",
  tips: "var(--series-tips)",
  customs: "var(--series-customs)",
};

function Chrome({ tab }: { tab: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3.5 py-2.5">
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(240,236,227,0.14)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(240,236,227,0.14)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(240,236,227,0.14)]" />
      </span>
      <span className="ml-1.5 text-[11px] tracking-wide text-muted">
        Altyr Pro <span className="text-ink-2">/ {tab}</span>
      </span>
      <span className="ml-auto flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-good">
        <span className="h-1.5 w-1.5 rounded-full bg-good" /> live
      </span>
    </div>
  );
}

/* ————— Chatter quality control ————— */
function QaPanel() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-ink-2">Conversation review</p>
        <span className="rounded-full border border-gold-dim/50 px-2 py-0.5 text-[10px] font-semibold text-gold">
          QA 96 / 100
        </span>
      </div>

      {/* Chat thread */}
      <div className="flex flex-col gap-2">
        <div className="max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-surface-2 px-3 py-2 text-[11px] leading-snug text-ink-2">
          been thinking about you all day 😩
        </div>
        <div className="max-w-[82%] self-end rounded-2xl rounded-tr-sm bg-[rgba(210,172,97,0.10)] px-3 py-2 text-[11px] leading-snug text-ink">
          aw i&apos;ve missed you too 🥺 tell me what&apos;s been on your mind…
          <span className="mt-1 block text-[9px] text-muted">Night pod · 1m 12s · in persona</span>
        </div>
      </div>

      {/* Persona checks */}
      <div className="flex flex-wrap gap-1.5">
        {["Tone match", "Boundaries", "Sequencing"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-md bg-surface-2 px-2 py-1 text-[10px] text-ink-2"
          >
            <span className="text-good">✓</span> {t}
          </span>
        ))}
      </div>

      {/* Scorecard strip */}
      <div className="grid grid-cols-3 gap-2 border-t border-line pt-3">
        {[
          { k: "Avg response", v: "1m 40s" },
          { k: "QA (30d)", v: "94.2" },
          { k: "Rev / shift", v: "$1,180" },
        ].map((s) => (
          <div key={s.k}>
            <p className="text-[9px] uppercase tracking-wider text-muted">{s.k}</p>
            <p className="display mt-0.5 text-sm text-ink">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————— Automation & sequencing ————— */
function AutomationPanel() {
  const rows = [
    { name: "Expired-fan winback", seg: "142 fans", next: "6:00 PM" },
    { name: "Unopened-PPV nudge", seg: "38 fans", next: "in 2h" },
    { name: "Silent-whale alert", seg: "5 fans", next: "live" },
  ];
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-[11px] font-medium text-ink-2">Active sequences</p>

      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface-2 px-3 py-2"
          >
            <span className="relative inline-flex h-3.5 w-6 items-center rounded-full bg-[rgba(210,172,97,0.25)]">
              <span className="absolute right-0.5 h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] text-ink">{r.name}</p>
              <p className="text-[9px] text-muted">{r.seg}</p>
            </div>
            <span className="whitespace-nowrap text-[10px] text-gold">{r.next}</span>
          </div>
        ))}
      </div>

      {/* Funnel stat */}
      <div className="grid grid-cols-3 gap-2 border-t border-line pt-3 text-center">
        {[
          { k: "Sent today", v: "413" },
          { k: "Opened", v: "71%" },
          { k: "Converted", v: "18%" },
        ].map((s) => (
          <div key={s.k}>
            <p className="display text-sm text-ink">{s.v}</p>
            <p className="text-[9px] uppercase tracking-wider text-muted">{s.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————— Analytics & transparency ————— */
function AnalyticsPanel() {
  const bars = [
    { name: "Night pod", pct: 42, amt: "$2,024" },
    { name: "Day pod", pct: 35, amt: "$1,687" },
    { name: "Swing", pct: 23, amt: "$1,109" },
  ];
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "Today", v: "$4,820", c: SERIES.chat },
          { k: "PPV", v: "$3,120", c: SERIES.subs },
          { k: "Tips", v: "$890", c: SERIES.tips },
        ].map((t) => (
          <div key={t.k} className="rounded-lg border border-line bg-surface-2 px-2.5 py-2">
            <span className="block h-1 w-6 rounded-full" style={{ background: t.c }} />
            <p className="display mt-1.5 text-sm text-ink">{t.v}</p>
            <p className="text-[9px] uppercase tracking-wider text-muted">{t.k}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-2 text-[10px] uppercase tracking-wider text-muted">
          Revenue by chatter · today
        </p>
        <div className="flex flex-col gap-2">
          {bars.map((b) => (
            <div key={b.name} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-[10px] text-ink-2">{b.name}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                <span
                  className="block h-full rounded-full"
                  style={{ width: `${b.pct}%`, background: SERIES.chat }}
                />
              </span>
              <span className="w-12 shrink-0 text-right text-[10px] text-ink">{b.amt}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="border-t border-line pt-2.5 text-[9px] text-muted">
        Every dollar traced to chatter, message and fan.
      </p>
    </div>
  );
}

/* ————— Fan CRM depth ————— */
function CrmPanel() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-dim bg-[radial-gradient(circle_at_35%_30%,rgba(232,203,139,0.35),rgba(151,120,63,0.15))] text-sm font-semibold text-ink">
          M
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[12px] font-medium text-ink">
            Fan #4821
            <span className="rounded bg-[rgba(210,172,97,0.14)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold">
              Whale
            </span>
          </p>
          <p className="text-[9px] text-muted">Subscribed 8 mo · last seen 2h ago</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "Lifetime", v: "$12,480" },
          { k: "Purchases", v: "34" },
          { k: "Avg unlock", v: "$52" },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-line bg-surface-2 px-2 py-1.5">
            <p className="display text-sm text-ink">{s.v}</p>
            <p className="text-[9px] uppercase tracking-wider text-muted">{s.k}</p>
          </div>
        ))}
      </div>

      {/* Spend sparkline */}
      <svg viewBox="0 0 200 40" className="h-10 w-full" preserveAspectRatio="none" aria-hidden>
        <polyline
          points="0,32 25,28 50,30 75,20 100,24 125,12 150,16 175,8 200,10"
          fill="none"
          stroke={SERIES.customs}
          strokeWidth="1.5"
        />
      </svg>

      <div className="flex flex-wrap gap-1.5">
        {["GFE", "Morning person", "Custom buyer", "Voice notes"].map((t) => (
          <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-[10px] text-ink-2">
            {t}
          </span>
        ))}
      </div>

      <p className="border-t border-line pt-2.5 text-[10px] leading-snug text-muted">
        Note: prefers voice notes at night. Anniversary Apr 9. Never sell wrestling PPVs.
      </p>
    </div>
  );
}

const PANELS: Record<string, { tab: string; body: React.ReactNode }> = {
  qa: { tab: "QA", body: <QaPanel /> },
  automation: { tab: "Automation", body: <AutomationPanel /> },
  analytics: { tab: "Analytics", body: <AnalyticsPanel /> },
  crm: { tab: "Fan CRM", body: <CrmPanel /> },
};

export default function MockAltyrPro({
  kind,
  label,
  className = "",
}: {
  kind: keyof typeof PANELS | string;
  label: string;
  className?: string;
}) {
  const panel = PANELS[kind];
  if (!panel) return null;
  return (
    <figure className={`card overflow-hidden ${className}`}>
      <Chrome tab={panel.tab} />
      {panel.body}
      <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">
        {label} <span className="text-muted/70">· illustrative product render</span>
      </figcaption>
    </figure>
  );
}
