# Entertainment Room (Bundle Review Room)

## Overview

The Entertainment Room (also called Bundle Review Room) is a dark-themed review and dashboard site for BrandStar's display ads, clips, behind-the-scenes content, team information, content calendar, and design kit. The project is primarily built in Figma using variable collections named 'Entertainment Room / Option B' and 'Nav State'.

This folder contains the Figma plugin automation scripts, specification documents, video processing utilities, image assets, and reference screenshots used to build and maintain the project.

**Note:** The large source video file (76 MB) and the Figma source file are kept outside GitHub due to size constraints.

## Project Structure

```
entertainment-room/
├── docs/                  # Specification and documentation
│   └── review-room-spec.md
├── scripts/               # Figma plugin automation scripts
│   ├── prelude.js
│   ├── active.js
│   ├── hover.js
│   ├── tvars.js
│   ├── typo.js
│   ├── edit.js
│   ├── edit2.js
│   ├── img1.js
│   ├── img2.js
│   ├── up.js
│   ├── up1.js
│   ├── up2.js
│   ├── mac.js
│   ├── p1.js
│   ├── p2.js
│   ├── p3.js
│   ├── run1.js
│   ├── run2.js
│   └── run3.js
├── assets/
│   ├── cimg/              # Card images (thumbnails)
│   ├── img/               # Primary images
│   ├── rimg/              # Review images (r0-r23)
│   └── video/
│       └── pick.py        # Video frame extraction utility
└── screenshots/           # Reference screenshots
    ├── brandstar-logo.png
    ├── dashboard.png
    ├── design-kit.png
    └── home-active.png
```

## Figma Design System

The project uses two main Figma variable collections:
- **Entertainment Room / Option B**: Primary design tokens
- **Nav State**: Navigation state management variables

Key design specifications (from review-room-spec.md):
- Frame size: 1512×982
- Background: #0C0C0C
- Sidebar: #161616 (300px width)
- Font: Inter (Regular, Medium, Semi Bold)
- Primary accent: #47FF4A (live indicator)
- Secondary accent: #FFEA00 (show avatar)

## Scripts

### Core Utility Scripts

#### `prelude.js`
Foundation script that defines helper functions and constants used across other scripts:
- Color variable getters (`V()`)
- Paint helpers (`P()`)
- Font helpers (`F()`)
- Text creation (`T()`)
- Chip component generator
- Screen layout builder
- Spec sheet generator with linked notes to Granola meetings

#### `active.js`
Manages navigation state and active indicators:
- Creates/updates "Review Room / Nav" variable collection
- Sets up boolean variables for each navigation section (Home, Vertical Content, Social Clips, etc.)
- Adds active indicator rectangles to nav items
- Wires click interactions to update navigation state
- Processes multiple frames (1:11, 7:652, 7:965)

#### `hover.js`
Implements hover state interactions:
- Creates a "Hover Pill" component set with Default and Hover states
- Applies hover effects to navigation items and row headers
- Handles ON_HOVER transitions between states
- Manages visual feedback for interactive elements

#### `tvars.js`
Typography variable management:
- Creates "Review Room / Typography" variable collection
- Generates variables for font families, weights, sizes, line heights, and letter spacing
- Binds typography variables to text styles
- Scopes variables appropriately (FONT_FAMILY, FONT_STYLE, FONT_SIZE, etc.)

#### `typo.js`
Comprehensive typography system builder:
- Audits all text elements across frames
- Creates/updates text styles for the entire design system
- Generates a "Typography" page with visual style guide
- Documents 20+ text styles with specifications:
  - Dashboard/Section Header
  - Sidebar/Nav Label
  - Hero/Title, Hero/Summary
  - Card/Title, Card/Meta
  - Calendar styles
  - Button styles
- Applies gradient overlays to card thumbnails
- Color-codes styles by usage area

#### `mac.js`
MacBook mockup generator:
- Creates 1728×1117 prototype frame
- Builds MacBook Pro 16" frame with:
  - Bezel and lid (40px corner radius)
  - Notch (220×34px)
  - Camera (10px)
  - Base with gradient
  - Hinge detail
- Wires navigation interactions (scroll-to and navigate)
- Fixes team card metadata layout
- Handles sidebar and content area sizing

### Image Management Scripts

