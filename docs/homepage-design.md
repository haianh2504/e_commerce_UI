# KOMO Homepage Design Specification

## 1. Status and Scope

**Status:** Implemented for review; generated logo and hero candidates await project-owner visual acceptance.

This document defines the approved page-level composition for the KOMO homepage and the related Milestone 2 storefront shell. It supplements the product requirements, accepted decisions, architecture, and global design system. It does not authorize backend work or define API contracts.

AI may tune low-impact implementation details such as exact breakpoints, minor spacing, overlay strength required for contrast, responsive grid behavior, focus handling, and image-loading configuration. Changes to brand identity, product categories, major composition, navigation destinations, or customer-facing claims require project-owner approval.

## 2. Brand and Audience

* Brand: **KOMO**.
* Primary language: Vietnamese (`vi-VN`).
* Primary currency: VND.
* Product focus: chairs, study desks, and sofas.
* Primary audience: Vietnamese teenagers and adults approximately 16–40 years old who want practical, comfortable, modern furniture for studying and everyday home life.
* Visual mood: warm, inviting, inspiring, modern, calm, and approachable.
* Vietnamese tagline: **Tiện nghi mỗi ngày, giá trị trong tầm tay.**
* English reference: **Everyday comfort, thoughtfully priced.**

Use a simple text wordmark until an AI-generated KOMO logo is created and visually approved. The logo must work over both the photographic hero and light inner-page backgrounds.

## 3. Reference Interpretation

The approved reference direction is compositional rather than brand-specific:

* Use a large, full-width photographic hero.
* Layer a transparent header over the hero.
* Place prominent hero content centrally.
* Preserve a premium, image-led first impression.

Do not copy unrelated branding, colors, serif typography, appointment functionality, carousel indicators, or other features from the source reference. The original reference asset is not currently stored in the repository; implementation must follow the approved interpretation above unless the owner later adds the asset.

## 4. Approved Homepage Structure

Use this section order:

1. Shared header layered over the hero.
2. Full-width hero.
3. Featured categories.
4. Featured products.
5. Shared footer.

Do not add an announcement bar, carousel, secondary sale CTA, newsletter, testimonials, value-proposition strip, promotional banner, editorial section, or About teaser during Milestone 2.

## 5. Header and Navigation

### Desktop

* Keep the header transparent over the homepage hero with sufficient foreground contrast.
* Use a sticky header that changes to a solid, appropriately contrasted surface after scrolling.
* Use the solid treatment immediately on non-hero pages.
* Display the KOMO text wordmark until the logo is approved.
* Provide Vietnamese navigation for Trang chủ, Sản phẩm, Ghế, Bàn học, Sofa, and Về chúng tôi.
* Link Trang chủ to `/`, Sản phẩm and the three category entries to `/products`, and Về chúng tôi to `/about` during Milestone 2.
* Omit search, account, and cart actions until their valid UI destinations exist.

### Mobile

* Use a compact header and an accessible side-drawer menu.
* The drawer must support keyboard operation, Escape dismissal, appropriate initial focus, focus containment while open, and focus restoration when closed.
* Provide a clearly labeled close button and prevent the hidden drawer from remaining interactive.
* Do not rely on hover behavior.

## 6. Hero

### Image Direction

Use a high-quality aspirational lifestyle interior featuring a harmonious furniture arrangement, such as a warm modern living room centered on a styled sofa or a study corner with an attractive desk and chair.

The composition should include calm negative space—a blank wall, soft rug, or visually quiet area—behind or beside the hero copy. Avoid overly busy interiors that compromise readability.

The final hero asset source has not been selected. The owner may supply an image or separately authorize candidate generation. Any candidate must be visually reviewed before being treated as final, and depicted furniture must not be implied to be an actual available product unless it matches approved product content.

### Layout and Cropping

* Use a responsive hero height within approximately 70–85svh.
* Reveal a small visual cue from the featured-category section below the fold.
* Center the hero content.
* Preserve the most attractive furniture arrangement or focal piece in mobile crops.
* Use a dark overlay or gradient strong enough to maintain accessible text contrast.
* Prevent horizontal overflow and avoid hiding essential content behind the header.

### Approved Copy

