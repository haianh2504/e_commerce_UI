# Architecture and Product Decision Log

## 1. Purpose

This document records important product, design, and technical decisions for the e-commerce UI project.

Its purpose is to preserve context across AI sessions, prevent repeated discussions, and ensure that future implementation remains consistent with approved decisions.

The project owner has final authority over all decisions.

### Documentation Authority

Resolve documentation conflicts in this order:

1. `product.md` — product scope, user requirements, and MVP acceptance criteria.
2. `architecture.md` — technical architecture, routing, folder structure, and data boundaries.
3. `decisions.md` — approved decisions, unresolved questions, and rationale.
4. `roadmap.md` — implementation order and milestones.
5. `AGENTS.md` — operational rules for AI assistance.

If documents disagree, identify the conflict, follow the higher-authority document, update dependent documents, and record new product or architectural decisions here. The repository uses `decisions.md` as the decision-log filename.

## 2. Decision Statuses

* **Accepted:** Approved and currently in effect.
* **Proposed:** Suggested but not yet approved.
* **Pending:** Requires a decision from the project owner.
* **Superseded:** Replaced by a newer decision.

When a decision changes, do not delete its history. Mark it as superseded and reference the replacement decision.

## 3. Accepted Decisions

### DEC-001 — Frontend UI-Only Scope

**Status:** Accepted

**Decision:** This repository is responsible only for the e-commerce UI layer.

**Rationale:** The project owner is developing the backend separately and wants AI assistance focused on frontend implementation.

**Consequences:**

* No backend services or database code.
* No invented API contracts.
* No authentication or payment infrastructure.
* Mock data may be used for UI development.
* Backend integration requires explicit approval.

---

### DEC-002 — Next.js Framework

**Status:** Accepted

**Decision:** Use Next.js as the frontend framework.

**Rationale:** Next.js provides React-based development, file-system routing, rendering options, and built-in capabilities useful for an e-commerce storefront.

**Consequences:**

* Use Next.js conventions.
* Prefer built-in framework capabilities before adding dependencies.
* Keep the application aligned with the existing project configuration.

---

### DEC-003 — App Router

**Status:** Accepted

**Decision:** Use the Next.js App Router.

**Rationale:** The App Router provides modern file-system routing, nested layouts, Server Components, and integrated metadata support.

**Consequences:**

* Routes are organized under `src/app/`.
* Use `next/link` for internal navigation.
* Use `next/navigation` when programmatic navigation is necessary.
* Prefer Server Components by default.
* Use Client Components only where interactivity requires them.

---

### DEC-004 — TypeScript

**Status:** Accepted

**Decision:** Use TypeScript for frontend implementation.

**Rationale:** TypeScript improves maintainability, component contracts, and code understanding.

**Consequences:**

* Use explicit component prop types.
* Avoid unnecessary `any`.
* Keep shared types organized.
* Do not invent final backend DTOs.

---

### DEC-005 — Tailwind CSS

**Status:** Accepted

**Decision:** Use Tailwind CSS as the primary styling solution.

**Rationale:** Tailwind supports consistent, responsive UI implementation and works well with a token-based design system.

**Consequences:**

* Follow the approved design tokens.
* Avoid introducing competing CSS frameworks.
* Use responsive utilities.
* Keep global CSS focused on global styles and tokens.

---

### DEC-006 — React Functional Components

**Status:** Accepted

**Decision:** Use functional React components and composition.

**Rationale:** This approach supports reusable, readable, and maintainable UI development.

**Consequences:**

* Prefer focused components.
* Use typed props.
* Avoid unnecessary abstractions.
* Reuse existing components before creating new ones.

---

### DEC-007 — Primary Color Palette

**Status:** Accepted

**Decision:** Use `#092328` and `#F3F4F4` as the two main colors.

**Rationale:** The palette supports a calm, modern, and premium visual direction.

**Consequences:**

* `#092328` is used for primary actions and important text.
* `#F3F4F4` is the dominant page background.
* White and neutral supporting colors may be used for surfaces and borders.
* Do not introduce competing brand colors without approval.

---

### DEC-008 — Typography

