# Rare Air Details website

A four-page static site for Rare Air Details, a mobile car detailing business in San Diego.
Plain HTML, CSS and a little JavaScript, with no build step.

| Page | File |
|---|---|
| Home | `index.html` |
| Packages and prices | `packages.html` |
| Our work (before/after gallery) | `work.html` |
| Book a detail / contact | `contact.html` |

## Preview locally

Open the folder with any static server, for example:

```bash
npx http-server site
```

Opening the files directly from disk also works, but some browsers block the fonts that way.

## Publish

Upload the whole `site/` folder to any static host: Netlify, Vercel, Cloudflare Pages or GitHub Pages.
Then point your domain at it.

## Things to update

- **Before/after photos** (`work.html`): replace each `<div class="ph ...">` placeholder with an
  `<img>`. Keep `class="after"` on the after photo, add real `alt` text and fill in each caption.
- **Logo**: the header uses a text version of the "RARE AIR DETAILS" wordmark. Swap in the real logo
  file if you have one.
- **Prices**: prices appear in `index.html` (including the structured data at the top of the file),
  `packages.html` and the page descriptions.
- **Reviews**: there's no reviews section yet because there were no real reviews to show. Add one once
  you have customer quotes you can use.

## Brand

| Token | Hex | Use |
|---|---|---|
| Onyx | `#0B0A09` | Background |
| Graphite | `#161512` | Raised sections |
| Bone | `#EEE9DE` | Body text |
| Smoke | `#A09A8D` | Secondary text |
| Champagne | `#D6C59B` | Headings, prices, buttons |
| Brass | `#B39B63` | Icons and rules |

Fonts: Marcellus (headings) and Manrope (body), both self-hosted under the SIL Open Font License
(see `fonts/`).
