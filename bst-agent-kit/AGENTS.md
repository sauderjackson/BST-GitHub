# AGENTS.md — BST Agent Kit

Start here if you are an AI agent. This file tells you what's in the kit, which document to read for a task, and the rules that apply to all of them.

The kit documents how Jackson Sauder (lead designer, BrandStar) runs design and post-production work. The written playbooks are the instructions. The Figma files, Frame.io and Notion are the live systems they describe.

## 1. Route the task to the right document

Read the matching document in full before you act. If a task spans two rows, read both.

| If the task is… | Read | Live source |
|---|---|---|
| Building a BrandStar presentation or deck | [Deck Kit/BrandStar-On-Brand-Deck-Building-Playbook.md](Deck%20Kit/BrandStar-On-Brand-Deck-Building-Playbook.md) | [BST Slides Kit (Figma)](https://www.figma.com/design/WigwY2Fck85i84nXz55r6p/BST-Slides-Kit?node-id=106-374) |
| Building display, social or video ads in multiple sizes | [Ad Kit/BST-Ad-Agent-Source-Kit.md](Ad%20Kit/BST-Ad-Agent-Source-Kit.md) | [BST — Ad Agent Source Kit (Figma)](https://www.figma.com/design/zK0YGlxgy2QoweKibIONrY/BST%E2%80%94Ad-Agent-Source-Kit?node-id=11-53) |
| Moving footage from set to client in Frame.io (any show) | [Figma/BSO Production Process.md](Figma/BSO%20Production%20Process.md), then [Playbooks/BrandStar/Frame.io Content Playbook (Draft v0.1).md](Playbooks/BrandStar/Frame.io%20Content%20Playbook%20(Draft%20v0.1).md) | [BSO Production Process (Figma)](https://www.figma.com/design/8PRZCGKVuHdrNGuXs2fljr/BSO-Production-Process?node-id=0-1) |
| Labeling content (Hero, Derived, Ads, Supporting) | [Figma/BSO Production Process.md § 6](Figma/BSO%20Production%20Process.md#6-content-labels--hero-to-ads) | Same Figma file |
| Setting up an editing machine, drives or folders | [Playbooks/BrandStar/BrandStar Folder and Drive Setup.md](Playbooks/BrandStar/BrandStar%20Folder%20and%20Drive%20Setup.md) | Notion |
| Editing a Between Takes podcast episode | [Between Takes Editing Rules](Playbooks/Between%20Takes/Between%20Takes%20Editing%20Rules.md), then the style pages below | Notion |
| — camera switching | [Between Takes Multi Cut Style](Playbooks/Between%20Takes/Between%20Takes%20Multi%20Cut%20Style.md) | |
| — lower thirds and graphics | [Between Takes Animation Style](Playbooks/Between%20Takes/Between%20Takes%20Animation%20Style.md) | |
| — audio and loudness sign-off | [Between Takes Sound Engineering Rules](Playbooks/Between%20Takes/Between%20Takes%20Sound%20Engineering%20Rules.md) | |
| — intro, outro and opening hook | [Between Takes Intro and Outro](Playbooks/Between%20Takes/Between%20Takes%20Intro%20and%20Outro.md), [Between Takes Highlights — Before the Intro](Playbooks/Between%20Takes/Between%20Takes%20Highlights%20%E2%80%94%20Before%20the%20Intro.md) | |
| Uploading, DIT, review and delivery for Between Takes | [Between Takes Frame.io Process](Playbooks/Between%20Takes/Between%20Takes%20Frame.io%20Process.md) | Frame.io, Notion |
| Reviewing an episode or keeping Notion current | [Between Takes Review Process](Playbooks/Between%20Takes/Between%20Takes%20Review%20Process.md), [Between Takes Notion Updates](Playbooks/Between%20Takes/Between%20Takes%20Notion%20Updates.md), [Between Takes Routines](Playbooks/Between%20Takes/Between%20Takes%20Routines.md) | Notion |
| Anything about which Figma files exist and how to use them | [Figma/Figma Libraries and Kits.md](Figma/Figma%20Libraries%20and%20Kits.md) | |

If nothing matches, say so and ask. Don't stretch a playbook to cover work it doesn't describe.

## 2. Rules that apply to every task

1. **Check the live source.** Each playbook records the date it was synced. Figma, Notion and Frame.io change; if you can reach the live source, check it before you build. If the two disagree, follow the live source and flag the difference.
2. **Use the system, don't redraw it.** Build from library components, text styles, variables and folder templates. Never detach, rebuild or invent a replacement layout.
3. **Never work in a master.** Build in a working copy. Never edit a library file or a master template.
4. **Never invent facts.** No made-up statistics, quotes, results, prices, names or contact details. If something is missing, mark it TBD and ask.
5. **Never delete or overwrite media.** Archive means kept. Log every move.
6. **A human approves.** Agents draft, organize and check. Jackson signs off on design. A named human approves episodes and deliverables. No response is not approval. Client and legal approvals stay visible.
7. **Don't send, publish or schedule** without that sign-off.
8. **Verify your own work.** Screenshot or play back what you made before you report it done. Report each check as passed, failed or not checked.
9. **Say what you can't do.** If you can't open a file, reach a tool or get a permission, say so and offer the fallback the playbook gives (an outline, an assembly brief, a checklist).
10. **Keep clients apart.** Never carry one client's material, names or results into another client's work.

## 3. Known gaps and conflicts

These were found while assembling the kit (Nov 12, 2026). Don't resolve them yourself; flag them to Jackson when they affect your task.

- **Notes field length.** Editing Rules, Frame.io Process and Notion Updates say the episode Notes field is exactly one sentence. Animation Style says to log unconfirmed names or roster conflicts in Notes, and Frame.io Process § 4.6 adds detail after a fixed sentence.
- **Current HP version.** Sound Engineering and Intro and Outro describe v09 as awaiting review; Highlights and Frame.io Process describe v18 as the latest.
- **Hard-coded episode.** The shared delivery-routing block on every Between Takes page says "for this episode, `HP`". Treat that as an example, not a rule for every episode.
- **Release date source.** Frame.io Process § 3 says to verify the actual air date rather than the Due Date; the routing block says to use the task's Release Date.
- **Playbook count.** Frame.io Process says a shared block reaches "all 11 playbooks"; ten Between Takes pages are in this kit. The main guide they came from, "Between Takes Podcast Editing" in Notion, is not exported yet.
- **Studios dark/white ratio, layout count, typography weights, mode selection.** See the Deck Kit playbook § 10.
- **Ad kit housekeeping.** Missing ad-copy script, button color not a variable, unrelated boards on the Ad Sizes page. See the Ad Kit playbook's housekeeping notes.
- **Frame.io findings.** Public share links, duplicate revision names, blank metadata, test content in production. See BSO Production Process § 4. Nothing has been changed in Frame.io yet.
