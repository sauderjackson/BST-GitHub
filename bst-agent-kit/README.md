# BST Agent Kit

How Jackson Sauder (lead designer, BrandStar) builds decks and ads and runs post-production, written so a person or an AI agent can follow it.

**Agents:** start with [AGENTS.md](AGENTS.md). It routes each kind of task to the right playbook and lists the rules that apply everywhere.

## What's inside

| Folder | Contents |
|---|---|
| [Deck Kit/](Deck%20Kit/) | How to build an on-brand BrandStar deck from the BST Slides Kit in Figma |
| [Ad Kit/](Ad%20Kit/) | How to build a full ad set (50 sizes) from the BST — Ad Agent Source Kit in Figma |
| [Figma/](Figma/) | Index of the Figma kits, plus a text transcription of the BSO Production Process boards |
| [Playbooks/BrandStar/](Playbooks/BrandStar/) | Frame.io content playbook (draft) and editing folder and drive setup |
| [Playbooks/Between Takes/](Playbooks/Between%20Takes/) | Ten playbooks for editing, sound, graphics, review and delivery of the Between Takes podcast |

## Where things live

| System | Role | Source of truth for |
|---|---|---|
| **Figma** (BrandStar Org team) | Libraries and process boards | Layouts, components, variables, text styles |
| **Notion** ([Playbooks database](https://app.notion.com/p/4166d55232fa808fa21bc27a78374285)) | Where playbooks are written and edited | Playbook wording |
| **Frame.io** | Media storage, review and delivery | Footage, revisions, approvals |
| **This repo** | A synced, readable copy for agents and teammates | Nothing on its own. It mirrors the systems above. |

Edit playbooks in Notion first, then re-sync them here. Each file's front matter records its source link and the date it was last synced.

## How to use it with an agent

- **Claude Code or any coding agent:** clone the repo and open it. The agent reads `AGENTS.md` (Claude Code reads `CLAUDE.md`, which points there).
- **Claude.ai or another chat agent:** attach `AGENTS.md` plus the playbook for the task, and give it the live Figma link.
- **Figma work** needs the agent connected to Figma's MCP server and a seat on the BrandStar Org Figma team.

## Updating the kit

1. Change the playbook in Notion (or the kit in Figma).
2. Re-export the page to the matching file here and update `last_synced`.
3. If you add a new playbook or kit, add it to the routing table in `AGENTS.md`.
4. Commit with a short note of what changed.

## Confidential

This repo names clients, shows and participants, and includes internal Frame.io links and findings. Keep it private. Share it only with people who already have access to the underlying Figma, Notion and Frame.io work.
