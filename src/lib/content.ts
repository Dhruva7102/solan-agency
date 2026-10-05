/**
 * ALL site copy and data lives in this file.
 * Edit anything here — pages render from these objects.
 *
 * House rules: the word "agency" never appears in visible copy (legal);
 * the product is "Locus", the company behind it is "Altyr" ("Altyr Pro"
 * is retired); the incumbent competitor is spelled "Infloww"; no claim
 * ships without a receipt behind it.
 */

export const BRAND = {
  name: "Astor",
  wordmark: "ASTOR",
  tagline: "A different type of management.",
  // *asterisks* mark the phrases rendered in gold on the hero.
  subtag:
    "We raised *$1.5M*, built our own infrastructure, and hired out of the industry's best teams, so we can run your page better and *take a smaller cut* doing it, with *every dollar logged and attributed* where you can check it.",
};

/* The external product site — where a creator goes to see the tool in depth. */
export const LOCUS = {
  product: "Locus",
  company: "Altyr",
  url: "https://altyr.com",
  linkLabel: "See Locus in depth at altyr.com",
};

export const NAV_LINKS = [
  { href: "/proof", label: "Proof" },
  { href: "/deal", label: "The Deal" },
] as const;

/* Above the fold: claims about the whole operation. `short` is the
   tightened label used in the hero widgets, where space is scarce; `mini`
   is the one-line label the widgets use on a phone. */
export const HEADLINE_STATS = [
  {
    value: "4×",
    mini: "First-month bar",
    short: "First-month bar on chat-driven revenue",
    label: "The first-month bar for PPV, message and tip revenue",
    sub: "The standard we plan every page around. Many models clear it early.",
  },
  {
    value: "92%+",
    mini: "Model retention",
    short: "Annual model retention across the book",
    label: "Annual model retention",
    sub: "8 in 10 of our models have been with the team for over three years.",
  },
  {
    value: "24/7",
    mini: "A dedicated pod",
    short: "A dedicated pod on your page, every hour",
    label: "Dedicated chatter pod on your page, every hour",
    sub: "Your pod. Your voice. Never a shared queue.",
  },
  {
    value: "100%",
    mini: "Of your page auditable",
    short: "Of your page auditable: every message, sale and shift logged",
    label: "Every message, sale and shift logged and attributed",
    sub: "Ask to see any conversation, any day. Nothing settles in a chat you can't see.",
  },
] as const;

/* Proof strip: real numbers, straight from the dashboards. */
export const HERO_PROOF = {
  items: [
    { value: "$0 → $37.3k", label: "net, first 30 days on a new page" },
    { value: "$222.8k", label: "the month after we took over a flat page" },
    { value: "+119%", label: "on a $2.4M page that had plateaued" },
  ],
  href: "/proof",
  linkLabel: "See the dashboards",
};

/* ————————————————— The four reasons (home sections) ————————————————— */

export const REASONS_STRIP = [
  { id: "rails", num: "01", label: "We built our own rails" },
  { id: "take-less", num: "02", label: "We take less" },
  { id: "no-cage", num: "03", label: "No cage" },
  { id: "exclusive", num: "04", label: "Weapons nobody else has" },
] as const;

export const RAILS = {
  id: "rails",
  eyebrow: "01 · Where the $1.5M went",
  heading: "Every other team rents their software. We built ours.",
  paragraphs: [
    "Nearly every management company in this space runs creator pages through the same off-the-shelf tool, Infloww, usually without telling the model. We went the other way. We raised $1.5M and built Locus, Altyr's chatting and CRM platform: the creator's playbook, prices and hard limits pinned to one side of every conversation, the fan's history and spend on the other, and every message, sale and shift logged and attributed underneath.",
    "And we didn't stop at software. We hired operators out of the top management teams in the industry to run it. You're not signing with a reseller. You're signing with the team that owns the factory.",
  ],
  /* Measured from the live platform, Oct 1 census. Re-measure before
     updating; state counts as "at least N", never inflated. */
  census: {
    note: "Running in production today, measured from the live platform, not projected.",
    items: [
      { value: "445k+", label: "messages through Locus" },
      { value: "167k+", label: "fans in the CRM" },
      { value: "62k+", label: "vault items managed" },
    ],
  },
  panels: [
    { kind: "qa", label: "Locus: shift scorecard and QA view" },
    { kind: "analytics", label: "Locus: live revenue attribution" },
    { kind: "automation", label: "Locus: sequencing and winbacks" },
    { kind: "crm", label: "Locus: fan context and spend history" },
  ],
};

