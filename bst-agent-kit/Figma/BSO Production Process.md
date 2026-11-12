---
title: BSO Production Process (Figma boards, transcribed)
source: https://www.figma.com/design/8PRZCGKVuHdrNGuXs2fljr/BSO-Production-Process?node-id=0-1
owner: Jackson Sauder
last_synced: 2026-11-12
status: proposal — owners, gates and tool chips are proposals to confirm with the team
summary: How footage moves from set to client in Frame.io, applied to Between Takes and BrandStar Originals, plus the problems found in Frame.io and the Bundle Hub review.
---

# BSO Production Process

The Figma file outlines the production process and the problems found in Frame.io. It holds six boards on one page. This file transcribes their text so an agent can read it without opening Figma. The Figma file is still the source; re-check it before acting on anything here.

| Board | Figma node | What it covers |
|---|---|---|
| Frame.io Production Process | `3:2` | The general seven-step flow and the software stack |
| Between Takes · Frame.io Process | `6:2` | The flow applied to the podcast, with DIT rules |
| BSO · DIT to Delivery — recommended process | `15:2` | An earlier layout of the Originals process (overlaps the next board) |
| BrandStar Originals · Frame.io Process | `19:44` | The flow applied to BrandStar shows, plus Frame.io findings |
| Bundle Review Room · vs Frame.io | `20:44` | Review of the participant Bundle Hub against Frame.io |
| Content Labels · Hero to Ads | `26:44` | The Hero → Derived → Ads labeling system |

The page also holds four reference screenshots (Nov 12, 2026).

> **Confidential.** These boards name clients and participants (for example grüns, The Balancing Act, Coddle, American Tubs) and record internal findings about Frame.io access. Keep this repo private.

---

## 1. Frame.io Production Process

How footage moves from set to client. Frame.io is the single home for every asset; each tool does one job.

### The flow

| # | Step | Frame.io stage | What happens | Tools |
|---|---|---|---|---|
| 01 | Capture | — | Shoot on set. The DIT offloads cards into the standard DIT folder structure. | Cameras, DIT offload |
| 02 | Upload | 1 Raw | Footage lands in the episode workshop in Frame.io. | Frame.io |
| 03 | Edit | 2 Work | Editors cut segments in Premiere Pro, plus clips and graphics. | Premiere Pro, Opus Clip, Adobe Express, Figma |
| 04 | Review | 3 Review | Segments get timecoded notes in Frame.io. Social posts get reviewed in Metricool. | Frame.io, Metricool |
| 05 | Approve | 4 Ready | Approved finals only. Nothing leaves before it lands here. | Frame.io |
| 06 | Deliver | — | Finals copy into the client Deliveries tree. Each partner gets one share link. | Frame.io share link |
| 07 | Publish | — | Social goes out on schedule to Instagram, Facebook, TikTok, LinkedIn and web. | Metricool |

### Inside the Frame.io project

Two zones. The team works on the left. Clients only ever see the right.

- **Episode workshop (internal):** 1 Raw → 2 Work → 3 Review → 4 Ready. One workshop per episode. Assets move left to right through the numbers.
- **Deliveries (client-facing):** Behind the Scenes · Segment · Podcast · Graphics & Deck. Shared through one Frame.io link per partner. Social cutdowns stay out, except podcast clips.

### Software stack — one job per tool

| Tool | Job |
|---|---|
| Cameras | Capture on set |
| DIT offload | Cards to folder structure |
| Frame.io | Store, review, approve, deliver |
| Premiere Pro | Edit and export segments |
| Opus Clip | Short clips from long-form |
| Adobe Express | Social graphics |
| Figma | Design, decks, display ads |
| Metricool | Social review and publishing |

### Still to confirm

- Who owns upload and the move to 4 Ready
- Metadata fields tagged at launch

---

## 2. Between Takes · Frame.io Process

The same system, run on a podcast. Adobe end to end: Premiere Pro to cut, Frame.io to store, review and deliver, Notion to track every episode. Nothing lives anywhere else.

### The flow — one episode

