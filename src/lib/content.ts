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
  tagline: "A different type of agency.",
  subtag:
    "Founded with the operators behind the industry's largest chatting agency and one of its top full-service agencies — built on infrastructure no other agency has.",
};

export const NAV_LINKS = [
  { href: "/systems", label: "The Backend" },
  { href: "/services", label: "Services & Rates" },
  { href: "/calculator", label: "Calculator" },
  { href: "/process", label: "How We Operate" },
  { href: "/control", label: "Your Control" },
  { href: "/results", label: "Results" },
] as const;

export const HEADLINE_STATS = [
  {
    value: "4×",
    label: "Minimum uplift in PPV, message & tip revenue — first month",
    sub: "Typical agency minimum. Many models see more.",
  },
  {
    value: "Lowest",
    label: "Model churn rate in the industry",
    sub: "[exact retention figure — add when confirmed]",
    placeholder: true,
  },
  {
    value: "24/7",
    label: "Dedicated chatter pod on your page, every hour",
    sub: "Your pod. Your voice. Never a shared queue.",
  },
  {
    value: "100%",
    label: "Dashboard transparency — you see what we see",
    sub: "Live revenue attribution, chat logs, chatter scorecards.",
  },
] as const;

export const MANIFESTO = {
  eyebrow: "Why we exist",
  heading: "Most agencies ask for your trust. We removed the need for it.",
  paragraphs: [
    "The agency model is broken in one specific way: models hand over their page, their fans, and their income to systems they can't see, run by people they've never met. When it works, they don't know why. When it stops working, they can't prove it.",
    "Astor was built as the answer. Our backend runs on Ultra Pro — the most advanced CRM, chatting and automation platform in the industry, currently used by no agency outside our partner network. Every message, every sale, every chatter's performance is logged, attributed and visible to you in real time.",
    "We onboard every model individually. We learn your story, how you speak, what you will and won't sell, and how you want your page run — then we generate SOPs around you. We can do that because we built custom infrastructure to accommodate it. Nobody else has.",
  ],
};

export const FOUNDER_AUTHORITY = {
  eyebrow: "Who's behind this",
  heading: "Three operators. One standard.",
  note: "Names and track records shared on your call.",
  founders: [
    {
      role: "The Chatting Operator",
      desc: "Runs the largest chatting agency in the industry — the team that trains and staffs elite chatters for the biggest pages in the space.",
    },
    {
      role: "The Agency Operator",
      desc: "Runs one of the largest full-service agencies in the industry, with the lowest model churn rate in the space — models who join, stay.",
    },
    {
      role: "The Systems Architect",
      desc: "Built the custom infrastructure this agency runs on — the onboarding, SOP and transparency layer no other agency can offer.",
    },
  ],
};

/* ————————————————— Services & rates ————————————————— */

