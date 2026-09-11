# E-commerce UI Roadmap

## 1. Purpose

This roadmap guides the incremental development of a single-vendor e-commerce frontend UI using AI-assisted implementation.

The project owner is responsible for product decisions, UI/UX design direction, visual approval, and backend development. AI is responsible for implementing approved frontend tasks, proposing technical solutions, and reporting unresolved decisions.

This repository is **frontend UI only**. Backend services, databases, authentication systems, payment processing, inventory management, and authoritative business rules are outside its scope. Backend integration begins only when the project owner explicitly provides API contracts and requests integration.

The roadmap defines **what to build, when to build it, and how completion is verified**. It does not replace the product requirements, architecture, design system, or decision log.

## 2. Documentation and Decision Rules

Before starting a milestone, read the relevant project documents and follow the authority order recorded in `decisions.md`.

Document responsibilities:

* `product.md`: product scope, users, journeys, and functional requirements.
* `architecture.md`: technical structure, component organization, and architectural constraints.
* `design-system.md`: global visual tokens, typography, spacing, components, and interaction principles.
* `decisions.md`: accepted and pending product, design, and technical decisions.
* `roadmap.md`: milestone order, tasks, dependencies, deliverables, and acceptance criteria.
* `AGENTS.md`: working instructions for AI coding agents.
* `homepage-design.md`: approved homepage composition, imagery, content, and responsive specifications.

A page-specific design specification must follow the global design system and accepted decisions. If documents conflict, do not silently choose a new direction; apply the documented authority rules and report any unresolved conflict.

Authority order: `product.md`, `decisions.md`, `architecture.md`, `design-system.md`, approved page specifications, `roadmap.md`, then `AGENTS.md`.

### Decision Approval

AI may independently choose low-impact implementation details, such as component composition, minor spacing adjustments, and responsive tuning, provided they remain within approved requirements.

The following require project-owner approval before being treated as final:

* Brand identity and product category.
* Major page layout and visual direction.
* Primary colors and typography changes.
* Navigation information architecture.
* New significant dependencies.
* New business rules or backend contracts.
* Major scope changes or new milestones.

AI may propose decisions but must not mark them as accepted without approval.

## 3. Development Principles

* Build one milestone at a time.
* Divide large milestones into small, reviewable tasks.
* Inspect existing code before creating or modifying components.
* Reuse approved components and design tokens.
* Prefer Server Components; use Client Components only for necessary interactivity.
* Use mock data and local UI state for demonstrations.
* Keep mock data separate from presentation components.
* Do not invent backend endpoints, persistence behavior, or authoritative business rules.
* Do not introduce unnecessary dependencies or abstractions.
* Use npm and maintain `package-lock.json` as the only package-manager lockfile.
* Review visual quality, responsiveness, accessibility, and SEO throughout development.
* Preserve completed work unless an approved requirement requires modification.
* Commit accepted milestones to Git with descriptive commit messages; AI must not commit or push automatically without authorization.

### Mock Content Policy

Realistic fictional product names, descriptions, images, and sample prices may be used for UI demonstration when clearly identifiable as mock data.

Do not present invented company history, certifications, reviews, customer statistics, addresses, guarantees, discounts, delivery promises, or other factual business claims as real.

Unapproved product-specific features, such as sizes, colors, weights, or variants, must not be treated as final requirements.

## 4. Milestone 0 — Project Foundation

**Status:** Implemented; verify acceptance before marking Completed.

**Goal:** Establish a clean and reliable frontend development environment.

### Tasks

* Initialize Next.js with npm, TypeScript, App Router, Tailwind CSS, and the `src/` directory convention.
* Generate and maintain `package-lock.json`.
* Configure Be Vietnam Pro and Inter using `next/font`.
* Establish the project folder structure.
* Add project knowledge documents.
* Configure design tokens for colors, typography, spacing, and radii.
* Configure ESLint and TypeScript checks.
* Create the root layout and global styles.
* Verify development, lint, type-checking, and production build commands.
* Initialize Git and create the first approved commit.

