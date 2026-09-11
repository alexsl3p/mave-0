# MAVE molecular redesign

## Direction

Warm parchment, espresso type, restrained gold, Cormorant Garamond and Montserrat retain MAVE's identity. A split editorial hero replaces the heavy overlay. The collection appears directly after the hero, followed by the molecular method, routine guidance and care categories.

References researched on 12 September 2026:

- [Aesop / Refero Styles](https://styles.refero.design/style/24c0de95-295d-42aa-8240-4e36683cf35b): restrained palette, precise grid and typography. This is Refero's analysis, not an official Aesop specification.
- [Luméra / Framer](https://www.framer.com/marketplace/templates/lum-ra/): skincare presentation, product CMS and understated interactions; the template itself does not include commerce infrastructure.
- [Skinn / Webflow](https://webflow.com/templates/html/skinn-beauty-website-template): image-led skincare catalog and product presentation.
- [Prestige / Shopify](https://themes.shopify.com/themes/prestige/presets/prestige): quick buy, slide-out cart, product discovery and imagery.
- Land-book was also checked, but its gallery could not be retrieved in this session; no specific Land-book design is claimed as a reviewed reference.

No paid template, source code, or third-party photography was purchased or copied. The implementation uses the existing React/Framer Motion stack and original MAVE assets.

## Implemented

- New editorial home, catalog cards, sorting, category/role filtering and empty results reset.
- New generated campaign image with optimized WebP delivery.
- Lazy Three.js molecular sculpture with pointer response, pause outside viewport/hidden tab, reduced-motion support, WebGL fallback and GPU cleanup.
- Hero scroll parallax with pause control; restrained image hover and text movement.
- Real device-local wishlist on catalog, PDP and dedicated saved formulas page.
- Quick shop, cart keyboard focus containment, Escape close, quantity/removal and persistence.
- Mobile header bag access and responsive catalog, PDP and checkout.
- Empty checkout no longer inserts fictional products. Contact and delivery validate required data. Standard delivery uses one threshold calculation throughout checkout.
- Payment no longer stores card number/CVC or pretends an order succeeded. Direct success URLs cannot show a successful purchase.
- Account entry exposes working local wishlist and routine tools instead of a fictional customer dashboard. Legacy account URLs resolve to that entry until real authentication exists.
- Footer care/science/service links are functional. Fixed missing routine image.
- Production build precompiles JSX and serves pinned React, ReactDOM, Framer Motion and Three.js locally. Font requests still use Google Fonts.

## Run and verify

```sh
npm install
npm run build
npm run preview
```

Production preview: http://127.0.0.1:4174

With preview running, `npm test` runs browser checks and writes screenshots to `work/qa/`. Chrome must be installed. Tests cover home and Three.js, catalog search/sort, quick shop, wishlist persistence, cart quantity/removal/reload/Escape, contact/address validation, unavailable payment, saved routine answers, major routes, 390px layouts, reduced motion, JS errors and missing local assets.

Vercel builds `dist/` through the configured build command. Source remains `index.html`, plus `assets/mave-redesign.css` and `assets/molecular-scene.js`.

## Commerce boundary

The owner confirmed that no commerce/payment service is connected. This delivery is a working frontend with local persistence. It does not accept payments, submit orders, authenticate customers, manage stock or send reminders/email. The UI communicates online-ordering unavailability. A real backend/payment provider, merchant delivery/tax configuration and verified service/product claims are required before accepting orders. Existing product data and service policies were retained, not independently substantiated.

## Generated asset

Built-in image generation was used; the tool does not expose selection of a model named GPT Image 2.5.

- Reference: `assets/hero-mave-cream-jar.png`
- Source: `assets/generated/mave-editorial-hero-v2.png`
- Optimized site asset: `assets/generated/mave-editorial-hero-v2.webp`

Prompt:

> Create a finished luxury skincare editorial campaign photograph for MAVE Molecular Cosmetics website hero. Landscape 3:2 composition, high resolution. Use the reference image ONLY as exact product identity reference: preserve the amber-brown glass cream jar, black lid, gold MAVE logo, MOLECULAR COSMETICS lettering, molecular hexagon mark and product proportions. Photograph ONE jar as a sculpture, large in frame, occupying the right-center, sitting on a thick translucent smoked amber glass slab over warm ivory travertine. No foliage, no fabric, no decorative pebbles. Strong diagonal late afternoon sunlight from upper left, architectural shadow cutting across an otherwise simple warm plaster wall, subtle amber caustics and liquid-like reflected light from glass. Palette warm parchment #F5F0E8, tobacco brown, champagne, deep espresso. Calm tactile editorial photography, real materials, highly refined restrained art direction, crisp label and beautiful highlights. Leave some clean space around object, all product fully visible. This image will occupy the right half of a split website hero; no website mockup, no UI, no added headings or additional text. Premium real product photograph, avoid synthetic plastic look.
