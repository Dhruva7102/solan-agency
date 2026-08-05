/**
 * ALL site copy and data lives in this file.
 * Edit anything here — pages render from these objects.
 *
 * Items marked `placeholder: true` (or containing "[ ... ]") are slots
 * waiting on real numbers/screenshots from the founders.
 */

export const BRAND = {
  // Placeholder brand — swap these three lines when the name is decided.
  name: "Astor",
  wordmark: "ASTOR",
  tagline: "A different type of management.",
  // *asterisks* mark the phrases rendered in gold on the hero.
  subtag:
    "The operators behind the industry's *largest chatting operation* and one of its top full-service management companies, running your page on *$1.5M* of purpose-built infrastructure, with *every dollar visible to you, live*.",
};

/* Proof strip under the hero: real numbers, straight from the dashboards. */
export const HERO_PROOF = {
  items: [
    { value: "$0 → $37.3k", label: "net, first 30 days on a new page" },
    { value: "$222.8k", label: "the month after we took over a flat page" },
    { value: "+119%", label: "on a $2.4M page that had plateaued" },
  ],
  href: "/results",
  linkLabel: "See the dashboards",
};

export const NAV_LINKS = [
  { href: "/systems", label: "The Backend" },
  { href: "/services", label: "Services & Rates" },
  { href: "/calculator", label: "Calculator" },
  { href: "/process", label: "How We Operate" },
  { href: "/control", label: "Your Control" },
  { href: "/results", label: "Results" },
] as const;

/* These sit directly under the hero: claims about the whole operation,
   which carry further than any single page's dashboard. `short` is the
   tightened label used in the hero strip, where space is scarce. */
export const HEADLINE_STATS = [
  {
    value: "4×",
    short: "First-month bar on chat-driven revenue",
    label: "The first-month bar for PPV, message and tip revenue",
    sub: "The standard we plan every page around. Many models clear it early.",
  },
  {
    value: "92%+",
    short: "Annual model retention across the book",
    label: "Annual model retention",
    sub: "8 in 10 of our models have been with the team for over three years.",
  },
  {
    value: "24/7",
    short: "A dedicated pod on your page, every hour",
    label: "Dedicated chatter pod on your page, every hour",
    sub: "Your pod. Your voice. Never a shared queue.",
  },
  {
    value: "100%",
    short: "Dashboard transparency: you see what we see",
    label: "Dashboard transparency: you see what we see",
    sub: "Live revenue attribution, chat logs, chatter scorecards.",
  },
] as const;

export const MANIFESTO = {
  eyebrow: "Why we exist",
  heading: "Most management companies ask for your trust. We removed the need for it.",
  paragraphs: [
    "The management model is broken in one specific way. Models hand over their page, their fans and their income to systems they can't see, run by people they've never met. When it works, they don't know why. When it stops working, they can't prove it.",
    "There's a reason it works that way. Nearly every management company in the space runs creator pages through the same off-the-shelf software, Inflow, and Inflow was never built to show you anything. So we raised $1.5M and built our own. Altyr Pro is a CRM, chatting and automation platform used by no one outside our partner network, and every message, every sale and every chatter's shift on it gets logged, attributed and shown to you in real time.",
    "We onboard every model individually. We learn your story, how you speak, what you will and won't sell, and how you want your page run. Then we build SOPs around you. We can do that because we built the infrastructure for it. Nobody else has.",
  ],
};

export const FOUNDER_AUTHORITY = {
  eyebrow: "Who's behind this",
  heading: "Three operators. One standard.",
  note: "Names and track records shared on your call, along with an introduction to a creator already on the team.",
  founders: [
    {
      role: "The Chatting Operator",
      desc: "Runs the largest chatting operation in the industry. His team trains and staffs the chatters behind the biggest pages in the space.",
    },
    {
      role: "The Full-Service Operator",
      desc: "Runs one of the largest full-service management companies in the industry, with the lowest model churn in the space. Models who join, stay.",
    },
    {
      role: "The Systems Architect",
      desc: "Built the infrastructure this operation runs on, including the onboarding, SOP and transparency layer no one else can offer.",
    },
  ],
};