export const SERVICES = {
  eyebrow: "Services & rates",
  heading: "Start with what you need. Stack as you grow.",
  intro:
    "Every engagement starts at a transparent flat rate — 15% for Systems & Consulting, 30% for Chatting & Sexting. Stacking services adds real overhead — dedicated staff, more management layers — so combined rates are set individually during onboarding, in writing, before anything starts.",
  tiers: [
    {
      name: "Systems & Consulting",
      rate: "15%",
      rateNote: "single service line",
      blurb:
        "For models who want to keep running their own page — on professional-grade rails. We install and configure Ultra Pro, build your SOPs, train you and your team, and stay on call.",
      includes: [
        "Ultra Pro setup, configured to your page",
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
        "A dedicated 24/7 chatter pod trained on your voice, your boundaries and your fans — run on Ultra Pro with full QA and every conversation visible to you.",
      includes: [
        "Everything in Systems & Consulting",
        "Dedicated pod — three shifts, round-the-clock coverage",
        "Chatters trained on your persona document",
        "PPV, tips & customs selling with per-fan pricing",
        "Message-level QA audits and chatter scorecards",
        "Full chat log and revenue attribution access",
      ],
      featured: true,
    },
    {
      name: "Growth",
      rate: "Custom",
      rateNote: "chatting + marketing",
      blurb:
        "Everything in Chatting & Sexting, plus the traffic engine: multi-platform funnels that keep new fans flowing into a page that's built to convert them.",
      includes: [
        "Everything in Chatting & Sexting",
        "Multi-platform marketing funnels",
        "Content strategy calibrated to what converts",
        "Weekly growth reporting with attribution",
        "Rate set at onboarding — always before we start",
      ],
    },
    {
      name: "Full Management",
      rate: "Custom",
      rateNote: "everything, one team",
      blurb:
        "The complete operation: chatting, marketing, content strategy, page ops and account management — one dedicated team, one weekly rhythm, one number to judge us by.",
      includes: [
        "Everything in Growth",
        "Page operations & account management",
        "Content calendar planning & production support",
        "Dedicated account manager with a direct line",
        "Rate set at onboarding — always before we start",
      ],
    },
  ],
  footnote:
    "Why do stacked rates increase? Because each added service line means dedicated humans on your page — not because we can. You'll see exactly what the overhead pays for before you sign anything.",
};

/* ————————————————— Ultra Pro vs Inflow ————————————————— */

type Cell = { level: "full" | "partial" | "none"; note: string };

export type CompareDimension = {
  key: string;
  title: string;
  pitch: string;
  screenshot: { file: string; label: string };
  rows: { feature: string; ultrapro: Cell; inflow: Cell }[];
};

export const ULTRAPRO = {
  eyebrow: "The backend",
  heading: "Run on Ultra Pro. Compared against Inflow.",
  intro:
    "Most agencies run on Inflow. Ours runs on Ultra Pro — the most advanced CRM, chatting and automation platform in the industry, currently used by no agency outside our partner network. Here's the difference, dimension by dimension. Screenshots below are from our live systems.",
  disclaimer:
    "Comparison reflects our operating experience across both platforms. Verify current Inflow capabilities independently.",
};

export const COMPARE_DIMENSIONS: CompareDimension[] = [
  {
    key: "qa",
    title: "Chatter quality control",
    pitch:
      "The single biggest fear models have — 'will the chatters sound like me?' — is an engineering problem, and Ultra Pro solved it. Every conversation is auditable at message level, every chatter carries a scorecard, and your persona document is enforced, not suggested.",
    screenshot: { file: "ultrapro-qa.png", label: "Ultra Pro — message-level QA view" },
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
        ultrapro: { level: "full", note: "Your hard limits live in the workflow — flagged before send, not after" },
        inflow: { level: "none", note: "Relies on chatter memory and management follow-up" },
      },
      {
        feature: "Model-visible QA results",
        ultrapro: { level: "full", note: "You can audit any conversation on your page, any time" },
        inflow: { level: "none", note: "QA, where it exists, is internal to the agency" },
      },
    ],
  },
  {
    key: "automation",
    title: "Automation & AI tooling",
    pitch:
      "Revenue on your page shouldn't depend on whether tonight's shift is having a good night. Ultra Pro sequences PPV sends, follow-ups and re-engagement automatically — chatters close, the system never forgets.",
    screenshot: { file: "ultrapro-automation.png", label: "Ultra Pro — automation & sequencing" },
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
      "This is where 'a different type of agency' stops being a slogan. Ultra Pro gives you the same live dashboard we use: revenue attributed to every chatter, every send, every fan. You never have to ask how your page is doing — or take our word for it.",
    screenshot: { file: "ultrapro-analytics.png", label: "Ultra Pro — live revenue attribution" },
    rows: [
      {
        feature: "Real-time revenue attribution",
        ultrapro: { level: "full", note: "Every dollar traced to the chatter, message and fan" },
        inflow: { level: "partial", note: "Aggregate sales reporting; limited attribution depth" },
      },
      {
        feature: "Model-facing live dashboard",
        ultrapro: { level: "full", note: "You see what we see — same data, same time" },
        inflow: { level: "none", note: "Reporting is agency-side; models get summaries" },
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
      "Your top fans notice when 'you' forget their name between shifts. Ultra Pro's fan CRM keeps every profile, preference and inside joke persistent — so the 4am chatter picks up exactly where the 8pm chatter left off.",
    screenshot: { file: "ultrapro-crm.png", label: "Ultra Pro — fan profile & spend history" },
    rows: [
      {
        feature: "Persistent fan profiles across shifts",
        ultrapro: { level: "full", note: "Notes, preferences and history load with every conversation" },
        inflow: { level: "partial", note: "Basic notes; consistency depends on chatter discipline" },
      },
      {
        feature: "Complete spend history per fan",
        ultrapro: { level: "full", note: "Every purchase, tip and custom — lifetime view" },
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
  system: { label: "Ultra Pro", color: "#8a8478" },
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
      "Follow one message through the system — from a fan's late-night DM to a closed sale, with every quality checkpoint it passes on the way.",
    steps: [
      {
        actor: "fan",
        time: "11:47 PM",
        title: "A fan sends a DM",
        desc: "\"hey, been thinking about you all day…\" — a mid-tier spender who bought two PPVs last month and went quiet for nine days.",
      },
      {
        actor: "system",
        time: "11:47 PM",
        title: "Ultra Pro loads his full profile",
        desc: "Spend history, preferences, past conversations, the nickname he likes, the price point he converts at — surfaced beside the chat before a word is typed.",
      },
      {
        actor: "chatter",
        time: "11:49 PM",
        title: "Your night-shift chatter replies — as you",
        desc: "Trained on your persona document: your phrasing, your emoji habits, your hard boundaries. Response time is tracked; the pod's standard is minutes, not hours.",
      },
      {
        actor: "chatter",
        time: "12:04 AM",
        title: "Rapport first, per your SOP",
        desc: "No cold PPV spam. The conversation builds the way you'd build it — the sequencing rules for this fan segment come from your onboarding, not a generic script.",
      },
      {
        actor: "system",
        time: "12:18 AM",
        title: "The right PPV, at his price",
        desc: "Ultra Pro suggests content he hasn't seen at the price band he historically converts at. The chatter sends it wrapped in the conversation, not as a broadcast.",
      },
      {
        actor: "fan",
        time: "12:21 AM",
        title: "Unlocked — and logged",
        desc: "The sale is attributed to this chatter, this conversation, this fan. His profile updates. The revenue shows on your live dashboard immediately.",
      },
      {
        actor: "lead",
        time: "Next morning",
        title: "QA reviews the conversation",
        desc: "The pod lead scores it against your persona doc — tone, boundaries, sequencing. Scores roll into the chatter's scorecard, which you can see any time.",
      },
    ],
    footnote: "Every conversation on your page runs through this loop. You can audit any of them, whenever you want.",
  },
  {
    key: "escalation",
    label: "When something needs a human call",
    heading: "The escalation chain — who decides what, and when you're looped in",
    intro:
      "Chatters close sales; they don't make judgment calls about your page. Anything outside your SOP moves up a defined chain with response-time standards at every level.",
    steps: [
      {
        actor: "chatter",
        title: "Level 1 — the chatter flags it",
        time: "Immediately",
        desc: "A fan asks for something outside your boundaries doc, disputes a payment, or makes an unusual request. The chatter doesn't improvise — it's flagged in Ultra Pro and the conversation is tagged.",
      },
      {
        actor: "lead",
        title: "Level 2 — the pod lead takes over",
        time: "Within minutes",
        desc: "Your pod lead (senior chatter over your three shifts) handles anything covered by your SOPs: refund policy, boundary reinforcement, difficult fans. Most escalations end here.",
      },
      {
        actor: "manager",
        title: "Level 3 — your account manager decides",
        time: "Same day",
        desc: "Anything touching money, strategy or your reputation: pricing exceptions, big custom requests, platform issues. Your manager resolves it and logs the decision.",
      },
      {
        actor: "model",
        title: "Level 4 — you, and only when it's genuinely yours",
        time: "Your rules",
        desc: "New boundary territory, large customs needing your sign-off, anything touching your personal life. You set the list of what reaches you at onboarding — and you can change it any time.",
      },
      {
        actor: "system",
        title: "Every escalation leaves a paper trail",
        desc: "Who flagged it, who decided, what was decided — logged in Ultra Pro and visible to you. Nothing about your page gets decided in a group chat you can't see.",
      },
    ],
    footnote: "24/7 coverage means the chain works at 4 AM on a Sunday exactly like it works on a Tuesday afternoon.",
  },
  {
    key: "onboarding",
    label: "Your first 30 days",
    heading: "Onboarding — built around you, one model at a time",
    intro:
      "We don't drop you into a template. The first month builds the systems your page will run on — starting with understanding you.",
    steps: [
      {
        actor: "model",
        time: "Days 0–3",
        title: "The deep-dive",
        desc: "Long-form onboarding session: your story, your voice, your fans, your boundaries, your goals, how involved you want to be. This is the raw material everything else is generated from.",
      },
      {
        actor: "manager",
        time: "Days 3–7",
        title: "Your SOPs are generated",
        desc: "Persona document, boundaries doc, pricing architecture, escalation rules — custom operating procedures for your page, written down and reviewed with you line by line. You approve them before anything goes live.",
      },
      {
        actor: "system",
        time: "Week 2",
        title: "Ultra Pro is configured for your page",
        desc: "Fan data imported, segments built, automation sequences set to your pricing architecture, your dashboard access provisioned. Your page's history becomes usable intelligence.",
      },
      {
        actor: "lead",
        time: "Week 2–3",
        title: "Your pod trains on you",
        desc: "Your dedicated chatters study your persona doc, your past conversations and your content library — then run supervised practice until the pod lead signs off that they sound like you.",
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
        title: "First monthly review — against your baseline",
        desc: "Your manager walks you through month one versus your pre-Astor numbers: revenue by stream, attribution, what worked, what's next. The 4× minimum on chat-driven revenue is the bar we expect to clear.",
      },
    ],
  },
  {
    key: "rhythm",
    label: "A normal week with us",
    heading: "The weekly rhythm — what working with Astor feels like",
    intro:
      "No black box, no radio silence. This is the standing cadence every model on full management gets.",
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
        desc: "Revenue by stream, chatter performance, fan movement — updated in real time. Check it never or check it hourly; it's yours either way.",
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
        desc: "Next week's calendar built around what your data says converts — sent for your approval, adjusted to what you're comfortable shooting.",
      },
      {
        actor: "model",
        time: "Bi-weekly",
        title: "Strategy call — you and your manager",
        desc: "Thirty minutes, direct line: results, direction, anything on your mind. Not a support ticket. Not a Telegram group with 14 people in it.",
      },
      {
        actor: "manager",
        time: "Monthly",
        title: "The deep review",
        desc: "Month-over-month performance against plan, split transparency, and the growth roadmap for the next month — decided with you, not for you.",
      },
    ],
  },
];

/* ————————————————— Your control ————————————————— */

export const CONTROL = {
  eyebrow: "Your control",
  heading: "Your page. Your rules. Our infrastructure.",
  intro:
    "Every agency says the model comes first. We built the systems that make it structurally true — because we could design them from scratch, around a simple idea: you should never have to wonder what's happening on your own page.",
  pillars: [
    {
      title: "Onboarded individually, never templated",
      desc: "We learn your story, your voice and how you want your page run — then generate SOPs around you. Your persona document, your boundaries, your escalation rules. We can operate this way because we built custom infrastructure to accommodate it. No other agency has it.",
    },
    {
      title: "Full dashboard access",
      desc: "You get the same Ultra Pro view we work from: live revenue attribution, every chat log, every chatter's scorecard. Nothing is summarized for you, filtered for you, or hidden from you.",
    },
    {
      title: "No lock-in. Clean exit.",
      desc: "Your page, your fans and your content are yours — before, during and after. If we stop earning our percentage, you leave with everything, including the SOPs and systems knowledge we built around you. We keep models by performing, not by contract.",
    },
    {
      title: "A direct line to your manager",
      desc: "A named account manager you can actually reach — with standing strategy calls and the standing right to audit any conversation on your page, any time, without asking twice.",
    },
    {
      title: "Hard boundaries, enforced by software",
      desc: "What you will and won't sell isn't a note in a group chat — it lives in Ultra Pro's workflow, in front of every chatter, on every shift. Boundary-adjacent requests escalate to humans instead of being improvised.",
    },
    {
      title: "You set your involvement level",
      desc: "Some models want a weekly summary; some want to co-pilot daily. Both are supported — your involvement level is part of your SOPs, and you can change it whenever you want.",
    },
  ],
};

/* ————————————————— Results ————————————————— */

export const RESULTS = {
  eyebrow: "Results",
  heading: "The numbers we're judged by.",
  intro:
    "We'd rather show you real dashboards than adjectives. Everything below is anonymized — full detail, with names, on your call.",
  churn: {
    stat: "Lowest churn in the industry",
    desc: "Models who join this team, stay. Agencies churn models when performance stalls and trust breaks; our retention comes from removing both failure modes — transparent systems and a revenue floor most models have never seen.",
    placeholderNote: "[exact retention % and timeframe — insert when confirmed]",
  },
  // Real trajectories from the founding team's current books (dashboards below).
  caseStudies: [
    {
      tag: "Launch",
      title: "New page — first 30 days on our systems",
      before: "$0",
      after: "$37.3k net",
      timeframe: "first 30 days",
      story:
        "Page went live mid-April with the pod, pricing architecture and funnel running from day one: 5,700+ subs in the first month, $46.6k gross / $37.3k net, and a top 0.27% creator ranking out of the gate.",
    },
    {
      tag: "Takeover",
      title: "Established page — team takes over mid-March",
      before: "~$2k/day",
      after: "$222.8k/mo",
      timeframe: "the next month",
      story:
        "Flat at roughly $2k a day for months. The team took over on March 17; daily revenue hit $10–20k within two weeks, closing March at $148.4k — then $222.8k in April and $173.5k in May.",
    },
    {
      tag: "Plateau broken",
      title: "$2.4M-lifetime page, stuck — then switched",
      before: "$28.5k/mo",
      after: "$80k+/mo",
      timeframe: "90 days",
      story:
        "A veteran page ($2.4M all-time) plateaued under its old setup: $28.5k in March. On our systems: $35.9k in April, $80.1k in May (+119%), $82.9k in June — with messages driving ~$66k net of it.",
    },
  ],
  screenshots: [
    {
      file: "earnings-newpage.png",
      label: "Launch — $0 → $37.3k net in the first 30 days (top 0.27%)",
    },
    {
      file: "earnings-takeover.png",
      label: "Takeover Mar 17 — ~$2k/day to $10–20k/day; $222.8k the next month",
    },
    {
      file: "earnings-alltime.png",
      label: "$2.4M lifetime page — $28.5k → $80k+/mo after switching (+119%)",
    },
    {
      file: "earnings-yearbook.png",
      label: "A year of $60–76k months — messages driving $58k of the last 30 days",
    },
  ],
};

/* ————————————————— Calculator ————————————————— */

export const FAQ = {
  eyebrow: "Fair questions",
  heading: "The things models actually ask us.",
  items: [
    {
      q: "I already have chatters I trust. Do I have to give them up?",
      a: "No. That's exactly what the Systems & Consulting tier is for — we put your existing team on Ultra Pro rails, build your SOPs, and train them. Plenty of models also blend: your chatters keep their shifts, our pod covers nights and overflow. You choose the mix.",
    },
    {
      q: "How much new content will I have to shoot?",
      a: "Less than you'd think, used better than it is now. Your existing library gets catalogued in Ultra Pro and sequenced properly first. The weekly content plan is built from what your data says converts — and it's sent for your approval, scoped to what you're comfortable shooting. Customs are always your call, case by case.",
    },
    {
      q: "How fast do I actually see results?",
      a: "Your pod goes live in week three of onboarding, supervised. The 4× minimum on chat-driven revenue is a first-month bar, measured against your own pre-Astor baseline at the day-30 review. If the systems are working, you see it in your live dashboard well before we tell you.",
    },
    {
      q: "What can the chatters see, and can they go rogue?",
      a: "Chatters work inside Ultra Pro with access scoped to their shift — your persona doc and boundaries live in front of them, and every message they send is logged, attributed and QA-scored. Anything outside your SOPs escalates to a human with authority instead of being improvised. You can audit any conversation, any time.",
    },
    {
      q: "What happens if I want to leave?",
      a: "You leave — cleanly. No lock-in contracts. Your page, your fans, your content and the SOPs we built around you go with you. We keep models by performing; retention through paperwork is how the rest of the industry ended up with its reputation.",
    },
    {
      q: "My page is small. Is this for me?",
      a: "Yes — some of our best trajectories started at zero (see Results: $0 to $37.3k net in the first 30 days). Tiers exist so you can start where you are: systems-only at 15% if you want rails, the full engine if you want a team.",
    },
  ],
};

/* Chat examples shown on /process (redact fan names/handles before adding files) */
export const CHAT_EXAMPLES = {
  eyebrow: "The real thing",
  heading: "Actual conversations, run by our pods.",
  intro:
    "Not scripts — live conversations from pages the founding team runs today. Notice the pacing: rapport first, persona held, and the PPV lands inside the conversation. Fan names and media are redacted.",
  shots: [
    { file: "chat-1.png", label: "Morning check-in → $40 PPV unlock, in persona" },
    { file: "chat-2.png", label: "Custom request handled — $350 prospect logged in Ultra Pro" },
    { file: "chat-3.png", label: "Escalating session — sequenced sends, each one paid" },
  ],
};

export const CALC = {
  eyebrow: "Revenue calculator",
  heading: "What your page looks like on our systems.",
  intro:
    "Put in where your page is today. The projection applies our agency minimum — 4× on PPV, message and tip revenue in the first month — which you can adjust, along with everything else. This is a model, not a promise; your real plan gets built at onboarding.",
  upliftNote:
    "4× is the agency's typical minimum first-month uplift on chat-driven revenue (PPV, messages, tips). Many models see more.",
};

export const FINAL_CTA = {
  heading: "See it with your own numbers.",
  body: "Book a call and we'll walk your actual page through every system on this site — live, on the real dashboards.",
  button: "Book your call",
  // Swap for your Calendly/booking link when ready — this works today.
  href:
    "mailto:solandennis@gmail.com?subject=Intro%20call%20%E2%80%94%20Astor&body=Hi%20%E2%80%94%20I%20went%20through%20the%20site%20and%20I%27d%20like%20to%20book%20a%20call.%0A%0AMy%20page%3A%20%0ABest%20times%3A%20",
};

/* Intro video on the home page — drop media/intro.mp4 (and optionally
   media/intro-poster.jpg) into /public to activate it. */
export const INTRO_VIDEO = {
  eyebrow: "Two minutes, from the founders",
  heading: "Watch this before you scroll.",
  file: "intro.mp4",
  poster: "intro-poster.jpg",
  caption:
    "The short version of everything on this site — who we are, what Ultra Pro is, and why models don't leave.",
};