| # | Step | Where | What happens | Owner | Tools |
|---|---|---|---|---|---|
| 01 | Film | On set | Record the episode. Identify the company, recording day, people, and every camera and audio file. | Recording / media intake | Cameras, Audio |
| 02 | Upload + DIT | 02_Podcast | Upload originals to Frame.io. DIT inventories files, confirms `Ep NNN_Brand Name` and the four folders, logs a manifest. | DIT / delivery agent | Frame.io, DIT, Notion |
| 03 | Edit | 03_Premier Edit | Save a separate revision in standard Premiere Pro, never Beta. Apply the editing, multicam, animation, sound and intro rules. | Editing agent / editor | Premiere Pro |
| 04 | Export + QC | Terminal 1 | Export the MP4 to the Terminal 1 drive. Full audio sign-off, loudness check and checksum before release. | Editing agent / editor | Premiere Pro, Terminal 1 |
| 05 | Deliver | In Review collection | Tag Podcast, Brand, Internal Review and release date. Move into the episode folder, stack on top, add to In Review. | Delivery agent | Frame.io, Notion |
| 06 | Review | Frame.io comments | Watch and listen in full. Leave timestamped comments in Frame.io. 5-day notes window, 2-day closeout. | Jax (internal), then client | Frame.io, Notion |
| 07 | Approve | Episode outer level | Only a human approves and sets Complete. Final MP4 sits beside the four folders and joins Final Episodes. | Human owner | Frame.io, Notion |
| 08 | Social | 04_Social | Clips, trailers, captions and thumbnails get built, then scheduled and distributed once authorized. | Marketing | Opus Clip, Adobe Express, Metricool |

**Revision loop.** Runs from Review back to Edit until a human approves. No response is not approval.
Changes requested in Frame.io → each comment copied to a Notion checkbox → Needs Agent Pass checked → new revision in Premiere Pro → Export + QC again → redeliver on top of the stack → back to the same review stage.

### Folder system

Every episode, same four folders. Exact names, numbers and spacing.

```
/Volumes/Between-Takes-Podcast/      Frame.io mounted library. The DIT works only here.
  Ep NNN_Brand Name/                 Three-digit number + brand only. No dates or status. e.g. Ep 001_US Pet
    01_Archive/                      Superseded edits, old reviews, test projects, dated move manifests. Archive means kept.
    02_Podcast/                      Complete camera-card folders, original video and audio, ISOs, sync files, checksums.
    03_Premier Edit/                 Active Premiere project, stems, mixes, generated media, edit notes.
    04_Social/                       Clips, trailers, captions, thumbnails. Empty until marketing starts.
    <Final episode MP4>              Only the human-approved final, beside the four folders. No approval, no file here.
```

### DIT rules — apply to every operation

1. **Never delete.** Duplicates, empty folders, autosaves and old versions all stay.
2. **Never overwrite.** Same name at the destination? Keep both and log where each came from.
3. **Move camera cards whole.** Keep XML, BIM, MHL and every sidecar with the card.
4. **One episode, one folder.** Never mix brands or file shared brand assets into an episode.
5. **Log every move.** Original and new path in a dated manifest in 01_Archive.
6. **Ask when unclear.** Episode, file role, current edit or final unclear? Ask the owner, keep organizing the rest.
7. **Stay on the mounted drive.** No Downloads, no other drives, no other storage service.

### DIT procedure — run on every episode and every revision return

1. Inspect. Record every file, size and location before moving anything.
2. Confirm the episode number and brand against the approved roster.
3. Check destinations for name collisions. Create any missing folders.
4. Move clearly identified files within the mounted drive.
5. Log each move in the dated manifest in 01_Archive.
6. Verify every original is still there, same name and size.
7. Confirm four folders, final MP4 only if approved, social in 04_Social.
8. Hand off what changed, what stayed and what needs a decision.

**Logged in the episode's Notion page:** a dated DIT organization record — folder path, manifest, moves, project link, Premiere validation result, open items. A passed DIT check means organized, not approved.

### Where everything lives — five places, one job each

| Place | Job |
|---|---|
| Between-Takes-Podcast | Frame.io mounted library. The shared home for every episode. |
| Terminal 1 | Frame.io mounted export drive. Every MP4 passes through here first. |
| In Review collection | The one review link for drafts. Reused for every revision, never a new share. |
| Final Episodes collection | Human-approved finished episodes only. |
| Notion episode page | Link, status, Needs Agent Pass, review checklist, DIT record. |

Software: Premiere Pro (edit, revise, export — standard release only) · Frame.io (store, review, comment, deliver) · Notion (episode tracking, review checklists, DIT records) · Opus Clip (short clips) · Adobe Express (social graphics and thumbnails) · Metricool (scheduling and publishing).

