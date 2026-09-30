# Riyas V. A.: Official Website

Personal website of **Riyas V. A.**, Chairman & Managing Director of the Atlas–Maharani Group (Thodupuzha, Kerala).

A static site: no framework, no build step, no dependencies. Open `index.html` or deploy the folder as-is.

## Structure

```
index.html            Home page (single page: hero, about, family, brands, journey, awards, media, FAQ, contact)
privacy.html          Privacy & accessibility statement
404.html              Not-found page
styles.css            Design tokens + all styles
legal.css             Extra styles for privacy / 404 pages
script.js             Navigation, reveal animation, carousels, consent-gated video embeds
assets/fonts/         Self-hosted DM Sans + Playfair Display (SIL Open Font License)
assets/img/           Responsive AVIF + WebP images (400–1120 px)
assets/icons/         Favicon (SVG + PNG), Apple touch icon, PWA icons
assets/og/            Social-share preview image (1200×630)
favicon.ico           Legacy favicon
site.webmanifest      Web app manifest
robots.txt            Crawler rules + sitemap pointer
sitemap.xml           XML sitemap with image entries
vercel.json           Security headers + caching (Vercel)
_headers              Same headers for Netlify / Cloudflare Pages
.well-known/security.txt   Vulnerability-disclosure contact (RFC 9116)
```

## Standards this site meets

| Area | What is in place |
|---|---|
| **Performance** | AVIF/WebP with `srcset`, preloaded hero image + fonts, lazy loading, reserved image dimensions (CLS 0), no third-party requests on load. Lighthouse mobile: 95 / 100 / 100 / 100. |
| **Accessibility** | WCAG 2.2 AA: semantic landmarks, skip link, visible focus, ≥ 4.5:1 contrast, 44 px targets, alt text on every image, keyboard-operable carousels with live status, `prefers-reduced-motion`, works without JavaScript. |
| **SEO** | Descriptive title/meta, canonical, Open Graph + Twitter cards, `ProfilePage` → `Person` / `Organization` / `WebSite` / `BreadcrumbList` JSON-LD, XML sitemap with images, robots.txt, FAQ content. |
| **Privacy** | No cookies, no analytics, self-hosted fonts. YouTube/Facebook/Instagram players load only after the visitor presses play (YouTube in no-cookie mode). Privacy page covers GDPR, UK GDPR, DPDP Act 2023 and CCPA. |
| **Security** | Strict Content-Security-Policy, HSTS (preload-ready), `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy, COOP/CORP, `security.txt`. No inline scripts, no external scripts. |

## Deploying

**Vercel (recommended):** import the repository; `vercel.json` applies the headers automatically. Point the domain at the project and enable HTTPS.

**Netlify / Cloudflare Pages:** `_headers` is picked up automatically.

**Any other host:** copy the headers from `vercel.json` into the server config (Nginx `add_header`, Apache `Header set`, etc.).

After the first deploy:

1. Submit `https://riyasva.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Test the share card at <https://developers.facebook.com/tools/debug/> and <https://cards-dev.twitter.com/validator>.
3. Validate structured data at <https://search.google.com/test/rich-results>.
4. Check headers at <https://securityheaders.com> and <https://observatory.mozilla.org>.
5. Once HTTPS is confirmed stable, submit the domain to <https://hstspreload.org>.

## Code quality

The repo carries linter configs so anyone editing it gets the same checks:

- `.htmlvalidate.json`: run `npx html-validate *.html`. `role="list"` on styled lists is intentional (Safari/VoiceOver drop list semantics when `list-style: none` is set), so that rule is off.
- `.stylelintrc.json`: run `npx stylelint "*.css"` (needs `stylelint-config-standard`).
- `script.js` passes `eslint:recommended` with no globals beyond the browser.

No inline styles, no inline scripts, no third-party scripts: the Content-Security-Policy in `vercel.json` would block them.

## Editing content

- All copy lives in `index.html`; sections are labelled with `<!-- ===== NAME ===== -->` comments.
- Colours, spacing and type sizes are CSS custom properties at the top of `styles.css`: change them there, not in individual rules.
- To add an award or media item, copy an existing `<li>` in the relevant carousel.
- If the domain is not `riyasva.com`, search-and-replace it in `index.html`, `privacy.html`, `sitemap.xml`, `robots.txt` and `.well-known/security.txt`.

## Licence

Site content © Riyas V. A. All rights reserved. Fonts are licensed under the SIL Open Font License 1.1.
