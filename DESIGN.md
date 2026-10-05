---
name: Astor
description: A different type of management. The page reaches a creator the way their money does, on the lock screen.
colors:
  warm-black: "#090807"
  warm-black-2: "#0e0c0a"
  surface: "#15120f"
  surface-raised: "#1d1915"
  line: "rgba(246, 241, 230, 0.09)"
  line-strong: "rgba(246, 241, 230, 0.18)"
  glass: "rgba(38, 32, 26, 0.5)"
  glass-strong: "rgba(48, 40, 32, 0.62)"
  glass-edge: "rgba(246, 241, 230, 0.1)"
  ink: "#f7f2e7"
  ink-2: "#c2baa9"
  muted: "#968e7c"
  gold: "#d2ac61"
  gold-bright: "#f2dda9"
  gold-dim: "#8f7137"
  gold-ink: "#150f06"
  ember: "#6e2440"
  series-subs: "#94702c"
  series-chat: "#f2dda9"
  series-tips: "#b84a72"
  series-customs: "#e9e1d2"
typography:
  display:
    fontFamily: "Italiana, Didot, serif"
    fontSize: "clamp(3.4rem, 8.6vw, 8.4rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Italiana, Didot, serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0"
  numeral:
    fontFamily: "Italiana, Didot, serif"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: 0.95
  title:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  body-card:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.3em"
  label-button:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.28em"
  figure-tabular:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "\"tnum\", \"lnum\""
rounded:
  pip: "3px"
  segment: "9px"
  app-icon: "10px"
  segmented: "12px"
  tile: "16px"
  screenshot: "18px"
  bubble: "20px"
  widget: "22px"
  pill: "999px"
spacing:
  hairline-gap: "8px"
  tile-gap: "10px"
  grid-gap: "12px"
  gutter-phone: "20px"
  gutter: "24px"
  card-pad: "24px"
  card-pad-lg: "28px"
  section-phone: "96px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-ghost:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0 25.6px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.glass-strong}"
  button-round:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "52px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.widget}"
    padding: "{spacing.card-pad}"
  card-raised:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.widget}"
    padding: "20px"
  glass-notification:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.widget}"
    padding: "12px 16px 14px"
  widget:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.gold-bright}"
    typography: "{typography.numeral}"
    rounded: "{rounded.widget}"
    padding: "14px 16px"
  segmented:
    backgroundColor: "rgba(246, 241, 230, 0.07)"
    rounded: "{rounded.segmented}"
    padding: "3px"
  segmented-button:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.segment}"
    padding: "0 14.4px"
    height: "36px"
  segmented-button-selected:
    backgroundColor: "rgba(246, 241, 230, 0.16)"
    textColor: "{colors.ink}"
  list-row:
    textColor: "{colors.ink}"
    padding: "16px 20px"
  bubble-in:
    backgroundColor: "#2a2520"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "10px 16px"
  bubble-out:
    backgroundColor: "#c9a258"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.bubble}"
    padding: "12px 16px"
  chip-tag:
    backgroundColor: "rgba(210, 172, 97, 0.15)"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  nav-status-bar:
    backgroundColor: "rgba(9, 8, 7, 0.7)"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    height: "64px"
---

# Design System: Astor

## Overview

**Creative North Star: "The Lock Screen"**

Astor reaches a creator the way their money does: on the phone's lock screen. The whole site is assembled from native iPhone surfaces rendered in the house's pinned black-and-gold. The wallpaper is a warm near-black lit from below by ember and gold. Headlines are set like the clock. Stats are widgets, payouts arrive as notifications, terms are grouped inset lists, the FAQ is a Messages thread, and the close is an incoming call. Each section borrows one of these surfaces. None of them invent a web-marketing component where an iPhone surface already does the job.

The material is warm frosted glass over lit darkness, with gold read as light rather than paint. A thin fashion display face (Italiana) carries the clock, titles and big figures. Jost carries everything you read, and its spaced caps carry controls and labels. Density is calm and phone-first. Sections breathe at 96 to 128px, and inside a section the surfaces stack tightly, 8 to 12px apart, the way a notification stack does.