**Status:** Superseded by DEC-051

**Decision:** Use Poppins primarily for headings and Inter primarily for content.

**Rationale:** Poppins provides a distinctive heading style, while Inter supports readability for interface content.

**Consequences:**

* Use `next/font` where appropriate.
* Maintain a consistent typography scale.
* Avoid introducing additional font families without approval.

---

### DEC-009 — Button Design

**Status:** Accepted

**Decision:** Buttons should be soft, eye-catching, accessible, and use 16px or 20px border radii.

**Rationale:** The design should feel approachable while maintaining clear interactive affordances.

**Consequences:**

* Primary buttons use strong contrast.
* Hover and focus states are required.
* Touch targets should be comfortable.
* Motion should be restrained.
* Button variants should be reusable.

---

### DEC-010 — Whitespace Priority

**Status:** Accepted

**Decision:** Generous whitespace is a core design principle.

**Rationale:** Whitespace improves readability, visual hierarchy, and the perceived quality of the shopping experience.

**Consequences:**

* Avoid crowded layouts.
* Use consistent section spacing.
* Maintain comfortable content widths.
* Prefer clear grouping over excessive decorative separators.

---

### DEC-011 — Card Design

**Status:** Accepted

**Decision:** Cards use lighter surfaces, consistent padding, consistent radii, and clear content hierarchy.

**Rationale:** Cards should distinguish products and content from the main background without heavy visual effects.

**Consequences:**

* Prefer white surfaces.
* Use subtle borders or minimal shadows.
* Maintain consistent image ratios.
* Keep product title, price, and metadata hierarchy clear.

---

### DEC-012 — Responsive Design

**Status:** Accepted

**Decision:** The UI must support phones, tablets, iPads, laptops, and desktop PCs.

**Rationale:** Customers may shop across a wide range of devices.

**Consequences:**

* Use mobile-first responsive design.
* Avoid horizontal overflow.
* Test intermediate viewport widths.
* Support touch interaction.
* Do not rely on hover-only behavior.

---

### DEC-013 — Accessibility

**Status:** Accepted

**Decision:** Accessibility is a required part of component implementation.

**Rationale:** The interface should be usable by people with different abilities and interaction methods.

**Consequences:**

* Use semantic HTML.
* Provide keyboard accessibility.
* Maintain sufficient contrast.
* Use visible focus states.
* Provide accessible labels and meaningful alt text.
* Respect reduced-motion preferences.

---

### DEC-014 — SEO-Friendly UI

**Status:** Accepted

**Decision:** Public storefront pages and relevant components should support effective SEO.

**Rationale:** The application should be structured for discoverability and indexable product content.

**Consequences:**

* Use semantic HTML and logical headings.
* Use Next.js Metadata API.
* Prefer Server Components for static public content.
* Use crawlable internal links.
* Use valid structured data only when actual information is available.
* Do not invent ratings, reviews, or product claims.
* Do not add unnecessary SEO logic to purely interactive components.

---

### DEC-015 — Mock Data Before Integration

**Status:** Accepted

**Decision:** Use mock data during UI development until backend contracts are provided.

**Rationale:** This allows the frontend to be designed and reviewed independently from backend implementation.

**Consequences:**

* Mock data is stored separately from components.
* Mock types are not treated as final backend schemas.
* No endpoints or DTOs are invented.
* Integration occurs only after explicit approval.


---

### DEC-016 — Incremental AI Development

**Status:** Accepted

**Decision:** AI should implement small, reviewable tasks rather than entire major features in one uncontrolled step.

**Rationale:** Incremental development improves quality, learning, and the ability to review or revert changes.

**Consequences:**

* Read documentation before implementation.
* Explain the plan.
* Implement the approved scope.
* Run relevant checks.
* Summarize changes.
* Commit reviewed milestones.

---

### DEC-017 — No Unapproved Dependencies

**Status:** Accepted

**Decision:** Do not introduce new frameworks, component libraries, or state-management libraries without approval.

**Rationale:** The project should remain understandable and avoid unnecessary complexity.

**Consequences:**

* Prefer built-in Next.js and React capabilities.
* Explain dependency tradeoffs.
* Obtain approval before installation.

