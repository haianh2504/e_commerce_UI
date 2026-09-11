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

**Status:** Accepted

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
