# Review Room — Design Spec (source: Figma BKN32x3plXadLSjqq24DX8, Drafts page, frame "Review Room v2" 12:111)
Read-only capture, Oct 29 2026. Coordinates are relative to the frame.

## Frame
- Review Room v2 — 1512×982, fill #0C0C0C. Other page items: "Overview" notes frame (25:3), "Marks Version" section (13:245, screenshot ref).
- Font: Inter only (Regular, Medium, Semi Bold). No icon library — all icons are placeholder ellipses (#D9D9D9 / #ECECEC), plus a "Play icon" vector (#141A1F) and a chevron vector (stroke #FFFFFF).
- Imagery: one placeholder photo (image hash 5730197…) used on hero, cards and avatar, with linear gradient overlays.

## Colors
| Hex | Use |
|---|---|
| #0C0C0C | page background |
| #161616 | sidebar (Sidebar Handle, 300×982) |
| #000000 | active library item bg (r8); Details button @30% |
| #FFFFFF | primary text, Watch Segment button, play circle |
| #FFFFFF @50% | secondary text (library items, meta, Air Date) |
| #47FF4A | Air Date live dot (10px) |
| #FFEA00 | show avatar (40px) |
| #D9D9D9 / #ECECEC | icon placeholders |
| #141A1F | play glyph |

## Layout & sections
1. **Sidebar** (x0, w300, #161616)
   - Page Title "Review Room" — Inter Semi Bold 24, (35,25)
   - Content Library (35,246, 230w, vertical auto layout gap 20)
     - "Content Library" Semi Bold 20
     - Items (26px icon + Inter Regular 16 @50% white, gap 14): **Segment** (active: #000 bg, r8, 46h, padding 10), Vertical Content, Images, Video, Behind The Scenes, Team Behind the Work, Content Map, Request Assets, Contact
   - User Profile (35,896): 42px avatar (image) + "Johnny Appleseed" Inter Regular 14
2. **Top bar**: Help Link (1317,32): 16px icon + "Need Help" Semi Bold 10
3. **Segment Header** (420,107): 26px icon + "Segment" Semi Bold 16
4. **Featured Content** (420,160, 972×546, r6, image + gradient)
   - Show Information (461,195): 40px #FFEA00 circle + "Health Uncensored" Semi Bold 16
   - Air Date (1266,206): #47FF4A dot + "Air Date" Semi Bold 16 @50%
   - Watch Segment Toggle (461,628, 139×36, #FFF, r10): icon + "Watch Segment" Medium 12 #000
   - Details Toggle (626,628, 87×36, #000@30%, r10): icon + "Details" Regular 12
   - Segment Details (783,599, 564w): "Summary" Semi Bold 14; description Regular 12: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London"
5. **Content Category row** (420,733): 26px icon + "Vertical Content" Semi Bold 16 + chevron; right "46 Videos" Regular 12 (1335,739)
6. **Content Carousel** (420,788, horizontal gap 20): 5 × "Vertical Content" cards 218×388, r6, image+gradient
   - Center play button: 34px white circle + play glyph #141A1F
   - Text block (19,324): "Vertical Content Name" Semi Bold 10; Meta: "Educational" • "Health" Semi Bold 8 @50% (2px dot separator)
7. **Overlay Gradient** (300,786, 1212×196) fades the carousel at the bottom.

## Overview notes (frame 25:3, verbatim summary)
Brand logs into portal; one-time onboarding. Features: watch a segment; Vertical content row (opens page or horizontal scroll); Images row slider; Behind the scenes slider; Team Behind the Work credits editors; Content Map = visual deck of how to use content + content calendar; Request Assets (possible feature) for larger files; Contact; help icon replays onboarding; Account at bottom.