* H1: **Nâng tầm cuộc sống mỗi ngày**
* Supporting text: **Khám phá những sản phẩm nội thất chất lượng, được tuyển chọn để biến ngôi nhà thành không gian sống đầy cảm hứng.**
* Primary CTA: **Khám phá bộ sưu tập** → `/products`
* No secondary CTA.

The word “quality” expresses the intended positioning of mock storefront copy; it must not be expanded into unsupported certifications, guarantees, durability statistics, or comparative claims.

## 7. Featured Categories

* Display three category cards: **Ghế**, **Bàn học**, and **Sofa**.
* Use large, image-led cards with a default `4:3` image ratio.
* Link all cards to `/products` until category routes are implemented in Milestone 3.
* Use consistent cropping, readable labels, and a responsive grid.
* Do not add Decor or Lighting unless the product owner approves them as real catalog categories.

## 8. Featured Products

* Display four clearly fictional demonstration products.
* Each ProductCard displays an image, Vietnamese product name, mock VND price, and semantic link to `/products` during Milestone 2.
* Use a default `4:5` product-image ratio.
* Keep mock data separate from presentation components.
* Do not display ratings, reviews, discounts, stock counts, delivery promises, availability claims, or direct cart actions.
* Build the minimum reusable ProductCard and ProductGrid foundation needed for later extension in Milestone 3.

## 9. About Page

Use `/about` with an image-and-text introduction followed by concise content sections:

1. KOMO introduction.
2. Mission focused on practical, comfortable furniture for studying and everyday living.
3. Description of the intended customer and furniture categories.
4. CTA to `/products`.

Generic approved copy may describe the intended brand and shopping experience. Do not invent founding history, founders, store locations, certifications, awards, statistics, partnerships, guarantees, sustainability claims, or customer testimonials. Do not display the provisional Đồng Nai address.

## 10. Footer

Use a minimal footer containing:

* KOMO text wordmark.
* A short neutral brand description based on the approved product focus.
* Links to Trang chủ (`/`), Sản phẩm (`/products`), and Giới thiệu (`/about`).
* Neutral copyright text without implying an unverified legal entity.

Omit contact details, physical address, social profiles, newsletter signup, shipping/returns claims, privacy policy, terms, and FAQ until real content and destinations are supplied or placeholders are separately approved.

## 11. Routes and Placeholder Policy

Approved Milestone 2 routes:

| Route | Purpose |
| --- | --- |
| `/` | KOMO homepage |
| `/products` | Clearly labeled minimal catalog placeholder until Milestone 3 |
| `/about` | About / Store Information page |
| `/dev/components` | Development-only component showcase; never linked from the storefront |

Featured category and product links may point to `/products`. Do not create category-detail, product-detail, search, account, cart, checkout, sale, or new-collection placeholder routes during Milestone 2.

## 12. Responsive and Accessibility Requirements

Retain the global representative viewport targets:

* Phones: 320–430px.
* Tablets: 768–1194px, including portrait and landscape.
* Laptops: 1280–1440px.
* Desktops: 1600px and above.

Required behavior:

* No unintended horizontal overflow.
* One semantic homepage H1.
* Semantic `header`, `nav`, `main`, `section`, and `footer` landmarks.
* Visible keyboard focus and comfortable touch targets.
* Sufficient contrast over every responsive hero crop.
* Responsive images with stable aspect ratios and appropriate loading behavior.
* Reduced-motion support.
* Vietnamese page titles, descriptions, labels, and meaningful image alternative text.

## 13. Asset and Content Status

* KOMO name, text wordmark strategy, tagline, category, language, locale, and primary currency are approved.
* An AI-generated logo candidate exists at `public/images/komo/logo.png` and awaits visual acceptance. The storefront continues to use the approved text wordmark until then.
* An AI-generated hero candidate exists at `public/images/komo/hero-living-room.jpg` and awaits visual acceptance.
* Homepage copy and structure are approved.
* Fictional product/category content is approved for UI demonstration when clearly identified as mock data.
* The physical address is incomplete and not approved for display.
* USD display behavior remains deferred.

## 14. Implementation Gate

The project owner authorized Milestone 2 implementation on 2026-09-09. Generated logo and hero candidates still require visual acceptance before they are treated as final assets. Milestone 2 remains in review until the project owner accepts the rendered result and all acceptance criteria are met.