export const TAKE_LESS = {
  id: "take-less",
  eyebrow: "02 · The part nobody else will say",
  heading: "We make less money on you than other management companies. On purpose.",
  paragraphs: [
    "The standard deal in this industry hovers around half your income, for a shared chatter queue, rented software, and a monthly summary you take on faith. Our rates top out at 45%, full-service chatting starts at 30%, and systems-only is 15%. We can charge less because we already spent the money: Locus does work that other teams bill you for in headcount.",
  ],
  note: "Every rate is published here and written into your agreement. No custom quotes. No surprises at onboarding.",
};

/* Them-vs-us, used on the home page and on /deal. */
export const STANDARD_DEAL = {
  theirLabel: "The standard deal",
  ourLabel: "Astor",
  rows: [
    {
      dim: "Your split",
      them: "Around 50%, sometimes more",
      us: "15 / 30 / 40 / 45%: flat, published, in writing",
    },
    {
      dim: "The software",
      them: "Rented: the same Infloww as everyone else",
      us: "Built and owned: Locus, by Altyr",
    },
    {
      dim: "Your visibility",
      them: "Monthly summaries, on trust",
      us: "Every message, sale and shift logged and attributed. Audit any conversation.",
    },
    {
      dim: "The contract",
      them: "Locked terms and exit friction",
      us: "Month to month, 30-day notice, you keep everything",
    },
  ],
};

export const NO_CAGE = {
  id: "no-cage",
  eyebrow: "03 · The contract",
  heading: "Month to month. You stay because we're growing your page, or you go.",
  paragraphs: [
    "Most management companies ask for your trust, then lock the door behind you. We removed the need for both. No lock-in, no exit fees. Thirty days' notice and you leave with your page, your fans, your content and the SOPs we built around you. We don't keep models with paper. We keep them with performance, and the numbers say it works.",
  ],
  retention: "92%+ of our models stay each year. 8 in 10 have been here over three years.",
  promises: [
    "Month to month, either side, thirty days' written notice",
    "Your page, fans, content and SOPs leave with you",
    "Payouts never touch our hands: the platform pays you, we invoice after",
    "Your boundaries live in Locus, pinned above every reply box on every shift",
    "A boundary crossed by us is a same-day walk, written into the agreement",
    "Every rate flat and published, and the contract quotes this site",
  ],
};

export const EXCLUSIVE = {
  id: "exclusive",
  eyebrow: "04 · The exclusives",
  heading: "The tech is ours. The traffic team is ours. Neither is for rent.",
  paragraphs: [
    "Locus is used by no one outside our partner network, so the edge doesn't leak to the teams we compete with. When we build something that sells better, your page gets it and theirs doesn't.",
    "Growth works the same way. Other companies hire the same recycled marketing vendors as everyone else. We invested in our own traffic team and grew it by hand, and it works for our models only. Where your new fans come from is part of what we walk through, with the numbers, on your call.",
  ],
};

/* ————————————————— Who's behind this ————————————————— */

