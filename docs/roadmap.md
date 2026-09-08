# E-commerce UI Roadmap

## 1. Purpose

This roadmap guides the incremental development of the e-commerce frontend UI using AI assistance.

The project owner is responsible for product decisions, UI/UX design, visual review, and backend development. AI is responsible for implementing approved frontend tasks.

The project is UI-only. All backend integration is deferred until the project owner explicitly provides API contracts and requests integration.

## 2. Development Principles

* Build one milestone at a time.
* Prefer small, reviewable tasks over large implementations.
* Follow the documentation authority order recorded in `decisions.md`, with `product.md` authoritative for product scope and `architecture.md` authoritative for technical structure.
* Use mock data for UI development.
* Do not invent backend endpoints or business rules.
* Review visual quality, responsiveness, and accessibility before moving forward.
* Commit completed milestones to Git.
* Update documentation when important decisions change.

## 3. Milestone 0 — Project Foundation

**Goal:** Establish a clean and reliable frontend development environment.

### Tasks

* Initialize Next.js with npm, TypeScript, App Router, Tailwind CSS, and the `src/` directory convention.
* Generate and maintain `package-lock.json`; do not introduce another package-manager lockfile.
* Configure Poppins and Inter using `next/font`.
* Set up the project folder structure.
* Add the project knowledge documents.
* Configure design tokens for colors, typography, spacing, and radii.
* Set up ESLint and TypeScript checks.
* Create a basic root layout and global styles.
* Confirm `npm run dev`, `npm run lint`, and `npm run build` run successfully.
* Initialize Git and create the first commit.

### Deliverables

* Working Next.js project
* Project documentation
* Global font and color configuration
* Clean initial folder structure

### Acceptance Criteria

* `npm run dev` starts successfully.
* `npm run lint` and `npm run build` pass.
* `package-lock.json` is the only dependency lockfile.
* Routes and source code use `src/app/`, `src/components/`, and `src/features/` without duplicate root-level source directories.
* The application renders without errors.
* Fonts and primary colors are configured.
* No backend or database dependencies are introduced.

## 4. Milestone 1 — Design System and Shared Components

**Status:** In review

**Goal:** Build the reusable visual foundation before implementing full pages.

### Tasks

* Define reusable layout containers.
* Implement Button variants.
* Implement Input, Select, Checkbox, and Textarea components as needed.
* Implement Card and SectionHeading components.
* Implement Badge, Breadcrumb, and basic feedback components.
* Implement loading, empty, and error state components.
* Create a component showcase or development page if useful.
* Review hover, focus, disabled, and responsive states.

### Deliverables

* Reusable UI component library
* Consistent design tokens
* Documented component variants

### Acceptance Criteria

* Components follow the approved design system.
* Buttons use accessible contrast and consistent 16px or 20px radii.
* Components support keyboard interaction where applicable.
* Components can be reused without duplicating styling.
* No unnecessary component library is introduced.

## 5. Milestone 2 — Storefront Layout and Homepage

**Goal:** Establish the main shopping experience and visual identity through an approved, image-led homepage design and reusable storefront layout.

### Approved Visual Direction

The homepage must use the provided reference image as inspiration for its overall composition: a large, full-width photographic hero with navigation layered over the image and prominent centered content.

The reference is for layout and visual composition only. Do not copy its spa branding, pink palette, serif typography, appointment functionality, or unrelated content.

Apply the project's approved design system:

* Primary dark color: `#092328`.
* General storefront background: `#F3F4F4`.
* Poppins for headings and Inter for body content.
* Generous whitespace, clear visual hierarchy, and restrained styling.
* Soft, accessible buttons with consistent 16px or 20px border radii.
* Responsive layouts for phones, tablets, laptops, and desktop monitors.

Major visual decisions must follow the approved reference and project documentation. Do not invent a competing visual direction.

### Tasks

#### 1. Shared Storefront Header and Navigation

* Implement a shared storefront header.
* On the homepage, position the navigation over the hero image with a transparent or subtly translucent appearance.
* Ensure navigation text, icons, and controls remain readable over the image using appropriate contrast, overlays, or backdrop treatment.
* Implement desktop navigation with the brand/logo, approved navigation links, and appropriate storefront actions such as search, account, and cart.
* Implement mobile navigation with an accessible menu button, functional open/close behavior, keyboard support, and appropriate focus management.
* Use a solid or appropriately contrasted header treatment on pages without a hero image. Do not force transparent navigation over backgrounds where readability would be compromised.
* Implement an announcement bar only if its content and design have been explicitly approved.
* Do not add unapproved navigation destinations or nonfunctional actions.

#### 2. Homepage Hero

* Implement a large, full-width hero background image that occupies most of the initial viewport.
* Use responsive image sizing and cropping so the image remains visually effective across desktop, tablet, and mobile screens.
* Add a dark overlay or gradient where necessary to maintain accessible text contrast.
* Place the hero content prominently over the image, following the reference's centered composition.
* Include one semantic H1, a concise supporting description, and one primary shopping CTA.
* Include a secondary CTA only if it has a clear purpose and approved destination.
* Use approved brand copy and imagery, or clearly identifiable placeholder content when final assets are unavailable.
* Do not invent factual company claims, promotions, discounts, or product benefits.
* Do not implement a hero carousel unless explicitly approved. The reference's carousel indicators do not constitute approval for carousel functionality.
* Ensure the hero does not create horizontal overflow or obscure important content on smaller screens.

