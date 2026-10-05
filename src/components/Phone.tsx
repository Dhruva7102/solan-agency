import type { CSSProperties, ReactNode } from "react";

/* The lock-screen parts the whole site is built from: app icons,
   notifications and widgets. Server components, no state. */

export function AppIcon({ app, size = 38 }: { app: "astor" | "locus"; size?: number }) {
  if (app === "locus") {
    // Locus keeps its own colours: it is Altyr's product, shown as itself.
    return (
      <span
        aria-hidden
        style={{ width: size, height: size }}
        className="grid shrink-0 place-items-center rounded-[10px] bg-[linear-gradient(150deg,#c0387a,#e08a38)] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
      >
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4v13h10" />
        </svg>
      </span>
    );
  }
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, fontSize: size * 0.56 }}
      className="display grid shrink-0 place-items-center rounded-[10px] border border-gold-dim/70 bg-[linear-gradient(160deg,#2a2219,#110d09)] text-gold"
    >
      A
    </span>
  );
}

export function Notification({
  app,
  appName,
  title,
  time,
  children,
  index,
  className = "",
}: {
  app: "astor" | "locus";
  appName?: string;
  title?: ReactNode;
  time?: string;
  children: ReactNode;
  /** Arrival order, for the staggered entrance; omit for no entrance. */
  index?: number;
  className?: string;
}) {
  return (
    <article
      className={`glass grid grid-cols-[38px_1fr_auto] gap-x-3 px-4 pb-3.5 pt-3 ${index !== undefined ? "arrive" : ""} ${className}`}
      style={index !== undefined ? ({ "--i": index } as CSSProperties) : undefined}
    >
      <span className="row-span-2 pt-0.5">
        <AppIcon app={app} />
      </span>
      <div className="min-w-0">
        {appName && <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-2/80">{appName}</p>}
        {title && <h3 className="text-[15px] font-semibold leading-snug text-ink">{title}</h3>}
      </div>
      {time ? <span className="pt-0.5 text-[12.5px] text-ink/50">{time}</span> : <span />}
      <div className="col-start-2 col-end-4 mt-1 text-[14.5px] leading-[1.45] text-ink/85">{children}</div>
    </article>
  );
}

/** A display figure with its +, × and ~ set in Jost: Bodoni Moda draws
 *  those as hairlines that vanish at widget size. */
export function Fig({ children }: { children: string }) {
  return (
    <>
      {children.split(/([+×~])/).map((part, i) =>
        /^[+×~]$/.test(part) ? (
          <span key={i} className="font-sans font-normal" style={{ fontSize: "0.78em", marginInline: "0.03em" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Widget({
  value,
  label,
  mini,
  className = "",
  index,
  large = false,
}: {
  value: ReactNode;
  label: ReactNode;
  /** One-line label for phones; the full label shows from sm up. */
  mini?: ReactNode;
  className?: string;
  index?: number;
  large?: boolean;
}) {
  return (
    <div
      className={`glass flex items-center gap-3 px-3.5 py-3 sm:flex-col sm:items-stretch sm:justify-between sm:gap-0 sm:px-4 sm:pb-3.5 sm:pt-3.5 ${index !== undefined ? "wake-in" : ""} ${className}`}
      style={index !== undefined ? ({ "--i": index } as CSSProperties) : undefined}
    >
      <span className={`numeral shrink-0 text-gold-bright ${large ? "text-[3.4rem] sm:text-[4rem]" : "text-[1.75rem] sm:text-[2.15rem]"}`}>{typeof value === "string" ? <Fig>{value}</Fig> : value}</span>
      {mini && <span className="text-[12px] leading-tight text-ink/75 sm:hidden">{mini}</span>}
      <span className={`text-[11px] leading-tight text-ink/70 sm:mt-2 sm:block sm:text-[12px] sm:leading-snug ${mini ? "hidden" : ""}`}>{label}</span>
    </div>
  );
}

export function GoldCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden className="mt-px shrink-0">
      <circle cx="11" cy="11" r="10.25" fill="rgba(210,172,97,0.14)" stroke="var(--gold-dim)" strokeWidth="1" />
      <path d="M6.6 11.3l2.9 2.9 5.9-6.2" fill="none" stroke="var(--gold-bright)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow({ external = false, className = "" }: { external?: boolean; className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`inline-block shrink-0 ${className}`}>
      {external ? <path d="M7 17L17 7M9 7h8v8" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M1 1l6 6-6 6" />
    </svg>
  );
}
