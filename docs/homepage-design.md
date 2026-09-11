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
5. Customer rating section.
6. Final CTA section.
7. Shared footer.

Apart from the approved customer-review carousel and final CTA, do not add an announcement bar, hero carousel, secondary sale CTA, newsletter, value-proposition strip, additional promotional banner, editorial section, or About teaser during Milestone 2.

## 5. Header and Navigation

### Desktop

* Keep the header transparent over the homepage hero with sufficient foreground contrast.
* Use a sticky header that changes to a solid, appropriately contrasted surface after scrolling.
* Use the solid treatment immediately on non-hero pages.
* Display the KOMO text wordmark until the logo is approved.
* Use this navigation order: KOMO wordmark, **Trang chủ**, **Sản phẩm**, **Về chúng tôi**, **Tìm kiếm**, **Giỏ hàng**, and a visually distinct **Đăng nhập** button.
* Link the KOMO wordmark and Trang chủ to `/`, Về chúng tôi to `/about`, Giỏ hàng to `/cart`, and Đăng nhập to `/login`.
* Use **Sản phẩm** as a dropdown trigger with a downward chevron. The trigger opens a menu containing **Tất cả sản phẩm** → `/products`, **Ghế** → `/categories/ghe`, **Bàn học** → `/categories/ban-hoc`, and **Sofa** → `/categories/sofa`.
* The Sản phẩm trigger must remain a button rather than a dead link. Every item inside its menu uses a semantic navigation link.
* Present Tìm kiếm as a compact action that exposes or focuses the product-search field and submits to `/products` using the `q` query parameter. Do not add a separate search-results route.
* Style Đăng nhập using the approved button hierarchy so it is distinguishable from ordinary navigation links; the button only navigates to the presentation-only login screen.
* Use semibold text only for **Trang chủ**. Use regular font weight for Sản phẩm, its dropdown items, Về chúng tôi, Tìm kiếm, Giỏ hàng, and Đăng nhập.
* Use the same `16px` font size and line-height treatment as Trang chủ for every visible navigation label, including Sản phẩm, all product-dropdown entries, Về chúng tôi, Tìm kiếm, Giỏ hàng, and Đăng nhập. Button padding or font weight must not alter the text size.
* Every interactive navigation link and button must show the pointer cursor on hover and provide a visible hover-state change. Pointer feedback does not replace keyboard focus styling.
* Follow the reference for navigation grouping and hierarchy only. Do not copy its typography, spacing, colors, or border treatment.

### Product Dropdown Behavior

* Open the dropdown through click, tap, Enter, or Space; do not rely on hover alone.
* Expose the trigger state with `aria-expanded` and associate it with the menu using `aria-controls`.
* Keep focus within the normal document order. When opened from the keyboard, focus the first menu item.
* Support Escape to close and return focus to the Sản phẩm trigger.
* Close the dropdown when the user selects an item, clicks outside it, or moves focus away from the navigation region.
* Provide visible focus and hover states, comfortable touch targets, and sufficient contrast for both transparent and solid header treatments.
* Position the menu without causing horizontal overflow or covering the trigger; allow it to fit its Vietnamese labels without truncation.

### Mobile

* Use a compact header and an accessible side-drawer menu.
* The drawer must support keyboard operation, Escape dismissal, appropriate initial focus, focus containment while open, and focus restoration when closed.
* Provide a clearly labeled close button and prevent the hidden drawer from remaining interactive.
* Do not rely on hover behavior.
* Preserve the same information architecture as desktop inside the drawer.
* Present Sản phẩm as a disclosure with the four approved product destinations nested beneath it; indent or otherwise visually group the submenu without relying on color alone.
* Keep Tìm kiếm, Giỏ hàng, and Đăng nhập easy to reach, with Đăng nhập retaining the distinct button treatment.
* Preserve the same font-weight hierarchy as desktop: Trang chủ is semibold and all other navigation items use regular weight.
* Use the same `16px` navigation-label size throughout the drawer, including nested product links and the Đăng nhập button.

## 6. Hero

### Image Direction

Use a high-quality aspirational lifestyle interior featuring a harmonious furniture arrangement, such as a warm modern living room centered on a styled sofa or a study corner with an attractive desk and chair.

