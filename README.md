# LibreELEC Website (Astro + Alpine.js)

The modern, ultra-fast static website for [LibreELEC](https://libreelec.tv), built with **[Astro](https://astro.build/)**, **[Alpine.js](https://alpinejs.dev/)**, and **[Tailwind CSS](https://tailwindcss.com/)**, designed for automated hosting on **GitHub Pages**.

---

## 🚀 Key Features

* **High Performance**: Pure static HTML generation with near-instant page load times.
* **Reactive Interactivity with Alpine.js**:
  * Interactive Kodi TV Bezel showcase with animated media carousel and live clock.
  * Download platform filter tabs (`All`, `Raspberry Pi`, `Generic PC`, `Rockchip / Amlogic`).
  * Instant SHA256 copy to clipboard with toast notifications.
  * Reactive download modal confirmations.
  * Mobile navigation menu.
* **Dynamic News & Content Layer**:
  * 112 historical and current news posts (2016–2025) managed via Astro Content Layer (`src/content.config.ts`).
  * 100% backwards-compatible canonical URLs (`/:year/:month/:day/:title/`).
  * Homepage dynamically showcases the latest 6 releases and dev updates.
  * Dedicated, paginated news archive at `/news/`.
  * Dedicated article reading layout with optimized typography for release notes, hardware lists, and code snippets.
* **Automated CI/CD**:
  * Built-in GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages automatically on push.

---

## 🛠️ Project Structure

```
website-new/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/             # Reusable Astro & Alpine.js components
│   │   ├── Navbar.astro        # Header with desktop & Alpine mobile menu
│   │   ├── Footer.astro        # Footer with links & legal disclaimer
│   │   ├── TvPreview.astro     # Interactive TV showcase powered by Alpine.js
│   │   ├── Features.astro      # Core features grid
│   │   ├── Downloads.astro     # Target device matrix with Alpine filtering & modal triggers
│   │   ├── UsbCreator.astro    # USB-SD Creator showcase
│   │   ├── NewsSection.astro   # Latest posts with Alpine category filters
│   │   ├── PostCard.astro      # Reusable article card
│   │   ├── DownloadModal.astro # Alpine modal dialog
│   │   └── Toast.astro         # Alpine toast alert
│   ├── content/
│   │   └── posts/              # 112 Markdown posts organized by year (2016–2025)
│   ├── layouts/
│   │   ├── Layout.astro        # Base HTML layout
│   │   └── PostLayout.astro    # Dedicated article reading layout
│   ├── pages/
│   │   ├── index.astro         # Landing page (converted design)
│   │   ├── news/
│   │   │   └── [...page].astro # Paginated news archive
│   │   └── [year]/[month]/[day]/[...slug].astro  # Dynamic post routes
│   ├── styles/
│   │   └── global.css          # Tailwind directives, fonts, glassmorphism, prose styles
│   ├── utils/
│   │   └── posts.ts            # Post helpers, sorting, categories, and permalinks
│   ├── alpine.ts               # Alpine.js entrypoint (UI store & TV carousel component)
│   └── content.config.ts       # Astro Content Layer schema & glob loader
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration & design tokens
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
```
Compiles all 123 static pages into the `dist/` directory in ~3–5 seconds.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

1. Push your repository to GitHub (`master` or `main` branch).
2. On GitHub, navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the Astro site and deploy it to GitHub Pages!
