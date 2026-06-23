# luckrnx09.github.io — Personal GitHub Pages Portfolio

## Architecture
- Single-page static HTML (`index.html`) with Bootstrap 3, Jasny Bootstrap offcanvas nav
- CSS: `assets/css/main.css`, `assets/css/responsive.css`
- JS: `assets/js/main.js` — handles skill icon rendering, scrollspy, WOW animations
- Domain: luckrnx09.com (via CNAME file)
- Deploy: push to `main` → GitHub Pages auto-deploys
- No build step, no framework — pure HTML/CSS/JS

## File Map
```
index.html           — main page (hero, works, skills, contact sections)
assets/css/main.css  — primary stylesheet (706 lines)
assets/js/main.js    — skill icons rendering + interactivity (131 lines)
assets/img/icons/    — tech stack icon PNGs: nodejs, python, csharp, html5, css3,
                       react, vue, nextjs, nestjs, cypress, jest, fastapi, linux,
                       mysql, postgreesql, docker, git, javascript
assets/img/backgrounds/ — bg.jpg, banner.jpg, skill-bg.jpg, imgfooter.jpg
CNAME                — luckrnx09.com
```

## Key Code Patterns
- Skills section (`#skills`): icons are rendered DYNAMICALLY by main.js (line 66-113). Data is hardcoded in the `icons` array. Categories: "Programming Languages" and "Technology Stacks". Each icon has `{url, width, height}`.
- All sections use WOW.js for scroll-triggered animations
- Offcanvas nav menu via Jasny Bootstrap
- Font Awesome icons for contact info

## Constraints
- MUST stay a static HTML site (no build step, no framework). GitHub Pages serves it as-is.
- All asset paths are relative (e.g., `assets/img/icons/...`)
- No server-side processing

## What To Do

### 1. Visual Overhaul — Make It Cool, Professional, Geeky
Transform the page from a generic Bootstrap 3 template into a modern developer portfolio:
- **Dark theme** with a sleek, modern feel (think Linear/Vercel/Stripe aesthetic but with geeky developer vibes)
- **Better typography** — use a modern font stack (Inter, JetBrains Mono for code)
- **Terminal/CLI aesthetic elements** — could add a small terminal-like intro animation
- **Particle or grid background** — subtle tech-pattern or canvas animation
- **Smooth micro-interactions** — hover effects, button animations
- **Glassmorphism or subtle gradients** for cards
- **Better responsive design** — ensure it looks great on mobile
- **Replace or heavily customize the Bootstrap 3 look** — the current GrayGrids template feels dated
- Keep the single-page scroll structure but modernize everything visually

### 2. Add CursorX Project to Works Section
- **Project**: CursorX — "A powerful yet lightweight desktop application that enhances your screen recordings, presentations, and tutorials by providing real-time cursor highlighting. Built with TypeScript, runs on macOS, Windows, and Linux."
- **GitHub**: https://github.com/luckrnx09/CursorX
- **Stars**: 0 (new project)
- **Language**: TypeScript
- Add a project card/entry in the `#works` section alongside the existing Python Guide ebook
- If there's a good screenshot or logo in the CursorX repo, use it. Otherwise create a clean visual placeholder.

### 3. Add AI/LLM Tech Stack Icons
Add to the skills section in `main.js` (or wherever skills end up):
- **Claude Code** — Anthropic's AI coding agent
- **AI/LLM** — general AI/LLM capability
- Any other AI tools you use (cursor, copilot, etc.)
You may need to find or create appropriate icon images (SVG preferred for quality). Place them in `assets/img/icons/`.

### 4. SEO Optimization
The current page has ZERO SEO:
- **No `<meta name="description">`** — MUST add a compelling description
- **No Open Graph tags** (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- **No Twitter Card tags** (`twitter:card`, `twitter:title`, etc.)
- **No canonical URL**
- **No structured data** (JSON-LD Person schema for a personal portfolio)
- **No robots.txt** — create one
- **No sitemap.xml** — create one (even a simple one)
- **Title could be better** — "luckrnx09's Home" → something more descriptive
- **Missing semantic HTML5** — use `<main>`, `<article>`, `<nav>` properly
- **Image alt text** — ensure ALL images have descriptive alt attributes
- **No `.nojekyll`** — add this file so GitHub Pages doesn't try to process with Jekyll
- **Heading hierarchy** — ensure proper h1→h2→h3 structure
- **Page speed** — consider lazy loading for off-screen images, minimize render-blocking resources

## Author Identity
- GitHub: luckrnx09
- Email: luckrnx09@gmail.com
- Location: Sichuan, China
- Role: Full-stack developer, AI/LLM enthusiast, open-source contributor
- Tech: React, Node.js, TypeScript, Python, AI/Claude Code

## Git Conventions
- Branch naming: `feat/description`, `fix/description`
- Conventional Commits
- User for commits: luckrnx09 <luckrnx09@gmail.com>
