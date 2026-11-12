---
title: Figma Libraries and Kits
owner: Jackson Sauder (lead designer)
last_synced: 2026-11-12
summary: Index of the BST Figma kits, what each one is for, and how an agent should work with them.
---

# Figma Libraries and Kits

The Figma files are the source of truth for layouts, components, variables and text styles. This repo holds the written rules that tell a person or an agent how to use them. Figma files can't live in Git, so this page links to them instead.

Access to each file is controlled in Figma, not here. Anyone using these links needs a seat on the **BrandStar Org** Figma team (or to be shared on the file).

## The kits

| File | What it's for | Figma pages | Written version |
|---|---|---|---|
| **[BST Slides Kit](https://www.figma.com/design/WigwY2Fck85i84nXz55r6p/BST-Slides-Kit?node-id=106-374)** (published team library) | Helps employees build on-brand decks | Cover · Kit Instructions · Design System | [Deck Kit playbook](../Deck%20Kit/BrandStar-On-Brand-Deck-Building-Playbook.md) |
| **[BST — Ad Agent Source Kit](https://www.figma.com/design/zK0YGlxgy2QoweKibIONrY/BST%E2%80%94Ad-Agent-Source-Kit?node-id=11-53)** (published library) | Builds ads at the proper display and social sizes | Ad Kit · Ad Sizes · Example | [Ad Kit playbook](../Ad%20Kit/BST-Ad-Agent-Source-Kit.md) |
| **[BSO Production Process](https://www.figma.com/design/8PRZCGKVuHdrNGuXs2fljr/BSO-Production-Process?node-id=0-1)** (process boards, not a library) | Outlines the production process and the problems found in Frame.io | Page 1 (six boards) | [BSO Production Process](BSO%20Production%20Process.md) (transcribed) |

Libraries also enabled on the Slides Kit file (community, not BST-owned): Material 3 Design Kit, Simple Design System, iOS 18 and iPadOS 18. They are not part of the BrandStar system and shouldn't be used for client work.

## How an agent works with a kit

These rules apply to both kits. Each playbook adds its own.

1. **Read the playbook, then the kit's own instruction page,** before building anything.
2. **Never build in the library file.** Work in a separate file (a copy or a new campaign/deck file) that has the library enabled.
3. **Use library instances.** Don't detach components or redraw them from shapes.
4. **Change style through variables and text styles,** never as one-off overrides.
5. **Screenshot every finished frame** and check it before calling the work done.
6. **Jackson signs off** on design. Client and legal approvals are separate and stay visible.

### Figma MCP connection

Agents reach these files through Figma's MCP server. Before reading or editing, the agent opens a session on the target file, then uses the library search to find components and variables. If the agent can't see a file, it should say so and fall back to an outline or assembly brief, never claim it built something it couldn't open.

## Adding a new kit

When a new kit is ready:

1. Publish it as a library in the BrandStar Org team.
2. Add a row to the table above.
3. Add a folder at the repo root (for example `Social Kit/`) with a playbook written the same way as the Ad and Deck kits: what's in the file, the rules, the workflow, and the agent ground rules.
4. Add the kit to the routing table in [AGENTS.md](../AGENTS.md).