#### 3. Featured Categories

* Implement a featured categories section below the hero.
* Transition from the image-led hero into the lighter `#F3F4F4` storefront background.
* Use reusable cards and layout components from Milestone 1.
* Display approved categories or clearly labeled placeholder categories.
* Provide meaningful links to the appropriate catalog or category destinations.
* Maintain consistent image ratios, spacing, and responsive grid behavior.

#### 4. Featured Products

* Implement a featured product section using the approved shared product-card design or reusable components.
* Use approved product data or clearly identifiable mock data.
* Include only the product information and actions supported by the current UI scope.
* Do not invent real prices, availability, ratings, reviews, discounts, or product claims.
* Ensure product cards remain consistent and responsive across target devices.
* Do not implement backend fetching, inventory management, checkout logic, or other future milestone functionality.

#### 5. Promotional or Editorial Sections

* Implement only promotional or editorial sections that have been approved in the design brief or project documentation.
* Do not automatically add generic marketing sections merely to fill space.
* Use approved imagery and copy, or clearly identifiable placeholders.
* Maintain visual cohesion with the hero, categories, and featured products.

#### 6. About / Store Information Page

* Implement the required About / Store Information page.
* Use approved company content or clearly identifiable placeholder brand content.
* Do not present invented factual claims about company history, founders, location, certifications, sustainability, or business achievements.
* Ensure the page is accessible through storefront navigation.
* Include a clear link to the product catalog.
* Reuse the shared header, footer, design tokens, and layout components.

#### 7. Shared Footer

* Implement a reusable storefront footer with approved navigation and informational links.
* Include only approved contact details, social links, policies, and company information.
* Do not invent addresses, phone numbers, legal policies, or social-media accounts.
* Ensure the footer is responsive and uses accessible semantic markup.

#### 8. Responsive Layout and Metadata

* Implement responsive layouts for phones, tablets, laptops, and desktop monitors.
* Ensure there is no unintended horizontal overflow.
* Use semantic HTML, appropriate heading hierarchy, and accessible navigation landmarks.
* Configure homepage metadata, including title and description.
* Configure appropriate metadata for the About / Store Information page.
* Use meaningful image alternative text and appropriate image-loading strategies.
* Preserve the existing Next.js App Router architecture and frontend-only scope.

### Deliverables

* Complete homepage following the approved image-led visual direction.
* About / Store Information page.
* Shared storefront header and footer.
* Responsive desktop and mobile navigation.
* Reusable homepage sections built from the Milestone 1 design system.
* Appropriate homepage and About page metadata.

### Acceptance Criteria

* [ ] Homepage matches the approved reference composition and project design system.
* [ ] Hero uses a full-width background image with readable overlaid content.
* [ ] Homepage navigation is visually integrated with the hero.
* [ ] Navigation remains readable and functional on pages without hero images.
* [ ] Desktop and mobile navigation work across target devices.
* [ ] Mobile menu supports keyboard interaction and appropriate focus behavior.
* [ ] Hero has one semantic H1 and functional CTA destinations.
* [ ] No unapproved carousel, announcement bar, or promotional section has been introduced.
* [ ] Featured categories and products use approved or clearly identifiable placeholder content.
* [ ] Layout has no unintended horizontal overflow.
* [ ] Main content uses semantic HTML and accessible landmarks.
* [ ] Homepage and About page metadata are configured.
* [ ] About / Store Information page is accessible through storefront navigation and links clearly to the product catalog.
* [ ] No invented factual company claims, contact details, promotions, or product claims are presented as real.
* [ ] Visual hierarchy, whitespace, image cropping, and responsive behavior have been reviewed.
* [ ] Lint, TypeScript checks, and production build pass.
* [ ] Milestone is reviewed and accepted by the project owner before proceeding to Milestone 3.

## 6. Milestone 3 — Product Discovery

**Goal:** Allow customers to browse and explore products through the UI.

### Tasks

* Implement ProductCard and ProductGrid.
* Implement category listing pages.
* Implement product catalog page.
* Implement search interface.
* Implement filter and sort controls.
* Implement result count and pagination or approved alternative.
* Create mock product and category data.
* Implement loading and empty results states.
* Add breadcrumbs and relevant metadata.

### Deliverables

* Product catalog
* Category pages
* Search results UI
* Reusable product listing components

### Acceptance Criteria

* Product cards are visually consistent.
* Product images maintain consistent aspect ratios.
* Filtering and sorting can be demonstrated with mock data.
* Product navigation works.
* Mobile and tablet layouts are reviewed.
* No backend search or filtering contracts are invented.

## 7. Milestone 4 — Product Detail Experience

**Goal:** Provide a clear and trustworthy product evaluation interface.