---

### DEC-018 — Feature-Oriented UI Organization

**Status:** Accepted

**Decision:** Use feature-oriented organization for larger e-commerce UI areas, with shared components centralized.

**Rationale:** This keeps related UI code together while allowing common components to be reused.

**Consequences:**

* Routes remain in `src/app/`.
* Shared components belong in `src/components/`.
* Feature-specific components belong in `src/features/`.
* Mock data and utilities remain separate.
* Do not create unused folders prematurely.

---

### DEC-027 — About Page Required for MVP

**Status:** Accepted

**Decision:** The `/about` page is required for the MVP.

**Consequences:** It includes a brand introduction, story or mission, trust-building content, and a catalog call to action. Approved content is preferred; clearly identifiable generic placeholders are allowed, but invented factual company claims are prohibited.

---

### DEC-028 — `src/`-Based Project Structure

**Status:** Accepted

**Decision:** Use `src/app/` for routes and layouts, `src/components/` for shared UI, and `src/features/` for feature-specific code.

**Consequences:** `architecture.md` is authoritative for structure. Do not create duplicate root-level `app/`, `components/`, or `features/` directories.

---

### DEC-029 — npm Package Management

**Status:** Accepted

**Decision:** npm is the approved package manager.

**Consequences:** Initialize and maintain `package-lock.json`, use standard npm commands, and do not introduce pnpm, Yarn, or Bun lockfiles.

## 4. Pending Decisions

### DEC-019 — Store Name and Branding

**Status:** Pending

**Question:** What is the final store name, logo, and brand identity?

**Notes:** Do not invent a final brand name or logo without approval.

---

### DEC-020 — Product Category

**Status:** Pending

**Question:** What type of products will the store sell?

**Options may include:** Cosmetics, clothing, electronics, lifestyle products, or another category.

**Notes:** Product-specific UI options should not be implemented until the category is confirmed.

---

### DEC-021 — Currency and Locale

**Status:** Pending

**Question:** What currency, language, and regional formatting should the storefront use?

**Notes:** Do not assume final currency or localization requirements.

---

### DEC-022 — Product Variants

**Status:** Pending

**Question:** Will products support variants such as size, color, weight, or other options?

**Notes:** Do not invent variant behavior or backend models.

---

### DEC-023 — Checkout Flow

**Status:** Pending

**Question:** What are the final checkout steps and required customer information?

**Notes:** The UI may use a provisional mock flow, but final behavior must follow approved product and backend requirements.

---

### DEC-024 — Authentication Requirements

**Status:** Pending

**Question:** Which actions require authentication in the final application?

**Notes:** Authentication screens may be designed, but actual authentication behavior belongs to the backend integration phase.

---

### DEC-025 — Product Search and Filtering

**Status:** Pending

**Question:** Which search, filter, and sort options should be available?

**Notes:** Final options depend on the product catalog and approved requirements.

---

### DEC-026 — Administrative UI

**Status:** Pending

**Question:** Will an administrative interface be included in this frontend project?

**Notes:** Do not implement administrative screens until explicitly approved.

### DEC-030 — Image-Led Homepage Composition

**Accepted** : The homepage uses a full-width photographic hero with navigation over the image and centered content. The approved reference governs composition, not branding. The existing design system remains authoritative. Detailed responsive dimensions, assets, and section layouts are defined in docs/homepage-design.md.

---

### DEC-031 — Mock Customer Reviews on Homepage

**Status:** Accepted

**Decision:** Permit a responsive customer-review carousel on the homepage as presentation-only demonstration content. The section and each rating must be visibly identified as mock data and must not be represented as verified customer feedback.

**Consequences:** Reviews remain separate structured mock data. The carousel does not autoplay and must support keyboard, touch, reduced-motion, and a readable non-carousel fallback. Aggregate ratings, verified-purchase badges, customer totals, locations, and other unsupported claims remain prohibited.

**Superseded in part by DEC-040:** The prohibition on purchase badges is replaced only for the visibly disclosed mock-review card presentation described there.

---

### DEC-032 — Shared Storefront Navigation Hierarchy