The palette is pinned by the user and is Astor's own. It is not Altyr's Obsidian Clarity. Product renders of Locus are the one place another language appears, and they appear as themselves, framed inside an Astor card.

**Key Characteristics:**
- Warm near-black wallpaper lit from below by radial ember and gold light, never a flat fill on hero surfaces.
- Frosted warm glass (26px blur, 150% saturation) with 22px continuous corners for notifications, widgets and round controls.
- Gold foil reserved for the clock, key figures and the one action.
- Italiana for display and big figures. Jost for text, spaced Jost caps for labels and buttons.
- Grouped inset lists split by hairlines, rather than separate boxed rows.
- One authored motion moment: the screen wakes.

## Colors

The palette is warm near-black grounds, a three-step gold family on warm ink, and ember as light only.

### Primary
- **House Gold** (gold): carets, focus rings, active-nav pips, the slider fill, gold spaced-cap column headers, and the base of the foil. It sits under glass without turning grey because every ground beneath it is warm.
- **Champagne Light** (gold-bright): big widget and notification figures, inline gold links ("See every tier"), tag chips and the featured-tier ribbon. It is the readable gold for text on dark grounds.
- **Antique Bronze** (gold-dim): the borders of featured or selected things (featured tier card, chosen calculator split, the raised result card) and hover borders on glass controls. It is the dark end of the foil.
- **Gold Ink** (gold-ink): the text on foil. It is a near-black brown, never pure black.

### Tertiary
- **Ember** (ember): atmosphere only. It is the lower-left light in the wallpaper (`hero-glow`) and the faint wash in alternating sections (`glow-band`). A lighter ember rose (series-tips) is the one place the hue becomes a fill, as a chart segment.

### Neutral
- **Warm Black** (warm-black): the page and the wallpaper base.
- **Warm Black, Alternate** (warm-black-2): alternating sections and the footer, a half-step up so section bands read without lines.
- **Card Surface** (surface): grouped cards, lists, tables and the screenshot backing.
- **Raised Surface** (surface-raised): the raised card, the Messages header and list-row hover. It is also the fallback for glass where `backdrop-filter` is unsupported.
- **Warm Glass / Glass Strong / Glass Edge**: the frosted material and its 1px rim. Glass Strong is the hover state of the quiet pill.
- **Hairline / Hairline Strong** (line, line-strong): row dividers, section borders and card rims. The strong step is for raised cards and the placeholder dash.
- **Warm Ink** (ink): headings and primary text. On glass, secondary copy uses ink at reduced alpha (85%, 70%, 55%) so it stays warm.
- **Parchment** (ink-2): body prose and inactive nav.
- **Muted Taupe** (muted): notes, footnotes, captions and "them" columns. It is tuned to clear WCAG AA 4.5:1 on card surfaces, not only on the page.

### Chart Series
- Bronze (series-subs), Champagne (series-chat), Ember Rose (series-tips) and Pale Ink (series-customs) are the house palette as a ramp. They are stacked alternating dark and light so adjacent segments clear 3.4:1, and each clears 3.8:1 on the card surface.

### Named Rules
**The Lit-Not-Painted Rule.** Grounds are warm (hue near 70°). A cool or neutral black makes the gold look painted on, so never put gold on a cool ground.

**The Ember Is Light Rule.** Ember appears as radial light in the wallpaper and section washes. It is never type and never a border. Its only solid use is as a chart segment.

**The Foil Reserve Rule.** The foil gradient goes on the hero clock, key figures (rates, retention, the projected result, case-study "after" values) and the gold action pill. Nothing else is foil.

## Typography

**Display Font:** Italiana (with Didot, serif)
**Body Font:** Jost (with Futura, Century Gothic, system-ui, sans-serif)

**Character:** A thin, high-contrast fashion display face set large like a lock-screen clock, paired with a geometric sans whose wide-tracked caps read like an invitation card. Italiana ships in one weight (400). Hierarchy comes from size alone.