### Deliverables

* Working Next.js project.
* Project documentation.
* Global font and color configuration.
* Clean initial folder structure.
* Reliable npm development workflow.

### Acceptance Criteria

* [ ] `npm run dev` starts successfully.
* [ ] `npm run lint` passes.
* [ ] TypeScript checking passes using the configured command.
* [ ] `npm run build` passes.
* [ ] `package-lock.json` is the only dependency lockfile.
* [ ] Source code follows the approved `src/` structure.
* [ ] Fonts and primary colors are configured.
* [ ] No backend or database dependencies are introduced.
* [ ] Project owner accepts the foundation.

## 5. Milestone 1 — Design System and Shared Components

**Status:** In review.

**Goal:** Build the reusable visual foundation before implementing full storefront pages.

### Tasks

* Define reusable layout containers.
* Implement approved Button variants.
* Implement Input, Select, Checkbox, and Textarea components as needed.
* Implement Card and SectionHeading components.
* Implement Badge, Breadcrumb, and basic feedback components.
* Implement loading, empty, and error state components.
* Create a development-only component showcase if useful.
* Review hover, focus, disabled, loading, and responsive states.
* Document component variants and usage.
* Resolve visual inconsistencies before the components are reused in full pages.

### Deliverables

* Reusable UI component library.
* Consistent design tokens.
* Documented component variants.
* Component showcase or equivalent visual review environment.

### Acceptance Criteria

* [ ] Components follow the approved design system.
* [ ] Buttons have accessible contrast and consistent 16px or 20px radii.
* [ ] Components support keyboard interaction where applicable.
* [ ] Components can be reused without duplicating styling.
* [ ] Responsive states have been reviewed.
* [ ] No unnecessary component library is introduced.
* [ ] Relevant technical checks pass.
* [ ] Project owner visually reviews and accepts the components.

## 6. Milestone 2 — Storefront Layout and Homepage

**Status:** In review; generated visual assets and rendered UI await project-owner acceptance.

**Goal:** Establish the main shopping experience and visual identity through an approved, image-led homepage and reusable storefront layout.

Milestone 2 is divided into a **design approval phase** and an **implementation phase**. AI must not begin major page implementation until the visual specification is sufficiently approved.

### 6.1 Approved Foundation

The homepage uses the approved reference interpretation as inspiration for its composition:

* Large, full-width photographic hero.
* Navigation visually layered over the hero image.
* Prominent centered hero content.
* Calm, premium, approachable e-commerce presentation.
* Generous whitespace and clear visual hierarchy.

The reference is for composition only. Do not copy its spa branding, pink palette, serif typography, appointment functionality, or unrelated content.

Apply the approved design system:

* Primary dark: `#092328`.
* General storefront background: `#F3F4F4`.
* Be Vietnam Pro for headings.
* Inter for body content and interface text.
* Light neutral surfaces.
* Soft, accessible buttons with consistent 16px or 20px radii.
* Restrained hover effects and minimal visual clutter.
* Responsive design for phones, tablets, laptops, and desktop monitors.

KOMO is the approved brand name. The storefront is Vietnamese-first and focuses on chairs, study desks, and sofas. Use `vi-VN` and VND for Milestone 2. The approved page-level direction is recorded in `docs/homepage-design.md`; the generated logo and final hero asset remain subject to visual review.

### 6.2 Phase A — Homepage Design Specification

**Goal:** Resolve the major visual decisions before Codex implements the homepage.

#### Tasks

* Maintain the approved design in `docs/homepage-design.md`.
* Create and review the AI-generated KOMO logo.
* Obtain a supplied hero image or separate authorization to generate candidates, then visually approve the final hero asset.
* Record any later changes to major product or design decisions in `decisions.md` before implementation.
* Obtain explicit authorization before beginning the first implementation task.

#### Required Design Specification

The specification should identify, as applicable:

