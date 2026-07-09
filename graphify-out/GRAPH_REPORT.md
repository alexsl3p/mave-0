# Graph Report - .  (2026-07-09)

## Corpus Check
- Large corpus: 70 files · ~3,291,797 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 54 nodes · 66 edges · 16 communities (7 shown, 9 thin omitted)
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Member Account
- App Framework & Auth
- Hair & Lash Care
- Checkout Flow
- Brand Philosophy
- Cleanse Collection
- WOW Skin Serums
- Vercel Deployment
- Base Care
- Body Care
- Limited Edition
- Mask Care
- Oral Care
- Organic Care
- Targeted Care
- Graphify Tooling

## God Nodes (most connected - your core abstractions)
1. `Store / product catalog` - 28 edges
2. `Member account area` - 7 edges
3. `React 18 single-page app` - 6 edges
4. `Checkout flow` - 5 edges
5. `MAVE Molecular Cosmetics` - 4 edges
6. `Authentication (login / register / reset)` - 4 edges
7. `Cleanse (collection)` - 3 edges
8. `Hair Care (collection)` - 3 edges
9. `WOW Skin (collection)` - 3 edges
10. `Skin is a system, not surface care` - 2 edges

## Surprising Connections (you probably didn't know these)
- `mave-store.html (identical copy of index.html)` --semantically_similar_to--> `MAVE Molecular Cosmetics`  [INFERRED] [semantically similar]
  mave-store.html → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Member Account** — index_orders, index_addresses, index_profile_settings, index_saved_products, index_payment_methods, index_member_area, index_member_benefits [EXTRACTED 0.90]
- **Checkout Flow** — index_checkout_contact, index_checkout_delivery, index_checkout_payment, index_checkout_review, index_checkout [EXTRACTED 0.90]
- **Product Collections** — index_col_base_care, index_col_body_care, index_col_cleanse, index_col_hair_care, index_col_lash_and_brow_care, index_col_limited_edition, index_col_mask_care, index_col_oral_care, index_col_organic_care, index_col_targeted_care, index_col_wow_skin, index_store [EXTRACTED 0.90]

## Communities (16 total, 9 thin omitted)

### Community 0 - "Member Account"
Cohesion: 0.29
Nodes (7): Addresses, Member account area, MAVE Member Benefits, Orders, Payment methods, Profile settings, Saved products

### Community 1 - "App Framework & Auth"
Cohesion: 0.29
Nodes (7): Authentication (login / register / reset), In-browser Babel JSX (type=text/babel), Create account, Framer Motion animations, Login (Welcome back), React 18 single-page app, Reset password

### Community 2 - "Hair & Lash Care"
Cohesion: 0.43
Nodes (7): Hair Care (collection), Lash & Brow Care (collection), Molecular Shampoo & Conditioner Set (€30.95), Royal Elixir (€29.95), S.L.I.M.E. Intense Moisture Elixir (€34.95), Customer reviews / verified notes, Store / product catalog

### Community 3 - "Checkout Flow"
Cohesion: 0.40
Nodes (5): Checkout flow, Contact, Delivery, Payment, Review

### Community 4 - "Brand Philosophy"
Cohesion: 0.67
Nodes (4): MAVE Molecular Cosmetics, Molecular / functional formulation, Skin is a system, not surface care, mave-store.html (identical copy of index.html)

### Community 5 - "Cleanse Collection"
Cohesion: 0.67
Nodes (3): Cleanse (collection), Micellar Cleansing Foam (€21.95), Micellar Wipes (€9.95)

### Community 6 - "WOW Skin Serums"
Cohesion: 0.67
Nodes (3): WOW Skin (collection), WOW PDRN Serum 2 in 1 (€39.95), WOW Skin Serum 2 in 1 (€34.95)

## Knowledge Gaps
- **20 isolated node(s):** `cleanUrls`, `rewrites`, `In-browser Babel JSX (type=text/babel)`, `Framer Motion animations`, `Customer reviews / verified notes` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Store / product catalog` connect `Hair & Lash Care` to `App Framework & Auth`, `Brand Philosophy`, `Cleanse Collection`, `WOW Skin Serums`, `Base Care`, `Body Care`, `Limited Edition`, `Mask Care`, `Oral Care`, `Organic Care`, `Targeted Care`?**
  _High betweenness centrality (0.714) - this node is a cross-community bridge._
- **Why does `React 18 single-page app` connect `App Framework & Auth` to `Member Account`, `Hair & Lash Care`, `Checkout Flow`?**
  _High betweenness centrality (0.489) - this node is a cross-community bridge._
- **Why does `Member account area` connect `Member Account` to `App Framework & Auth`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Are the 16 inferred relationships involving `Store / product catalog` (e.g. with `Black Nanopowder (€19.50)` and `Invisible Mask (€21.95)`) actually correct?**
  _`Store / product catalog` has 16 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `React 18 single-page app` (e.g. with `Authentication (login / register / reset)` and `Checkout flow`) actually correct?**
  _`React 18 single-page app` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `cleanUrls`, `rewrites`, `In-browser Babel JSX (type=text/babel)` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._