### Hierarchy
- **Display** (400, clamp(3.4rem, 8.6vw, 8.4rem), 0.92): the clock. It appears once per site, as the home hero headline in foil. Balanced wrap.
- **Headline** (400, clamp(2.5rem, 5.2vw, 4.4rem), 1.02): every section title and inner-page h1, in warm ink. Balanced wrap. It stands alone, with no label above it.
- **Numeral** (Italiana 400, 0.95 line height, 1.6rem to 6.5rem): big figures as display objects in widgets, notifications, the census, tier rates and retention. They are set in gold-bright, or in foil when the Foil Reserve allows.
- **Title** (Jost 600, 15 to 17px, snug): card, tier, list-row and notification titles.
- **Body** (Jost 400, 17px, 1.7): section prose, capped around 42rem (max-w-2xl). Inside cards it drops to 15 to 15.5px at a relaxed line height. The lead paragraph of a card can step up to 18px in ink.
- **Label** (Jost 500, 10 to 11px, 0.2em to 0.36em, uppercase): nav links (11px, 0.32em), table column heads, data terms (Before / After), field-group labels and case-study tags.
- **Label, Button** (Jost 600, 12px, 0.28em, uppercase): the action pill. The quiet pill uses weight 500 and 0.26em.
- **Figure, Tabular** (Jost, tabular and lining numerals): calculator inputs, results and chart values.

### Named Rules
**The Clock Face Rule.** Italiana is for the clock, titles and big figures only. Never set it below about 1.4rem and never use it for running text.

**The Readable One Rule.** Big figures go in Italiana. Tables, sliders and the calculator keep Jost tabular numerals, because there a "1" must never read as an "I".

**The Title Stands Alone Rule.** A headline carries its own weight. Spaced caps name controls, columns and data. They never sit above a headline as a kicker.

## Layout

Phone-first. Content sits in a centred 72rem (1152px) container with 20px gutters on phones and 24px from 640px. Sections pad 96px vertically on phones and 128px from 640px, and they alternate between warm-black and warm-black-2 with hairline borders top and bottom. Two-column sections use a 12-column grid from 1024px: the headline takes 5 columns and the surface takes 7, with a 56px gap. Centred sections cap their text at 48rem.

Inside a section, surfaces stack tightly. Notifications are 8px apart, widgets and census tiles 10px, tier and case-study cards 12px. This is the rhythm of a lock-screen stack, and it contrasts with the generous section spacing.

The home hero is a full-viewport lock screen (100svh, minimum 760px of wallpaper). From top to bottom it holds the date line, the clock, a 2-up (phone) or 4-up (640px and up) widget row at most 680px wide, a notification stack at most 540px wide, a dock with round glass corner buttons and the foil pill, and a 134 by 5px home indicator. Inner pages open with a shorter wallpaper hero: 144px top padding, 176px from 640px.

Breakpoints are Tailwind's defaults: 640, 768 and 1024px. The deal table becomes one grouped row per dimension below 768px.

## Elevation & Depth

