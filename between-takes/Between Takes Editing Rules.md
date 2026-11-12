---
title: "Between Takes Editing Rules"
brand: "Between Takes"
source: "https://app.notion.com/p/4166d55232fa808d8183f0507b4a6c88"
last_synced: 2026-11-12
summary: "Master editing workflow: queue intake, separate Premiere Pro revisions, episode build order, timeline organization, export QC, Terminal 1 export naming and storage rules."
---

# Between Takes Editing Rules

## Delivery routing — current rule

The metadata and collection-routing rule below applies to this playbook’s handoff and supersedes older share-creation or manual collection-add instructions. Detailed procedure: [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be).

<!-- Notion synced block (source: Between Takes Frame.io Process, https://app.notion.com/p/4166d55232fa8002849eda831dcd92be#9698749c8520441e89002228d62a1f4e) -->

**Collection routing — owner correction, 2026-11-12.** Delivery uses metadata to funnel assets into the existing collections. This rule applies to every episode, revision and handoff and supersedes any instruction to create a share or manually add an asset to a share.

1. After actual-export QC and authorization, wait for the Terminal 1 cloud asset to show its thumbnail, runtime and upload timestamp. Set and verify Asset Type, **Brand / Company Name** (single-line text), Status and the current task's Release Date; observe documented episode-specific exceptions. Enter the approved company spelling exactly (for this episode, `HP`), trim extra spaces and use the same spelling in Notion and folder references. Brand identity is free text; workflow Status remains the existing controlled field.
2. Move that same asset into the established episode destination and preserve the correct version history/comments. Recheck metadata after the move or stack.
3. Allow the existing metadata-driven collections to route the asset. Inspect the appropriate existing collection to verify the exact asset/version appears. Review delivery uses In Review; Final Episodes requires explicit human final approval and matching metadata. Do not equate moving folders with verified collection routing.
4. **Do not click Share, Create Share Link or Add to Share Links as a delivery shortcut. Do not create episode/revision links, duplicate collections, manually curate share membership or change collection filters/access to force an appearance.** A new share requires Jackson's explicit request for that specific exception.
5. If routing fails, inspect saved metadata and existing collection criteria without changing them. **Brand / Company Name** is the current typed brand identity; preserve the original **Brand / Company** dropdown and its historical values. Adding a text field does not migrate dropdown data or retarget existing filters. If an existing rule depends on the old dropdown, document the exact dependency and obtain authorization for a separate verified migration; never change filters/access or manually add share membership to force routing. Conflicting dates, unavailable fields and inaccessible rules remain open checks. Notes is context, not a substitute for a required routing-field value.
6. Record the direct existing asset/stack address, exact version, saved metadata and collection verification in the existing Notion episode task; retain the review stage. A direct asset address is a reference to the asset, not a newly created share. Report pending checks honestly and keep Needs Agent Pass on while corrective work remains.

If a share is created accidentally, stop the share workflow, disclose it, disable its access promptly and verify the disabled state. Preserve the episode asset, comments and existing collections; record the correction. Do not claim a disabled share record was deleted.

<!-- end synced block -->

Use this as the starting point for each episode. The editing agent owns Premiere and exports; the delivery agent owns [Frame.io](http://Frame.io) filing and episode tracker writes. Humans review, approve and set Complete.

## Required app — standard Premiere Pro only

Use the standard release of Adobe Premiere Pro for every episode, editing pass, project revision, native playback check and export. Never use Premiere Pro Beta. This rule applies across all Between Takes editing guides and workflows.

Before opening or saving a project, confirm the running application is standard Premiere Pro; do not rely on a file association that may launch Beta. If the standard app cannot open a project, preserve the original and report the compatibility issue rather than switching to Beta.

## Notion Notes — one current-status sentence

Keep the episode’s Notes property to exactly one short sentence stating its current stage/next action or the specific blocker. Replace the previous status when it changes; do not append paragraphs. Keep detailed feedback, caveats, paths, QC/delivery evidence and history inside the episode page, preserving any unique older Notes content there before shortening it. Example: “v03 is in internal review, awaiting Jackson’s feedback.”

## 1. Refresh the queue and confirm the work

1. Read the latest schedule, task status, Notes, episode references and [Frame.io](http://Frame.io) comments. Work available tasks with Needs Agent Pass checked or In progress in scheduled episode order.
2. Use the current explicit request as authority. Preserve newer edits and unrelated notes.
3. Locate source footage, audio and the current native project; check media links before requesting downloads.
4. Coordinate the task’s In progress status through the delivery agent. Missing media: record `Need download: [company] footage + audio.`, mark Blocked, leave Needs Agent Pass checked and continue to the next available episode. Never treat a partial download as ready.

## 2. Prepare a separate revision

1. Start at `AGENTS.md` in `/Volumes/Mac Mini 2TB/BT-Agentic Editor/`.
2. Save As into `02_Edited/[Company]/Projects`. Preserve the original project, every prior revision and all source media.
3. Keep generated audio, graphics and other dependencies in the episode’s `Supporting Assets`; feedback/source maps in `Notes`; delivered-video bookmarks and preserved reviews in `Review Exports`.
4. Apply the current folder and scratch-disk rules below. Folder placement never establishes review or approval status.

## 3. Build the episode

Follow these focused sections in the edit. Episode order is **HIGHLIGHTS → INTRO → CONTENT → OUTRO**.

- [Between Takes Highlights — Before the Intro](https://app.notion.com/p/4166d55232fa81f3a416eedc447d0b6e) — curiosity hook, complete words, J/L cuts, fixed crops, Epidemic Sound music and the hard cut into the intro.
- [Between Takes Intro and Outro](https://app.notion.com/p/4166d55232fa80bba951d41ad90d0566) — Version 04 assets, episode order and opening/closing joins.
- [Between Takes Multi Cut Style](https://app.notion.com/p/4166d55232fa804296fbc7c476c8ecf7) — active-speaker coverage and synchronized cuts.
- [Between Takes Animation Style](https://app.notion.com/p/4166d55232fa808189c5dfdb82f9381f) — names, lower thirds, gradient and timing.
- [Between Takes Sound Engineering Rules](https://app.notion.com/p/4166d55232fa806dade1fb1ce41db0f1) — dialogue, music, sync and exported-file listening checks.

### Conversation edits

#### Pacing and silence

- Keep natural ums, breaths, and brief pauses that support the speaker's rhythm. Don't strip every filler.
- Shorten awkward long silences and dead air, judged in context, not by a fixed duration.
- Keep intentional pauses that carry meaning, emotion, humor, or a reaction.
- When closing a gap, keep every camera angle and dialogue track synced. Check the join for clipped syllables, overlaps, picture jumps, clicks, and room-tone changes.

#### Production chatter

- Remove on-mic permission talk ("Are we allowed to say that?", "Can I ask this question?") and setup or retake chatter.
- Removing the concern doesn't clear the content it refers to. If clearance or the cut is unclear, flag the passage and timestamp; never treat it as cleared.
- When the cut is clear, also remove any abandoned lead-in or restart, and join the conversation naturally.
- List unresolved content concerns in the edit notes.

### Sequence and export

- **1920 × 1080**, landscape 16:9, square pixels, progressive, for YouTube.
- Keep the episode's own frame rate. NeOnc is about **29.97 fps**; Gruns and U.S. Pet were **24 fps**.
- Resize graphics for the actual sequence. A graphic from a 4096 × 2160 sequence needs checking in 1920 × 1080.
- Check the final export dimensions too: no unintended vertical framing, stretched faces, or edge cropping.

### Required timeline organization — every episode and revision

Established from Jackson's HP timeline review on 2026-11-12. Leave each working timeline compact, clearly named and color-coded so the highlights, intro, content and outro can be identified together at a glance.

| Section or asset | Visible label color | Naming |
| --- | --- | --- |
| Highlights picture, dialogue and music | Teal | HIGHLIGHTS |
| Intro picture and intro music | Blue | INTRO |
| Conversation picture and dialogue | Orange | CONTENT |
| Outro picture and outro music | Green | OUTRO |
| Lower thirds, gradient and other graphics | Purple | Name the graphic or person |

Use these visible colors consistently. Verify them in Premiere's actual timeline; saved palette numbers or color names alone do not prove the displayed result. Do not change global label preferences to achieve an episode's layout.

#### Compact track structure

1. Start from the latest saved edit in standard Premiere Pro and preserve a separate earlier revision. Coordinate control when Jackson is making live changes; do not replace his work with an older saved timeline.
2. Where the clips do not overlap, place highlights, intro, conversation and outro picture consecutively on one clearly named primary picture track. Keep the underlying camera edits editable.
3. Keep the gradient below the titles, and keep overlapping guest/host title blocks on separate tracks. Preserve the existing compositing order, transitions and effects.
4. Keep dialogue and music on separate, clearly named audio tracks. Retain any additional individual microphones, music layers, submixes or graphics tracks the episode actually needs.
5. Remove only genuinely empty, unused timeline tracks from the new revision. Use native track controls for audio-track cleanup so routing stays intact. Never remove clips, source media, generated dependencies, previews or autosaves to make the timeline look smaller.
6. Use compact track heights while keeping clips and waveforms readable. Fit the entire episode horizontally and reduce the timeline panel's height so the preview and all essential tracks can be seen together. Do not shorten the episode or alter its frame rate to fit the screen.

**HP reference layout:** four video tracks (primary picture, gradient, guest title, host title) and two audio tracks (dialogue, intro/outro music), reduced from eight video and four audio tracks. This is a layout example, not a fixed track-count limit for every episode.

#### Named, colored section ranges

- Add sequence range markers named **00 HIGHLIGHTS**, **01 INTRO**, **02 CONTENT** and **03 OUTRO**, colored teal, blue, orange and green respectively.
- Set the ranges from the episode's actual picture boundaries. The intro music tail may overlap the content range; keep that approved overlap intact.
- Keep the Markers panel available as a readable navigation list. Intro and outro are short and may look very narrow when the full episode is fitted; do not stretch their timing to make their blocks wider.
- Use the current approved intro boundary from [Between Takes Intro and Outro](https://app.notion.com/p/4166d55232fa80bba951d41ad90d0566). Do not copy HP's content duration or outro time into another episode.

#### Organization checks before handoff

- [ ] Highlights, intro, content and outro have matching picture/audio section colors and four named range markers.
- [ ] Empty rows are removed; retained tracks have useful names and compact, readable heights.
- [ ] The full episode fits in view, with the section navigation list available.
- [ ] Every clip is retained. Timeline positions, source in/out points, camera choices, frame rate, duration, transitions and effects are unchanged by organization.
- [ ] Graphics stacking, microphone sync, dialogue/music fades, gains, channel mapping, pans, mute/solo states and audio routing are preserved.
- [ ] Open and inspect the new native revision in standard Premiere Pro. Check representative picture/title frames and the relevant audio paths; record any unperformed playback checks as pending.
- [ ] Save the organized revision in the episode's Projects folder and leave a useful review frame visible. Preserve all earlier revisions.
- [ ] Any export hold remains active. Timeline cleanup or saving these instructions does not authorize an export or establish final sound/picture approval.

## 4. Verify the project and exported file

**Mandatory audio gate:** complete the full [Between Takes Sound Engineering Rules](https://app.notion.com/p/4166d55232fa806dade1fb1ce41db0f1) and its per-export audio sign-off on every episode and revision. Record actual-file listening, sync/drift, natural dialogue, routing, intro/outro music, stereo loudness/true peak and finalized-file evidence. Failed checks require correction; pending mandatory checks block Ready for delivery unless the owner explicitly authorizes a disclosed review-draft deferral. Do not treat an approved sample as full-export approval or lift an episode-specific export hold.

### Before delivery

For audio headroom and listening level, measure the exported file in its **actual stereo channel layout**. Record stereo true peak and integrated loudness; a mono analysis downmix can add summing gain and must not be used as a stereo clipping test. Preserve the intended listening level when making a gain correction, and recheck the corrected actual export.

1. A separate revision is saved; the original project and source media are untouched.
2. Newer user edits are preserved. Never swap in an older timeline to recover a graphic.
3. The finished revision is opened in Premiere and the rendered result is checked, not just project data.
4. Highlights, their hard cut into the intro, intro-to-content entry, lower-third fade-in, full titles, fade-out, ending, and outro are reviewed.
5. Spelling, seat mapping, shared baselines, centered middle text, balanced margins, visible gradient, and no overlap.
6. Dialogue is synced; sequence and export are 1920 × 1080.
7. Every intended dialogue and music track feeds the main mix. A visible clip or unmuted track isn't proof.
8. In **every exported MP4**, intro and outro sound are checked separately: non-silent Version 04 music, synced to the animation, a clear first word, a complete ending. Record both checks per deliverable. Loudness meters don't count.
9. No long silences; meaningful pauses and natural fillers kept; permission chatter removed; unresolved concerns timestamped in notes.
10. Highlights lead into the intro with the intentional hard picture cut. Intro music fades beneath content and the closing thought flows into the outro; no unintended abrupt audio stops, clipped words, gaps or masking.
11. The verified project is saved with the title frame left up for review. Apply the required compact, color-coded timeline organization above, with highlights/intro/content/outro range markers and the full episode fitted in view. Nothing is called complete until it's visibly verified.

The editing agent checks the actual MP4 for picture, dialogue/music, format, runtime, full-file integrity, stereo headroom and stability. Deferred listening or lip-sync approval must be stated as deferred, never passed. A failed or unfinished export stays out of delivery; fix it in another revision and repeat the checks.

## 5. Export and release the handoff

1. Export directly into the **Terminal 1** [**Frame.io**](http://Frame.io) **mounted drive** at `/Volumes/Terminal-1/`, using standard Premiere Pro. After final audio/file QC and upload processing, the delivery agent must **label and verify the asset in Terminal 1 first**, then move that same asset to the correct existing episode folder within **Between Takes Podcast** and verify its version stack. Do not export directly to Between Takes or bypass this intake route. If the drive or project is unavailable, flag Jackson and hold delivery; do not deliver elsewhere.
2. Name every new episode export `Brand - Between Takes Podcast - v##.mp4`, for example `HP - Between Takes Podcast - v02.mp4`. Use the approved brand spelling and current edit revision; continue the established numbering rather than restarting at v01. Keep reviewer names, “review comments,” processing descriptions and export dates out of the standard filename; record them in Notion and the delivery/QC record. This replaces the earlier date-in-filename convention. Preserve earlier files and their historical names. Retain the explicit `PLACEHOLDER GUEST` marker when required for an unconfirmed-name review draft.
3. Every episode must use one ongoing [Frame.io](http://Frame.io) video version history, including newly created episodes. Register the first genuine delivery as the base version and add every subsequent delivered revision to that same episode stack. Create the episode stack when none exists using only genuine versions; never fabricate or upload a duplicate revision just to create a version badge. Verify stacking and the latest actual edit on top at every delivery. Separate episodes, recording days, parts and audio-only support remain separate. Follow [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be) for the detailed naming and stacking rules.
4. Wait until native encoding finishes and byte size/modification time stay stable across repeated checks. Full-file QC and checksum must refer to those same finalized bytes. If the file changes, hold delivery and recheck after finalization; preserve failure logs.
5. Mark Ready for delivery only after the applicable checks pass. Hand off the exact version using [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be), then begin the next available podcast while delivery finishes.
6. After further authorized feedback, save another revision and repeat the edit, QC and delivery cycle.

## Shared-library DIT organization

At intake, each revision delivery and final handoff, follow the **DIT organization checks — every episode and revision** and the supplied DIT Operating Instructions in [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be). The shared library uses `/Volumes/Between-Takes-Podcast/Ep NNN_Brand Name/` with `01_Archive`, `02_Podcast`, `03_Premier Edit` and `04_Social`; only the confirmed approved final full-episode MP4 sits beside those folders. Record the dated inventory/move manifest and DIT checks inside the existing Notion episode page. Preserve live review stacks, comments, all files and active dependencies.

These DIT folders describe the [Frame.io](http://Frame.io) mounted library. Continue using the separate local editing, source, cache and external-drive rules below; this addition does not authorize relocating them.

## Current storage and recovery rules

- Root: `AGENTS.md`; `00_Agent Resources` for instructions, schedule, handoffs and logs; `01_Source_Footage/[Company]/[Recording]` for confirmed original camera/audio; `02_Edited/[Company]` for protected episode work; `03_Shared Assets/Brand Assets` for branding.
- Mixed vendor packages go to protected `Supporting Assets/Imports` first. Never put projects, autosaves, generated/cleaned audio, graphics, analysis, recovery ZIPs or exports in source-only folders. Do not interrupt, rearrange or duplicate running downloads.
- Latest approved rebuild setting: Scratch Disks previews → `90_Adobe Cache/Previews/[Company]`; Project Auto Save → `90_Adobe Cache/Auto-Save/[Company]`; capture destinations → protected `90_Adobe Cache/Captured and Generated/[Company]`. In each Premiere version, Media Cache → `90_Adobe Cache/Media Cache`. Do not enable automatic deletion. Captured/generated WAVs are protected edit dependencies. These newer per-project settings supersede the earlier beside-project autosave instruction.
- Originals already on `/Volumes/Brandstar04` and `/Volumes/BS-93` stay exactly where they are. Link directly to the real files without aliases; do not move, duplicate or consolidate them. Consult `00_Agent Resources/Storage Management/2026-11-11 Approved Rebuild/Approved External Source Exceptions.json`.
- Preserve CorMedix and WellisAir source packages, especially `WellisAir USA_BT 1`, and active transfers/logs.
- The former long edit-room name is a compatibility shortcut. Legacy `01_Edit_Terminal` was renamed `In Review`; the old path remains a compatibility shortcut. Preserve dependencies and archives; use the canonical episode home for new work. Do not recreate `01_Being Edited`, `02_In Review` or `03_Done`.
- Source originals previously cleared for Optimum Health Institute, Biosplice, Dexcom, Delcath, Mindera, Sera, Allarity, Oxeia, Smith & Nephew, MitoQ and Microbiome Labs must be downloaded again from [Frame.io](http://Frame.io) before their offline projects can be edited.
- Two verified Princess projects remain in their protected legacy area until missing title dependencies are addressed; use the episode guide’s exact paths. EmCyte’s hold was lifted on 2026-11-10; preserve its prior history and save a separate revision.
- REBUILD candidates are not verified delivered projects. Consult the New Revision Manifest; native playback, missing-source recovery and recovery-backup checks remain pending in the original progress record.
- Canonical guidance: `00_Agent Resources/01_Agent Instructions`; schedules: `00_Agent Resources/Schedule`; download logs: `00_Agent Resources/Storage Management/Download Logs`. Keep episode work under its company; never save deliverables in Codex.
- Follow [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be) for native-project and source/support recovery verification before identifying any concrete local source-cleanup list. Project upload alone never authorizes deletion.

## Source and authority

Organized from [Between Takes Podcast Editing](https://app.notion.com/p/40f6d55232fa81898aaae3a84d0888b8) on 2026-11-12. Follow the latest explicit episode instruction when it conflicts with a default. Preserve originals, revisions, comments and production history; never delete anything. This documentation does not authorize editing, exporting, publishing or scheduling by itself.

## Highlights before the intro — shared process

Updated from Jackson’s HP review on 2026-11-12. Detailed workflow: [Between Takes Highlights — Before the Intro](https://app.notion.com/p/4166d55232fa81f3a416eedc447d0b6e).

Build the hook before the branded intro in each new episode pass. Add teal highlights to the compact layout and run the opening checks alongside the existing full-episode checks. Save the exact revision and cue the opening when requesting highlights feedback.

<!-- Notion synced block (source: Between Takes Highlights — Before the Intro, https://app.notion.com/p/4166d55232fa81f3a416eedc447d0b6e#d25272ba8c2349cd856f08b92828ebf1) -->

**Episode order: HIGHLIGHTS → INTRO → CONTENT → OUTRO.** Place a short, truthful highlights hook before the approved Version 04 intro. Preserve the main conversation; copy excerpts into the hook.

- Choose compelling statements, surprises and authentic questions that make viewers want to learn more. Preserve meaning, context and complete words.
- Use motivated J cuts and L cuts with synchronized reaction coverage. Never overlap competing spoken lines or cut a word to force a picture change.
- Use fixed close, medium and wide crops at meaningful dialogue beats. Go tighter for emphasis or emotion; open wider for questions and shared reactions. Avoid slow animated pushes as the default.
- Use the Epidemic Sound plugin to choose music that fits the specific moment. Keep speech clear and preserve the approved natural dialogue treatment.
- **Hard picture cut from highlights into the intro is the default.** A dissolve was tried and rejected in the HP review. Shape music endings separately; keep the branded intro attack clear and avoid competing beds, clicks or chopped words.
- Keep the established intro-to-content music fade and gentle dialogue entry. Measure the red-dot intro cut from the intro's own start, after the highlights.
- Use teal **00 HIGHLIGHTS**, blue **01 INTRO**, orange **02 CONTENT**, green **03 OUTRO**, and purple graphics. Match clip labels and actual section ranges.
- Save a separate native revision in standard Premiere Pro, verify the opening with picture and sound, and present it for review. Preserve originals and prior revisions. An active export hold stays in force.

<!-- end synced block -->
