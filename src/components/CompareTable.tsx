import type { CompareDimension } from "@/lib/content";

type Rows = CompareDimension["rows"];
type Level = Rows[number]["ultrapro"]["level"];

function LevelMark({ level }: { level: Level }) {
  if (level === "full") {
    return (
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(210,172,97,0.15)] text-[11px] font-bold text-gold"
        aria-label="Full support"
      >
        ✓
      </span>
    );
  }
  if (level === "partial") {
    return (
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-line-strong text-[11px] text-ink-2"
        aria-label="Partial support"
      >
        ~
      </span>
    );
  }
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-line text-[11px] text-muted"
      aria-label="Not supported"
    >
      —
    </span>
  );
}

export default function CompareTable({ rows }: { rows: Rows }) {
  return (
    <div className="card overflow-x-auto">
      <div className="min-w-[560px]">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-line bg-surface-2 text-xs font-semibold">
        <div className="px-5 py-3.5 text-muted">Capability</div>
        <div className="border-l border-line px-5 py-3.5 text-gold">
          Ultra Pro <span className="ml-1 font-normal text-muted">(us)</span>
        </div>
        <div className="border-l border-line px-5 py-3.5 text-ink-2">
          Inflow <span className="ml-1 font-normal text-muted">(most agencies)</span>
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.feature}
          className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-line text-sm last:border-b-0"
        >
          <div className="px-5 py-4 font-medium text-ink">{row.feature}</div>
          <div className="border-l border-line px-5 py-4">
            <div className="flex items-start gap-2.5">
              <LevelMark level={row.ultrapro.level} />
              <p className="text-xs leading-relaxed text-ink-2">
                {row.ultrapro.note}
              </p>
            </div>
          </div>
          <div className="border-l border-line px-5 py-4">
            <div className="flex items-start gap-2.5">
              <LevelMark level={row.inflow.level} />
              <p className="text-xs leading-relaxed text-muted">
                {row.inflow.note}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