Depth comes from light and material, not stacked shadows. The wallpaper is lit from below. Glass blurs that light through warm translucency, and opaque cards sit on the dark with a 1px inset top highlight and a long, low, heavily negative-spread shadow that pools beneath rather than around.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 0 rgba(255,246,230,0.04) inset, 0 24px 48px -32px rgba(0,0,0,0.9)`): grouped cards and lists.
- **Card Raised** (`box-shadow: 0 1px 0 rgba(255,246,230,0.06) inset, 0 32px 60px -38px rgba(0,0,0,1)`): the emphasised result card.
- **Glass** (`box-shadow: 0 18px 40px -26px rgba(0,0,0,0.75)`): notifications, widgets and glass controls.
- **Foil Glow** (`box-shadow: 0 14px 34px -16px rgba(210,172,97,0.65), inset 0 1px 0 rgba(255,255,255,0.35)`): only the gold action pill, which emits warm light.
- **Featured Rim** (`box-shadow: 0 0 0 1px rgba(210,172,97,0.15), 0 30px 60px -36px rgba(0,0,0,1)`): the featured tier card.
- **Segment Selected** (`box-shadow: 0 2px 6px rgba(0,0,0,0.35)`): the selected segment of a segmented control.

### Named Rules
**The Light From Below Rule.** Wallpaper light rises from the bottom edge: gold at 50% 108%, ember at 10% 96%, bronze at 92% 88%. A faint ember wash enters from the top. Never light a hero from the top centre.

**The Glass Over Light Rule.** Glass only earns its blur over the lit wallpaper or a glow band. On a plain warm-black section, use the opaque card.

## Shapes

Continuous iPhone-scale corners throughout. Widgets, cards, notifications and tier cards use 22px. Screenshots use 18px. The calculator's split tiles use 16px, the segmented control 12px outer and 9px inner, and app icons 10px. Every button and chip is a full pill. Round controls (52px dock buttons, 68px call buttons, 56px icon badges) are glass pills at full radius. Message bubbles are 20px with a 6px tail corner on the sender's side. Borders are always 1px hairlines in warm ink at low alpha. The placeholder chip is the only dashed border.

## Components

### Buttons
Each surface has one action. That action is foil and always books the call.
- **Shape:** full pill (999px), minimum height 52px.
- **Primary (gold action pill):** foil gradient at 180% width on gold-ink text, Label Button type, 28px horizontal padding, foil glow shadow. On phones it tightens to 16px padding and 0.16em tracking.
- **Hover / Focus:** the foil sweeps (background position 0% to 100% over 600ms on the expo-out ease). Active scales to 0.98. Focus shows a 2px gold outline at 3px offset.
- **Quiet pill (secondary):** frosted glass with a glass-edge rim, ink text, weight 500 and 0.26em tracking. On hover the border goes to gold at 45% and the fill to Glass Strong.
- **Round glass buttons:** 52px (dock) or 68px (incoming call) glass circles with a 1.6-stroke line icon and a 9.5 to 10px spaced-cap caption below. Hover moves the rim to antique bronze. The call answer button is the foil version.

### Chips
- **Tag:** gold at 15% fill, champagne text, 10px label caps at 0.22em, pill. Used for case-study tags.
- **Placeholder:** muted text, dashed line-strong border, pill. Used only for content the founders will supply.

### Cards / Containers
- **Corner Style:** 22px.
- **Background:** card surface, or raised surface for emphasis. Glass over lit regions.
- **Shadow Strategy:** Card / Card Raised / Glass (see Elevation & Depth).
- **Border:** 1px hairline. Featured or selected states use antique bronze.
- **Internal Padding:** 24px, 28px from 640px. Compact tiles use 16 to 20px.
- **Grouped Inset List:** one card holds the rows, split by 1px hairlines, with rows at 16px by 20px. Used for reasons, promises, founders, call steps, the phone deal table and the mobile menu. Link rows end in an 8 by 14 muted chevron.

### Inputs / Fields
- **Slider:** 6px pill track with a gold fill to the value and warm ink at 12% beyond it, plus a 26px warm-ink thumb with a soft drop shadow that scales 1.08 while dragging.
- **Segmented control:** a 12px tray (warm ink at 7%, hairline rim, 3px padding) with 9px segments at 36px height in parchment. The selected segment fills to warm ink at 16% in ink with a small shadow. Used for page-size presets and 40% / 45% tier toggles.
- **Option tile:** a 16px-radius bordered tile. When selected it gets an antique-bronze border and a 10% gold fill.
- **Focus:** a 2px gold outline at 3px offset on every interactive element. The caret is gold.

### Navigation
- **Status bar:** sticky and 64px tall. It is transparent over the wallpaper and frosts once the page scrolls past 8px (warm black at 70%, 2xl blur, 150% saturation, hairline bottom).
- **Wordmark:** ASTOR in 13px Jost 500 at 0.5em, gold, with "Management" in 9.5px muted caps from 640px.
- **Links:** 11px caps at 0.32em in parchment, ink on hover. The active link is ink with a 4px gold pip beneath it.
- **Book:** a small glass pill with a gold status dot.
- **Mobile:** "Book" plus a 40px round glass menu button. The menu is a glass grouped list with 17px rows, a Home row, and a gold dot on the current page.

### Notification (signature)
A glass card on a 38px icon / content / time grid. It has a 15px semibold title, a 12.5px time in ink at 50%, and a 14.5px body in ink at 85%. A champagne Italiana figure can sit in the body. Below the stack, two narrowing glass slivers suggest more notifications.

### Widget (signature)
A glass tile with an Italiana figure in champagne (1.75 to 2.15rem, or 3.4 to 4rem when large) over an 11 to 12px label in ink at 70%. On phones it lays out as a row (figure beside a one-line label). From 640px it becomes a stacked tile.

### App Icon (signature)
A 10px-radius square. Astor's is a dark bronze gradient with an antique-bronze rim and a gold Italiana "A". Locus's keeps its own rose-to-amber gradient.

### Messages Thread (FAQ)
Questions are incoming bubbles (#2a2520, lightening to #332d27 on hover) in disclosure summaries. Answers are outgoing champagne-gradient bubbles (#e7cd94 to #c9a258) in gold ink. The thread sits in a card under a contact header.

### Incoming Call (close)
Over the lit wallpaper sits an 88px Astor icon with a slow 2.4s ping ring, a Headline, a caption, and two round buttons: decline-side "See the proof" in glass, answer-side "Book" in foil.

### Locus Panel (scoped exception)
Product renders sit inside an Astor card with a muted caption ("illustrative product render"). Inside a `.altyr-ui` scope they use Locus's own product language from `src/app/altyr-ui.css`: pure-black canvas, white-alpha glass, rose `#c0387a` to amber `#e08a38`, platinum numerals and the product's own eyebrow labels. That vocabulary belongs to Locus and is valid only inside the scope. It is not Astor's system and must never leak onto Astor surfaces.

