You are working on the existing MAVE® Molecular Cosmetics e-commerce project.

Current main file / entry:
- index.html

Main objective:
Upgrade the existing MAVE site from a premium UI prototype into a stronger luxury skincare commerce system.

Do not rebuild the site from scratch.
Do not replace the visual system.
Do not simplify the layout.
Do not remove existing routes or components.
Do not add sample-related features.
We currently do NOT offer product samples.

Priority:
Do not create more random pages. Improve the existing system depth, luxury mechanics, copy, PDP intelligence, account care layer, cart confidence and checkout confidence.

IMPORTANT IMPLEMENTATION DISCIPLINE:
This is a large single-file React prototype. Do not rewrite the entire index.html unless absolutely necessary.

Work surgically:
- first inspect the existing architecture;
- locate current components;
- locate CSS sections;
- locate route handling;
- locate localStorage helpers;
- locate PRODUCTS and PRODUCT_DETAILS data;
- locate checkout helpers;
- locate account/dashboard components;
- then modify only the relevant existing sections.

Avoid duplicate components.
Avoid creating parallel versions of the same page.
Preserve existing component names where possible.
Preserve existing route names and view names.
Preserve existing localStorage keys unless a change is explicitly required.
Preserve existing product arrays and checkout helpers unless a change is explicitly required.

Before referencing any image asset:
- verify that the file exists in the assets folder;
- do not invent new asset paths;
- reuse existing premium still-life/product assets already present in the project.

If deployment credentials or deployment tooling are unavailable:
- do not fake a deployment URL;
- push the branch;
- clearly explain how to deploy manually.

Current project already includes:
- landing
- collections/catalog
- product detail pages
- search
- login/register/forgot password
- account dashboard
- profile settings
- orders list
- order detail
- addresses
- payment methods
- wishlist
- checkout contact
- checkout delivery
- checkout payment
- checkout review
- checkout success
- checkout failed
- service pages: shipping, returns, contact, privacy, science

Your job:
Improve and deepen the existing experience. Do not restart it.

------------------------------------------------------------
GIT WORKFLOW REQUIREMENTS
------------------------------------------------------------

1. Check current git status:
   git status

2. Create and switch to a new branch:
   git checkout -b feature/mave-luxury-commerce-system

3. Run the project locally.

4. Take BEFORE screenshots of the required pages.

5. Make the requested improvements.

6. Run lint/build/tests if available.

7. Take AFTER screenshots of the same pages.

8. Commit the changes:
   git add .
   git commit -m "Enhance MAVE luxury commerce system"

9. Push the branch:
   git push -u origin feature/mave-luxury-commerce-system

10. Deploy this branch to the preview environment if the repository is connected to Vercel, Netlify, or another deployment provider.

If deployment is not possible:
- explain exactly why;
- still push the branch;
- provide exact manual deployment steps.

------------------------------------------------------------
SCREENSHOT REQUIREMENTS
------------------------------------------------------------

Use Playwright, Puppeteer, browser devtools screenshots, or any existing project screenshot tooling.

If no screenshot tooling exists:
- create a minimal Playwright script only for capturing screenshots;
- do not introduce this script into the production app logic.

Take BEFORE and AFTER screenshots for:

Desktop:
- Home / landing
- Collections
- Product detail page
- Cart or cart drawer
- Checkout contact
- Checkout delivery
- Checkout payment
- Checkout review
- Account dashboard
- Wishlist
- Science page

Mobile:
- Home at 390px width
- Checkout contact at 390px width
- Checkout payment at 390px width

Store screenshots in:

/screenshots/before/
/screenshots/after/

Use clear filenames:

/screenshots/before/home-before.png
/screenshots/after/home-after.png

/screenshots/before/collections-before.png
/screenshots/after/collections-after.png

/screenshots/before/pdp-before.png
/screenshots/after/pdp-after.png

/screenshots/before/cart-before.png
/screenshots/after/cart-after.png

/screenshots/before/checkout-contact-before.png
/screenshots/after/checkout-contact-after.png

/screenshots/before/checkout-delivery-before.png
/screenshots/after/checkout-delivery-after.png

/screenshots/before/checkout-payment-before.png
/screenshots/after/checkout-payment-after.png

/screenshots/before/checkout-review-before.png
/screenshots/after/checkout-review-after.png

/screenshots/before/account-dashboard-before.png
/screenshots/after/account-dashboard-after.png

/screenshots/before/wishlist-before.png
/screenshots/after/wishlist-after.png

