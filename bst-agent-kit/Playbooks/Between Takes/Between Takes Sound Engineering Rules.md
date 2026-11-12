---
title: "Between Takes Sound Engineering Rules"
brand: "Between Takes"
source: "https://app.notion.com/p/4166d55232fa806dade1fb1ce41db0f1"
last_synced: 2026-11-12
summary: "Required audio process for every episode and revised export: mic diagnosis, sync, natural dialogue processing, routing, stereo loudness/true-peak measurement and final MP4 sign-off."
---

# Between Takes Sound Engineering Rules

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

Keep the original dialogue natural, synchronized and clear. Check sound in the actual delivered MP4.

## Required audio sign-off — every episode and every revised export

The full sound engineering process below is required on every pass. Before Ready for delivery, record the result against the exact finalized MP4:

- [ ] Correct source mics, timing, drift and picture/dialogue sync verified.
- [ ] Natural voices, approved processing and balanced dialogue verified; no clipping, pumping, distracting noise or processing artifacts.
- [ ] Intended tracks/buses reach the stereo output with correct channel mapping and no duplicate feeds or missing music.
- [ ] Full episode listened to with picture; revised joins, breaths, overlap and room tone checked.
- [ ] Version 04 intro and outro sound checked separately; first word and final thought complete, fades natural, music beneath speech.
- [ ] Actual stereo MP4 loudness, loudness range and true peak measured against the approved requirements and working targets below.
- [ ] Finalized-file integrity, duration, byte stability and checksum recorded.
- [ ] Reviewer, exact edit/export version, results and any explicitly approved deferrals recorded in the episode page and handoff.

A failed check returns to correction and recheck. A pending mandatory check keeps Ready for delivery pending. Only an explicit owner-authorized review-draft exception may defer a check; identify that limitation in the handoff and Notion rather than calling audio fully verified. Existing episode-specific export holds remain in force.

### Required export and delivery route