* Reference images or Figma links.
* Brand and content status.
* Hero image and mobile crop/focal-point behavior.
* Hero height strategy and content alignment.
* Header layout, overlay treatment, and scroll behavior.
* Typography hierarchy and text-width constraints.
* Section order, grids, image ratios, and spacing approach.
* Button hierarchy and destinations.
* Mobile navigation behavior.
* About page composition.
* Footer structure.
* Approved assets and placeholder rules.

Exact pixel values are not required for every element. AI may tune minor implementation details within the approved design.

#### Design Gate

* [x] Major homepage composition is approved.
* [x] Brand and product-category decisions are resolved.
* [ ] The generated logo and hero candidates are visually approved.
* [x] Navigation destinations are defined.
* [x] Section order and excluded optional sections are approved.
* [x] Responsive direction is sufficiently specified.
* [x] Important decisions are recorded in `decisions.md`.
* [x] Project owner authorized implementation on 2026-09-09.

### 6.3 Incremental Implementation Tasks

Complete and review Milestone 2 in this order. Do not combine all tasks into one uncontrolled implementation session.

1. Create and obtain visual approval for the KOMO logo; obtain or create the hero only after its asset source is authorized.
2. Implement the storefront shell, approved routes, header, and accessible mobile navigation.
3. Implement and visually review the homepage hero.
4. Implement featured categories and the minimum reusable ProductCard/ProductGrid foundation.
5. Implement the approved customer-review and final CTA sections.
6. Implement the About page and shared footer.
7. Complete responsive, accessibility, SEO, navigation, and technical verification.

### 6.4 Shared Storefront Header and Navigation

#### Tasks

* Implement a reusable shared storefront header.
* Overlay the homepage header on the hero image.
* Use a transparent or subtly translucent treatment with sufficient contrast.
* Implement the approved navigation order: KOMO wordmark, Trang chủ, Sản phẩm dropdown, Về chúng tôi, Tìm kiếm, Giỏ hàng, and a distinct Đăng nhập button.
* Use semibold text only for Trang chủ; render every other navigation item and dropdown entry at regular weight.
* Use one consistent `16px` font size for all desktop and mobile navigation labels, including dropdown items and the Đăng nhập button.
* Apply an explicit pointer cursor and visible hover feedback to every interactive navigation link and button while retaining visible keyboard focus states.
* Populate the Sản phẩm dropdown with links to all products, Ghế, Bàn học, and Sofa using the existing valid catalog and category routes.
* Keep Tìm kiếm connected to the approved `/products?q=` mock search behavior, Giỏ hàng linked to `/cart`, and Đăng nhập linked to the presentation-only `/login` route.
* Implement the product dropdown as an accessible disclosure supporting click, touch, keyboard opening, Escape dismissal, focus return, outside dismissal, and exposed expanded state.
* Implement accessible mobile navigation with open/close behavior, keyboard support, and appropriate focus handling.
* Preserve the desktop information architecture in the mobile drawer, with product categories grouped beneath the Sản phẩm disclosure.
* Use an appropriately contrasted header on non-hero pages.
* Keep the header sticky, transparent over the initial hero, solid after scrolling, and solid on inner pages.
* Do not implement an announcement bar.
* Avoid dead links, unsupported destinations, and nonfunctional actions.

### 6.5 Homepage Hero

#### Tasks

* Implement a large, full-width photographic hero.
* Keep the hero full viewport height using a minimum height of `100vh`, allowing natural growth when necessary to prevent content clipping.
* Use responsive image sizing and cropping.
* Preserve the approved image focal point across target devices.
* Apply an overlay or gradient where necessary for readable text.
* Implement centered content according to the approved design.
* Use the approved Vietnamese H1, supporting copy, and primary CTA from `docs/homepage-design.md`.
* Do not include a secondary CTA.
* Use approved imagery and copy or clearly identifiable placeholders.
* Do not implement a carousel.
* Ensure the hero does not obscure essential content or create horizontal overflow.
* Optimize the hero image appropriately without sacrificing the approved composition.

### 6.6 Featured Categories

#### Tasks