### Tasks

* Implement product image gallery.
* Implement product information section.
* Implement price display.
* Implement quantity selector.
* Implement Add to Cart UI.
* Implement product description and specifications.
* Implement related products if approved.
* Implement availability and disabled states using mock data.
* Add product metadata and valid structured data only when appropriate.

### Deliverables

* Product detail page
* Reusable product gallery
* Product purchase controls

### Acceptance Criteria

* Product information has clear hierarchy.
* Gallery works on touch and desktop devices.
* Quantity controls are accessible.
* Add to Cart provides visible feedback.
* Product details are responsive.
* No real stock validation or backend cart logic is implemented.

## 8. Milestone 5 — Shopping Cart UI

**Goal:** Allow customers to review and adjust a mock shopping cart.

### Tasks

* Implement cart page.
* Implement CartItem component.
* Implement quantity adjustment controls.
* Implement remove item interaction.
* Implement cart summary.
* Implement empty cart state.
* Implement continue shopping and checkout navigation.
* Use local/mock state for demonstration.

### Deliverables

* Functional mock cart interface
* Reusable cart components
* Cart summary UI

### Acceptance Criteria

* Quantity and removal interactions update the mock UI.
* Empty cart state is handled.
* Totals are clearly labeled and visually consistent.
* Mobile cart layout is usable.
* No real order, inventory, or payment logic is introduced.

## 9. Milestone 6 — Checkout UI

**Goal:** Create a polished checkout presentation without implementing backend transactions.

### Tasks

* Implement checkout layout.
* Implement customer information form.
* Implement shipping address UI.
* Implement shipping method selection UI.
* Implement payment method selection UI.
* Implement order summary.
* Implement confirmation action and mock result state.
* Implement relevant loading and error states.
* Review accessibility and mobile usability.

### Deliverables

* Checkout interface
* Order summary components
* Mock confirmation page

### Acceptance Criteria

* Checkout steps are clear and easy to understand.
* Forms have accessible labels and states.
* Order summary is readable on all target devices.
* No real payment processing or order persistence is implemented.
* Final business rules remain owned by the backend.

## 10. Milestone 7 — Authentication and Account UI

**Goal:** Complete the customer-facing account screens.

### Tasks

* Implement login screen.
* Implement registration screen.
* Implement password recovery UI if approved.
* Implement account overview.
* Implement profile information UI.
* Implement order history.
* Implement order detail page.
* Use mock account and order data.

### Deliverables

* Authentication screens
* Account layout
* Order history and detail interfaces

### Acceptance Criteria

* Forms are responsive and accessible.
* Order statuses are displayed using approved mock values.
* Empty order history state is included.
* No authentication service, token management, or backend account logic is implemented.

## 11. Milestone 8 — UI Quality and Polish

**Goal:** Improve consistency, usability, and production readiness of the UI layer.

### Tasks

* Review all pages against the design system.
* Audit spacing, typography, colors, and radii.
* Review mobile, tablet, laptop, and desktop layouts.
* Review keyboard navigation and focus states.
* Review image loading and layout stability.
* Review metadata and semantic page structure.
* Remove unused components and unnecessary dependencies.
* Run lint, type-check, and build checks.
* Fix visual inconsistencies and regressions.

### Deliverables

* Polished UI MVP
* Responsive and accessibility review
* Clean, maintainable frontend codebase

### Acceptance Criteria

* Core UI journeys can be demonstrated.
* No major responsive layout issues remain.
* Relevant checks pass.
* No known critical accessibility issues remain.
* UI follows the approved design system.
* Backend integration remains separate.

## 12. Milestone 9 — Backend Integration Preparation

**Goal:** Prepare the UI for future integration without implementing the backend.

This milestone begins only when the project owner requests it.

### Tasks

* Review actual backend API contracts.
* Identify mock data that will be replaced.
* Define frontend request and response types from provided contracts.
* Plan loading, error, and authentication integration states.
* Identify UI changes required by actual backend behavior.

### Deliverables

* Integration plan
* Documented frontend data requirements
* Approved API integration tasks

### Acceptance Criteria

* No API contracts are invented.
* Backend business rules remain unchanged.
* Integration work is explicitly approved by the project owner.

## 13. Task Status

Use the following statuses in the roadmap or issue tracker:

* Not started
* In progress
* In review
* Blocked
* Completed

A task is completed only after the implementation has been reviewed and relevant checks have been performed.

## 14. AI Task Workflow

For each task, ask Codex to:

1. Read the relevant project documentation.
2. Inspect existing files and components.
3. Explain the implementation plan.
4. Implement only the approved scope.
5. Run relevant checks.
6. Summarize changed files and remaining issues.

Do not ask AI to implement multiple major milestones in a single prompt.

## 15. Definition of Done

A UI task is done when:

* The requested interface is implemented.
* The design matches the approved direction.
* Existing components are reused where appropriate.
* Responsive behavior is reviewed.
* Accessibility is considered.
* Relevant checks pass.
* No unrelated backend or business logic is introduced.
* The project owner has reviewed and accepted the result.