#### `img1.js`, `img2.js`
Base64 image encoding and management:
- Encodes placeholder images as base64 strings
- Creates Figma image assets from encoded data
- Stores image hashes in plugin data
- Manages hero, card, and thumbnail images
- Images: hero, v0-v5 (vertical), s0-s3 (social), b0-b2 (BTS), t0-t5 (team), a (avatar)

#### `up.js`, `up1.js`, `up2.js`
Image upload and replacement scripts:
- Updates images across multiple frames
- Replaces placeholder images with actual assets
- Handles different image types (hero, vertical content, social, BTS, team)
- Maintains image scaling and positioning

### Content Generation Scripts

#### `edit.js`
Large content generation script:
- Creates dashboard screen layouts
- Builds content cards and carousels
- Generates sample data for segments, posts, and team members
- Implements card templates with thumbnails, metadata, and status chips
- Handles multiple content types: Vertical Content, Social Clips, Behind the Scenes, Team

#### `edit2.js`
Secondary content editing script (simplified version of edit.js)

#### `p1.js`, `p2.js`, `p3.js`
Page-specific content builders:
- **p1.js**: Rollout Calendar page with Metricool integration
  - Phase-based post organization
  - Post cards with captions, thumbnails, and scheduling
  - Status chips (Scheduled/Draft)
  - Metadata-driven phase membership
- **p2.js**: Additional calendar views
- **p3.js**: Supplementary content pages

#### `run1.js`, `run2.js`, `run3.js`
Main execution scripts that:
- Orchestrate the build process
- Apply prelude helpers
- Generate screens with content
- Create spec sheets
- Wire up navigation and interactions

### Video Processing

#### `assets/video/pick.py`
Python script for extracting still frames from video:
- Processes candidate frames using Pillow and NumPy
- Analyzes image sharpness (Laplacian variance)
- Filters frames by brightness and contrast
- Ensures visual diversity between selected frames
- Extracts 16 representative stills from the source video
- Outputs frames with timestamps (e.g., `still_01_t12.34s.jpg`)

**Requirements**: Python 3, NumPy, Pillow (PIL)

## Specification Document

`docs/review-room-spec.md` contains:
- Complete frame dimensions and layout specifications
- Color palette definitions
- Typography specifications (font families, sizes, usage)
- Component dimensions and positioning
- Screen section breakdown:
  - Sidebar with navigation
  - Featured content hero area
  - Content category rows and carousels
  - Team behind the work section
- Overview notes from design meetings
- References to Granola meeting notes for workflow decisions

## Assets

### Image Collections

- **cimg/**: Card images used in content carousels (a, b0-b2, hero, s0-s3, t0-t5, v0-v5)
- **img/**: Primary full-size images (a, b, hero, s, v)
- **rimg/**: Review images r0 through r23 (24 total reference frames)

### Screenshots

Reference screenshots showing:
- BrandStar logo (brandstar-logo.png)
- Dashboard view (dashboard.png)
- Design kit overview (design-kit.png)
- Active home state (home-active.png)

## Development Workflow

1. **Design in Figma**: Use variable collections for theming and state management
2. **Run automation scripts**: Execute scripts in Figma plugin console to:
   - Set up typography variables and styles
   - Generate navigation and interaction states
   - Create mockups and prototypes
   - Apply image assets
   - Build content pages
3. **Extract video frames**: Use `pick.py` to select representative stills from source video
4. **Review and iterate**: Check generated screens against spec

## Known Issues & Open Questions

From the spec and run scripts, items still in progress:
- Metricool credentials and slide mapping (slides 3 and 4) needed for connector
- Exact phase date boundaries for Post-Air Amplify vs Sustain
- Should Draft/unscheduled posts be visible to the client?
- Final metadata naming rules for phase tags

## External Resources

- **Source Video**: 76 MB video file (stored separately)
- **Figma File**: BKN32x3plXadLSjqq24DX8, Drafts page, frame "Review Room v2" 12:111
- **Granola Meeting Notes**:
  - Oct 27, 2026: Frame.io workflow and asset bundle strategy
  - Oct 28, 2026: Metrical connector setup

## Security Note

This repository contains no API keys, tokens, or credentials. References to "Metricool credentials" in the code are placeholders indicating that external credentials must be configured separately for the connector to function.
