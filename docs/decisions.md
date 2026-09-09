# Architecture and Product Decision Log

## 1. Purpose

This document records important product, design, and technical decisions for the e-commerce UI project.

Its purpose is to preserve context across AI sessions, prevent repeated discussions, and ensure that future implementation remains consistent with approved decisions.

The project owner has final authority over all decisions.

### Documentation Authority

Resolve documentation conflicts in this order:

1. `product.md` — product scope, users, journeys, functional requirements, and MVP acceptance criteria.
2. `decisions.md` — accepted and pending product, design, and technical decisions.
3. `architecture.md` — technical architecture, routing, folder structure, and data boundaries.
4. `design-system.md` — global visual rules and reusable component principles.
5. Approved page-specific specifications such as `homepage-design.md` — page composition, content, imagery, and responsive behavior.
6. `roadmap.md` — implementation order, tasks, dependencies, and completion criteria.
7. `AGENTS.md` — operational rules for AI assistance.

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

**Decision:** Use Be Vietnam Pro primarily for headings and Inter primarily for content.

**Rationale:** Be Vietnam Pro gives KOMO a modern, approachable heading style with strong Vietnamese language support, while Inter supports readability for interface content.

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

### DEC-019 — KOMO Brand

**Status:** Accepted

**Decision:** The storefront brand name is KOMO. Use a text wordmark until an AI-generated logo is created and visually approved.

**Consequences:** Vietnamese is the primary customer-facing language. The approved tagline is “Tiện nghi mỗi ngày, giá trị trong tầm tay.” The English reference is “Everyday comfort, thoughtfully priced.” Do not treat an unreviewed generated logo as final.

---

### DEC-020 — Initial Product Category

**Status:** Accepted

**Decision:** KOMO is a home-furniture store focused initially on chairs, study desks, and sofas.

**Consequences:** Homepage imagery, navigation, categories, and mock products must reflect this focus. Decor and lighting are not approved catalog categories and must not be presented as available products without a later decision.

---

### DEC-021 — Language, Locale, and Currency

**Status:** Accepted

**Decision:** Vietnamese with locale `vi-VN` is the primary storefront language and locale. VND is the primary display currency.

**Consequences:** USD is a planned secondary display currency, but currency selection and conversion are deferred until rules are approved. The incomplete Đồng Nai address supplied during planning is a placeholder and must not be displayed as a real business address.

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

---

### DEC-030 — Milestone 2 Homepage Composition

**Status:** Accepted

**Decision:** Use a warm, inviting, modern, image-led homepage in this order: hero, featured categories, featured products, and footer. The transparent header is layered over the hero, and the top of the next section should remain visible below a hero approximately 70–85svh tall.

**Consequences:** Milestone 2 excludes a carousel, announcement bar, sale CTA, newsletter, testimonials, value-proposition strip, and editorial section. Any of these requires separate approval.

---

### DEC-031 — Milestone 2 Navigation and Routes

**Status:** Accepted

**Decision:** Milestone 2 uses public routes `/`, `/products`, and `/about`. Navigation presents Trang chủ, Sản phẩm, the approved product categories, and Giới thiệu. Search, account, and cart actions are omitted until valid UI destinations exist.

**Consequences:** `/products` may be a clearly labeled minimal placeholder until Milestone 3. Featured category and product links may point to `/products`; do not create premature category or product-detail routes. Mobile navigation uses an accessible side drawer. The header is transparent over the hero, becomes solid after scrolling, is solid on inner pages, and remains sticky.

---

### DEC-032 — Milestone 2 Content and Asset Policy

**Status:** Accepted

**Decision:** The homepage may use clearly identified fictional product data. The KOMO logo may be AI-generated, but the logo and the final hero asset require visual review before being treated as approved assets.

**Consequences:** Use VND mock prices. Do not show ratings, reviews, discounts, stock claims, delivery claims, or promotions. Do not display the provisional address. Use generic About copy without invented company history or achievements. The hero asset source remains unresolved until an image is supplied or a candidate-generation approach is separately approved.

---

### DEC-033 — Incremental Milestone 2 Delivery

**Status:** Accepted

**Decision:** Implement Milestone 2 as separately reviewed tasks rather than one large uncontrolled change.

**Consequences:** Use the task boundaries defined in `roadmap.md`. Major implementation starts only after explicit authorization, and generated visual assets remain subject to owner review.

---

### DEC-034 — About Header Navigation Label

**Status:** Accepted

**Decision:** Use “Về chúng tôi” as the customer-facing label for the `/about` destination in the shared header navigation.

**Consequences:** The updated label appears in both desktop and mobile header navigation. The `/about` route, About page metadata, and footer label remain unchanged.

## 4. Pending Decisions

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

**Status:** Accepted for Milestone 3 UI

**Decision:** Provide local mock-data search plus category, price, and availability filters. Apply filters immediately. Defer sorting and pagination until their interaction rules are approved.

**Consequences:** Search is available from the shared storefront header. Desktop and tablet use a filter sidebar, while mobile uses an accessible filter drawer and retains a two-column product grid. This decision defines presentation behavior only and does not define backend contracts.

---

### DEC-026 — Administrative UI

**Status:** Pending

**Question:** Will an administrative interface be included in this frontend project?

**Notes:** Do not implement administrative screens until explicitly approved.

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