export const FOUNDER_AUTHORITY = {
  eyebrow: "Who's behind this",
  heading: "Three operators. One standard.",
  note: "Names and track records shared on your call, along with an introduction to a creator already on the team.",
  founders: [
    {
      role: "The Chatting Operator",
      desc: "Runs the largest chatting operation in the industry. Their team trains and staffs the chatters behind the biggest pages in the space.",
    },
    {
      role: "The Full-Service Operator",
      desc: "Runs one of the largest full-service management companies in the industry, keeping 92%+ of models year over year. Models who join, stay.",
    },
    {
      role: "The Systems Architect",
      desc: "Built Locus, the chatting, CRM and accountability platform this operation runs on, and the reason the rest of this site isn't marketing.",
    },
  ],
};

/* ————————————————— Services & rates (on /deal) ————————————————— */

export const SERVICES = {
  eyebrow: "Services & rates",
  heading: "Start with what you need. Stack as you grow.",
  intro:
    "Every rate is flat and in writing before anything starts: 15% for Systems & Consulting, 30% for Chatting & Sexting, and 40% for Growth, with a 45% option that adds the full social stack. No custom quotes, no surprises at onboarding.",
  tiers: [
    {
      name: "Systems & Consulting",
      rate: "15%",
      rateNote: "single service line",
      blurb:
        "For models who want to keep running their own page, on professional-grade rails. We set your team up on Locus, build your SOPs, train you, and stay on call.",
      includes: [
        "Locus, configured to your page",
        "Custom SOPs generated around how you work",
        "Pricing architecture & PPV sequencing playbook",
        "Training for you (and your existing chatters)",
        "Ongoing systems support & strategy access",
      ],
    },
    {
      name: "Chatting & Sexting",
      rate: "30%",
      rateNote: "single service line",
      blurb:
        "A dedicated 24/7 chatter pod trained on your voice, your boundaries and your fans. It runs on Locus, with full QA and every conversation logged where you can audit it.",
      includes: [
        "Everything in Systems & Consulting",
        "Dedicated pod: three shifts, round-the-clock coverage",
        "Chatters trained on your persona document",
        "PPV, tips & customs selling with per-fan pricing",
        "Message-level QA audits and chatter scorecards",
        "Full chat-log and revenue-attribution access",
      ],
      featured: true,
    },
    {
      name: "Growth",
      rate: "40%",
      rateNote: "chatting + growth engine",
      blurb:
        "Everything in Chatting & Sexting, plus the growth layer. Content plans built from what actually converts, and our own traffic team keeping new fans arriving.",
      includes: [
        "Everything in Chatting & Sexting",
        "Monthly content plans built from your page's data",
        "Our in-house traffic team on your funnels",
        "Collab finder: vetted creator collabs matched to your niche",
        "Weekly growth reporting with attribution",
      ],
      upgrade: {
        rate: "45%",
        rateNote: "growth + social armor",
        blurb:
          "Everything in Growth, hardened for social. Ban-proof link infrastructure, account-by-account reviews, and content plans built per platform.",
        includes: [
          "Everything in Growth at 40%",
          "Custom-domain link hubs that survive Instagram bans",
          "Social media account reviews, platform by platform",
          "Customized content plans built around your accounts",
          "Weekly growth reporting with attribution",
        ],
      },
    },
  ],
  footnote:
    "Why do stacked rates increase? Because each added service line puts dedicated humans on your page, not because we can. Every rate is flat, published here, and in your agreement in writing.",
};

export const DEAL_PAGE = {
  eyebrow: "The deal",
  heading: "What it costs, and how you leave.",
  intro:
    "The standard split in this industry hovers around half your income. Ours tops out at 45, because we already paid for the machine. Here's the whole arrangement, including the exits.",
  contractHeading: "The contract, in plain English",
  contractIntro:
    "These aren't website promises. Each line below mirrors a clause in the agreement you'd actually sign.",
};

/* ————————————————— Results (on /proof) ————————————————— */

