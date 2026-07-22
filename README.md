# Solan — Creator Pitch Site

A password-gated, interactive pitch site for walking creators through the
agency: the Altyr Pro backend (vs Inflow), services & rates, a live revenue
calculator, animated operational flows, the model-control story, and results.

Built with Next.js (App Router) + Tailwind CSS + Framer Motion. Deploys to
Vercel in one click.

> **"Solan" is a placeholder brand.** Swap it in one place — see
> [Renaming the brand](#renaming-the-brand).

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the access gate appears. Default code: **SOLAN**
(case-insensitive). Change it by setting the env var:

```bash
# .env.local
SITE_ACCESS_CODE=your-code-here
```

The gate sets a 30-day cookie. It's a deterrent for casual visitors and
competitors, not a vault — don't put anything truly secret on the site.

## Deploying (Vercel)

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo → deploy
   (no config needed).
3. In Vercel → Project → Settings → Environment Variables, add
   `SITE_ACCESS_CODE` and redeploy.

The site sends `noindex` robots meta, so it won't be indexed even if the URL
leaks.

## Where everything lives

**All copy and data is in [`src/lib/content.ts`](src/lib/content.ts).**
Every page renders from that one file — brand, stats, service tiers and
rates, the Altyr Pro vs Inflow comparison rows, the four operational flows,
the control pillars, case studies, and the booking CTA.

Things waiting on real numbers are marked with `placeholder: true` or
`[bracketed text]`, and render on-site as dashed "placeholder" chips so you
can't accidentally pitch with them unnoticed:

| Placeholder | Where |
|---|---|
| Exact churn/retention % | `HEADLINE_STATS`, `RESULTS.churn` |
| Booking link | `FINAL_CTA.href` — currently a working `mailto:`; swap for Calendly |
| Founder intro video | drop `public/media/intro.mp4` (+ optional `intro-poster.jpg`) |
| Partner names | intentionally anonymous — revealed on calls |

### Dropping in screenshots

Put PNGs in `public/screenshots/` with these exact names and they appear
automatically (until then, styled placeholder frames render):

| File | Used for |
|---|---|
| `ultrapro-qa.png` | Systems → Chatter quality control |
| `ultrapro-automation.png` | Systems → Automation & AI tooling |
| `ultrapro-analytics.png` | Systems → Analytics & transparency |
| `ultrapro-crm.png` | Systems → Fan CRM depth |
| `earnings-newpage.png` | Results → new-page launch ($0 → $37.3k net, 30 days) |
| `earnings-takeover.png` | Results → mid-March takeover ($148k → $222.8k) |
| `earnings-alltime.png` | Results → $2.4M lifetime page (+119% after switch) |
| `earnings-yearbook.png` | Results → year of $60–76k months |
| `chat-1.png` … `chat-3.png` | Process → real pod conversations (4:3 crops) |

Earnings shots: 16:9 crops look best. **Redact fan names/handles in the
chat screenshots before committing** — the "Wi/Mi" avatars, fan display
names, and tag rows are visible in raw captures.

### Renaming the brand

Edit `BRAND` at the top of `src/lib/content.ts` (name, wordmark, tagline).
Colors are CSS variables at the top of `src/app/globals.css` (`--gold`,
surfaces, ink). Fonts are set in `src/app/layout.tsx`.

### Calculator assumptions

`src/components/Calculator.tsx` — the 4× first-month uplift on chat-driven
revenue (agency minimum) is the default of the uplift slider; tier splits
(fixed 15%/30% for single service lines, custom for stacked) are in the `TIERS`
array there and in `SERVICES` in `content.ts`.

## Page map

| Route | Purpose |
|---|---|
| `/` | Positioning, headline stats, manifesto, founder authority |
| `/systems` | Altyr Pro vs Inflow — 4 dimensions, tables + screenshots |
| `/services` | Four tiers with transparent base rates (15% systems, 30% chatting) |
| `/calculator` | Interactive projection with before/after + take-home |
| `/process` | Animated flows: fan DM, escalation chain, first 30 days, weekly rhythm |
| `/control` | The model-control pillars (individual onboarding, no lock-in…) |
| `/results` | Churn stat, case studies, earnings screenshot slots |

## Moving this to its own repo

This project was built as a self-contained orphan branch. To move it into a
fresh `solan-agency` repo, create the empty repo on GitHub (no README), then:

```bash
git clone --branch claude/solan-agency-pitch-site-gvka5i \
  https://github.com/dhruva7102/investors.altyr.git solan-agency
cd solan-agency
git checkout -b main
git remote set-url origin https://github.com/dhruva7102/solan-agency.git
git push -u origin main
```