### Motion
One authored moment, the screen waking, plays only under `prefers-reduced-motion: no-preference` on the expo-out ease `cubic-bezier(0.16, 1, 0.3, 1)`. The wallpaper brightens from 0.4 over 1400ms. The clock resolves from a 14px blur and 1.04 scale over 1100ms, starting at 180ms. Lines and widgets rise 10px in a 110ms stagger from 400ms. Notifications spring up 26px from 0.96 scale in a 160ms stagger from 820ms. Everything else is a 150 to 300ms colour or border transition.

## Do's and Don'ts

### Do:
- **Do** build each section from a native iPhone surface (widget, notification, grouped list, Messages thread, incoming call, subscription plan) before reaching for a generic web component.
- **Do** keep every ground warm (warm-black, surface, glass at rgba(38,32,26)) so gold reads as lit.
- **Do** set big figures in Italiana champagne, and in foil only for the clock, key figures and the action pill.
- **Do** use 22px corners for widgets, cards and notifications, and full pills for every button and chip.
- **Do** group related rows into one card split by hairlines.
- **Do** keep one foil action per surface, and make it book the call.
- **Do** frame Locus renders in an Astor card and let them keep Locus's own colours inside the `.altyr-ui` scope.

### Don't:
- **Don't** use Altyr's Obsidian Clarity palette (pure black, rose to amber, platinum) on Astor surfaces. It lives only inside Locus panels and the Locus app icon.
- **Don't** set ember as text or as a border. It is light in the wallpaper and a chart segment, nothing else.
- **Don't** foil a phrase inside a sentence or headline. Foil belongs to figures and the action.
- **Don't** put a spaced-cap kicker or eyebrow above a headline.
- **Don't** set Italiana for body copy or small sizes, or use it in tables and the calculator.
- **Don't** light the wallpaper from the top centre, and don't use glass on an unlit flat section.
- **Don't** add a second authored entrance animation beyond the screen waking.
