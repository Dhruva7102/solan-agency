"use client";

import { useState } from "react";
import { GoldCheck } from "./Phone";

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

/** One plan, set like a plan on an iPhone's subscription screen: the rate
 *  large, what's in it as a checked list, and a segmented control where a
 *  plan has two rates. */
export default function TierCard({ tier }: { tier: Tier }) {
  const [upgraded, setUpgraded] = useState(false);
  const active: TierVariant = upgraded && tier.upgrade ? tier.upgrade : tier;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[var(--r-widget)] border p-6 sm:p-7 ${
        tier.featured
          ? "border-gold-dim/70 bg-surface-2 shadow-[0_30px_60px_-36px_rgba(0,0,0,1)]"
          : "card"
      }`}
    >
      {tier.featured && (
        <p className="-mx-6 -mt-6 mb-5 border-b border-gold-dim/50 py-2 text-center text-[12.5px] text-gold-bright sm:-mx-7 sm:-mt-7">
          Most common start
        </p>
      )}
      <div className="flex min-h-9 items-center justify-between gap-3">
        <h2 className="text-[17px] font-medium text-ink">{tier.name}</h2>
        {tier.upgrade && (
          <div role="group" aria-label={`${tier.name} rate`} className="segmented">
            {[tier.rate, tier.upgrade.rate].map((rate, i) => {
              const selected = (i === 1) === upgraded;
              return (
                <button key={rate} type="button" aria-pressed={selected} onClick={() => setUpgraded(i === 1)}>
                  {rate}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <span className="numeral text-[3.6rem] text-gold-bright">{active.rate}</span>
        <span className="text-[12px] uppercase tracking-[0.14em] text-muted">{active.rateNote}</span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{active.blurb}</p>
      <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
        {active.includes.map((item) => (
          <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink">
            <GoldCheck />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