The composition should include calm negative space—a blank wall, soft rug, or visually quiet area—behind or beside the hero copy. Avoid overly busy interiors that compromise readability.

The final hero asset source has not been selected. The owner may supply an image or separately authorize candidate generation. Any candidate must be visually reviewed before being treated as final, and depicted furniture must not be implied to be an actual available product unless it matches approved product content.

### Layout and Cropping

* Use a full viewport hero with a minimum height of `100vh` at every supported width.
* Allow the hero to grow beyond `100vh` if content wrapping or a short viewport would otherwise clip the header, copy, or CTA.
* Do not intentionally reveal the featured-category section within the initial viewport.
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
## 9. Customer Reviews

Use a horizontal carousel to demonstrate the future customer-review presentation. This section is mock UI only and must not imply that the displayed people, ratings, or statements come from verified KOMO customers.

The complete Customer Reviews section uses a minimum height of `80svh`. Center its heading, disclosure, carousel, and controls vertically within that space while allowing the section to grow when content wrapping requires more room. Do not force an exact fixed height or clip reviews on short or narrow screens.

### Content and Disclosure

* Eyebrow: **TRẢI NGHIỆM KHÁCH HÀNG**.
* Heading: **Khách hàng nói gì về chúng tôi?**
* Supporting text: **Nội dung đánh giá dưới đây là dữ liệu minh họa cho giao diện.**
* Display the disclosure visibly near the heading; do not hide it in accessibility-only text or the footer.
* Write all customer-facing copy, controls, and accessibility labels in Vietnamese.
* Each card contains a fictional customer name, a clearly presented mock star rating, and a concise Vietnamese review.
* Do not display an aggregate rating, verified-purchase badge, customer total, review date, location, or another claim that could be mistaken for real business data.

Example mock review copy may include:

* **Lan Anh — đánh giá minh họa 5/5:** “Sản phẩm đẹp, chắc chắn và phù hợp với góc học tập.”
* **Minh Khoa — đánh giá minh họa 5/5:** “Thiết kế tối giản và dễ kết hợp với không gian trong nhà.”
* **Thu Hà — đánh giá minh họa 5/5:** “Bố cục thông tin rõ ràng, giúp mình dễ tham khảo sản phẩm.”

### Card Layout

* Keep cards consistent in width, padding, border radius, and content hierarchy.
* Present star icons with consistent sizing and spacing, accompanied by accessible text such as **“Đánh giá minh họa: 5 trên 5 sao”** so meaning does not rely on icons alone.
* Hide decorative star icons from assistive technology to prevent repeated announcements.
* Show three cards per view on desktop, two on tablet, and one on mobile.
* Allow card height to grow with text rather than truncating essential review content.

### Carousel Behavior and Accessibility

* Provide compact previous and next buttons with chevron icons beside the heading or carousel; do not cover card content.
* Give the controls clear accessible names: **“Xem đánh giá trước”** and **“Xem đánh giá tiếp theo”**.
* Support keyboard and touch interaction, visible focus states, and a minimum `44 × 44px` target.
* Keep a logical DOM reading order and ensure every review remains reachable without drag-only interaction.
* Disable unavailable navigation controls using the native `disabled` state; reduced opacity may reinforce but must not be the only cue.
* Do not autoplay or move content unexpectedly.
* Use restrained horizontal motion and respect `prefers-reduced-motion`.
* On touch devices, support natural horizontal scrolling with scroll snapping where appropriate, without page-level horizontal overflow.
* If carousel scripting is unavailable, render every review as a readable responsive list or grid instead of hiding content.
* Keep review entries in separate structured mock data so content can later be replaced without changing the presentation component.

## 10. Final CTA

Use the supplied reference for content hierarchy and layout only. Do not copy its colors, bakery branding, address, rating, customer count, or contact action.

### Content

* Eyebrow: **SẴN SÀNG KHÁM PHÁ?**
* Heading: **Sẵn sàng làm mới không gian sống?**
* Supporting text: **Khám phá ghế, bàn học và sofa được tuyển chọn cho góc học tập và không gian sống mỗi ngày.**
* Primary CTA: **Khám phá sản phẩm** → `/products`
* Secondary CTA: **Tìm hiểu về KOMO** → `/about`

### Layout and Behavior