**Standard Premiere Pro → Terminal 1** [**Frame.io**](http://Frame.io) **mounted drive (`/Volumes/Terminal-1/`) → audio/file QC → label and verify the processed asset in Terminal 1 → move that same asset into the correct Between Takes episode folder → verify stack, metadata and Notion link.**

Do not export directly to the Between Takes destination to bypass Terminal 1. The delivery agent applies and verifies Podcast, the correct company, Internal Review and the scheduled release date (or the approved celebrity-replay exception) before moving. Preserve all previous versions and comments. If Terminal 1 is unavailable, hold delivery and report the issue.

## 1. Preserve the approved mix

### Dialogue and music

- Keep dialogue sync and approved conversation edits. Graphics must not change audio in/out points, gain, or timing.
- Keep approved intro music and risers where they apply, never masking speech. The U.S. Pet teaser's Impossible Theory instruments/bass and cinematic riser were episode-specific, not required.
- Never reuse an experimental cleaned mix. Aggressive noise/buzz processing was rejected because it sounded worse.
- Audio pass (only if requested): start from the original audio, check individual mics, use restrained noise reduction, and listen for hiss, buzz, echo, distortion, and artifacts. Share a short comparison before replacing the full mix.
- Treat editorial notes in context. Removing an off-camera question still needs a coherent lead into the answer.

## 2. Make clean conversation joins

- Preserve every dialogue track and camera angle in sync when shortening gaps.
- Listen for clipped syllables, overlaps, clicks, abrupt room-tone changes and distortion.
- Keep natural breaths, fillers and meaningful pauses. Use [Between Takes Editing Rules](https://app.notion.com/p/4166d55232fa808d8183f0507b4a6c88) for pacing and production-chatter decisions.
- Use [Between Takes Intro and Outro](https://app.notion.com/p/4166d55232fa80bba951d41ad90d0566) for music placement and opening/closing transitions.

## 3. Verify audio routing and the export

1. Confirm every intended dialogue and music track feeds the main mix. Visible clips and unmuted tracks are not proof.
2. Listen with picture for dialogue sync, speech clarity, hiss, buzz, echo, distortion and processing artifacts.
3. In every exported MP4, check intro and outro sound separately: non-silent Version 04 music, sound synchronized with animation, a clear first word and a complete ending. Record both checks per deliverable; meters alone do not establish this.
4. Measure the exported file in its actual stereo channel layout. Record stereo true peak and integrated loudness. Do not use a mono analysis downmix as a stereo clipping test because summing can add gain.
5. Preserve the intended listening level when correcting gain; recheck the actual corrected export.
6. Record deferred sound or lip-sync approval explicitly. Never mark it passed.

## 4. Required sound engineering process

Added from Jackson's HP review and process request on 2026-11-12. Perform the checks on every episode. Apply corrective processing within the authorized editing scope, preserving the approved sound and earlier revisions.

### A. Preserve and diagnose before processing

1. Save a separate native working revision in the episode's Projects folder. Preserve original recordings, approved mixes and earlier projects. Use standard Premiere Pro, not Premiere Pro Beta.
2. Identify each speaker's actual microphone from isolated listening and representative speech. Inspect all channels; exclude silent channels, camera scratch audio and unnecessary duplicate feeds from the dialogue mix.
3. Solo each mic, then compare the combined mix. Distinguish delayed cross-mic pickup, room reverberation, hiss/buzz, clipping, routing duplication and monitoring echo. Do not assume every echo requires denoise or de-reverb.
4. Verify mic timing from the recorded waveforms, not camera timecodes alone. Check representative passages near the beginning, middle and end for offset and drift. Check polarity and mono compatibility where relevant.
5. Correct any measured timing problem before judging cleanup. Recheck the associated picture for lip sync. Never move a mic independently and assume every camera remains synchronized.

### B. Keep the voices natural

1. Start from original-quality individual mic recordings. Do not use normalized/clipped transcription extracts or a rejected experimental mix as the final source.
2. Correct source selection, timing and basic balance first. Add only the noise reduction, EQ, dynamics, de-essing or mic isolation that the material needs. Avoid stacking processors without a diagnosed reason.
3. Compare at matched listening levels. Include both speakers, breaths, pauses, overlapping speech or laughter, and a quieter passage. Check for pumping, gating, watery/metallic tone, lisping, lost consonants and flattened expression.
4. Share a short before-and-after comparison before replacing the full mix. Record the user's preferred version and the exact source/settings. If the voice sounds processed, back off the treatment before adding more.
5. After any processor, measure or verify latency and sample duration. Compensate delay and flush the tail as needed; confirm that first and last words remain complete and that sync is unchanged.
6. Preserve headroom at every stage, including intermediate files. Use floating-point intermediates or reduce gain before conversion where necessary. A final limiter cannot repair clipping already written into an earlier file.

### C. Shape the joins and verify routing

- Follow [Between Takes Intro and Outro](https://app.notion.com/p/4166d55232fa80bba951d41ad90d0566): keep music and dialogue separate, fade music out beneath speech, and gently fade the podcast audio in. Protect the complete first word and final thought.
- Check breaths, room tone, edits, camera changes, interruptions and laughter for clicks, cut syllables, sudden noise changes and level jumps.
- Verify the actual signal path from each intended clip through tracks/buses to the main stereo mix. Check mute/solo states, channel mapping, pans, duplicate feeds, missing music, and left/right balance.

### D. Measure and listen to the actual output

- Record integrated loudness in LUFS, loudness range and true peak in dBTP for the **actual stereo output**. Do not use mono-downmix peak readings to judge stereo clipping.
- Use the approved listening level and delivery requirements as the authority. As an HP-based working reference, natural dialogue was approximately **−18 LUFS integrated**. Do not force every speaker or episode to an identical short-term level.
- Leave encoding headroom: aim around **−1.5 to −2 dBTP before lossy encoding** and verify that the actual final stereo MP4 remains at or below **−1 dBTP**, unless a stricter delivery specification applies. These are working QC targets, not a claim of a universal platform specification.
- Listen through the complete revised episode with picture. Spot checks support this review but do not establish a full listening pass. Use headphones and a normal speaker check where available; check mono compatibility.
- Check intro and outro music separately in every deliverable, including sync, the opening word, the full closing thought and the transitions. Meters and waveform fingerprints do not establish that a mix sounds natural.
- If listening, a speaker check or lip-sync review cannot be performed, record it as **pending/deferred**, identify the limitation, and obtain the required review. Never label it passed.

### E. Final export checks and evidence

Only export when authorized and after any active review hold is lifted. An approved audio sample does not approve a later intro transition or automatically authorize export.

- Wait for native encoding to finish. Verify that the export's byte size and modification time are stable across repeated checks.
- Decode the complete finalized MP4 and check for corrupt/truncated output, missing channels, unintended silence and duration changes.
- Confirm that the file contains the intended native revision, approved dialogue and required music. Check beginning, middle and end for sync/drift, and verify all revised joins.
- Measure and audition that same final file. If gain, timing, processing, muxing or bytes change, repeat the affected checks on the new final file.
- Record episode/version, native project and original-source locations, processing decisions, comparison approval, runtime/channel layout, loudness/true peak, intro/outro checks, full listening and lip-sync status, file stability, checksum, unresolved issues and reviewer.
- Use explicit results: **Passed**, **Failed**, or **Pending/Deferred**. A pending mandatory check keeps the handoff pending; a failed check requires correction and recheck. Do not send a “Ready for delivery” handoff with failed or unreported checks.

### HP reference and current review status

HP's mic comparison identified approximately 0.156 s of relative timing offset. The preferred sound was the natural timing-corrected mix with light denoise; stronger isolation/compression was rejected as processed. Jackson approved the natural-plus-light-denoise comparison: “This is the sound—use it.”

Those offset and denoise settings are episode-specific. Measure other episodes independently. The later 2:22 intro cut, smoother music fade and dialogue fade-in are separate transition changes in v09 and remain subject to review. **HP export hold remains active until Jackson reviews it.** No full-episode listening, final MP4 QC or final transition approval is established by the sample approval.

## Audio-only corrections

When picture is unchanged and already verified, the editing agent may export corrected native-project audio and mux it with a copy of the verified video stream into a separate final MP4 in Terminal 1. Preserve timing and earlier files. Repeat full MP4 integrity, picture, music, stereo headroom and stability checks. Standalone audio is not a delivery handoff and must never enter the review-video stack.

After QC comparisons release the files, the delivery agent preserves superseded QC-only exports and standalone audio support in the existing Terminal 1 / Archive, clearly labeled. Preserve successful review videos and comments in their episode history.

Return to [Between Takes Editing Rules](https://app.notion.com/p/4166d55232fa808d8183f0507b4a6c88) for export readiness and [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be) for delivery.

## Source and authority

Organized from [Between Takes Podcast Editing](https://app.notion.com/p/40f6d55232fa81898aaae3a84d0888b8) on 2026-11-12. Follow the latest explicit episode instruction when it conflicts with a default. Preserve originals, revisions, comments and production history; never delete anything. This documentation does not authorize editing, exporting, publishing or scheduling by itself.

## Highlights before the intro — shared process

Updated from Jackson’s HP review on 2026-11-12. Detailed workflow: [Between Takes Highlights — Before the Intro](https://app.notion.com/p/4166d55232fa81f3a416eedc447d0b6e).

Add highlights to every opening sound check: complete word tails, natural edit ramps/room tone, clean J/L joins without double dialogue, plugin-selected music beneath speech and a clear branded intro attack. Preserve the approved natural mix; diagnose echo/duplicate feeds and sync before adding processing. Recheck combined stereo loudness/true peak and all intended routes in the actual authorized MP4. An approved excerpt or music choice is not a full listening pass or export authorization.

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
