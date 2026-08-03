"use client";

import { useState } from "react";

type TierVariant = {
  rate: string;
  rateNote: string;
  blurb: string;
  includes: readonly string[];
};

export type Tier = TierVariant & {
  name: string;
  featured?: boolean;
  /** Optional higher-rate variant, shown behind a rate toggle. */
  upgrade?: TierVariant;
};

export default function TierCard({ tier }: { tier: Tier }) {
  const [upgraded, setUpgraded] = useState(false);
  const active: TierVariant = upgraded && tier.upgrade ? tier.upgrade : tier;

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-7 ${
        tier.featured
          ? "border-gold-dim bg-[linear-gradient(180deg,rgba(210,172,97,0.08),rgba(18,18,26,0.4))]"
          : "card"
      }`}
    >
      {tier.featured && (
        <p className="eyebrow mb-4 !text-[10px]">Most common start</p>
      )}
      <div className="flex items-center justify-between gap-3">
        <h2 className="display text-xl text-ink">{tier.name}</h2>
        {tier.upgrade && (
          <div
            role="group"
            aria-label={`${tier.name} rate`}
            className="flex rounded-full border border-line p-0.5 text-xs"
          >
            {[tier.rate, tier.upgrade.rate].map((rate, i) => {
              const selected = (i === 1) === upgraded;
              return (
                <button
                  key={rate}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setUpgraded(i === 1)}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    selected
                      ? "bg-[rgba(210,172,97,0.15)] text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {rate}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="display gold-text text-4xl">{active.rate}</span>
        <span className="text-xs text-muted">{active.rateNote}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-2">{active.blurb}</p>
      <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
        {active.includes.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13px] leading-snug text-ink-2"
          >
            <span className="mt-0.5 text-gold" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
