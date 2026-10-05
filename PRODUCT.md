# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

OnlyFans creators ("models") deciding whether to hand their page, or part of its work, to a management team. Most already earn from an established page, and many have worked with another team before. They come from a link in a social bio or one Solan sends, often on a phone. They want to know three things: whether this team will make them more money, what it costs, and whether they can leave.

## Product Purpose

Astor is a creator management company. This site is its public front door. Its single job is to get a creator to book a 30-minute intro call (Calendly, `solandennis/30min`). Success is a booked call from a creator who already understands the rates, the contract and the proof before the call starts.

## Positioning

Astor runs pages on software it built and owns, Locus (made by Altyr). Most teams in this space rent the same tool, Infloww. Because the machine is already paid for, Astor publishes flat rates below the industry's usual cut of about half: 15% / 30% / 40% / 45%. Contracts run month to month with 30 days' notice, and every message, sale and shift is logged where the creator can audit it. Astor also has its own in-house traffic team that works only for its models.

## Operating Context

- Pages:
  - `/` makes the case through four reasons: we built our own rails, we take less, no cage, and exclusives nobody else has.
  - `/deal` covers the rates, the contract and a revenue calculator.
  - `/proof` shows earnings dashboards, case studies and chat receipts.
- The close is always a booked call. On that call a founder walks the creator's real page through Locus, and they meet a creator already on the team.
- The site is public: indexed and linked from social bios. Until 10/04 it sat behind an access code, and the "confidential" and "access code" wording is left over from that.

## Capabilities and Constraints

- **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4 and Framer Motion, deployed on Vercel.
- **Deploys:** a GitHub Action deploys to production on every push to `main`. Feature branches do not deploy.
- **Copy:** all copy and data live in `src/lib/content.ts`, and every page renders from that file.
- **Components:**
  - an interactive revenue calculator: inputs, presets, an uplift assumption, a stacked bar, a 12-month trajectory and a tier picker
  - Locus product panels
  - a them-vs-us deal table
  - tier cards with a 40% / 45% toggle
  - an FAQ
  - the "what happens on the call" steps
- **Hidden until real material exists:** testimonials (all sample) and the intro video (no file yet).

## Brand Commitments

- **Name:** Astor. Wordmark: ASTOR. Tagline: "A different type of management."
- **Astor is its own brand.** It does not take on Altyr's Obsidian Clarity design language. Locus screens shown on the site still look like Locus.
- **The colour scheme is pinned** (user, 10/04: "keep the current gold color scheme, just the UI elements and design"). That means the warm near-black grounds, the gold family (`--gold` #d2ac61, `--gold-bright` #f2dda9, `--gold-dim` #8f7137) on warm ink (#f7f2e7), and the ember atmosphere (#6e2440). Layout, type, components and motion are open to redesign.
- **Naming rules:**
  - The word "agency" never appears in visible copy (legal).
  - The product is "Locus" and the company behind it is "Altyr". "Altyr Pro" is retired.
  - The competitor is spelled "Infloww".
- **Claims:** no claim ships without a receipt behind it.
- **Testimonials:** only real, permissioned quotes. Never write quotes for creators.

## Evidence on Hand

- **Earnings dashboards** (anonymized) in `public/screenshots/`:
  - `earnings-newpage`: $0 → $37.3k net in the first 30 days
  - `earnings-takeover`: ~$2k/day → $222.8k the next month
  - `earnings-alltime`: a $2.4M lifetime page, $28.5k → $80k+/mo, +119%
  - `earnings-yearbook`
  - `earnings-last30`: $84.2k on a top-0.16% page
- **Chat receipts:** `chat-1` to `chat-3`, redacted.
- **Platform census, measured 10/01:** 445k+ messages through Locus, 167k+ fans in the CRM, 62k+ vault items. State these as "at least N" and never round up.
- **Retention:** 92%+ annually. 80% of models have stayed 3+ years and 60% past four years.
- **Funding:** $1.5M raised.
- **Absent, and must not be invented:**
  - founder names and photos (shared on the call)
  - testimonials
  - the intro video
  - partner and creator names

## Product Principles

- **Prove, don't claim.** A dashboard, a log or a published rate beats an adjective.
- **Publish the terms.** Rates, splits and the way out are on the page and in the contract, identical.
- **The creator keeps control.** Their boundaries, their page, their fans and their exit belong to them.
- **One action.** Every path ends at a booked call.

## Accessibility & Inclusion

- WCAG AA contrast and a full keyboard path, including through the calculator.
- Mobile first: most visitors arrive from a social bio on a phone.
- Copy speaks to models of any gender. Some lines refer to a creator as "her", which is worth flagging to Solan.
