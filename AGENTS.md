# AGENTS.md — Developer & LLM Guidelines for LibreELEC Website

This document serves as the primary technical specification and operating standard for AI coding agents and human developers contributing to this repository.

---

## 1. Core Operating Rules & Constraints

When modifying this repository, strictly adhere to the following rules:

### One Commit per Meaningful Change
* Every atomic, meaningful change must be encapsulated in its own standalone git commit.
* Use concise Conventional Commits syntax (`feat:`, `fix:`, `chore:`, `content:`, `docs:`, `refactor:`).
* Never bundle unrelated changes (e.g., dependency updates mixed with content edits or styling changes) into a single commit.

### Do Not Create Pull Requests
* Commit directly to the repository or target branch as instructed. Do not initiate pull requests (`gh pr create`, etc.) unless explicitly instructed by the user.

### Minimal Scope
* Make the smallest change that completely solves the issue.
* **No speculative hardening, unsolicited refactoring, or formatting churn.**
* If the scope of a task must expand to resolve unexpected blockers, stop immediately and report why to the user before proceeding.

### Comments & Explanations
* Keep code comments concise. Explain *why* something is done, not the obvious *what*.
* Never include rejected attempts, conversational scratchpad text, or historical trial-and-error reasoning in code or commit messages.
* **Never remove or alter existing human comments** unless they are proven obsolete by the change.

### Pre-submission Checklist
Before concluding any task or making a commit:
1. **Clean Diff**: Run `git diff` to verify only the intended lines have been touched.
2. **No AI Residue**: Avoid AI-specific phrasing markers, marketing buzzwords (e.g., "game-changer", "delve", "testament", "silently purges"), and em-dashes (`—`). Use standard punctuation (hyphens, commas, or parentheses).
3. **Build Verification**: Run `npm run build` and ensure it exits with code 0 (zero errors).
4. **No Output Pollution**: Do not leave temporary scripts, scratch files, or unwanted logs in the workspace.

---

## 2. Technical Stack & Architecture