* Implement the approved featured-category section.
* Transition from the image-led hero into the lighter storefront background.
* Reuse Milestone 1 containers, headings, cards, and design tokens.
* Use the approved categories Ghế, Bàn học, and Sofa.
* Use image-led cards with a `4:3` image ratio.
* Implement consistent image ratios and responsive grids.
* Link category cards to valid destinations.

### 6.7 Featured Products and Listing Foundations

#### Tasks

* Implement or reuse the minimum reusable ProductCard and ProductGrid components required for the homepage.
* Keep mock product data separate from presentation.
* Display four clearly identified fictional products with image, Vietnamese name, mock VND price, and link.
* Use `4:5` product imagery.
* Maintain consistent image ratios, card hierarchy, and responsive behavior.
* Use meaningful product links.
* Do not implement cart behavior, filtering, sorting, or product-detail functionality in this milestone.
* Do not present fake ratings, reviews, stock counts, discounts, or promotional claims as real.

**Boundary with Milestone 3:** Milestone 2 establishes the minimum reusable listing components. Milestone 3 extends and reuses them for the complete catalog and product-discovery experience. Do not create duplicate ProductCard or ProductGrid implementations.

### 6.8 Customer Reviews

#### Tasks

* Implement the approved responsive customer-review carousel from `docs/homepage-design.md`.
* Clearly label the section and individual ratings as demonstration content rather than verified customer feedback.
* Keep fictional reviews in separate structured mock data.
* Show one card on mobile, two on tablet, and three on desktop without causing horizontal page overflow.
* Give the complete Customer Reviews section a minimum height of `80svh`, center its content vertically, and allow natural growth rather than clipping content.
* Provide keyboard- and touch-accessible previous and next controls with native disabled states and visible focus treatment.
* Do not autoplay; respect reduced-motion preferences and provide a readable non-carousel fallback.
* Do not display aggregate ratings, verified-purchase claims, customer totals, locations, or other unsupported facts.

### 6.9 Final CTA

#### Tasks

* Implement the approved final CTA after customer reviews and before the shared footer.
* Follow the centered, vertically stacked hierarchy defined in `docs/homepage-design.md` without copying the reference colors.
* Use the approved Vietnamese eyebrow, heading, supporting text, and links to `/products` and `/about`.
* Arrange actions side by side when space permits and stack them on narrow screens.
* Render the supplied local CTA background edge to edge across the viewport with responsive cover cropping, an accessible contrast overlay, and centered constrained content.
* Preserve the furniture focal area, use a minimum height of `80svh`, and allow natural growth without introducing clipping or horizontal overflow.
* Render the footer immediately after the CTA without an intervening spacer, divider `div`, margin band, or empty section.
* Apply the existing design system and maintain accessible contrast, focus states, touch targets, and heading hierarchy.
* Omit the reference address, contact action, rating summary, customer avatars, customer count, and other unsupported factual claims.

### 6.10 About / Store Information Page

#### Tasks

* Implement the required `/about` route.
* Follow the approved About page visual direction.
* Reuse the shared header, footer, and design system.
* Include a brand introduction and generic mission/story content when final information is unavailable.
* Provide a clear CTA linking to the product catalog.
* Use semantic headings and appropriate metadata.
* Do not invent factual company history, founders, locations, certifications, achievements, partnerships, or guarantees.

### 6.11 Shared Footer

#### Tasks

* Implement a reusable storefront footer.
* Include the KOMO text wordmark, neutral description, and links to `/`, `/products`, and `/about`.
* Omit contact, social, newsletter, shipping/returns, privacy, terms, and FAQ content until real content and destinations are approved.
* Do not display the provisional address or invent addresses, phone numbers, legal policies, or social accounts.
* Ensure responsive layout and accessible semantic markup.
* Avoid dead links and unsupported functionality.
* Keep the footer structurally separate from the Final CTA while placing it immediately after the CTA with no empty separator element.

### 6.12 Route Continuity

Implement `/`, `/products`, and `/about`. The `/products` route may be a minimal, clearly labeled catalog placeholder until Milestone 3. Keep `/dev/components` development-only and out of storefront navigation.