---

## 3. BSO · DIT to Delivery — recommended process

An earlier layout of the BrandStar Originals process. Its text sits inside components, so this summary was read from a screenshot. Board 4 carries the same content in fuller form. Points that board 3 states more specifically:

- Each of the eight steps has an **Output** and a **Gate**. Examples: Set up → "One canonical location; separate test assets." Offload → "Release cards only after the agreed backup policy passes." Proxies → "Test relink to originals; verify burn-in references." Handoff → "Missing or mismatched media returns to DIT." Review → "Changes return to editorial; each new cut gets a unique revision." Approve & QC → "Failed QC returns to finishing; reapprove changed content." Deliver → "Test the recipient view before sending." Archive → "Close only when the retained package can be recovered."
- **If a gate fails:** return to the responsible owner. Review changes loop to step 04; master QC failures loop to step 06. Archive is a separate responsibility from uploading.

---

## 4. BrandStar Originals · Frame.io Process

The same system, run on our shows. Camera card to approved delivery inside one Frame.io project: one job ID, one folder template, one handoff record. Every gate needs evidence before the next handoff.

### The flow — one job

| # | Step | Where | What happens | Owner | Tools |
|---|---|---|---|---|---|
| 01 | Set up job | Show / Job ID | Create one job ID from the existing template. Record show, client, season or episode and the intended deliverables. | Production / post coordinator | Frame.io |
| 02 | Offload | 01_Footage | Keep camera card structure and original clip names. Make checksum-verified copies to independent destinations. Review the reports. | DIT / data wrangler | Cameras, Audio, DIT |
| 03 | Proxies | 01_TC Burns | Check picture, sound, sync and frame rate. Record LUT and color space. Create clip-matched proxies and TC-burn viewing copies. | DIT / assistant editor | DIT, Frame.io |
| 04 | Handoff | Job folder | Upload to the correct job folders. Reconcile file counts. Pass on originals location, sound, sync and color notes. Confirm receipt. | Assistant editor / editor | Frame.io, Premiere Pro |
| 05 | Review | 02_Rough Cuts | Upload uniquely named cuts. Stack revisions of the same deliverable together. Collect timecoded notes and resolve them. | Editor, producer, reviewer | Frame.io, Premiere Pro |
| 06 | Approve + QC | 03_Final Deliverables | Record approval against the exact revision. Check the master against delivery specs: picture, audio, captions, text and variants. | Named approver, finishing / QC | Frame.io |
| 07 | Deliver | Share link | Share only the approved files. Set access, downloads, version visibility and expiry. Test the recipient view, then log what went out. | Post coordinator / delivery owner | Frame.io |
| 08 | Archive | Archive | Keep originals, sound, project files, masters and reports per policy. Record archive locations, test a restore, retire old links. | Post / archive owner | DIT |

**Revision loop.** Runs from Review back to editorial until a named approver signs off. Missing media returns to DIT. Failed QC returns to finishing.
Notes left in Frame.io → back to editorial → new uniquely named cut → upload to 02_Rough Cuts → stack on the same deliverable → back to the same review stage.

### Folder system (the template already in the project)

```
Show / Season                    One show, one home. Seasons sit inside.
  Show Assemblies                Show-level cuts that span jobs.
  Job ID / Participant           One canonical location per job. Test assets live elsewhere.
    01_Production                Everything shot and built for the job.
      01_Footage                 Camera originals. Card structure and clip names stay intact.
      02_Assets                  Supporting media for the edit.
      03_Exports                 Everything rendered out of the edit.
        01_TC Burns              Timecode-burn viewing copies. Labeled, never mistaken for masters.
        02_Rough Cuts            Uniquely named cuts in review.
        03_Final Deliverables    Approved, QC'd masters only. No approval, no file here.
    02_Behind the Scenes         Behind-the-scenes capture for the job.
    03_Marketing                 Marketing assets for the job.
```

Observed template. Label what is a proxy, a viewing copy or a master.

### DIT handoff record — attached to every job before editorial accepts it

1. Job ID + shoot date — ties the record to one job folder.
2. Roll IDs + file counts — camera and sound rolls, counted at offload.
3. Checksum reports + backups — proof each copy matches, and where every copy lives.
4. Original location + owner — where the media sits and who received it.
5. Frame rate, timecode, sync — sound sync notes included.
6. LUT + color space — what the footage needs to look right.
7. Proxy mapping + relink — proxies relink to originals. Result recorded.
8. Exceptions + QC notes — missing media and anything off-spec.

