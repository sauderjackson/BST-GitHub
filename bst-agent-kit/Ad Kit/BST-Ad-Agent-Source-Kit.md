# BST — Ad Agent Source Kit

How the kit works, what's in it, and how to make an ad from it.

**Figma file:** [BST—Ad-Agent-Source-Kit](https://www.figma.com/design/zK0YGlxgy2QoweKibIONrY/BST%E2%80%94Ad-Agent-Source-Kit?node-id=11-53)
**Figma library name:** `BST — Ad Agent Source Kit`
**First client set up in the kit:** The Balancing Act × grüns

> **This file is a Figma library.** Its components, variables and text styles are published as **BST — Ad Agent Source Kit**. Any Figma file can enable the library and use the parts, and an AI agent can build ads from it through Figma's MCP server (see section 8).

---

## The idea in one paragraph

The kit turns one photo, one headline, one supporting line and one button label into 50 finished display and social ads. Every ad is built from the same six components. Fonts, colors and spacing live in variables, so a change in one place updates every size. A written rule set decides what each size is allowed to show, so a person or an AI agent can build any size without guessing.

```
Inputs                     Kit                          Output
───────                    ───                          ──────
Photo (2 masters)    ─┐
Headline             ─┤    Components  +  Variables
Body copy            ─┼──▶       +               ──▶   50 sized ads
Button label         ─┤    Copy & Type Rules           (mobile, desktop IAB,
Partner logo         ─┘    Photo Specs                  social, video, native)
```

---

## File map

| Page | What lives there | Use it for |
|---|---|---|
| **Ad Kit** | Components, the three rule sheets, layout variations | Building and editing ads |
| **Ad Sizes** | All 50 sizes, grouped by channel | Exporting finished ads |
| **Example** | Original layout sketches, mood board, color palette, sample client logo, "Bad Generations" | Reference and history |

---

## 1. The building blocks (Ad Kit page)

Six components snap together into every ad. Each one has variants so it can scale from a 88×31 badge to a 1920×1080 frame.

| Component | Variants | What it is |
|---|---|---|
| **Logos** | Small, Medium, Large | Show logo (The Balancing Act) + divider + partner logo |
| **Partner Logo** | Placeholder, grüns | Swappable slot for the sponsor or client mark |
| **Message** | Left or Center × Small, Medium, Large, Extra large | Headline plus body copy as one block |
| **Button** | Small → Extra large × Square or Rounded | The call to action ("Watch the Show") |
| **Where to Watch** | Side by side or Stacked × Small, Medium, Large | "STREAM NOW" + Lifetime and YouTube marks |
| **Photo** | Shade behind text: None, Bottom, Left side | Image slot with an optional gradient so copy stays legible |

### The Ad component

The six pieces combine into one master **Ad** component with six layouts:

| Layout | Shape | How it reads |
|---|---|---|
| Wide: photo on right | Landscape | Brand panel left, photo right |
| Wide: text on photo | Landscape | Full-bleed photo, copy over the left shade |
| Tall: photo on top | Portrait | Photo top half, brand panel below |
| Tall: headline on photo | Portrait | Headline sits on the photo's bottom shade |
| Banner | Leaderboard strips | Logo, headline, button in a single row |
| Tiny | Micro units | Logo and button only |

The **Variations** section shows the four main layouts, then the same components resized to 300×600 and 970×250. That section is the proof that the system scales without redrawing.

---

## 2. Variables: change once, update everything

### Fonts

Open the Variables panel → **Fonts**. Three roles, each with a family and a weight:

| Role | Variable | Current value | Used for |
|---|---|---|---|
| Headline | `Fonts/Headline font` + `weight` | Gotham Black | Headlines on every ad |
| Body copy | `Fonts/Body copy font` + `weight` | Gotham Book | The supporting line |
| Button | `Fonts/Button font` + `weight` | Gotham Semi Bold | Button labels |

Type the font name exactly as Figma's font menu shows it, with a weight that font actually has. The labels on the **Typography Sheet** update as you type.

### Text styles

Each role has four sizes. Every ad uses these styles, so editing one resizes that text everywhere.

| Style | Small | Medium | Large | Extra large |
|---|---|---|---|---|
| `Ad/Headline/*` | 16 | 22 | 32 | 56 |
| `Ad/Body copy/*` | 13 | 16 | 22 | 32 |
| `Ad/Button/*` | 12 | 14 | 20 | 28 |

### Colors and spacing

| Variable | Value |
|---|---|
| `Colors/Background` | `#3D1520` (burgundy) |
| `Colors/Text`, `Colors/Body copy`, `Colors/Where to watch`, `Colors/Logo divider` | `#F9F9ED` (cream) |
| `space/*` | 8, 12, 16, 20, 24, 32, 40 |

To reskin the kit for a different show, swap these values first.

> One exception: the "STREAM NOW" text is part of the Where to Watch logos and stays Gotham Medium. It does not follow the font variables.

---

## 3. Copy & Type Rules

This is the brain of the kit. The message is the hero: smaller units say less and say it bigger; larger units carry the full message.

### Principles

1. The headline is always the largest text, 3–6 words. Body is about half the headline size, the button label about half again.
2. Nothing prints below 11px. If text would land under 11px, leave it off.
3. Small units are headline-only. Body copy appears on mid and large units, and only if it fits.
4. If copy doesn't fit: drop the body first, then step the headline down one size. Never drop the headline on a unit that has a headline budget.
5. On banners, give up space in this order: partner logo → photo → "STREAM NOW" text → streaming logos. The show logo, headline and button always stay.
6. Character budgets follow platform limits: Google responsive display (30-character headline, 90-character description) and Meta (40-character headline).

### Size tiers

Character counts include spaces and refer to the finished ad.

| Tier | Sizes | Shows | Headline / Body / Button (chars) |
|---|---|---|---|
| Micro | 88×31, 120×20, 120×30, 120×60, 120×90, 160×90 | Logo + button (button hidden at 40px tall or less) | — / — / 10 |
| Strip | 320×50, 300×50, 300×60, 234×60, 320×100, 300×100 | Logo, short headline if it fits, button | 20 / — / 10 |
| Leaderboard | 728×90, 970×90, 468×60 | Logo, headline, button, streaming if room | 30 / — / 12 |
| Small | 300×250, 336×280, 250×250, 200×200, 180×150 | Headline on photo, logo, button | 30 / — / 12 |
| Skyscraper | 160×600, 120×600, 120×240 | Photo, logo, headline, button | 30 / — / 10 |
| Mid | 300×600, 300×1050, 320×480, 250×360, 480×320, 600×250, 728×315, 640×360, 800×418, 970×250, 970×415, 970×550, 627×627 | Everything, body if it fits | 35 / 60 / 15 |
| Large | 1080×1080, 1080×1350, 1080×1920, 1200×628, 1200×627, 1200×1200, 1600×900, 1200×675, 1000×1500, 1000×1000, 1280×720, 1920×1080, 1024×768, 768×1024 | Everything | 40 / 90 / 18 |

**Headline size by tier:** Strip and Leaderboard 24% of height · Small 9% of width · Skyscraper 11% of width · Mid and Large 6% of width (8% of height on landscape).

### Writing to the budget

Write the Large version first (40 / 90 / 18), then cut down. A headline that works at 20 characters will work everywhere.

---

## 4. Photo Specs & Safe Zones

One photo feeds all 50 sizes, cropped from the center. Send two masters.

| Master | Ratio | Size |
|---|---|---|
| Landscape | 16:9 | 3840×2160 or larger (1920×1080 minimum) |
| Vertical | 4:5 | 2160×2700 or larger (1080×1350 minimum) |
| Optional | 9:16 | Helps Stories, Reels and TikTok |

**Files:** sRGB JPG or PNG, full quality, no text, logos or watermarks baked in. IAB display exports should land under 150 KB each; compress at the very end.

**Where people go:**

- Faces and the product sit in the green safe zone, with about 10% headroom above the tallest head.
- **Landscape:** group people slightly right of center (34–84% across). The left third is where copy sits on overlay layouts.
- **Vertical:** faces in the upper half (14–54% down). The bottom 42% carries the headline; the top 12% is covered by app UI on Stories.
- **Skyscrapers:** at least one face and the product must fit the center strip (34–66% across).
- Keep the bottom and left of the frame calm and mid-toned, with no bright windows or busy patterns where copy sits.
- Best shot: hosts and participant together, engaged with each other or the product, product held at chest height near the faces.

---

## 5. Ad Sizes page: the 50 deliverables

Every size is an instance of the Ad component, labeled with its dimensions and where it runs.

| Section | Count | Examples |
|---|---|---|
| Mobile | 9 | 320×50 Mobile Leaderboard, 300×250 Medium Rectangle, 320×480 Interstitial, 768×1024 Tablet Interstitial |
| Social | 13 | 1080×1080 IG/FB Square, 1080×1350 Portrait 4:5, 1080×1920 Stories/Reels/TikTok, 1200×627 LinkedIn, 1000×1500 Pinterest, 1280×720 YouTube Thumbnail |
| Desktop (IAB) | 22 | 728×90, 970×250 Billboard, 300×600 Half Page, 160×600 Wide Skyscraper, 88×31 Micro Bar |
| Other Formats | 6 | 627×627 Native, 970×415 Expandable (expanded), 1920×1080 and 640×360 video |

---

## 6. Making a new ad set: the workflow

1. **Gather inputs.** Two photo masters that pass the safe-zone rules, a partner logo, and copy written to the Large budget (headline ≤ 40, body ≤ 90, button ≤ 18 characters).
2. **Set the partner.** Swap the Partner Logo component to the client's mark.
3. **Check the variables.** Confirm fonts and colors. Change them here, never on individual ads.
4. **Drop in the photo** on the Photo component. Check the Variations section to see how the crop holds across shapes.
5. **Write the copy down the tiers.** Large → Mid → Leaderboard/Small/Skyscraper (30) → Strip (20) → Micro (button only). Apply the fit rules: drop body first, then step the headline down.
6. **Review every size** on the Ad Sizes page. Look for faces cut off, text under 11px, and copy sitting on busy backgrounds.
7. **Flag for sign-off.** Client logos, partner claims and show branding need client approval before anything ships.
8. **Export.** Compress IAB units to under 150 KB.

---

## 7. Using the kit with an AI agent

The kit is named "Agent" for a reason: the rules are written so an agent can follow them without judgment calls.

- **Give the agent the rule sheets first.** Copy & Type Rules and Photo Specs are the instructions. Components and variables are the materials.
- **The agent fills slots; it doesn't design.** Its job is copy that fits the budgets, the right layout per tier, and the right variants.
- **Check the "Bad Generations" section on the Example page.** It shows an original photo next to broken AI generations. Use it as the reference for what to reject: never let a generated or "fixed" photo replace the approved master.
- **Human approval stays in the loop.** The agent produces drafts; a person checks crops and copy and gets client sign-off.

---

## 8. Building ads with Figma's MCP and the library

Because the kit is published as the **BST — Ad Agent Source Kit** library, an agent connected to Figma's MCP server can build ads from the real components instead of redrawing them. Every ad it makes stays linked to the library, so a later font or color change in the kit flows into those ads too.

### How the agent works through it

1. **Open a session on the target file.** Start a Figma MCP session on the file the ads will live in (a new campaign file, or a copy of the Ad Sizes page). Never build in the library file itself.
2. **Find the library.** Search the design system for **BST — Ad Agent Source Kit** and confirm the library is enabled for that file.
3. **Read the rules before building.** Pull the Copy & Type Rules and Photo Specs sheets (sections 3 and 4) so the agent has the budgets, tier sizes and fit order in hand.
4. **Place the Ad component.** Insert an instance of the library's **Ad** component for each requested size and pick the layout variant that matches its tier (Wide, Tall, Banner or Tiny).
5. **Fill the slots.** Set the headline, body and button text to copy written for that tier's character budget. Swap the Partner Logo instance to the client's mark. Set the Photo variant's shade (None, Bottom or Left side) to suit the layout.
6. **Apply the fit rules.** If copy overflows: hide body first, then step the headline down one text style. Hide anything that would land under 11px. On banners, drop elements in the set order: partner logo → photo → "STREAM NOW" → streaming logos.
7. **Screenshot and check.** Take a screenshot of each finished size and check crops, faces, legibility and anything under 11px before calling it done.
8. **Hand off for approval.** Report what was built, which sizes needed copy cut or elements hidden, and what needs client sign-off. A person approves before export.

### Ground rules for the agent

- **Use library instances only.** Don't detach components or rebuild them from shapes; detached ads stop updating with the kit.
- **Change styles through variables.** Fonts, colors and spacing are edited in the library's variables, never as overrides on a single ad.
- **Don't touch the photo.** Use the approved master as supplied. No AI regeneration or "fixes" (see Bad Generations).
- **Don't invent copy claims.** If the brief doesn't supply a headline or a claim, the agent asks rather than writing one.
- **Confirm the result.** After any change in Figma, the agent re-reads or screenshots the file to confirm it actually worked.

### Example request

> Using the BST — Ad Agent Source Kit library, build the Mid and Large tiers for The Balancing Act × grüns in [campaign file link]. Headline: "Real-life balance, on Lifetime." Body: "From the kitchen to the calendar." Button: "Watch the Show." Use the attached landscape and vertical masters.

---

## Housekeeping notes

- **The ad-copy script isn't in the file.** The Copy & Type Rules sheet says "the ad-copy script applies these rules automatically," but the script itself isn't stored here. Link to wherever it lives.
- **The Ad Sizes page holds unrelated work.** To the right of the ad sizes sit logo-animation wipe tests, an end card, and several Frame.io production-process boards (Between Takes, BrandStar Originals, BSO DIT to Delivery). Consider moving them to their own file so the kit stays clean for anyone handed it.
- **Button color isn't a variable yet.** Text and background colors are variables; the gold button fill should be one too, so a reskin is a single pass.