Link featured category and product cards to `/products`. Do not implement catalog filtering, sorting, product details, search, account, cart, or checkout merely to satisfy a Milestone 2 link.

### 6.13 Responsive, Accessibility, and SEO Review

#### Tasks

* Review representative phone, tablet, laptop, and desktop widths.
* Verify no unintended horizontal overflow.
* Review image cropping, typography, grids, and touch targets.
* Use semantic header, nav, main, and footer landmarks.
* Maintain a logical heading hierarchy and one appropriate homepage H1.
* Provide visible focus states and keyboard-accessible navigation.
* Ensure sufficient contrast over the hero image.
* Respect reduced-motion preferences.
* Configure homepage and About page metadata.
* Use meaningful image alternative text and appropriate loading strategies.
* Avoid invented production domains or misleading structured data.

### Deliverables

* Approved homepage design specification.
* Complete image-led homepage.
* Shared storefront header and footer.
* Responsive desktop and mobile navigation.
* Featured categories and products.
* Responsive mock customer-review section.
* Approved final CTA section.
* Reusable ProductCard/ProductGrid foundations where needed.
* About / Store Information page.
* Minimal route placeholders only where approved and necessary.
* Appropriate metadata and responsive behavior.

### Acceptance Criteria

* [x] Design specification was approved before major implementation.
* [ ] Homepage matches the approved reference composition and design system.
* [ ] Hero uses a full-width background image, a minimum height of `100vh`, and readable overlaid content.
* [ ] Homepage navigation is visually integrated with the hero.
* [ ] Non-hero navigation remains readable.
* [ ] Desktop and mobile navigation work across target devices.
* [ ] Trang chủ is the only bold navigation item; all navigation labels share its `16px` size, and all navigation interactions expose pointer and hover feedback.
* [ ] Mobile menu supports accessible keyboard interaction and focus behavior.
* [ ] The Sản phẩm dropdown exposes every approved category and works with keyboard, touch, Escape dismissal, and focus restoration.
* [ ] Tìm kiếm, Giỏ hàng, and Đăng nhập lead to valid UI destinations without introducing backend behavior.
* [ ] Hero has one semantic H1 and functional CTA destinations.
* [ ] No unapproved carousel, announcement bar, or promotional section exists.
* [ ] Featured categories/products use approved or clearly identified mock content.
* [ ] Customer reviews use a minimum height of `80svh`, are visibly identified as mock content, and remain accessible without autoplay or drag-only interaction.
* [ ] Final CTA uses a minimum height of `80svh`, the approved full-width background and content hierarchy, readable responsive cropping and contrast, valid destinations, and no separator before the footer.
* [ ] ProductCard and ProductGrid foundations are reusable for Milestone 3.
* [ ] About page is accessible through navigation and links to the catalog.
* [ ] No invented factual company claims are presented as real.
* [ ] No unintended horizontal overflow exists.
* [ ] Semantic HTML, metadata, and image accessibility are reviewed.
* [ ] Visual hierarchy, whitespace, image cropping, and responsive behavior are approved.
* [ ] Relevant lint, TypeScript, and production build checks pass.
* [ ] Project owner reviews and accepts the milestone before Milestone 3 begins.

## 7. Milestone 3 — Product Discovery

**Status:** Implemented; awaiting project-owner review.

**Goal:** Allow customers to browse and explore products through a complete mock catalog experience.

### 7.1 Approved Catalog Layout

* Use a simple page heading above the catalog without promotional or editorial content.
* Display the product grid in four columns on desktop, three columns on tablet, and two columns on mobile.
* Place filtering controls in a catalog sidebar on desktop and tablet.
* On mobile, present the same sidebar content in an accessible collapsible drawer or panel so the approved two-column product grid retains enough width.
* Keep product-card dimensions, image ratios, spacing, and hierarchy consistent within every breakpoint.

### 7.2 Approved Filtering and Search Behavior

