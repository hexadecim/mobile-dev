# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Aganya Solutions**, promoting **Aganya ProfitTrack** — a project profitability management tool for software development and IT services companies. Static HTML/CSS/JS, no build step, no framework, no package.json.

## Commands

Run locally:
```
npx http-server . -p 8080
```
Then open http://localhost:8080. There is no build, lint, or test command — pages are plain HTML served as-is.

## Deployment

Deploys to Cloudflare Pages (`wrangler.toml`, project name `aganya-solutions`, output dir `.`).

## Architecture

Each top-level `.html` file (`index.html`, `features.html`, `for-it-services.html`, `pricing.html`, `about.html`, `contact.html`, `404.html`, `blog/*.html`) is a fully self-contained page: head metadata, JSON-LD, and body markup are duplicated per page rather than templated, since there is no build system to share partials. When editing shared elements (header/nav, footer, meta tag patterns), changes must be applied by hand across every HTML file individually.

- `assets/css/style.css` — single global design system: CSS custom properties for color/spacing tokens defined on `:root`, with a `@media (prefers-color-scheme: dark)` override block redefining the same tokens for dark mode. No CSS framework; all component styles (nav, cards, pricing tables, FAQ, forms) live in this one file.
- `assets/js/main.js` — single small vanilla-JS file (IIFE) handling: mobile nav toggle (`.nav-toggle` → `nav-open` class on `body`), the contact form's client-side-only submit handling (`#contact-form` / `#form-status`, no real backend), and the footer year.
- Every page carries JSON-LD structured data in `<head>` (`Organization`, `SoftwareApplication`, `FAQPage`, `Article` on blog posts) plus Open Graph/Twitter meta — keep these in sync with visible page content when editing copy.
- `sitemap.xml`, `robots.txt`, `site.webmanifest` — SEO/PWA metadata; update `sitemap.xml` when adding/removing pages.

## Known placeholders to be aware of

The canonical/OG domain `https://www.aganyasolutions.com` is a placeholder used throughout `<head>` tags, JSON-LD, `sitemap.xml`, and `robots.txt`. The contact form (`#contact-form` in `assets/js/main.js`) only shows a client-side confirmation and is not wired to a real backend. Pricing figures, testimonials, and social links (LinkedIn/X) are also placeholders. Don't "fix" these unprompted — they're pending real production details — but keep new pages consistent with the existing placeholder pattern.