/* ————————————————— Services & rates ————————————————— */

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
        "For models who want to keep running their own page, on professional-grade rails. We install and configure Altyr Pro, build your SOPs, train you and your team, and stay on call.",
      includes: [
        "Altyr Pro setup, configured to your page",
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
        "A dedicated 24/7 chatter pod trained on your voice, your boundaries and your fans. It runs on Altyr Pro, with full QA and every conversation visible to you.",
      includes: [
        "Everything in Systems & Consulting",
        "Dedicated pod: three shifts, round-the-clock coverage",
        "Chatters trained on your persona document",
        "PPV, tips & customs selling with per-fan pricing",
        "Message-level QA audits and chatter scorecards",
        "Full chat log and revenue attribution access",
      ],
      featured: true,
    },
    {
      name: "Growth",
      rate: "40%",
      rateNote: "chatting + growth engine",
      blurb:
        "Everything in Chatting & Sexting, plus the growth layer. Content plans built from what actually converts, and a collab engine that keeps new fans arriving.",
      includes: [
        "Everything in Chatting & Sexting",
        "Monthly content plans built from your page's data",
        "Collab finder: vetted creator collabs matched to your niche",
        "Multi-platform marketing funnels",
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

/* ————————————————— Altyr Pro vs Inflow ————————————————— */

type Cell = { level: "full" | "partial" | "none"; note: string };

export type CompareDimension = {
  key: string;
  title: string;
  pitch: string;
  /** The same claim in the model's own terms, not operator jargon. */
  youGet: string;
  /** Ties the capability to a real number on the Results page. */
  receipt?: { text: string; href: string };
  screenshot: { file: string; label: string };
  rows: { feature: string; ultrapro: Cell; inflow: Cell }[];
};

export const ULTRAPRO = {
  eyebrow: "The backend",
  heading: "Every other team runs on Inflow. We built our own.",
  intro:
    "Inflow is the industry standard: the off-the-shelf software nearly every management company in the space runs creator pages through, usually without telling the model. We raised $1.5M and built the alternative. Altyr Pro is used by no one outside our partner network, so this isn't us against one competitor, it's us against the tooling every other team has. Here's the difference, dimension by dimension.",
  note: "The panels below are faithful renders of the views our team works in. You'll see the live product, running on your own page's data, on your call.",
  disclaimer:
    "Comparison reflects our operating experience across both platforms. Verify current Inflow capabilities independently.",
};

export const COMPARE_DIMENSIONS: CompareDimension[] = [
  {
    key: "qa",
    title: "Chatter quality control",
    pitch:
      "The single biggest fear models have, 'will the chatters sound like me?', is an engineering problem, and Altyr Pro solved it. Every conversation is auditable at message level, every chatter carries a scorecard, and your persona document is enforced, not suggested.",
    youGet:
      "What that means for you: nobody talks to your fans in a way you didn't approve. Your hard limits are enforced by the software before a message sends, and you can pull up any conversation on your page whenever you want, without asking anyone.",
    receipt: {
      text: "This is why models stay: 92%+ annual retention, 8 in 10 past three years.",
      href: "/results",
    },
    screenshot: { file: "ultrapro-qa.png", label: "Altyr Pro: message-level QA view" },
    rows: [
      {
        feature: "Message-level QA auditing",
        ultrapro: { level: "full", note: "Every message reviewable, scored against your persona doc" },
        inflow: { level: "partial", note: "Chat history visible; no structured QA layer" },
      },
      {
        feature: "Chatter scorecards & rankings",
        ultrapro: { level: "full", note: "Revenue, response time, QA score per chatter per shift" },
        inflow: { level: "partial", note: "Basic per-chatter sales tracking" },
      },
      {
        feature: "Script, tone & boundary enforcement",
        ultrapro: { level: "full", note: "Your hard limits live in the workflow, flagged before send, not after" },
        inflow: { level: "none", note: "Relies on chatter memory and management follow-up" },
      },
      {
        feature: "Model-visible QA results",
        ultrapro: { level: "full", note: "You can audit any conversation on your page, any time" },
        inflow: { level: "none", note: "QA, where it exists, is internal to the company" },
      },
    ],
  },
  {
    key: "automation",
    title: "Automation & AI tooling",
    pitch:
      "Revenue on your page shouldn't depend on whether tonight's shift is having a good night. Altyr Pro sequences PPV sends, follow-ups and re-engagement automatically. Chatters close; the system never forgets.",
    youGet:
      "So your income stops depending on who happens to be on shift. Fans who went quiet get pulled back. Unopened PPVs get followed up. Every fan sees the price he actually buys at, whether that's a Tuesday afternoon or 4am on a holiday.",
    receipt: {
      text: "This engine is what took a flat page from ~$2k/day to $10–20k/day in two weeks.",
      href: "/results",
    },
    screenshot: { file: "ultrapro-automation.png", label: "Altyr Pro: automation and sequencing" },
    rows: [
      {
        feature: "Mass DM with fan segmentation",
        ultrapro: { level: "full", note: "Segments by spend tier, activity, purchase history" },
        inflow: { level: "partial", note: "Mass messaging with basic list filtering" },
      },
      {
        feature: "PPV sequencing & smart pricing",
        ultrapro: { level: "full", note: "Per-fan price points based on spend history" },
        inflow: { level: "partial", note: "Manual pricing; chatter judgment only" },
      },
      {
        feature: "Automated follow-ups & re-engagement",
        ultrapro: { level: "full", note: "Expired-fan winbacks, unopened-PPV nudges, silent-whale alerts" },
        inflow: { level: "none", note: "Follow-up depends on chatter initiative" },
      },
      {
        feature: "AI-assisted chatter workflows",
        ultrapro: { level: "full", note: "Draft assistance and context recall inside the chat view" },
        inflow: { level: "none", note: "No native AI assistance layer" },
      },
    ],
  },
  {
    key: "analytics",
    title: "Analytics & transparency",
    pitch:
      "This is where 'a different type of management' stops being a slogan. Altyr Pro gives you the same live dashboard we work from, with revenue attributed to every chatter, every send and every fan. You never have to ask how your page is doing, or take our word for it.",
    youGet:
      "Which means you never wait for a summary, and never have to trust a number someone typed into a message. You open the same screen we do and see what we see, at the moment we see it.",
    receipt: {
      text: "Every figure on our Results page was read off this dashboard.",
      href: "/results",
    },
    screenshot: { file: "ultrapro-analytics.png", label: "Altyr Pro: live revenue attribution" },
    rows: [
      {
        feature: "Real-time revenue attribution",
        ultrapro: { level: "full", note: "Every dollar traced to the chatter, message and fan" },
        inflow: { level: "partial", note: "Aggregate sales reporting; limited attribution depth" },
      },
      {
        feature: "Model-facing live dashboard",
        ultrapro: { level: "full", note: "You see what we see: same data, same time" },
        inflow: { level: "none", note: "Reporting is management-side; models get summaries" },
      },
      {
        feature: "Fan spend analytics & whale tracking",
        ultrapro: { level: "full", note: "Top-spender movement, cohort trends, at-risk alerts" },
        inflow: { level: "partial", note: "Top-fan lists without behavioral analytics" },
      },
      {
        feature: "Chatter performance over time",
        ultrapro: { level: "full", note: "Shift-by-shift trends; underperformance is visible in days" },
        inflow: { level: "partial", note: "Point-in-time sales figures" },
      },
    ],
  },
  {
    key: "crm",
    title: "Fan CRM depth",
    pitch:
      "Your top fans notice when 'you' forget their name between shifts. Altyr Pro's fan CRM keeps every profile, preference and inside joke persistent, so the 4am chatter picks up exactly where the 8pm chatter left off.",
    youGet:
      "Practically, your biggest spenders never get that 'who is this?' feeling. Whoever is on shift already knows his name, what he's bought, what he likes and what you talked about last week. The relationship that makes him spend survives the shift change.",
    receipt: {
      text: "A $2.4M-lifetime page had plateaued at $28.5k/mo. On these systems: $80k+ (+119%).",
      href: "/results",
    },
    screenshot: { file: "ultrapro-crm.png", label: "Altyr Pro: fan profile and spend history" },
    rows: [
      {
        feature: "Persistent fan profiles across shifts",
        ultrapro: { level: "full", note: "Notes, preferences and history load with every conversation" },
        inflow: { level: "partial", note: "Basic notes; consistency depends on chatter discipline" },
      },
      {
        feature: "Complete spend history per fan",
        ultrapro: { level: "full", note: "Every purchase, tip and custom: a lifetime view" },
        inflow: { level: "partial", note: "Recent transaction visibility" },
      },
      {
        feature: "Whale identification & prioritization",
        ultrapro: { level: "full", note: "High-value fans surfaced automatically at shift start" },
        inflow: { level: "partial", note: "Manual top-fan lists" },
      },
      {
        feature: "Custom-content request pipeline",
        ultrapro: { level: "full", note: "Requests tracked from ask → your approval → delivery → payment" },
        inflow: { level: "none", note: "Customs live in chat threads and spreadsheets" },
      },
    ],
  },
];

/* ————————————————— Flows (How we operate) ————————————————— */

export type FlowStep = {
  actor: "fan" | "chatter" | "system" | "lead" | "manager" | "model";
  title: string;
  desc: string;
  time?: string;
};

export type Flow = {
  key: string;
  label: string;
  heading: string;
  intro: string;
  steps: FlowStep[];
  footnote?: string;
};

export const ACTORS: Record<
  FlowStep["actor"],
  { label: string; color: string }
> = {
  fan: { label: "Fan", color: "#4c86d8" },
  chatter: { label: "Chatter", color: "#b9831f" },
  system: { label: "Altyr Pro", color: "#8a8478" },
  lead: { label: "Pod Lead", color: "#c24e7e" },
  manager: { label: "Manager", color: "#2e9b5e" },
  model: { label: "You", color: "#d2ac61" },
};

export const FLOWS: Flow[] = [
  {
    key: "fan-journey",
    label: "A fan messages at midnight",
    heading: "What actually happens when a fan DMs your page",
    intro:
      "Follow one message through the system, from a fan's late-night DM to a closed sale, past every quality checkpoint on the way.",
    steps: [
      {
        actor: "fan",
        time: "11:47 PM",
        title: "A fan sends a DM",
        desc: "\"hey, been thinking about you all day…\" A mid-tier spender who bought two PPVs last month, then went quiet for nine days.",
      },
      {
        actor: "system",
        time: "11:47 PM",
        title: "Altyr Pro loads his full profile",
        desc: "Spend history, preferences, past conversations, the nickname he likes, the price point he converts at. All of it sits beside the chat before a word is typed.",
      },
      {
        actor: "chatter",
        time: "11:49 PM",
        title: "Your night-shift chatter replies, as you",
        desc: "She's trained on your persona document, down to your phrasing, your emoji habits and your hard boundaries. Response time is tracked, and the pod's standard is minutes rather than hours.",
      },
      {
        actor: "chatter",
        time: "12:04 AM",
        title: "Rapport first, per your SOP",
        desc: "No cold PPV spam. The conversation builds the way you'd build it. The sequencing rules for this fan segment come from your onboarding, not a generic script.",
      },
      {
        actor: "system",
        time: "12:18 AM",
        title: "The right PPV, at his price",
        desc: "Altyr Pro suggests content he hasn't seen at the price band he historically converts at. The chatter sends it wrapped in the conversation, not as a broadcast.",
      },
      {
        actor: "fan",
        time: "12:21 AM",
        title: "Unlocked, and logged",
        desc: "The sale is attributed to this chatter, this conversation, this fan. His profile updates. The revenue shows on your live dashboard immediately.",
      },
      {
        actor: "lead",
        time: "Next morning",
        title: "QA reviews the conversation",
        desc: "The pod lead scores it against your persona doc for tone, boundaries and sequencing. Those scores roll into the chatter's scorecard, which you can see any time.",
      },
    ],
    footnote: "Every conversation on your page runs through this loop. You can audit any of them, whenever you want.",
  },
  {
    key: "escalation",
    label: "When something needs a human call",
    heading: "The escalation chain: who decides what, and when you're looped in",
    intro:
      "Chatters close sales; they don't make judgment calls about your page. Anything outside your SOP moves up a defined chain with response-time standards at every level.",
    steps: [
      {
        actor: "chatter",
        title: "Level 1: the chatter flags it",
        time: "Immediately",
        desc: "A fan asks for something outside your boundaries doc, disputes a payment, or makes an unusual request. The chatter doesn't improvise. It's flagged in Altyr Pro and the conversation is tagged.",
      },
      {
        actor: "lead",
        title: "Level 2: the pod lead takes over",
        time: "Within minutes",
        desc: "Your pod lead, the senior chatter across your three shifts, handles anything your SOPs already cover. Refund policy, boundary reinforcement, a difficult fan. Most escalations end here.",
      },
      {
        actor: "manager",
        title: "Level 3: your account manager decides",
        time: "Same day",
        desc: "Anything touching money, strategy or your reputation. Pricing exceptions, big custom requests, platform trouble. Your manager resolves it and logs the decision.",
      },
      {
        actor: "model",
        title: "Level 4: you, and only when it's actually yours",
        time: "Your rules",
        desc: "New boundary territory, large customs needing your sign-off, anything touching your personal life. You set the list of what reaches you at onboarding, and you can change it any time.",
      },
      {
        actor: "system",
        title: "Every escalation leaves a paper trail",
        desc: "Who flagged it, who decided, and what they decided. All of it logged in Altyr Pro and visible to you. Nothing about your page gets settled in a group chat you can't see.",
      },
    ],
    footnote: "24/7 coverage means the chain works at 4 AM on a Sunday exactly like it works on a Tuesday afternoon.",
  },
  {
    key: "onboarding",
    label: "Your first 30 days",
    heading: "Onboarding, built around you, one model at a time",
    intro:
      "We don't drop you into a template. The first month builds the systems your page will run on, starting with understanding you.",
    steps: [
      {
        actor: "model",
        time: "Days 0–3",
        title: "The deep-dive",
        desc: "A long-form onboarding session covering your story, your voice, your fans, your boundaries, your goals and how involved you want to be. Everything else gets built from that.",
      },
      {
        actor: "manager",
        time: "Days 3–7",
        title: "Your SOPs are generated",
        desc: "Persona document, boundaries doc, pricing architecture, escalation rules. Operating procedures for your page, written down and reviewed with you line by line. You approve them before anything goes live.",
      },
      {
        actor: "system",
        time: "Week 2",
        title: "Altyr Pro is configured for your page",
        desc: "Fan data imported, segments built, automation sequences set to your pricing architecture, your dashboard access provisioned. Your page's history becomes usable intelligence.",
      },
      {
        actor: "lead",
        time: "Week 2–3",
        title: "Your pod trains on you",
        desc: "Your dedicated chatters study your persona doc, your past conversations and your content library, then run supervised practice until the pod lead signs off that they sound like you.",
      },
      {
        actor: "chatter",
        time: "Week 3",
        title: "Supervised go-live",
        desc: "The pod takes over live conversations with the lead reviewing in real time. QA runs at maximum intensity while the system calibrates to your fans' actual behavior.",
      },
      {
        actor: "model",
        time: "Day 30",
        title: "First monthly review: against your baseline",
        desc: "Your manager walks you through month one versus your pre-Astor numbers: revenue by stream, attribution, what worked, what's next. 4× on chat-driven revenue is the bar we hold ourselves to, and we expect to clear it.",
      },
    ],
  },
  {
    key: "rhythm",
    label: "A normal week with us",
    heading: "The weekly rhythm: what working with Astor feels like",
    intro:
      "No black box, no radio silence. This is the standing cadence every model on a Growth tier gets.",
    steps: [
      {
        actor: "lead",
        time: "Daily",
        title: "QA audits on live conversations",
        desc: "Your pod lead reviews conversations against your persona doc every day. Drift gets corrected in hours, not after a bad month.",
      },
      {
        actor: "system",
        time: "Always on",
        title: "Your dashboard, live",
        desc: "Revenue by stream, chatter performance, fan movement, updated in real time. Check it never or check it hourly; it's yours either way.",
      },
      {
        actor: "manager",
        time: "Weekly",
        title: "The written report",
        desc: "Revenue attribution, top-fan movement, content performance, what the team is changing next week and why. In writing, in plain language.",
      },
      {
        actor: "manager",
        time: "Weekly",
        title: "Content planning",
        desc: "Next week's calendar built around what your data says converts, sent for your approval and adjusted to what you're comfortable shooting.",
      },
      {
        actor: "model",
        time: "Bi-weekly",
        title: "Strategy call: you and your manager",
        desc: "Thirty minutes, direct line: results, direction, anything on your mind. Not a support ticket. Not a Telegram group with 14 people in it.",
      },
      {
        actor: "manager",
        time: "Monthly",
        title: "The deep review",
        desc: "Month-over-month performance against plan, split transparency, and the growth roadmap for next month, decided with you, not for you.",
      },
    ],
  },
];

/* ————————————————— Your control ————————————————— */

export const CONTROL = {
  eyebrow: "Your control",
  heading: "Your page. Your rules. Our infrastructure.",
  intro:
    "Every management company says the model comes first. We built the systems that make it structurally true, designed from scratch around a simple idea: you should never have to wonder what's happening on your own page.",
  pillars: [
    {
      title: "Onboarded individually, never templated",
      desc: "We learn your story, your voice and how you want your page run, then build SOPs around you: your persona document, your boundaries, your escalation rules. We can work this way because we built the infrastructure for it. No one else has it.",
    },
    {
      title: "Full dashboard access",
      desc: "You get the same Altyr Pro view we work from: live revenue attribution, every chat log, every chatter's scorecard. Nothing is summarized for you, filtered for you, or hidden from you.",
    },
    {
      title: "No lock-in. Clean exit.",
      desc: "Your page, your fans and your content are yours, before, during and after. If we stop earning our percentage, you leave with everything, including the SOPs and systems knowledge we built around you. We keep models by performing, not by contract.",
    },
    {
      title: "A direct line to your manager",
      desc: "A named account manager you can actually reach, with standing strategy calls and the standing right to audit any conversation on your page, any time, without asking twice.",
    },
    {
      title: "Hard boundaries, enforced by software",
      desc: "What you will and won't sell isn't a note in a group chat. It lives in Altyr Pro's workflow, in front of every chatter, on every shift. Boundary-adjacent requests escalate to a human instead of being improvised.",
    },
    {
      title: "You set your involvement level",
      desc: "Some models want a weekly summary; some want to co-pilot daily. Both work. Your involvement level is part of your SOPs, and you can change it whenever you want.",
    },
  ],
};

/* ————————————————— Results ————————————————— */

export const RESULTS = {
  eyebrow: "Results",
  heading: "The numbers we're judged by.",
  intro:
    "We'd rather show you real dashboards than adjectives. Everything below is anonymized. Full detail, with names, on your call.",
  churn: {
    stat: "Lowest churn in the industry",
    desc: "Models who join this team, stay. Management companies lose models when performance stalls and trust breaks. Our retention comes from removing both failure modes, with transparent systems and a revenue floor most models have never seen.",
    figures:
      "92%+ annual retention · 80% of models 3+ years with the team · 60% past four years",
  },
  // Real trajectories from the founding team's current books (dashboards below).
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

/* ————————————————— Creator voices —————————————————
   Peer proof beats every feature list in this industry. These are
   deliberately empty until real, permissioned quotes come back from
   models on the founding team's books: never write these for them.
   Fill `quote` + `attribution` and delete `placeholder` to publish. */

export const TESTIMONIALS = {
  eyebrow: "In their words",
  heading: "The models already on these systems.",
  intro:
    "Anonymised at their request. On your call we'll connect you directly with a creator currently on the team, so you can ask whatever you want without us in the room.",
  /* PLACEHOLDER COPY — illustrative only. These are not endorsements: no
     model has said these words. Replace each with a real, permissioned
     quote (and its attribution) before this site is shown to anyone. */
  items: [
    {
      quote:
        "I'd been through two other teams before this. The difference is I can open the dashboard at 2am and see exactly what happened on my page that day. I never have to ask anyone how I'm doing.",
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
      title: "We look at your real page together",
      desc: "Your actual numbers on the live dashboards, not a slide deck. We'll tell you where the money is being left, whether or not you work with us.",
    },
    {
      title: "You talk to a creator already on the team",
      desc: "We'll connect you with a model currently on these systems so you can ask her the things you'd never ask us.",
    },
    {
      title: "You leave with the numbers either way",
      desc: "No contract on the call, no pressure, no follow-up spam. If it's not a fit, we'll say so first.",
    },
  ],
};

/* ————————————————— Calculator ————————————————— */

export const FAQ = {
  eyebrow: "Fair questions",
  heading: "The things models actually ask us.",
  items: [
    {
      q: "Can I talk to a model who actually works with you?",
      a: "Yes, and we'll offer before you ask. On your intro call we connect you with a creator currently on these systems, and you talk to her without us in the room. Ask her anything: what the money really did, whether the chatters sound like her, what she'd change. Nobody who's hiding something makes that offer.",
    },
    {
      q: "I already have chatters I trust. Do I have to give them up?",
      a: "No. That's exactly what the Systems & Consulting tier is for: we put your existing team on Altyr Pro rails, build your SOPs, and train them. Plenty of models blend the two: your chatters keep their shifts, our pod covers nights and overflow. You choose the mix.",
    },
    {
      q: "How much new content will I have to shoot?",
      a: "Less than you'd think, used better than it is now. Your existing library gets catalogued in Altyr Pro and sequenced properly first. The weekly content plan is built from what your data says converts, then sent for your approval and scoped to what you're comfortable shooting. Customs are always your call, case by case.",
    },
    {
      q: "How fast do I actually see results?",
      a: "Your pod goes live after thorough onboarding, supervised. 4× on chat-driven revenue is the first-month bar we work to, measured against your own pre-Astor baseline at the day-30 review. If the systems are working, you see it in your live dashboard well before we tell you.",
    },
    {
      q: "What can the chatters see, and can they go rogue?",
      a: "Chatters work inside Altyr Pro with access scoped to their shift. Your persona doc and boundaries live in front of them, and every message they send is logged, attributed and QA-scored. Anything outside your SOPs escalates to a human with authority instead of being improvised. You can audit any conversation, any time.",
    },
    {
      q: "What happens if I want to leave?",
      a: "You leave, cleanly. No lock-in contracts. Your page, your fans, your content and the SOPs we built around you go with you. We keep models by performing; retention through paperwork is how the rest of the industry earned its reputation.",
    },
    {
      q: "My page is small. Is this for me?",
      a: "Yes. Some of our best trajectories started at zero (see Results: $0 to $37.3k net in the first 30 days). Tiers exist so you can start where you are: systems-only at 15% if you want rails, the full engine if you want a team.",
    },
  ],
};

/* Chat examples shown on /process (redact fan names/handles before adding files) */
export const CHAT_EXAMPLES = {
  eyebrow: "The real thing",
  heading: "Actual conversations, run by our pods.",
  intro:
    "Not scripts. These are live conversations from pages the founding team runs today. Notice the pacing: rapport first, persona held, the PPV landing inside the conversation. Fan names and media are redacted.",
  shots: [
    { file: "chat-1.webp", label: "Morning check-in → $40 PPV unlock, in persona" },
    { file: "chat-2.webp", label: "Custom request handled: $350 prospect logged in Altyr Pro" },
    { file: "chat-3.webp", label: "Escalating session: sequenced sends, each one paid" },
  ],
};

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
  body: "Book a call and we'll walk your actual page through every system on this site, live, on the real dashboards.",
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
    "The short version of everything on this site: who we are, what Altyr Pro is, and why models don't leave.",
};