**Status:** Accepted

**Decision:** Use the reference navigation structure, but retain the KOMO design system. The shared header contains the KOMO wordmark, Trang chủ, a Sản phẩm dropdown, Về chúng tôi, Tìm kiếm, Giỏ hàng, and a visually distinct Đăng nhập button. The product dropdown contains Tất cả sản phẩm, Ghế, Bàn học, and Sofa.

**Consequences:** Existing category links move from the top navigation level into an accessible product disclosure. Search continues to use `/products?q=`, while cart and login use the existing `/cart` and `/login` presentation routes. The login destination does not implement authentication, sessions, or token handling. Desktop and mobile navigation preserve the same information architecture and keyboard-accessibility requirements.

---

### DEC-033 — Login Page Wireframe

**Status:** Accepted

**Decision:** The shared-header Đăng nhập button opens `/login`. The login page adopts the supplied reference’s split-page wireframe and content hierarchy only, adapted into a Vietnamese KOMO login flow. It does not copy the reference imagery, colors, fonts, third-party branding, or decorative overlays.

**Consequences:** Wide screens use a narrower form panel beside a larger reserved visual panel; smaller screens collapse to a single-column form. The page includes KOMO/home navigation, a close-to-home control, email and password fields, a presentation-only Đăng nhập action, a visible no-storage disclosure, and a link to `/register`. The visual panel remains image-free until an asset is separately approved. Social authentication, legal links, credential submission, sessions, and tokens remain excluded.

---

### DEC-034 — Final CTA and Footer Separation

**Status:** Superseded by DEC-035

**Decision:** The homepage Final CTA and shared footer must remain separate semantic and visual regions. The CTA uses an inset light-surface panel within the page background, followed by a visible breathing zone before the footer’s dark surface.

**Consequences:** The CTA and footer must not share a continuous background, merged wrapper, or connected border shape. Maintain at least `32px` of visible separation on mobile and approximately `48–64px` on larger screens while retaining the approved CTA content and destinations.

---

### DEC-035 — Full-Width Photographic Final CTA

**Status:** Superseded by DEC-036

**Decision:** Replace the inset light-surface CTA treatment from DEC-034 with an edge-to-edge photographic section using the project-owner-supplied interior image. Keep the approved centered content hierarchy and a separate page-background spacer before the footer.

**Consequences:** The CTA background uses the local asset `public/images/komo/final-cta-cozy-home.jpg`, responsive cover cropping, and a contrast overlay. Its background is not constrained by the normal content container and must not use a card or rounded-panel treatment. DEC-034 remains authoritative only for keeping the CTA and footer semantically separate and maintaining the responsive `32–64px` spacer.

---

### DEC-036 — Homepage Review and CTA Viewport Height

**Status:** Accepted

**Decision:** Set both the homepage Customer Reviews section and Final CTA section to a minimum height of `80svh`. Place the footer immediately after the Final CTA and remove the previously required spacer element.

**Consequences:** Both sections may grow beyond `80svh` when content wrapping or short viewports require more space; content must not be clipped by a fixed height. DEC-035 remains authoritative for the full-width CTA image, responsive cropping, and contrast overlay, but its `32–64px` spacer requirement is superseded. The CTA and footer remain separate semantic landmarks even though no empty element appears between them.

**Superseded in height by DEC-049:** Customer Reviews and Final CTA now use the same full-viewport baseline as the other homepage content sections.

---

### DEC-037 — Full-Viewport Hero and Navigation Weight

**Status:** Accepted

**Decision:** Use a minimum height of `100vh` for the homepage hero. In the shared navigation, Trang chủ is the only semibold item; all other navigation items use regular font weight. Every interactive navigation control exposes a pointer cursor and visible hover feedback.

**Consequences:** The homepage no longer intentionally reveals the following section within the initial viewport. The hero may grow beyond `100vh` to prevent clipping. The navigation hierarchy applies consistently to desktop, dropdown, and mobile drawer items; the KOMO wordmark remains governed by the brand treatment rather than navigation-item weight.

---

### DEC-038 — Consistent Navigation Font Size

**Status:** Accepted