* Provide filters for category, price, and availability only.
* Apply filter changes immediately to local mock data without requiring a separate Apply button.
* Keep active filter values understandable and provide an accessible way to clear them.
* Add the product search field to the shared storefront header.
* Apply search terms to local mock product data and keep search behavior consistent with the active filters.
* When no products match the active search and filters, display the exact empty-state message **“No Product Found”**.
* Do not invent backend search or filtering contracts.
* Sorting and pagination behavior remain deferred until the project owner approves their options and interaction rules.

### Tasks

* Reuse and extend the ProductCard and ProductGrid foundations from Milestone 2.
* Implement the product catalog page using the approved responsive grid and filter-sidebar layout.
* Implement category listing pages.
* Extend the shared header with the approved search field.
* Implement immediate category, price, and availability filtering using mock data.
* Implement the approved no-results state.
* Expand mock product and category data as needed.
* Implement loading, empty-results, and error presentation states.
* Add breadcrumbs and relevant metadata.
* Review responsive grids and product navigation.

### Deliverables

* Product catalog.
* Category pages.
* Header search and search-results UI.
* Responsive filter sidebar with category, price, and availability controls.
* Reusable product listing components.
* Functional immediate filtering of mock data.

### Acceptance Criteria

* [ ] Product cards are visually consistent with the homepage.
* [ ] Product images maintain consistent aspect ratios.
* [ ] The catalog grid displays four columns on desktop, three on tablet, and two on mobile.
* [ ] The catalog has a simple heading and no unapproved promotional content.
* [ ] Category, price, and availability filters are available from the sidebar and update results immediately.
* [ ] The mobile filter panel is keyboard accessible and does not replace the approved two-column grid.
* [ ] Product search is available from the shared header and works with local mock data.
* [ ] The exact message “No Product Found” appears when no products match.
* [ ] Product navigation works.
* [ ] Empty and loading states are handled.
* [ ] Mobile and tablet layouts are reviewed.
* [ ] No backend search/filter contracts are invented.
* [ ] Project owner accepts the discovery experience.

## 8. Milestone 4 — Product Detail Experience

**Status:** Not started.

**Goal:** Provide a clear and trustworthy product evaluation interface.

### 8.1 Approved Gallery and Desktop Layout

* Display one large primary product image with selectable thumbnail images directly below it.
* Keep the purchase panel sticky on desktop while the customer reviews the gallery and product information.
* Do not make the purchase panel sticky on mobile when doing so would obstruct content or controls.

### 8.2 Approved Purchase Interaction

* The purchase panel must show the selected product, selected quantity, unit price, and calculated total price.
* Let customers adjust quantity using local mock state and update the displayed total immediately.
* After the customer activates Add to Cart, keep them on the product page and change the button to a clear confirmation state using the text **“Added to Cart.”**
* Ensure the confirmation is perceivable by assistive technology and does not rely on color alone.
* Treat the interaction as a frontend demonstration only. Do not persist cart data, navigate to another route, call an API, or implement backend cart, stock, or pricing logic.

### Tasks

* Implement product detail routes.
* Implement the approved main-image gallery with thumbnails below it.
* Implement product information and the sticky desktop purchase panel.
* Implement the local quantity selector and immediate mock-total calculation.
* Implement the Add to Cart confirmation state without navigation.
* Implement product description and specifications.
* Implement product-specific options only when approved.
* Implement related products if approved.
* Implement availability and disabled states using mock data.
* Add appropriate metadata and valid structured data only when justified.
* Review touch, keyboard, and responsive behavior.

### Deliverables

* Product detail page.
* Reusable primary-image and thumbnail gallery.
* Sticky desktop purchase panel and accessible quantity controls.
* Mock interaction feedback.

### Acceptance Criteria