/screenshots/before/science-before.png
/screenshots/after/science-after.png

/screenshots/before/mobile-home-before.png
/screenshots/after/mobile-home-after.png

/screenshots/before/mobile-checkout-contact-before.png
/screenshots/after/mobile-checkout-contact-after.png

/screenshots/before/mobile-checkout-payment-before.png
/screenshots/after/mobile-checkout-payment-after.png

------------------------------------------------------------
BRAND DIRECTION
------------------------------------------------------------

MAVE is:
- premium
- controlled
- minimal
- confident
- precise
- quiet
- structured
- skincare-first

The tone should feel like quiet authority, not mass-market beauty.

The brand should feel closer to:
- high-end skincare science;
- editorial luxury;
- quiet premium service;
- controlled ritual;
- functional beauty system.

Do not copy exact layouts from other brands.
Use premium mechanics inspired by high-end skincare brands:
- science authority;
- routine guidance;
- product intelligence;
- account care dashboard;
- service layer;
- subtle loyalty / MAVE Circle;
- better cart/checkout confidence.

MAVE voice:
Use concise, structured copy around:
- system
- balance
- barrier
- renewal
- function
- precision
- daily ritual
- measured care
- structure
- continuity
- sequence
- formula
- surface
- skin environment
- controlled support
- molecular method

Avoid:
- hype;
- slang;
- influencer language;
- overpromising;
- medical claims;
- overly emotional self-care copy;
- cheap promo language.

Do NOT use phrases like:
- “we all do”
- “glow like never before”
- “miracle”
- “magic”
- “transform your skin overnight”
- “clinical results” unless there is real proof/data
- “samples with every order”
- “complimentary samples”
- “try it first sample”
- “sample gifts”
- “beauty secret”
- “must-have”
- “ultimate”
- “perfect”
- “glow up”

------------------------------------------------------------
VISUAL DIRECTION
------------------------------------------------------------

Keep the existing MAVE visual DNA:
- warm cream/beige background
- black/brown text
- muted gold accents
- serif italic editorial headings
- Montserrat-style small uppercase labels
- thin borders
- subtle gradients
- soft image fade on the left
- minimal luxury spacing
- calm premium imagery
- no loud colors
- no generic SaaS-style cards

Visual refinement layer:
Add subtle luxury editorial structure inspired by high-end skincare and luxury fashion commerce:
- thin 1px dividers;
- refined grid rhythm;
- controlled asymmetry;
- quiet uppercase labels;
- stronger whitespace;
- precise content containment;
- premium hover states;
- editorial spacing;
- subtle structural borders;
- restrained gold/brown lines;
- lookbook-like composition where appropriate.

Do not make the site look like:
- a generic fashion store;
- a SaaS dashboard;
- a mass-market beauty shop;
- a template Shopify store;
- a loud lifestyle brand.

Keep it skincare-first, calm, warm and molecular.

------------------------------------------------------------
TASK 1 — STRENGTHEN THE MEGA-MENU
------------------------------------------------------------

Update the existing mega-menu so it feels like a premium skincare navigation system.

Do not create a duplicate header.
Modify the existing Header / mega-menu component.

Suggested mega-menu structure:

SHOP
- All formulas
- Bestsellers
- New arrivals
- Limited edition
- Sets

SHOP BY ROLE
- Barrier support
- Balance
- Renewal
- Cleanse
- Hair integrity
- Targeted care

MAVE METHOD
- Molecular Method
- Ingredients Library
- Product Science
- Routine Guide
- Skin Diagnostic

SERVICES
- Delivery & returns
- Contact care
- Account
- MAVE Circle

The mega-menu should:
- use short links;
- feel calm and premium;
- not feel crowded;
- preserve existing visual style;
- include one premium promo tile.

Promo tile copy options:
- “Build a measured ritual.”
- “Find the sequence your skin needs now.”
- “A system for balance, barrier and renewal.”

------------------------------------------------------------
TASK 2 — ADD MAVE METHOD SECTION TO HOMEPAGE
------------------------------------------------------------

Create a new homepage section called:
- “The MAVE Method”
or
- “Molecular Method”

Purpose:
Explain that MAVE is a skincare system built by function, not trend.

Copy direction:

Eyebrow:
MAVE METHOD

Headline:
Skincare, structured by function.

Body:
Each formula has a role: cleanse, balance, reinforce, renew.
A precise system for daily use, and for moments when skin asks for more.

Add 4 method cards:

Cleanse
Removal without disruption.

Balance
A controlled skin environment.

Barrier
Structure, comfort, stability.

Renewal
Texture, rhythm, refinement.

Use existing `scienceMechanisms` data if possible.
Make this section reusable for PDP and Science page where reasonable.

The section should feel editorial, not educational in a cheap way.

------------------------------------------------------------
TASK 3 — ADD ROUTINE FINDER TEASER
------------------------------------------------------------

Create a premium homepage section or card that leads to future routine guidance.

Preferred route:
- /routine-finder

If full routing is too much for the current architecture:
- create a modal or section placeholder instead;
- do not break routing.

Copy:

Eyebrow:
ROUTINE GUIDE

Headline:
Find your MAVE system.

Body:
Answer a few questions and build a routine by role, texture and intensity.

CTA:
Start guide

The placeholder guide should include 4 visible steps/questions:

1. Skin feels:
- balanced
- dry
- unstable
- dull
- sensitive

2. Main need:
- barrier
- balance
- renewal
- cleanse

3. Routine level:
- minimal
- complete
- intensive

4. Texture preference:
- oil
- cream
- serum
- mask

Result card:
Your measured ritual.

Show 2–3 recommended products from existing PRODUCTS data.

This is frontend-only for now.
Do not add backend.
Do not overcomplicate.

------------------------------------------------------------
TASK 4 — UPGRADE PDP PRODUCT DETAIL PAGES
------------------------------------------------------------

Keep the existing PDP structure.
Do not rebuild PDP from scratch.
Do not break product selection from catalog/cards.

Add stronger product intelligence blocks.

Each PDP should include:

- Molecular role
- What it does
- When to use
- Texture & finish
- How to use
- Pairs with
- Full ritual
- Ingredient logic
- Science note
- FAQ

Use existing:
- PRODUCTS
- PRODUCT_DETAILS
- scienceMechanisms

Do not invent medical claims.
Do not use clinical language unless there is real proof.

Example copy patterns:

Molecular role:
Supports balance and barrier continuity.

What it does:
Helps maintain a controlled surface environment.

When to use:
- When skin feels unstable.
- When the surface feels dry or depleted.
- When a minimal routine needs more structure.

Texture & finish:
- Light oil finish.
- Cream texture with controlled comfort.
- Clean rinse. No heavy residue.

Science note:
This formula is designed to support the visible condition of the skin barrier and maintain a balanced surface environment.

Pairs with:
Use related products by mechanism or collection.

Full ritual:
Show a simple sequence:
1. Cleanse
2. Balance
3. Reinforce
4. Renew / Target

FAQ:
Keep short, controlled and useful.

------------------------------------------------------------
TASK 5 — UPGRADE CART / CHECKOUT SERVICE LAYER WITHOUT SAMPLES
------------------------------------------------------------

Remove or replace any sample-related language.

Search the full codebase for:
- sample
- samples
- complimentary sample
- sample gifts
- try it first
- gift sample

Do not add sample-related copy or UI.

If there is any “Sample gifts” checkout benefit, replace it.

Use this checkout benefit strip:

Secure checkout
Your information is always protected.

Free shipping
On orders over €60 within EU.

Care guidance
Product guidance when you need it.

30-day returns
Easy returns guaranteed.

In cart/checkout, add optional premium service features that do not require physical samples:
- gift note;
- gift wrapping available;
- care guidance link;
- complete your system upsell;
- replenishment reminder option: 30 / 45 / 60 days.

Do not promise samples.

------------------------------------------------------------
TASK 6 — ADD “COMPLETE YOUR SYSTEM” UPSELL
------------------------------------------------------------

In cart and checkout order summary, add a subtle premium upsell block.

Title:
Complete your system.

Body:
Add one formula that supports the next step in your ritual.

Show 1–2 recommended products from the existing PRODUCTS array.

CTA:
Add to ritual

Rules:
- quiet UI;
- no aggressive sales design;
- no discount language;
- no urgency countdowns;
- no fake scarcity.

The block should feel like guidance, not pressure.

------------------------------------------------------------
TASK 7 — ADD REPLENISHMENT REMINDER UI
------------------------------------------------------------

Add optional “Replenish this product” UI on PDP and cart.

Options:
- One-time purchase
- Remind me in 30 days
- Remind me in 45 days
- Remind me in 60 days

This is frontend/local UI only for now.
Do not implement real email automation yet.
Store selection in localStorage if simple.