**Decision:** Use the Trang chủ navigation label size, fixed at `16px`, for every visible navigation label on desktop and mobile.

**Consequences:** Sản phẩm, product-dropdown entries, Về chúng tôi, Tìm kiếm, Giỏ hàng, and Đăng nhập use the same font size and line-height treatment as Trang chủ. Font weight remains governed by DEC-037, so matching size does not make the other items semibold.

---

### DEC-039 — Final CTA Content and Mock Trust Row

**Status:** Accepted

**Decision:** Update the Final CTA with the approved eyebrow “KHÔNG GIAN CỦA BẠN,” revised comfort-focused supporting copy, a Khám phá sản phẩm action, a Liên hệ control, and a trust row displaying five stars, `4.9`, and “Được tin tưởng bởi 200+ khách hàng.”

**Consequences:** The rating and customer count are presentation-only mock values and require a visible “Số liệu đánh giá minh họa” disclosure. The Liên hệ control remains disabled until a valid contact destination is supplied; it must not navigate to an unrelated page. No structured data or verified-business claim may be derived from the mock trust row.

---

### DEC-040 — Customer Review Card Structure and Star Color

**Status:** Accepted

**Decision:** Present one large customer-review card per carousel viewport with a desktop text/image split, five rating stars, prominent quote, divider, reviewer placeholder and metadata, representative product image, and an upper-right **Đã mua hàng** badge. All rating stars use `#FDCC0D`.

**Consequences:** Names, dates, reviews, ratings, images, and purchase states remain demonstration data. Every card retains a visible **ĐÁNH GIÁ MINH HỌA** label and the section retains its disclosure. The purchase badge must not generate structured metadata or be represented as proof of a real order.

**Superseded in layout by DEC-041:** The review content and star-color requirements remain accepted, but the single large card viewport is replaced by the compact multi-card layout below.

---

### DEC-041 — Compact Multi-Card Customer Reviews

**Status:** Accepted

**Decision:** Keep the approved review content hierarchy in smaller vertically stacked cards, displaying one card on mobile, two on tablet, and three at once on desktop.

**Consequences:** The carousel remains horizontally navigable and accessible, while card widths, typography, imagery, badges, and spacing must stay compact enough to avoid clipping and page-level overflow. Rating stars remain `#FDCC0D`.

**Superseded by DEC-042:** The three-desktop/one-mobile layout is replaced by the denser responsive layout below.

---

### DEC-042 — Four-Desktop and Two-Mobile Review Layout

**Status:** Accepted

**Decision:** Arrange each review card with reviewer identity and purchase state first, followed by stars, quote, and image. Display four cards at once on desktop and two at once on mobile and tablet.

**Consequences:** Cards use reduced type, spacing, avatar, badge, star, and image sizes while retaining readable content, `#FDCC0D` stars, accessible carousel controls, and visible mock-data labels. Narrow header content may wrap but must not overlap or create page-level overflow.

---

### DEC-043 — High-Contrast Homepage Image CTAs

**Status:** Accepted

**Decision:** Use the warning-subtle surface (`#FFF7D6`), primary text, and a solid primary border for the hero **Khám phá bộ sưu tập** and Final CTA **Khám phá sản phẩm** links.

**Consequences:** Both primary links remain visually consistent and distinguishable over varied photographic crops. Their hover state may switch to white while retaining primary text and border, and their keyboard focus indicator must remain visible.

**Superseded by DEC-044:** The warning-subtle treatment did not provide enough perceived contrast and is replaced below.

---

### DEC-044 — Dedicated High-Contrast Image CTA Variant

**Status:** Accepted

**Decision:** Add and use an `imageCta` button variant for both homepage photographic CTAs, with `#FDCC0D` background, `#092328` text, a 2px primary border, subtle shadow, and `#FFE066` hover background.

**Consequences:** The button colors no longer compete with the default primary variant's utility classes. Both calls to action receive a bright, consistent surface with strong foreground contrast and a visible boundary across varied image crops.

**Superseded in color by DEC-045:** The dedicated variant remains authoritative, but its yellow surface is replaced by white.

---