The site is a high-performance static website built for [LibreELEC](https://libreelec.tv) and hosted on GitHub Pages.

| Component | Technology | Version / Spec |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) | `^5.18.2` (Static Site Generation / SSG) |
| **Client Reactivity** | [Alpine.js](https://alpinejs.dev/) | `^3.17.5` via `@astrojs/alpinejs` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.19` via `@astrojs/tailwind` |
| **Typography** | `@tailwindcss/typography` | `^0.5.20` (prose styling in articles) |
| **Data Parsing** | `js-yaml` | `^5.5.0` (YAML parsing for `config.yml`) |
| **Markdown Parser** | `marked` | `^18.2.0` (rendering release notes & post markdown) |
| **Syndication** | `@astrojs/sitemap`, `feed` | Generates sitemap, `feed.xml` and `feed.rss.xml` |

### Critical Dependency Lock & Compatibility Notice
> [!IMPORTANT]
> `@astrojs/tailwind` strictly locks Astro compatibility to `^5.0.0` and Tailwind CSS to `^3.0.24`.
> **DO NOT** attempt to upgrade to Tailwind CSS v4 or Astro v6/v7 without an explicit project-wide architectural migration (which requires switching to `@tailwindcss/vite`).

### Environment & Tooling
* **Node.js**: Requires Node v20+ or v24+ running natively on Linux.
* **WSL Caveat**: When working in WSL, always invoke native Linux binaries (`~/.local/bin/node`, `npm`). Never invoke Windows executable shims (`node.exe`).

---

## 3. Repository Structure

```
website-new/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GitHub Pages
├── public/                     # Static unbundled assets (favicons, icons, images)
│   ├── favicon.svg
│   ├── icon.png
│   └── img/                    # Showcase graphics and device photos
├── src/
│   ├── alpine.ts               # Alpine.js entrypoint (UI store, TV carousel, theme logic)
│   ├── content.config.ts       # Astro Content Collections schema & glob loader
│   ├── components/             # Reusable Astro UI components
│   │   ├── Navbar.astro        # Header with desktop links & mobile navigation
│   │   ├── Footer.astro        # Footer with mirrors, legal, and community links
│   │   ├── TvPreview.astro     # Interactive Kodi TV bezel showcase (Alpine.js)
│   │   ├── Features.astro      # Grid of core LibreELEC features
│   │   ├── UsbCreator.astro    # USB-SD Creator showcase and dynamic download links
│   │   ├── NewsSection.astro   # Homepage news grid with category filter
│   │   ├── PostCard.astro      # Article summary card component
│   │   ├── DownloadModal.astro # Download confirmation dialog with checksums & mirrors
│   │   └── Toast.astro         # Copy-to-clipboard notification toast
│   ├── content/
│   │   └── posts/              # 110+ Markdown articles organized by year (2016–2026)
│   ├── layouts/
│   │   ├── Layout.astro        # Base HTML layout (head, theme script, navbar, footer)
│   │   └── PostLayout.astro    # Article layout (breadcrumbs, badges, typography, support block)
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── downloads/
│   │   │   └── index.astro     # Interactive download matrix (devices, versions, mirrors)
│   │   ├── news/
│   │   │   └── [...page].astro # Paginated news archive (/news, /news/2, ...)
│   │   ├── privacy-policy/     # Privacy policy declaration
│   │   ├── sponsor/            # Sponsorship and donations page
│   │   ├── [year]/[month]/[day]/[...slug].astro # Dynamic post permalink router
│   │   ├── feed.xml.ts         # Atom/RSS syndication feed
│   │   └── feed.rss.xml.ts     # RSS 2.0 syndication feed
│   ├── styles/
│   │   └── global.css          # Tailwind base, components, utilities, and dark mode rules
│   └── utils/
│       ├── downloads.ts        # Parses config.yml; computes device matrix & download URLs
│       └── posts.ts            # Enriches posts, extracts categories, and builds permalinks
├── astro.config.mjs            # Astro configuration (base path, markdown rehype plugin, integrations)
├── config.yml                  # Central site-wide data source (releases, downloads, devices)
├── package.json                # Project dependencies and build scripts
└── tailwind.config.mjs         # Tailwind configuration, color palette, and container settings
```

---

## 4. Single Source of Truth: `config.yml`

Almost all dynamic download data and versioning across the site are controlled by `config.yml`. Never hardcode release versions, kernel versions, or download filenames inside components.

### Schema Breakdown:

1. **`baseUrl`**: Base URL for image downloads (`https://releases.libreelec.tv`).
2. **`creator`**: LibreELEC USB-SD Creator tool configuration:
   ```yaml
   creator:
     version: "1.6"
     wikiUrl: "https://wiki.libreelec.tv/installation/create-media"
     downloads:
       windows: { name: "...", icon: "...", url: "..." }
       macos:   { name: "...", icon: "...", url: "..." }
       linux:   { name: "...", icon: "...", url: "..." }
   ```
3. **`versions`**: Ordered list of LibreELEC releases (newest to oldest):
   ```yaml
   - id: "13.0"
     name: "13.0"
     downloadVersion: "12.95.1"
     releaseDate: "2026.10"
     kodiVersion: "22.0 RC2 (Piers)"
     kernelVersion: "7.2.x"
     kernelOverrides:
       raspberry: "6.18.x"
       amlogic: "7.3.x"
     status: "beta" # 'latest' | 'stable' | 'legacy' | 'beta'
     badgeColor: "red"
     statusLabel: "Beta 1"
     description: "LibreELEC 13 includes Kodi 22 Piers."
   ```
4. **`platforms` & `devices`**:
   * Each platform (e.g., `raspberry`, `generic`, `amlogic`, `rockchip`) contains a list of supported devices.
   * Device entry specifies `project`, `arch`, optional `device`, and `supportedVersions`.
   * Image URLs are generated dynamically by `src/utils/downloads.ts` using the template:
     `LibreELEC-{PROJECT}.{ARCH}-{DOWNLOAD_VERSION}[-{DEVICE}].img.gz`

---

## 5. Content Collections & News Workflow

### Post Location & Filenames
All articles live in `src/content/posts/[year]/` and must follow the naming convention:
`YYYY-MM-DD-kebab-case-title.md`

### Frontmatter Schema (`src/content.config.ts`)
```yaml
---
layout: post
title: "LibreELEC 13 Beta 1"
description: "Backup first, ask questions later. LE13 Beta 1 is here!"
date: 2026-10-03 # Optional, defaults to date in filename
author: "LibreELEC Team" # Optional, defaults to "LibreELEC Team"
image: "/img/posts/banner.jpg" # Optional
support: true # Shows community support footer block
---
```

### URL Mapping
Astro uses `src/pages/[year]/[month]/[day]/[...slug].astro` to map posts to backwards-compatible canonical URLs:
`https://libreelec.tv/:year/:month/:day/:slug/`

### Writing Style & Tone Guidelines
* **Developer/Community Voice**: Direct, technically accurate, and concise.
* **No AI Residue**: Avoid buzzwords ("delve", "game-changer", "groundbreaking", "silently purges", "blindingly").
* **No Em-Dashes**: Do not use `—`. Use parentheses, commas, or hyphens instead.
* **Structure**: Use bullet points for feature lists and breaking changes.

---

## 6. Common Task Playbooks

### Playbook A: Updating a Release or Kodi Version
1. Open `config.yml`.
2. Locate the target version under `versions`.
3. Update `kodiVersion`, `kernelVersion`, `downloadVersion`, or `statusLabel`.
4. If a corresponding release post exists in `src/content/posts/`, update references there.
5. Verify build with `npm run build`.
6. Commit the change:
   `git commit -m "fix: update Kodi version to 22.0 RC2 in config and release post"`

### Playbook B: Updating the USB-SD Creator Tool
1. Open `config.yml`.
2. Under `creator`, update `version` (e.g. `"1.6"`).
3. Update URLs in `creator.downloads` if the download artifact names or versions changed.
4. Verify that `src/components/UsbCreator.astro` renders the new version.
5. Verify build with `npm run build`.
6. Commit:
   `git commit -m "feat: update USB creator version to 1.6"`

### Playbook C: Adding a New News Post
1. Create a markdown file under `src/content/posts/[year]/` named `YYYY-MM-DD-title.md`.
2. Add required frontmatter (`title`, `description`).
3. Write content adhering to the tone guidelines (no em-dashes, concise, technical).
4. Run `npm run build` to confirm parsing, category classification, and RSS feed generation.
5. Commit:
   `git commit -m "content: add LibreELEC 13.0 beta 1 announcement"`

---

## 7. Build & Verification Commands

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

Always ensure `npm run build` produces a clean exit before finishing your task.