Copy:
Set a quiet reminder before your formula runs low.

The replenishment UI should feel like a premium concierge service, not an aggressive subscription trap.

Use:
- subtle radio elements;
- or a clean dropdown;
- or a restrained segmented control.

Place it near:
- Add to ritual / Add to cart area;
- or cart item service options.

Do not call it “subscribe and save”.
Do not use cheap subscription language.

------------------------------------------------------------
TASK 8 — IMPROVE ACCOUNT DASHBOARD INTO CARE DASHBOARD
------------------------------------------------------------

Keep existing navigation:
- dashboard
- orders
- profile
- addresses
- payment methods
- wishlist

Add premium care modules to Account Dashboard:

1. Your routine
Copy:
Balance · Barrier · Renewal
Your current system is built around daily stability.

2. Reorder essentials
Show previously purchased / likely products from existing PRODUCTS data.

3. Saved skin profile
Show a quiet profile card:
Current focus: barrier and balance.
Routine level: minimal.
Preferred texture: oil and cream.

4. Recommended next step
Copy:
Add targeted support when balance is lost.

5. Recently viewed science
Show links/cards to:
- Molecular Method
- Barrier continuity
- Renewal without excess

6. MAVE Circle preview
Copy:
Private access. Early formulas. Refill rewards.

Do not make account dashboard look like a SaaS analytics dashboard.
Keep it editorial, warm and commerce-focused.

------------------------------------------------------------
TASK 9 — ADD MAVE CIRCLE TEASER
------------------------------------------------------------

Create a small section/card, not a huge loyalty page yet.

Possible route:
- /mave-circle

If a route is not convenient yet:
- add teaser to Account Dashboard and Home.

Copy:

MAVE CIRCLE

Private access to new formulas, early releases and ritual rewards.
Designed for those who return to the system.

Benefits:
- Early access
- Refill rewards
- Birthday care
- Private product notes

Avoid cheap loyalty language:
- earn coins
- discount club
- spin wheel
- rewards explosion
- VIP hype
- massive sale

MAVE Circle should feel private and quiet.

------------------------------------------------------------
TASK 10 — IMPROVE SCIENCE PAGE
------------------------------------------------------------

Make Science page feel like a premium editorial authority page.

Sections:
- Molecular Method
- The role of balance
- Barrier continuity
- Renewal without excess
- Ingredient library preview
- Product science links

Keep copy concise.
Use:
- cards;
- thin dividers;
- editorial blocks;
- existing image assets;
- role-based science language.

Do not add fake clinical results.
Do not over-medicalize.

Science page should feel:
- precise;
- premium;
- calm;
- credible;
- not like a medical brochure;
- not like mass-market beauty education.

------------------------------------------------------------
TASK 11 — REPLACE WEAK / GENERIC COPY ACROSS THE SITE
------------------------------------------------------------

Audit visible UI copy and replace generic phrases with MAVE voice.

Preferred words:
- precise
- measured
- controlled
- function
- structure
- balance
- barrier
- renewal
- ritual
- support
- continuity
- sequence
- formula
- surface
- skin environment
- daily stability
- controlled finish
- focused support

Avoid:
- amazing
- ultimate
- perfect
- glow up
- must-have
- self-care treat
- beauty secret
- miracle
- magic
- clinically proven unless real data exists
- dermatologist-approved unless real proof exists
- anti-aging miracle
- instant transformation

Copy should feel like:
statement, not slogan.

------------------------------------------------------------
TASK 12 — TECHNICAL CONSTRAINTS
------------------------------------------------------------

Preserve all existing routes.

Preserve existing:
- PRODUCTS
- PRODUCT_DETAILS
- scienceMechanisms
- checkout helpers
- account routes
- cart logic
- localStorage logic
- view routing
- mobile responsiveness

Do not:
- break cart logic;
- break checkout state/localStorage logic;
- remove account pages;
- remove checkout pages;
- remove service pages;
- add backend;
- add fake API calls;
- add external packages unless absolutely necessary for screenshots;
- add sample-related UI;
- add fake claims;
- invent non-existing image assets;
- change product labels/images;
- remove mobile responsiveness.

Keep changes inside index.html unless the project structure clearly requires otherwise.

Do not add unnecessary comments.
Keep changes clean and readable.
Use comments only if they clarify a reusable section.

------------------------------------------------------------
TASK 13 — ACCEPTANCE CRITERIA
------------------------------------------------------------

The update is complete only if:

- No existing route is removed.
- No sample-related text exists anywhere after the update.
- Header navigation still works.
- Mega-menu still opens and links work.
- Product cards still open PDP.
- PDP still renders for products.
- Cart still opens.
- Products can still be added to cart.
- Checkout contact → delivery → payment → review flow still works.
- Checkout success/failed pages still render.
- Account dashboard renders.
- Orders list renders.
- Order detail renders.
- Addresses renders.
- Payment methods renders.
- Wishlist renders.
- Science page renders.
- Mobile layout remains usable at 390px width.
- Build/lint/test pass, or any failure is clearly explained.
- Screenshots before/after are created.
- Branch is pushed to remote.
- Preview deployment is attempted.

------------------------------------------------------------
TASK 14 — BUILD / TEST / DEPLOY
------------------------------------------------------------

After implementation:

1. Run available install/build/lint/test commands.

Check package.json if available:
- npm install / npm ci
- npm run lint
- npm run build
- npm test

If there is no package.json:
- explain that no package build command is available.

2. Push branch:
   git push -u origin feature/mave-luxury-commerce-system

3. If the project is connected to Vercel:
   deploy the branch as preview and provide the preview deployment URL.

4. If the project is connected to Netlify:
   deploy the branch as preview and provide the preview deployment URL.

5. If deployment cannot be performed:
   explain exactly why;
   still push the branch;
   provide manual deployment steps.

Do not fake deployment success.
Do not invent deployment URLs.

------------------------------------------------------------
FINAL RESPONSE FORMAT
------------------------------------------------------------

At the end, provide a clear summary in this exact structure:

A. Branch
- Branch name:
- Commit hash:
- Remote push status:

B. Preview
- Preview deployment URL:
or
- Reason preview deploy was not possible:
- Manual deployment steps:

C. Changed files
List all changed files.

D. What changed

Group the summary by area:

1. Navigation / mega-menu
Explain what changed.

2. Homepage
Explain what changed.

3. Product detail pages
Explain what changed.

4. Cart / checkout
Explain what changed.

5. Account dashboard
Explain what changed.

6. Science page
Explain what changed.

7. Copy / brand voice
Explain what changed.

8. Mobile responsiveness
Explain what changed.

E. Screenshots before/after

Provide screenshots in this format:

Home:
screenshots/before/home-before.png → screenshots/after/home-after.png

Collections:
screenshots/before/collections-before.png → screenshots/after/collections-after.png

Product detail page:
screenshots/before/pdp-before.png → screenshots/after/pdp-after.png

Cart:
screenshots/before/cart-before.png → screenshots/after/cart-after.png

Checkout contact:
screenshots/before/checkout-contact-before.png → screenshots/after/checkout-contact-after.png

Checkout delivery:
screenshots/before/checkout-delivery-before.png → screenshots/after/checkout-delivery-after.png

Checkout payment:
screenshots/before/checkout-payment-before.png → screenshots/after/checkout-payment-after.png

Checkout review:
screenshots/before/checkout-review-before.png → screenshots/after/checkout-review-after.png

Account dashboard:
screenshots/before/account-dashboard-before.png → screenshots/after/account-dashboard-after.png

Wishlist:
screenshots/before/wishlist-before.png → screenshots/after/wishlist-after.png

Science page:
screenshots/before/science-before.png → screenshots/after/science-after.png

Mobile home:
screenshots/before/mobile-home-before.png → screenshots/after/mobile-home-after.png

Mobile checkout contact:
screenshots/before/mobile-checkout-contact-before.png → screenshots/after/mobile-checkout-contact-after.png

Mobile checkout payment:
screenshots/before/mobile-checkout-payment-before.png → screenshots/after/mobile-checkout-payment-after.png

F. Confirmations

Confirm:
- No sample-related copy/UI was added.
- Existing routes were preserved.
- Cart logic still works.
- Checkout steps still work.
- Account pages still work.
- Mobile layout was checked.
- Build/lint/test status is reported.
- Screenshots before/after were created.
- Branch was pushed.

G. Known limitations

List anything that remains frontend-only:
- MAVE Circle is teaser/UI only.
- Replenishment reminder is local UI/localStorage only.
- Routine finder is placeholder or frontend-only.
- No real backend automation yet.
- No real email reminder automation yet.
- No real loyalty backend yet.

Quality bar:
The final result should feel like a premium skincare system, not a template shop.
It should remain minimal, editorial, controlled and quiet.
It should feel more expensive, more structured and more intelligent without becoming complicated.