*Not yet verified:* the Frame.io review did not find these records. Locate existing ones or add this control. A passed handoff means organized, not approved.

### Approval rules — run on every revision

1. Name every distinct revision uniquely.
2. Keep variants distinct: broadcast, social, textless, music-free.
3. Record the exact asset and revision approved.
4. Record approver, date and technical QC.
5. Share only the approved delivery set.
6. Log recipient, share, expiry and file list.

**Naming example:** `JOBID_Deliverable_Variant_v003_20261112.ext`. Never rename camera originals to match the export pattern.

### What we found in Frame.io

Samples from the Nov 12, 2026 review, not a full audit. Nothing has been changed in Frame.io yet.

| # | Finding | Evidence | Action |
|---|---|---|---|
| 01 | Revision identity | Coddle has two V2.mp4 files with different durations: 3:34 and 4:02. | Assign unique revisions and mark the approved asset. |
| 02 | Delivery link access | Both sampled links were public and downloadable, all versions on, no passphrase or expiry. | Set access per recipient and per delivery. |
| 03 | Folder consistency | Client jobs, seasons and episode IDs use different layouts. American Tubs has two near-identical folders. | One job location, built from the existing template. |
| 04 | Metadata + approval | Sampled assets have blank Show, Asset Type and Status fields. | Require minimum fields and an exact approval record. |
| 05 | Test content + access | TEST and AI libraries share the production project, with inherited workspace access. | Confirm access boundaries and not-for-air controls. |
| 06 | DIT evidence | Checksum reports, backups, source mapping, sync and color notes were not verified. | Find existing records or add the handoff record. |

**Observed structure (BRANDSTAR workspace, reviewed Nov 12, 2026):** BRANDSTAR → Brandstar Originals → Show → Job or Season / Episode → Assets → Share links. 16 top-level folders · ~8.49 TB stored · 10 members plus inherited workspace access · 3,120 share links. Sampled shows: Designing Spaces, Health Uncensored, Military Makeover.

*Scope:* structural review of the Brandstar Originals Frame.io project, not file-by-file QC. Owners, gates and tool chips are proposals to confirm with the team.

---

## 5. Bundle Review Room · vs Frame.io

What Mark's participant hub does, using the grüns test build (v0.3) for The Balancing Act, and which parts Frame.io already covers. Mark confirmed the Review Room is internal; this hub is the participant view.

### What's in one bundle (grüns, The Balancing Act)

121 assets (66 video, 54 image, 1 audio) · 17 asset groups · 16 planned posts in 4 phases, Oct 16 to Nov 6 · 7 copy blocks · 6 verbatim quotes with timecodes (need approval) · 120 of 121 cards link to Frame.io.

### How it's built

Bundle folders, generated the same for every participant (asset counts from the grüns build): 01_Social_Posts (10) · 02_Tune_In (5) · 03_Quote_Cards (18) · 04_Expert_Kit (4) · 05_Website (1) · 06_Events (3) · 07_Video (67: 01_Segment, 02_Tune_In, 03_Segment_Cutdowns, 04_Podcast, 05_Podcast_Clips, 06_Social_Room, 07_Podcast_Reels) · 08_Thumbnails (2) · 09_Photo_Kit (11).

Views: **Calendar** (default; 16 posts in four phases, each with date, format, caption, channels and a Copy caption button) · **All assets** (filterable grid of 121) · **Copy kit** (LinkedIn posts, newsletter blurb, press line, speaker intro, email signature, website module, six verbatim quotes) · **Player + Frame.io hand-off** (pop-up player; "Open in Frame.io" for full-quality download and comments).

### Feature by feature

| Feature | In the hub | In Frame.io today | Verdict |
|---|---|---|---|
| Asset library | Grid of 121 assets with filters and search | Project folders, Collections and search | Frame.io does this |
| Playback | Pop-up player | Frame.io player on every asset and share link | Frame.io does this |
| Full-quality download | Sends people to Frame.io | Frame.io serves the file | Frame.io does this |
| Comments and review | Sends people to Frame.io | Timecoded comments on the asset | Frame.io does this |
| Specs and labels | Aspect, duration, resolution, captioned, .srt | Metadata fields, once the team fills them in | Partly in Frame.io |
| Preview media | Thumbnails embedded in page (4.8 MB HTML) | Files already live in Frame.io; this is a second copy | Frame.io does this |
| Show-branded front door | Client name, show logo | Share link with a title; branding depends on plan | Check our plan |
| Posting calendar | 16 posts, four phases | Not in Frame.io; scheduling lives in Metricool | Hub adds this |
| Copy kit | Seven ready-to-paste blocks | Not in Frame.io | Hub adds this |
| Verbatim quotes | Six quotes with timecodes | Not in Frame.io as a list | Hub adds this |