* [ ] Product information has clear hierarchy.
* [ ] Gallery thumbnails appear below the main image and work on touch and desktop devices.
* [ ] The purchase panel remains sticky on desktop without obscuring content.
* [ ] The purchase panel shows the selected product, quantity, unit price, and total price.
* [ ] Quantity controls are accessible and update the mock total immediately.
* [ ] Add to Cart changes to the exact confirmation text “Added to Cart.” without navigating away.
* [ ] The confirmation state is exposed to assistive technology and is not communicated by color alone.
* [ ] Product details are responsive.
* [ ] No persistence, API calls, real stock validation, or backend cart logic is implemented.
* [ ] Project owner accepts the product detail experience.

## 9. Milestone 5 — Shopping Cart UI

**Status:** Implemented; awaiting project-owner acceptance.

**Goal:** Allow customers to review and adjust a mock shopping cart.

### Tasks

* Implement cart page.
* Implement CartItem component.
* Implement quantity adjustment controls.
* Implement remove-item interaction.
* Implement cart summary.
* Implement empty-cart state.
* Implement continue-shopping and checkout navigation.
* Use local/mock state for demonstration.
* Keep mock calculations separate from presentation logic.
* Review responsive and accessible cart interaction.

### Deliverables

* Functional mock cart interface.
* Reusable cart components.
* Cart summary UI.

### Acceptance Criteria

* [x] Quantity and removal interactions update the mock UI.
* [x] Empty-cart state is handled.
* [x] Totals are clearly labeled and visually consistent.
* [x] Mobile cart layout is usable.
* [x] No real order, inventory, or payment logic is introduced.
* [ ] Project owner accepts the cart UI.

## 10. Milestone 6 — Checkout UI

**Status:** In review; implementation and technical checks are complete, pending project-owner visual acceptance.

**Goal:** Create a polished checkout presentation without implementing backend transactions.

### Design Gate

Before implementation, approve the intended checkout presentation and any assumptions required for the mock flow. Final shipping, payment, authentication, and order rules remain owned by the backend and product requirements.

### Tasks

* Implement checkout layout.
* Implement customer information form.
* Implement shipping address UI.
* Implement approved shipping method presentation.
* Implement approved payment method presentation.
* Implement order summary.
* Implement confirmation action and clearly identified mock result state.
* Implement relevant loading and error states.
* Review accessibility and mobile usability.

### Deliverables

* Checkout interface.
* Order summary components.
* Mock confirmation page.

### Acceptance Criteria

* [x] Checkout steps are clear and easy to understand.
* [x] Forms have accessible labels and states.
* [x] Order summary is readable on all target devices.
* [x] Mock confirmation is not represented as a real order.
* [x] No real payment processing or order persistence is implemented.
* [x] Final business rules remain owned by the backend.
* [ ] Project owner accepts the checkout UI.

## 11. Milestone 7 — Authentication and Account UI

**Status:** In review; implementation and technical checks are complete, pending project-owner visual acceptance.

**Goal:** Complete the customer-facing account screens using presentation-only behavior.

### Tasks

* Implement the `/login` screen according to `docs/authentication-design.md`, using the reference wireframe and adapted Vietnamese content without copying its imagery, colors, or fonts.
* Link the shared-header Đăng nhập button directly to `/login`.
* Use the approved responsive two-column login composition on wide screens and a single-column form on smaller screens.
* Include the KOMO home link, explicit home/close control, email and password fields, presentation-only primary action, disclosure, and registration link.
* Reserve the right-side visual region without copying or inventing an image until an asset is separately approved.
* Omit social authentication and legal links until providers, routes, and content are approved.
* Implement registration screen.
* Implement password recovery UI if approved.
* Implement account overview.
* Implement profile information UI.
* Implement order history.
* Implement order detail page.
* Use mock account and order data.
* Display only approved mock order statuses.
* Implement loading, empty, and error presentation states.
* Review responsive and accessible forms.

### Deliverables

* Authentication screens.
* Approved responsive login-page layout.
* Account layout.
* Order history and detail interfaces.

### Acceptance Criteria

