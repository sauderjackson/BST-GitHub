---
title: "Frame.io Content Playbook (Draft v0.1)"
brand: BrandStar
source: https://app.notion.com/p/4166d55232fa806d9c02f28741d3bf9c
last_synced: 2026-11-12
status: draft
summary: "Rules, content labels, folder template and 11-step episode workflow for keeping every BrandStar show file in Frame.io, from upload through metadata-driven review and delivery."
---

# Frame.io Content Playbook (Draft v0.1)

## Delivery routing — current rule

The metadata and collection-routing rule below applies to this playbook’s handoff and supersedes older share-creation or manual collection-add instructions. Detailed procedure: [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be).

> Synced block from [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be#9698749c8520441e89002228d62a1f4e):
>
> **Collection routing — owner correction, 2026-11-12.** Delivery uses metadata to funnel assets into the existing collections. This rule applies to every episode, revision and handoff and supersedes any instruction to create a share or manually add an asset to a share.
>
> 1. After actual-export QC and authorization, wait for the Terminal 1 cloud asset to show its thumbnail, runtime and upload timestamp. Set and verify Asset Type, **Brand / Company Name** (single-line text), Status and the current task's Release Date; observe documented episode-specific exceptions. Enter the approved company spelling exactly (for this episode, `HP`), trim extra spaces and use the same spelling in Notion and folder references. Brand identity is free text; workflow Status remains the existing controlled field.
> 2. Move that same asset into the established episode destination and preserve the correct version history/comments. Recheck metadata after the move or stack.
> 3. Allow the existing metadata-driven collections to route the asset. Inspect the appropriate existing collection to verify the exact asset/version appears. Review delivery uses In Review; Final Episodes requires explicit human final approval and matching metadata. Do not equate moving folders with verified collection routing.
> 4. **Do not click Share, Create Share Link or Add to Share Links as a delivery shortcut. Do not create episode/revision links, duplicate collections, manually curate share membership or change collection filters/access to force an appearance.** A new share requires Jackson's explicit request for that specific exception.
> 5. If routing fails, inspect saved metadata and existing collection criteria without changing them. **Brand / Company Name** is the current typed brand identity; preserve the original **Brand / Company** dropdown and its historical values. Adding a text field does not migrate dropdown data or retarget existing filters. If an existing rule depends on the old dropdown, document the exact dependency and obtain authorization for a separate verified migration; never change filters/access or manually add share membership to force routing. Conflicting dates, unavailable fields and inaccessible rules remain open checks. Notes is context, not a substitute for a required routing-field value.
> 6. Record the direct existing asset/stack address, exact version, saved metadata and collection verification in the existing Notion episode task; retain the review stage. A direct asset address is a reference to the asset, not a newly created share. Report pending checks honestly and keep Needs Agent Pass on while corrective work remains.
>
> If a share is created accidentally, stop the share workflow, disclose it, disable its access promptly and verify the disabled state. Preserve the episode asset, comments and existing collections; record the correction. Do not claim a disabled share record was deleted.

**Status:** Draft for Jackson's review. Not yet shared with the team.\
**Pilot:** Between Takes. Once it works for two episodes, we extend it to The Balancing Act and other shows.

## Why this exists

BrandStar is an Adobe and [Frame.io](http://Frame.io) company. Every file lives in [Frame.io](http://Frame.io), and nothing lives anywhere else. This playbook gives people and AI agents one set of rules, so we stop creating duplicate files and messy folders.

## The three rules

1. **One home.** Every episode has one folder, built from the template. Nothing gets a parallel folder.
2. **Never delete, never overwrite.** Superseded files move to 01_Archive. Name clashes keep both files and log it.
3. **Approved means a person said so.** No response is not approval. An agent check means organized, not approved.

## How we label content

Every file is an asset, but the label has to say what it is. Content flows down from one Hero piece. Never use “graphics” as a label: graphics is how something is made, not what it is.

- **Tier 1 · Hero** — the full piece everything else comes from: the full segment (TV) or the full episode (podcast).
- **Tier 2 · Derived** — cut or built from Hero for organic social and promotion: clips, reels, chapters, carousels, static posts, quote cards, tune-in promos, thumbnails.
- **Tier 3 · Ads** — paid media built from Hero or Derived, to ad specs: video ads, static ads, carousel ads.
- **Supporting** — not cut from Hero: Social Originals (Room 3), BTS, and the Partner Kit (“As featured on” badges, banners, signatures, website and event pieces).

**Every file carries two labels: tier and type.** Examples: Hero · Full segment, Derived · Carousel, Ads · Video ad. The same two labels go in the file name and the [Frame.io](http://Frame.io) metadata.

## What every show captures

Every shoot produces three kinds of content. Each one has its own folder, and nothing crosses over.

- **Hero** — the main content. For TV shows, the segment that airs on Lifetime or Fox. For Between Takes, the podcast episode.
- **Social** — content made for social: interviews, trend content and clips the team cuts.
- **BTS** — behind-the-scenes video and photos from the shoot.

## Where it's captured

The studio has three capture areas. Where something was shot tells you which folder it goes in.

- **Main Stage** → Hero for TV shows (Lifetime, Fox).
- **Room 2** → Hero for the podcast (Between Takes).
- **Room 3** → Social: interviews and trend content.
- **BTS** covers all three areas → BTS.

## One project per brand

Every brand or show gets its own [Frame.io](http://Frame.io) project: The Balancing Act, Between Takes, Military Makeover, Designing Spaces, Health Uncensored and so on.

- **Why:** each show keeps its own members, share links and storage, and agents can be pointed at one show at a time.
- **Name:** the show's name only, e.g. "The Balancing Act" or "Between Takes".
- **Template:** new shows start from a template project that already has the folder structure below.
- **Shared assets:** logos, lower thirds, music beds and brand templates live in one BrandStar Brand Assets project, so they're not copied into every show.

## The folder template

Every episode uses the same folders, with exact names and numbers. Hero, Social and BTS each have the same three stages inside: Raw, Edit, Final.

- **Ep NNN_Brand Name** — three-digit number plus brand. No dates or status in the name.
  - **00_Agent_Inbox** — the only place AI agents write. A person reviews and promotes what's good.
  - **01_Archive** — superseded edits, old reviews, test files, dated manifests.
  - **02_Hero** — the segment or podcast episode.
    - **1_Raw** — original camera and audio files from Main Stage or Room 2, kept whole.
    - **2_Edit** — the Premiere project, stems, mixes and edit notes.
    - **3_Final** — the approved master only.
  - **03_Social** — interviews, trend content and clips.
    - **1_Raw** — original files from Room 3.
    - **2_Edit** — projects and working files.
    - **3_Final** — approved social posts, including clips cut from Hero.
  - **04_BTS** — behind-the-scenes from every area.
    - **1_Raw** — all BTS video and photos.
    - **2_Edit** — selects and retouching.
    - **3_Final** — approved BTS photos and videos.

**Two placement rules people get wrong:**

- A clip cut from Hero is Social. It goes in 03_Social/3_Final, never in 02_Hero.
- A BTS photo shot during the podcast is still BTS. Capture area decides the folder only for Hero and Social.

## The steps

### 1. Set up the episode

- **Who:** Production
- **Do:** Create the episode folder from the template. Create the episode's Notion page.
- **Done when:** The folder and the Notion page exist and are linked to each other.

### 2. Film and upload

- **Who:** Recording / media intake
- **Do:** Upload each capture area's files to its Raw folder: Main Stage or Room 2 to 02_Hero/1_Raw, Room 3 to 03_Social/1_Raw, BTS to 04_BTS/1_Raw. Keep camera cards whole, with their sidecar files.
- **Done when:** Every original file from the shoot is in the right Raw folder.

### 3. DIT check

- **Who:** DIT
- **Do:** Inventory every file. Confirm the episode number, brand and capture area. Verify copies match the originals (checksum). Log a dated manifest in 01_Archive and the DIT record on the Notion page.
- **Done when:** The manifest and DIT record exist. Missing or mismatched media goes back to intake.

### 4. Edit

- **Who:** Editor
- **Do:** Save a separate revision in standard Premiere Pro, never the Beta. Work only in the matching 2_Edit folder.
- **Done when:** A complete cut is ready to export.

### 5. Export and QC

- **Who:** Editor
- **Do:** Export the MP4 to the Terminal 1 drive. Full audio check, loudness check and checksum before release.
- **Done when:** The export passes QC.

### 6. Review

- **Who:** Jackson (internal), then the client
- **Do:** Set and verify the cut’s metadata, then verify the exact version appears automatically in the existing In Review collection. Do not use Share, Create Share Link or Add to Share Links, or manually curate share membership. Reviewers watch in full and leave timestamped comments in [Frame.io](http://Frame.io). 5-day notes window, 2-day closeout.
- **Revision loop:** Comments → new revision in Premiere → export and QC again → stack on top → back to the same review stage.
- **Done when:** A named person approves.

### 7. Approve

- **Who:** Named approver
- **Do:** Record who approved, which exact version, and the date, on the Notion page. Move the approved file into its matching approved-final destination, set the authorized final metadata and verify automatic routing into the existing Final Episodes collection. Do not manually add it to a share.
- **Done when:** The approval record exists. No record, no final.

### 8. Agent assets

- **Who:** AI agents write. A person promotes.
- **Do:** Agents write only to 00_Agent_Inbox and follow these rules:
  - Name files Ep NNN_Brand_Asset_Variant_v01.
  - Fill Show, Brand, Content Type (Hero, Social or BTS), Capture Area, Status and Source = Agent.
  - Link to source media. Never upload a second copy of it.
  - Make only what the contract's deliverables list calls for.
  - Read from approved files in 3_Final only, never from Raw or Edit.
- **Done when:** A person has reviewed the inbox and moved approved assets into the matching 3_Final folder. Rejected assets move to 01_Archive.

### 9. Social

- **Who:** Marketing
- **Do:** Cut clips and graphics with Opus Clip and Adobe Express from approved Hero and Social footage. Save them to 03_Social. Schedule through Metricool review.
- **Done when:** Posts are approved and scheduled in Metricool.

### 10. Deliver to the client

- **Who:** Delivery owner
- **Do:** Deliver through the established metadata-driven collection. Verify saved metadata, automatic inclusion of the exact approved version, existing access and the existing collection address, then log delivery on the Notion page. Do not create a share, manually add share membership or alter access/expiry as a default delivery step. A new share requires Jackson’s explicit request for that specific exception.
- **Done when:** The client has the link and the delivery is logged.

### 11. Archive and close

- **Who:** Production
- **Do:** Confirm everything is where it belongs and the correct existing collection reflects the saved metadata. Preserve existing collections, links and history; do not retire or replace established links as routine closeout.
- **Done when:** The Notion page is marked closed.

## Open questions for Jackson

- On segment shows, is the unit of work the episode or each brand's segment? That decides the top folder name.
- Who promotes assets out of 00_Agent_Inbox, and how fast?
- Is 00_Agent_Inbox the right name, or should it match something Mark already uses?
- What's our archive policy: how long do we keep originals and old cuts?
- What share-link controls does our [Frame.io](http://Frame.io) plan allow (passphrase, expiry, branding)?
- Who approves for the client side, and does that get recorded in [Frame.io](http://Frame.io) or Notion?
- When do we bring Mark in, and as a reviewer or a co-owner?
- When one participant appears on two shows (for example, a TBA segment plus a Between Takes episode), where does their combined delivery live?
- What happens to the existing BrandStar Originals project: migrate show by show, or leave it as an archive?
- Does our [Frame.io](http://Frame.io) plan limit the number of projects?