### DEC-045 — White Homepage Image CTA Surface

**Status:** Accepted

**Decision:** Use a white `#FFFFFF` background and `#092328` text for the hero **Khám phá bộ sưu tập** button and the left Final CTA **Khám phá sản phẩm** button. Retain the 2px primary border, subtle shadow, and visible focus state.

**Consequences:** Both requested buttons share the exact approved foreground/background colors through the reusable `imageCta` variant. Hover uses the existing surface-subtle token without weakening text contrast.

**Superseded in boundary treatment by DEC-046:** The white surface and dark text remain accepted, while the visible border is removed.

---

### DEC-046 — Borderless Homepage Image CTAs

**Status:** Accepted

**Decision:** Remove the visible border and boundary color from the hero **Khám phá bộ sưu tập** button and the left Final CTA **Khám phá sản phẩm** button.

**Consequences:** The shared `imageCta` variant uses its white fill and subtle shadow for visual separation. Its visible keyboard focus ring remains because it communicates interaction state rather than serving as a persistent boundary.

---

### DEC-047 — Homepage Why KOMO Benefits Section

**Status:** Accepted

**Decision:** Add a compact **Vì sao chọn KOMO?** section after Featured Products and before Customer Reviews, containing the four approved delivery, returns, payment, and support benefits with consistent line icons.

**Consequences:** The section uses an open four-column desktop layout, `2 × 2` tablet layout, and responsive mobile stacking or `2 × 2` arrangement. It remains visually secondary, uses no heavy individual cards, and does not define operational policies or backend behavior beyond the supplied presentation copy.

---

### DEC-048 — Customer Reviews Surface Separation

**Status:** Accepted

**Decision:** Render the complete Customer Reviews section on a solid white `#FFFFFF` background and separate it from the preceding Store Benefits section with a responsive `32–64px` breathing gap.

**Consequences:** Store Benefits and Customer Reviews remain distinct page regions rather than appearing attached. The gap exposes the page background, while Customer Reviews retains its responsive carousel and internal spacing.

---

### DEC-049 — Full-Viewport Homepage Sections

**Status:** Accepted

**Decision:** Give every homepage content section from Hero through Final CTA a `100vh` minimum-height baseline, implemented as `100svh` for mobile-safe viewport sizing. The shared footer remains content-sized.

**Consequences:** Featured Categories, Featured Products, Store Benefits, Customer Reviews, and Final CTA now align with the full-viewport Hero rhythm. Every section may grow beyond one viewport when its content requires more room; fixed heights and content clipping remain prohibited. The approved breathing gap between Store Benefits and Customer Reviews remains in place.

---

### DEC-050 — Expanded Store Benefits Cards and Reassurance Strip

**Status:** Accepted

**Decision:** Upgrade Store Benefits to four light cards with circular line icons, status pills, expanded approved descriptions, and labeled action rows, followed by a shared three-item reassurance panel.

**Consequences:** This design supersedes DEC-047's open no-card treatment while retaining its placement and responsive grid. Borders and shadows remain subtle. Action labels are disabled presentation controls until valid destinations are approved, so the UI does not invent unsupported policy, payment, tracking, or contact routes.

---

### DEC-051 — Be Vietnam Pro Heading Typography

**Status:** Accepted

**Decision:** Use Be Vietnam Pro for headings and prominent display text, with Inter for body content and interface text.

**Rationale:** This resolves the older Poppins reference in DEC-008 and aligns the decision log with the approved product requirements, design system, and implemented font configuration.

**Consequences:** DEC-008 is superseded. Do not load Poppins or introduce another display family unless a later approved decision replaces this one.

## 5. Decision Change Procedure

When changing an accepted decision:

1. Record the proposed change.
2. Explain the reason and expected consequences.
3. Obtain approval from the project owner.
4. Mark the previous decision as superseded.
5. Add the replacement decision.
6. Update affected documentation.
7. Inform AI of the updated source of truth.

## 6. AI Instruction

Before making a major product, design, or architectural decision, review this document.

Do not silently override accepted decisions.

If a task conflicts with an accepted decision, explain the conflict and ask for approval before proceeding.