* [x] Forms are responsive and accessible.
* [x] The navigation Đăng nhập button opens `/login`, and the login page matches the approved wireframe and content hierarchy.
* [x] The login UI clearly states that credentials are not submitted or stored and contains no unapproved imagery, provider, or legal destination.
* [x] Order statuses use the neutral `Dữ liệu minh họa` value; no lifecycle status or transition is invented.
* [x] Empty order history is handled.
* [x] No authentication service, token management, or backend account logic is implemented.
* [ ] Project owner accepts the account UI.

## 12. Milestone 8 — UI Quality and Polish

**Status:** Not started.

**Goal:** Improve consistency, usability, and production readiness of the frontend UI layer.

### Tasks

* Review all pages against the design system and approved page specifications.
* Audit spacing, typography, colors, radii, and visual hierarchy.
* Review phone, tablet, laptop, and desktop layouts.
* Review keyboard navigation, focus states, and form accessibility.
* Review image loading, responsive imagery, and layout stability.
* Review metadata, semantic structure, and internal navigation.
* Remove unused components and unnecessary dependencies.
* Run lint, TypeScript, and production build checks.
* Fix visual inconsistencies and regressions.
* Demonstrate the complete mock shopping journey.
* Review placeholder content before any public deployment.

### Deliverables

* Polished UI MVP.
* Responsive and accessibility review.
* Clean, maintainable frontend codebase.
* Documented remaining limitations.

### Acceptance Criteria

* [ ] Core UI journeys can be demonstrated.
* [ ] No major responsive layout issues remain.
* [ ] Relevant checks pass.
* [ ] No known critical accessibility issues remain.
* [ ] UI follows the approved design system.
* [ ] Mock content is not misrepresented as real business information.
* [ ] Backend integration remains separate.
* [ ] Project owner accepts the UI MVP.

## 13. Milestone 9 — Backend Integration Preparation

**Status:** Not started; requires explicit authorization.

**Goal:** Prepare the frontend for future integration without implementing the backend.

This milestone begins only when the project owner requests it.

### Tasks

* Review actual backend API contracts.
* Identify mock data that will be replaced.
* Define frontend request and response types from provided contracts.
* Plan loading, error, and authentication integration states.
* Identify UI changes required by actual backend behavior.
* Document integration boundaries and dependencies.
* Obtain approval before implementing any real integration.

### Deliverables

* Integration plan.
* Documented frontend data requirements.
* Approved API integration tasks.

### Acceptance Criteria

* [ ] No API contracts are invented.
* [ ] Backend business rules remain unchanged.
* [ ] Integration work is explicitly approved by the project owner.
* [ ] No backend implementation is introduced into the UI repository.

## 14. Task Status

Use the following statuses:

* **Not started:** Work has not begun.
* **In progress:** Approved implementation is underway.
* **In review:** Implementation is ready for technical and/or visual review.
* **Blocked:** A required decision, dependency, or asset is unavailable.
* **Completed:** Acceptance criteria have been met and the project owner has accepted the result.

AI may report that technical work is complete, but must not equate successful checks with final milestone acceptance.

## 15. AI Task Workflow

For each task, Codex should:

1. Read the relevant project documentation and approved design specification.
2. Inspect existing files, components, dependencies, and scripts.
3. Identify unresolved decisions and scope boundaries.
4. Present a concise implementation plan.
5. Implement only the approved scope in small, reviewable steps.
6. Reuse existing components and avoid unrelated refactoring.
7. Run relevant checks and inspect the resulting UI.
8. Report changed files, verification results, and remaining issues.
9. Request project-owner visual acceptance.
10. Update task status only according to the approved workflow.

Do not implement multiple major milestones in a single prompt.

## 16. Definition of Done

A UI task is done when:

* The requested interface is implemented.
* The result matches the approved design direction.
* Existing components are reused where appropriate.
* Responsive behavior is reviewed.
* Accessibility and semantic HTML are reviewed.
* Relevant technical checks pass.
* Required navigation and interactions work within the mock UI scope.
* No unrelated backend or business logic is introduced.
* Remaining placeholders and limitations are documented.
* The project owner has reviewed and accepted the result.

A milestone is not completed solely because Codex reports success. Visual approval and the applicable acceptance criteria are required.