### The case

**Frame.io already does this (Jackson's position):** six of ten features point back to Frame.io or copy it; every card already links to the Frame.io file, so the hub wraps a share link; embedded previews duplicate media already in paid storage; a page outside Frame.io sits outside its access, expiry and download controls.

**Where the hub earns its place:** the posting calendar turns 121 files into a plan a CMO can follow; the copy kit and quotes save the client real work after air; a branded front door feels like a premiere; none of that needs to store or play media.

**Proposed path (draft for discussion with Mark):**
1. Frame.io stays the source of truth: storage, playback, download, comments.
2. Deliver each bundle as one Frame.io Collection or share link, with access and expiry set per participant.
3. Keep the calendar, copy kit and quotes as a light page that links into Frame.io and embeds nothing.
4. Route posting through Metricool review, so scheduling lives in one place.

*Source:* grüns Bundle Hub artifact, version 0.3-test, reviewed Nov 12, 2026. Captions, dates and quotes in the hub are drafts that need client and legal sign-off before posting.

---

## 6. Content Labels · Hero to Ads

Every file is an asset, but the label has to say what it is. Content flows down from one Hero piece: Hero, then Derived, then Ads. Every file gets a two-part label: its **tier** and its **type**.

| Tier | Definition | Types |
|---|---|---|
| **1 · Hero** | The full piece everything else comes from. One per segment or episode. | Full segment · TV (Main Stage); Full episode · podcast (Room 2); Extended / director's cut |
| **2 · Derived** | Cut or built from Hero. Organic social and promotion. | Clip, Reel, Chapter, Carousel, Static post, Quote card, Tune-in promo, Thumbnail |
| **3 · Ads** | Paid media. Built from Hero or Derived, to ad specs, run with spend. | Video ad, Static ad, Carousel ad |
| **Supporting** | Not cut from Hero. Captured or built alongside it; can feed any tier. | Social Original (Room 3 interviews, trend content); BTS (video and photos); Partner Kit ("As featured on" badges, banners, signatures, website and event pieces) |

**Label examples (proposal; episode number illustrative):**

- Hero · Full segment → `Ep 214_Gruns_Hero_FullSegment_v03`
- Derived · Carousel → `Ep 214_Gruns_Derived_Carousel_v01`
- Ads · Video ad → `Ep 214_Gruns_Ads_VideoAd_9x16_v02`

**Never use "graphics" as a label.** Graphics is how something is made, not what it is. A carousel is Derived · Carousel. A tune-in card is Derived · Tune-in promo.

### Worked example: the grüns bundle, relabeled

| In the hub today | Count | New label | Note |
|---|---|---|---|
| Broadcast segment | 2 | Hero | Full segment and extended cut |
| Podcast | 2 | Hero | Full episode |
| Segment cutdowns | 23 | Derived | Clips, three aspect ratios each |
| Podcast clips + reels | 25 | Derived | Clips and reels |
| Podcast chapters | 4 | Derived | Chapters |
| Tune-in videos + cards | 10 | Derived | Tune-in promo, organic not paid |
| Social image posts + carousel | 10 | Derived | Static posts and carousels, not "graphics" |
| Quote cards | 18 | Derived | Quote cards |
| YouTube thumbnails | 2 | Derived | Thumbnails, packaging for Hero |
| Social room | 6 | Social Original | Room 3 content |
| Photo kit | 11 | BTS | On-set photos |
| Featured-expert kit, website, events | 8 | Partner Kit | Badges, banner, signature, booth pieces |
| — | 0 | Ads | No paid ads in this bundle |

**Totals:** 4 Hero · 92 Derived · 0 Ads · 25 Supporting. 121 files in the hub. Read by tier, it's 4 Hero pieces and 92 things made from them. The hub's own labels ("Graphics and photos," "Social graphics") hide that.