* Place the section after customer reviews and directly before the shared footer.
* Display the CTA edge to edge across the full viewport width; do not constrain its background inside a container, card, rounded panel, or visible side margin.
* Use `public/images/komo/final-cta-cozy-home.jpg` as the full-section background. The local asset comes from the project-owner-supplied source: `https://blog.canadianloghomes.com/wp-content/uploads/2024/04/cozy-home-ideas-1.jpg`.
* Render the background with cover cropping and preserve the main seating area across viewports. Prefer a centered focal point on desktop and tune the mobile focal point toward the furniture rather than the windows if required.
* Use a minimum height of `80svh`, allowing the section to grow when text or stacked actions require more room. Do not use a fixed height that can clip content.
* Apply a dark overlay or gradient strong enough for accessible text and button contrast without obscuring the interior composition.
* Keep the centered, vertically stacked content constrained to a readable inner width while the photographic background remains full width.
* Do not insert a spacer, divider `div`, margin band, or empty section between the Final CTA and footer.
* Stop the CTA image and overlay at the CTA section boundary; the footer begins immediately afterward as its own semantic landmark.
* Present the eyebrow as a compact pill above the heading.
* Keep the heading prominent, the supporting text constrained to a comfortable reading width, and both CTAs grouped beneath it.
* Display the CTAs side by side when space allows and stack them at full width on narrow screens.
* Apply KOMO design-system typography, spacing, button hierarchy, overlay contrast, and focus styles.
* Use one semantic section heading below the homepage H1 and preserve a logical heading hierarchy.
* Do not display a physical address, location icon, ratings, customer avatars, customer totals, or other trust claims unless separately supplied and approved.
* Do not add a contact CTA until a real, approved contact destination exists.

## 11. About Page

Use `/about` with an image-and-text introduction followed by concise content sections:

1. KOMO introduction.
2. Mission focused on practical, comfortable furniture for studying and everyday living.
3. Description of the intended customer and furniture categories.
4. CTA to `/products`.

Generic approved copy may describe the intended brand and shopping experience. Do not invent founding history, founders, store locations, certifications, awards, statistics, partnerships, guarantees, sustainability claims, or customer testimonials. Do not display the provisional Đồng Nai address.

## 12. Footer

Use a minimal footer containing:

* KOMO text wordmark.
* A short neutral brand description based on the approved product focus.
* Links to Trang chủ (`/`), Sản phẩm (`/products`), and Giới thiệu (`/about`).
* Neutral copyright text without implying an unverified legal entity.

Omit contact details, physical address, social profiles, newsletter signup, shipping/returns claims, privacy policy, terms, and FAQ until real content and destinations are supplied or placeholders are separately approved.

The footer remains a separate semantic landmark immediately after the Final CTA. Do not add an empty separator element between them, and do not allow the CTA image or overlay to continue into the footer.

## 13. Routes and Placeholder Policy

Approved Milestone 2 routes:

| Route | Purpose |
| --- | --- |
| `/` | KOMO homepage |
| `/products` | Clearly labeled minimal catalog placeholder until Milestone 3 |
| `/about` | About / Store Information page |
| `/dev/components` | Development-only component showcase; never linked from the storefront |

Featured category and product links may point to `/products`. Do not create category-detail, product-detail, search, account, cart, checkout, sale, or new-collection placeholder routes during Milestone 2.

## 14. Responsive and Accessibility Requirements

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

## 15. Asset and Content Status

* KOMO name, text wordmark strategy, tagline, category, language, locale, and primary currency are approved.
* An AI-generated logo candidate exists at `public/images/komo/logo.png` and awaits visual acceptance. The storefront continues to use the approved text wordmark until then.
* An AI-generated hero candidate exists at `public/images/komo/hero-living-room.jpg` and awaits visual acceptance.
* Homepage copy and structure are approved.
* Fictional product/category content is approved for UI demonstration when clearly identified as mock data.
* The physical address is incomplete and not approved for display.
* USD display behavior remains deferred.

## 16. Implementation Gate

The project owner authorized Milestone 2 implementation on 2026-09-09. Generated logo and hero candidates still require visual acceptance before they are treated as final assets. Milestone 2 remains in review until the project owner accepts the rendered result and all acceptance criteria are met.
