import type { ReactNode } from "react";

/* The lock-screen parts the site is built from: app icons, notifications
   and small marks. Server components, no state. */

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
      className="display grid shrink-0 place-items-center rounded-[10px] border border-gold-dim/80 bg-surface text-gold-bright"
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
  className = "",
}: {
  app: "astor" | "locus";
  appName?: string;
  title?: ReactNode;
  time?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`glass grid grid-cols-[38px_1fr_auto] gap-x-3 px-4 pb-3.5 pt-3 ${className}`}>
      <span className="row-span-2 pt-0.5">
        <AppIcon app={app} />
      </span>
      <div className="min-w-0">
        {appName && <p className="text-[12px] text-muted">{appName}</p>}
        {title && <h3 className="text-[15px] font-medium leading-snug text-ink">{title}</h3>}
      </div>
      {time ? <span className="pt-0.5 text-[12.5px] text-muted">{time}</span> : <span />}
      <div className="col-start-2 col-end-4 mt-1 text-[14.5px] leading-[1.45] text-ink/85">{children}</div>
    </article>
  );
}

export function GoldCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden className="mt-px shrink-0">
      <circle cx="11" cy="11" r="10.25" fill="rgba(205,178,131,0.12)" stroke="var(--gold-dim)" strokeWidth="1" />
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