export const RESULTS = {
  eyebrow: "Proof",
  heading: "Every number here came off a dashboard.",
  intro:
    "We'd rather show you real dashboards than adjectives. Everything below is anonymized. Full detail, with names, on your call.",
  churn: {
    stat: "92%+ annual retention",
    desc: "Models who join this team, stay. Management companies lose models when performance stalls and trust breaks. Our retention comes from removing both failure modes, with transparent systems and performance most models have never seen.",
    figures: "80% of models 3+ years with the team · 60% past four years",
  },
  caseStudies: [
    {
      tag: "Launch",
      title: "New page: first 30 days on our systems",
      before: "$0",
      after: "$37.3k net",
      timeframe: "first 30 days",
      story:
        "Page went live mid-April with the pod, pricing architecture and funnel running from day one: 5,700+ subs in the first month, $46.6k gross / $37.3k net, and a top 0.27% creator ranking out of the gate.",
    },
    {
      tag: "Takeover",
      title: "Established page: team takes over mid-March",
      before: "~$2k/day",
      after: "$222.8k/mo",
      timeframe: "the next month",
      story:
        "Flat at roughly $2k a day for months. The team took over on March 17; daily revenue hit $10–20k within two weeks, closing March at $148.4k, then $222.8k in April and $173.5k in May.",
    },
    {
      tag: "Plateau broken",
      title: "$2.4M-lifetime page, stuck, then switched",
      before: "$28.5k/mo",
      after: "$80k+/mo",
      timeframe: "90 days",
      story:
        "A veteran page ($2.4M all-time) plateaued under its old setup: $28.5k in March. On our systems: $35.9k in April, $80.1k in May (+119%), $82.9k in June, with messages driving ~$66k net of it.",
    },
  ],
  screenshots: [
    {
      file: "earnings-newpage.webp",
      label: "Launch: $0 to $37.3k net in the first 30 days (top 0.27%)",
    },
    {
      file: "earnings-takeover.webp",
      label: "Takeover Mar 17: ~$2k/day to $10–20k/day, then $222.8k the next month",
    },
    {
      file: "earnings-alltime.webp",
      label: "$2.4M lifetime page: $28.5k to $80k+/mo after switching (+119%)",
    },
    {
      file: "earnings-yearbook.webp",
      label: "A year of $60–76k months, with messages driving $58k of the last 30 days",
    },
    {
      file: "earnings-last30.webp",
      label: "Last 30 days on a top-0.16% page: $84.2k, with messages driving $66.6k net",
    },
  ],
};

/* Chat receipts, shown on /proof under the earnings dashboards. */
export const CHAT_EXAMPLES = {
  eyebrow: "The real thing",
  heading: "Actual conversations, run by our pods.",
  intro:
    "Not scripts. These are live conversations from pages the founding team runs today. Notice the pacing: rapport first, persona held, the PPV landing inside the conversation. Fan names and media are redacted, and the messages are blurred on this public page; we'll walk you through them on your call.",
  shots: [
    { file: "chat-1.webp", label: "Morning check-in → $40 PPV unlock, in persona" },
    { file: "chat-2.webp", label: "Custom request handled: $350 prospect logged in Locus" },
    { file: "chat-3.webp", label: "Escalating session: sequenced sends, each one paid" },
  ],
};

/* ————————————————— Creator voices —————————————————
   Deliberately empty until real, permissioned quotes come back from
   models on the founding team's books: never write these for them.
   The section renders only for items without `sample: true`. */

export const TESTIMONIALS = {
  eyebrow: "In their words",
  heading: "The models already on these systems.",
  intro:
    "Anonymised at their request. On your call we'll connect you directly with a creator currently on the team, so you can ask whatever you want without us in the room.",
  /* PLACEHOLDER COPY — illustrative only. These are not endorsements: no
     model has said these words. Replace each with a real, permissioned
     quote (and its attribution) before removing the sample flag. */
  items: [
    {
      quote:
        "I'd been through two other teams before this. The difference is I can ask to see any conversation on my page and actually get it, same day. I never have to wonder how I'm doing.",
      attribution: "",
      sample: true,
    },
    {
      quote:
        "I was doing about $28k a month and I genuinely thought that was my ceiling. Month three we cleared $80k, on the same content library I already had.",
      attribution: "",
      sample: true,
    },
    {
      quote:
        "My boundaries are written into the software, not remembered by whoever's on shift. In a year nobody has crossed one, and I've read the logs to check.",
      attribution: "",
      sample: true,
    },
  ],
};

