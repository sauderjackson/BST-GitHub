---
title: "BrandStar Folder and Drive Setup"
brand: BrandStar
source: https://app.notion.com/p/4166d55232fa8191abacff26e9eb79ab
last_synced: 2026-11-12
status: active
summary: "How to set up BrandStar editing work on any editor's computer using the Terminal 1 Frame.io mounted drive, a recorded folder map and safe relinking, without changing the existing delivery process."
---

# BrandStar Folder and Drive Setup

## Purpose

Set up BrandStar work on another editor’s computer without depending on Jackson’s Mac, username or physical drives. Keep a written map of where every folder lives so Premiere, tools and handoffs point to the right files.

**Preferred setup, from Jackson on 2026-11-12:** keep the full working folder system on the **Terminal 1 [Frame.io](http://Frame.io) mounted drive**, including source footage, native projects, supporting assets, shared branding, notes and exports. Each editor maps that mounted location on their own machine.

This is a setup playbook. The folder layout below is a recommended new setup, not a claim that those folders already exist or that the current library has been migrated.

## 1. Understand the locations

| Location | What it means | How another editor uses it |
| --- | --- | --- |
| Terminal 1, [Frame.io](http://Frame.io) mounted drive | Preferred shared home for the working system and existing intake route for episode exports. Jackson’s documented Mac path is `/Volumes/Terminal-1/`. | Mount the same authorized [Frame.io](http://Frame.io) destination and record the actual path shown on your computer. The visible drive name or letter may differ. |
| Between Takes Podcast, [Frame.io](http://Frame.io) mounted library | Established organized episode library and destination after verified Terminal 1 intake. Documented Mac path: `/Volumes/Between-Takes-Podcast/`. | Record its separate mounted path. Terminal 1 and this library are distinct destinations; do not assume their paths are interchangeable. |
| Mac Mini 2TB edit room | Existing local working system at `/Volumes/Mac Mini 2TB/BT-Agentic Editor/`. | Historical/current-project reference. A new editor does not need this physical drive; use the folder map and relink a separate project revision to available matching files. |
| Brandstar04 and BS-93 | Existing original-media drives used by specific projects. | Preserve those originals in place. If unavailable, record the exact missing sources and arrange access or an authorized source handoff before editing. Do not substitute a similarly named file. |
| Computer’s local storage | Machine-specific application storage and any required local cache. | Record any necessary local exception. Required generated media must remain with the shared project/support package. |

A mounted path is the address your computer uses to reach a shared location. A [Frame.io](http://Frame.io) asset/folder link is its cloud reference. Record both when available; a web link cannot replace a file path in Premiere.

## 2. Recommended Terminal 1 folder system

Use one working home under Terminal 1. The proposed `BrandStar Workspace` container separates working materials from the existing export intake. Preserve established folders when joining an existing system.

```txt
[TERMINAL_1_ROOT]/
    BrandStar Workspace/
        00_Agent Resources/
            Instructions/
            Folder Maps/
            Delivery Handoffs/
            Storage Management/
        03_Shared Assets/
            Brand Assets/
        Between Takes/
            Ep NNN_Brand Name/
                01_Archive/
                02_Podcast/
                03_Premier Edit/
                    Projects/
                    Supporting Assets/
                        Imports/
                        Captured and Generated/
                    Notes/
                    Auto-Save/
                    Review Exports/
                04_Social/
    [new full-episode export at the established Terminal 1 intake location]
```

Use owner-approved episode numbers and brand spellings. Keep separate episodes and recording days separate. Do not infer numbering from task order or air dates.

### Where files belong

- **00_Agent Resources:** shared instructions, folder maps, transfer records, handoffs and storage logs.
- **03_Shared Assets/Brand Assets:** current approved shared branding and references. For Between Takes, locate the approved Version 04 intro/outro, gradient, lower-third reference and required fonts.
- **01_Archive:** preserved superseded work and dated organization manifests. Archive means retained.
- **02_Podcast:** original camera/audio, complete camera-card trees and sidecars, source sync materials and transfer evidence. Keep original filenames.
- **03_Premier Edit/Projects:** current native Premiere project and separately named revisions.
- **Supporting Assets:** generated dialogue, graphics, stems and every edit-specific dependency. Put mixed project/support downloads in Imports before classifying them.
- **Captured and Generated:** protected recordings and generated media required by the edit. These are not disposable cache.
- **Notes:** media maps, feedback, episode-specific instructions and verification records.
- **Auto-Save:** current project recovery saves.
- **Review Exports:** preserved working reviews and references to delivered versions. Continue using the established Terminal 1 intake location for delivery exports.
- **04_Social:** social projects, clips, captions, thumbnails and supporting assets.

The established Between Takes destination retains its four exact folders: `01_Archive`, `02_Podcast`, `03_Premier Edit`, `04_Social`. Only a human-approved final full-episode MP4 belongs beside those folders. Working-folder placement does not establish approval.

## 3. Fill in your folder map before opening a project

Replace bracketed values with real locations. These labels are documentation placeholders; they do not configure software automatically.

| Map entry | Your actual location or value |
| --- | --- |
| Editor / computer / operating system | \[fill in\] |
| Terminal 1 mounted root | \[actual mounted path\] |
| BrandStar working root | \[Terminal 1 root\]/BrandStar Workspace |
| Shared brand assets | \[working root\]/03_Shared Assets/Brand Assets |
| Episode name / approved number | \[fill in\] |
| Episode source folder | \[episode root\]/02_Podcast |
| Current native project | \[full path including filename\] |
| Supporting assets | \[episode root\]/03_Premier Edit/Supporting Assets |
| Autosaves | \[episode root\]/03_Premier Edit/Auto-Save |
| Preview / media cache | \[actual path; document any local exception\] |
| Terminal 1 export intake | \[verified existing intake path\] |
| Organized [Frame.io](http://Frame.io) library | \[actual mounted path plus cloud folder reference\] |
| Existing external-source exceptions | \[exact file paths, or none\] |
| Current review asset / stack | \[existing [Frame.io](http://Frame.io) reference and version\] |
| Verified by / verification date | \[fill in\] |

Save the map with the shared instructions and add the episode-specific locations inside the existing Notion episode page. Keep its Notes property to one short current-status sentence; detailed paths belong in the page body.

## 4. Connect another computer

1. Sign in with authorized access and mount Terminal 1 and the required organized library. Confirm you can open the intended folders and save/reopen a small setup-check file in an appropriate working folder.
2. Record the actual mount paths. For example, Jackson’s `/Volumes/Terminal-1/BrandStar Workspace/...` could appear under a different mounted root on another machine. Keep the relative folder structure consistent.
3. Confirm full source files are available, transfers are finished and needed originals can be read. An empty folder, cloud placeholder or completed-looking download label is insufficient.
4. Install/use **standard Premiere Pro**, the required fonts and the project’s actual dependencies. Preserve the supplied original project and open a separately saved revision.
5. If media is offline, map each old root to its correct new root. Relink only positively identified matching files; check filename, recording/card context, duration and picture/audio identity. Preserve camera-card structures.
6. Point project saves, autosaves and generated/captured media to their mapped protected folders. Test the mounted workflow with a small project before relying on it for a full episode. If an application requires local previews/cache or mounted performance prevents reliable editing, record the exact local exception and retain shared recovery copies of projects and required dependencies.
7. Reopen the saved revision and inspect the opening, middle, ending, graphics and sound. Record offline media or unperformed checks honestly.

Do not blindly replace every path in an old project. Existing sources can span multiple drives. A local cache copy alone is not a verified shared recovery package.

## 5. Delivery still follows the existing process

Saving a project or media on Terminal 1 does not make it a delivery-ready episode.

- Export to the established Terminal 1 intake, respect any active export hold, wait for finalized stable bytes, and check the actual exported MP4.
- After the verified handoff and cloud processing, apply and verify the existing metadata, move the same asset to its established episode destination, preserve versions/comments, and verify metadata-driven collection routing.
- Keep originals, native projects, support files, tests and incomplete renders out of review delivery classification.
- Reuse the existing In Review and Final Episodes collections. Do not create new shares or alter collection filters/access. Only human approval establishes a final.

Procedure: [Between Takes Frame.io Process](https://app.notion.com/p/4166d55232fa8002849eda831dcd92be).

## 6. Existing projects and safe handoff

This new-setup recommendation does not move existing projects. Preserve the documented Brandstar04/BS-93 source exceptions, active downloads, compatibility shortcuts and existing review stacks. Any later migration needs an inventory, old-to-new path map, preserved originals, transfer verification and a separately saved, relinked project check.

Before another editor takes over:

- [ ] Actual mount paths and the shared folder map are recorded.
- [ ] Sources, current project, branding and all generated dependencies are accessible.
- [ ] Native project saves/reopens in standard Premiere Pro; picture, sound and media links are checked.
- [ ] Shared uploads are verified; local-only dependencies and cache exceptions are listed.
- [ ] Current version, review reference, export hold and remaining blockers are recorded.
- [ ] The receiving editor can open the package using their own mapped locations.

## Related guidance and change note

[Between Takes Editing Rules](https://app.notion.com/p/4166d55232fa808d8183f0507b4a6c88) · [Between Takes Podcast Editing](https://app.notion.com/p/40f6d55232fa81898aaae3a84d0888b8)

**Version 1.0 — 2026-11-12:** created from Jackson’s request for a portable folder/drive playbook and his preference that everything go to the Terminal 1 [Frame.io](http://Frame.io) mounted drive. This is the preferred new-computer setup; older absolute paths describe existing installations. No live folders, drives, application settings or media were changed by creating this guide.
