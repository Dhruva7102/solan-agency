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
          ? "border-gold-dim bg-[linear-gradient(180deg,rgba(210,172,97,0.1),rgba(21,18,15,0.9)_45%)] shadow-[0_0_0_1px_rgba(210,172,97,0.15),0_30px_60px_-36px_rgba(0,0,0,1)]"
          : "card"
      }`}
    >
      {tier.featured && (
        <p className="-mx-6 -mt-6 mb-5 bg-gold/15 py-2 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-gold-bright sm:-mx-7 sm:-mt-7">
          Most common start
        </p>
      )}
      <div className="flex min-h-9 items-center justify-between gap-3">
        <h2 className="text-[17px] font-semibold text-ink">{tier.name}</h2>
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
        <span className="numeral gold-text text-[4.2rem]">{active.rate}</span>
        <span className="text-[12px] uppercase tracking-[0.18em] text-muted">{active.rateNote}</span>
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