/* ————————————————— What the intro call actually is ————————————————— */

export const CALL_EXPECT = {
  eyebrow: "Before you book",
  heading: "What actually happens on the call.",
  steps: [
    {
      title: "Thirty minutes, on video or not",
      desc: "Your call, your camera preference. One of the founders, not a salesperson working from a script.",
    },
    {
      title: "We walk your real page through Locus",
      desc: "The live console, on your page's actual numbers, not a slide deck. We'll tell you where the money is being left, whether or not you work with us.",
    },
    {
      title: "You talk to a creator already on the team",
      desc: "We'll connect you with a model currently on these systems so you can ask them the things you'd never ask us.",
    },
    {
      title: "You leave with the numbers either way",
      desc: "No contract on the call, no pressure, no follow-up spam. If it's not a fit, we'll say so first.",
    },
  ],
};

/* ————————————————— FAQ ————————————————— */

export const FAQ = {
  eyebrow: "Fair questions",
  heading: "The things models actually ask us.",
  items: [
    {
      q: "Can I talk to a model who actually works with you?",
      a: "Yes, and we'll offer before you ask. On your intro call we connect you with a creator currently on these systems, and you talk to them without us in the room. Ask them anything: what the money really did, whether the chatters sound like them, what they'd change. Nobody who's hiding something makes that offer.",
    },
    {
      q: "I already have chatters I trust. Do I have to give them up?",
      a: "No. That's exactly what the Systems & Consulting tier is for: we put your existing team on Locus, build your SOPs, and train them. Plenty of models blend the two: your chatters keep their shifts, our pod covers nights and overflow. You choose the mix.",
    },
    {
      q: "How fast do I actually see results?",
      a: "Your pod goes live after thorough onboarding, supervised. 4× on chat-driven revenue is the first-month bar we work to, measured against your own pre-Astor baseline at the day-30 review, and your weekly numbers arrive in writing from the same records we work from.",
    },
    {
      q: "What can the chatters see, and can they go rogue?",
      a: "Chatters work inside Locus with your playbook and your hard limits pinned to the conversation (prices, boundaries, what the team may never offer), and every message they send is logged, attributed and QA-scored. Anything outside your SOPs escalates to a human with authority instead of being improvised. You can ask to audit any conversation, any time.",
    },
    {
      q: "What happens if I want to leave?",
      a: "You leave, cleanly. No lock-in contracts. Your page, your fans, your content and the SOPs we built around you go with you. We keep models by performing; retention through paperwork is how the rest of the industry earned its reputation.",
    },
  ],
};

/* ————————————————— Calculator (on /deal) ————————————————— */

export const CALC = {
  eyebrow: "Revenue calculator",
  heading: "What your page looks like on our systems.",
  intro:
    "Put in where your page is today. The projection applies our first-month bar, 4× on PPV, message and tip revenue, and you can adjust it along with everything else. This is a model, not a promise. Your real plan gets built at onboarding.",
  upliftNote:
    "4× is the first-month uplift we plan every page around (PPV, messages, tips). Many models see more.",
};

export const FINAL_CTA = {
  heading: "See it with your own numbers.",
  body: "Book a call and we'll walk your actual page through Locus live, on the same console our team runs on, pointed at your numbers.",
  button: "Book your call",
  href: "https://calendly.com/solandennis/30min",
};

/* Intro video on the home page — drop media/intro.mp4 (and optionally
   media/intro-poster.jpg) into /public to activate it. */
export const INTRO_VIDEO = {
  eyebrow: "Two minutes, from the founders",
  heading: "Watch this before you scroll.",
  file: "intro.mp4",
  poster: "intro-poster.jpg",
  caption:
    "The short version of everything on this site: who we are, what Locus is, and why models don't leave.",
};
