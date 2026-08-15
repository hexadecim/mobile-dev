# Aganya Solutions — Marketing Website

SEO-optimized marketing website for **Aganya Solutions**, promoting **Aganya ProfitTrack** — a project profitability management tool for software development and IT services companies.

Static HTML/CSS/JS, no build step or framework required.

## Structure

```
index.html                                    Home
products/profitability-management.html        Products > Profitability Management
about.html                                     Company page
contact.html                                   Contact / demo request form
404.html                                       Custom not-found page
assets/css/style.css                           Design system (light/dark aware, responsive)
assets/js/main.js                              Mobile nav, Products dropdown, FAQ, form handling
assets/img/                                    Favicon, OG image (SVG + generated PNG)
sitemap.xml, robots.txt, site.webmanifest      SEO/PWA metadata
```

Nav is Home, Products (dropdown) > Profitability Management, About Us, Contact Us.

## Run locally

```
npx http-server . -p 8080
```

Then open http://localhost:8080

## Before going live

- Replace the placeholder domain `https://www.aganyasolutions.com` throughout (canonical tags, Open Graph/Twitter meta, JSON-LD, sitemap.xml, robots.txt) with the real production domain.
- Wire `contact.html`'s form (`#contact-form` in `assets/js/main.js`) to a real backend or a service like Formspree/Netlify Forms — it currently only shows a client-side confirmation message.
- Update social links (LinkedIn/X), pricing figures, and testimonials with real details.
- Verify the JSON-LD structured data (Organization, SoftwareApplication, Product, FAQPage, Article) with Google's Rich Results Test once the real domain is live.
