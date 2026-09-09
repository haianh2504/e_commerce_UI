# AGENTS.md

## Project Overview

This project is the **UI layer only** for an e-commerce application.

The backend is developed separately by the product owner. This frontend project must not design, implement, or make assumptions about backend architecture, database structure, authentication logic, business rules, or API contracts unless those details are explicitly provided.

The product owner is responsible for:

* Backend development
* Business logic
* Database design
* API design
* Product requirements
* UI/UX decisions
* Reviewing the implementation

AI assistance is used only to help implement the frontend UI.

## Technology Stack

Use:

* **Next.js**
* **Next.js App Router**
* **TypeScript**
* **React functional components**
* **Tailwind CSS**

Use npm as the package manager. Use `package-lock.json` as the only dependency lockfile; do not create pnpm, Yarn, or Bun lockfiles.

Use the standard commands `npm install`, `npm run dev`, `npm run lint`, `npm run typecheck`, and `npm run build` when the corresponding task is required.

Do not introduce additional UI frameworks, state-management libraries, component libraries, or dependencies unless explicitly approved.

## Primary Goal

The goal of this repository is to build a clean, responsive, reusable, and maintainable e-commerce user interface.

Prioritize:

* Visual fidelity
* Responsive design
* Reusable components
* Clear component hierarchy
* Accessibility
* Consistent styling
* Good user experience

Do not expand the project into backend or full-stack development.

## UI-Only Boundary

This project must remain a frontend presentation layer.

Do not:

* Implement backend services
* Create database code
* Create SQL
* Design database schemas
* Implement repositories
* Implement server-side business logic
* Implement payment processing
* Implement authentication systems
* Generate JWT logic
* Create backend validation rules
* Invent REST or GraphQL endpoints
* Invent API request or response contracts
* Assume backend entity structures
* Add ORM libraries
* Add database clients
* Add server actions that contain business logic

If backend data is required for a UI feature, use mock data unless the product owner provides an API contract.

## Mock Data

Mock data is allowed for UI development.

Keep mock data separate from presentation components.

Prefer structures such as:

```text
src/data/mock/
  products.ts
  categories.ts
  cart.ts
```

or another existing project convention.

Mock data should exist only to demonstrate and test the interface.

Do not treat mock structures as the final backend data model.

## Project Documentation

Before implementing a task, read the relevant documentation when available:

* `docs/product.md`
* `docs/design-system.md`
* `docs/architecture.md`
* `docs/roadmap.md`
* `docs/decisions.md`
* Approved page-specific specifications such as `docs/homepage-design.md`

If a referenced document does not exist, do not invent its contents.

Resolve documentation conflicts using this authority order:

1. `docs/product.md` — product scope, users, journeys, functional requirements, and MVP acceptance criteria.
2. `docs/decisions.md` — accepted and pending product, design, and technical decisions.
3. `docs/architecture.md` — technical architecture, routing, folder structure, and data boundaries.
4. `docs/design-system.md` — global visual rules and reusable component principles.
5. Approved page-specific specifications such as `docs/homepage-design.md` — page composition, content, imagery, and responsive behavior.
6. `docs/roadmap.md` — implementation order, tasks, dependencies, and completion criteria.
7. `AGENTS.md` — operational rules for AI assistance.

If documents disagree, identify the conflict, follow the higher-authority document, update dependent documentation, and record new product or architectural decisions in `docs/decisions.md`.

## Working Rules

1. Inspect the relevant files before making changes.
2. Follow the approved UI design and design system.
3. Implement only the requested scope.
4. Do not add unrelated functionality.
5. Reuse existing components before creating new ones.
6. Reuse existing design tokens and patterns.
7. Do not redesign approved components without permission.
8. Do not introduce new dependencies without approval.
9. Keep components readable and reasonably small.
10. Use TypeScript types for component props.
11. Avoid unnecessary use of `any`.
12. Use semantic HTML.
13. Build accessible interactive elements.
14. Ensure mobile, tablet, and desktop responsiveness.
15. Avoid unnecessary complexity and over-engineering.
16. Prefer incremental changes over large rewrites.
17. Do not claim a feature was tested unless the relevant checks were actually run.

## Next.js Rules

Use the **Next.js App Router**.

Use this `src/`-based structure:

```text
src/
  app/
  components/
  features/
public/
```

Use `src/app/` for routes and layouts, `src/components/` for shared UI components, and `src/features/` for feature-specific code. Do not create duplicate root-level `app/`, `components/`, or `features/` directories.

Use file-system routing.

Use:

* `next/link` for internal navigation
* `next/image` for images when appropriate
* `next/font` for project fonts when appropriate
* `next/navigation` only when programmatic navigation is necessary

Prefer Server Components by default.

Use `"use client"` only when the UI requires:

* React state
* Event handlers
* Effects
* Browser APIs
* Client-side interaction

Do not mark components as client components unnecessarily.

## React Component Rules

Use functional React components.

Prefer composition over large monolithic components.

Example:

```text
ProductPage
├── Header
├── Breadcrumb
├── ProductGallery
├── ProductInformation
├── QuantitySelector
├── AddToCartButton
├── ProductDescription
└── RelatedProducts
```

Create reusable components when the same visual or interaction pattern appears in multiple places.

Examples:

```text
Button
ProductCard
CategoryCard
Price
Badge
Navbar
Footer
SectionHeading
QuantitySelector
```

Do not create abstractions only for the sake of abstraction.

Keep component names clear and descriptive.

## Tailwind CSS Rules

Use Tailwind CSS as the primary styling solution.

Follow `docs/design-system.md` for:

* Colors
* Typography
* Fonts
* Spacing
* Border radius
* Shadows
* Container widths
* Breakpoints
* Component appearance

Use **Be Vietnam Pro** for headings and prominent display text, and **Inter** for body content and interface text, as defined in `docs/design-system.md`.

Do not introduce arbitrary visual styles when an existing design rule exists.

Avoid:

* Random colors
* Random font sizes
* Random shadows
* Random border radii
* Inconsistent spacing

Maintain strong visual consistency across the application.

## Responsive Design

Every page must work on:

* Mobile
* Tablet
* Desktop

Prefer mobile-first responsive design.

Avoid:

* Horizontal overflow
* Fixed layouts that break on smaller screens
* Excessively small touch targets
* Desktop-only interactions

Navigation, grids, typography, images, and spacing should adapt appropriately.

## Accessibility

Use semantic HTML whenever possible.

Interactive elements must:

* Be keyboard accessible
* Have visible focus states
* Have understandable labels
* Use buttons for actions
* Use links for navigation

Images should use meaningful `alt` text when appropriate.

Maintain sufficient visual contrast.

## E-commerce UI Areas

The UI may eventually contain:

* Homepage
* Navigation
* Product categories
* Product catalog
* Search interface
* Filter and sort UI
* Product detail page
* Shopping cart
* Checkout interface
* Order confirmation interface
* Order history interface
* User profile interface
* Login and registration screens

These are UI surfaces only.

Do not implement the underlying backend behavior unless explicitly requested.

## UI States

When designing components, consider relevant visual states such as:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading
* Empty
* Error
* Selected
* Out of stock

These states should represent the interface only.

Do not invent backend logic to determine them.

## Forms

Build forms as UI components only unless integration requirements are explicitly supplied.

It is acceptable to implement:

* Form layout
* Input components
* Labels
* Helper text
* Visual validation states
* Password visibility controls
* Checkbox and radio interfaces
* Submit button states

Do not invent backend validation, authentication, persistence, or API submission behavior.

## Cart and Checkout

Cart and checkout may be visually interactive using local/mock state when necessary for UI demonstration.

For example:

* Increase quantity
* Decrease quantity
* Remove item visually
* Select shipping method
* Enter coupon visually
* Display calculated mock totals

These interactions are for UI prototyping only.

Do not implement real order creation, payment transactions, stock validation, or backend checkout logic.

## Implementation Workflow

For every task:

1. Read `AGENTS.md`.
2. Inspect relevant existing components and pages.
3. Read the relevant design documentation.
4. Briefly describe the implementation plan.
5. Implement only the requested UI.
6. Reuse existing components and patterns.
7. Run relevant lint, type-check, or build commands when appropriate.
8. Review responsive behavior.
9. Review accessibility.
10. Summarize changed files and verification results.

## Design Authority

The product owner has final authority over:

* Layout
* Typography
* Colors
* Component appearance
* Navigation
* User flow
* Visual hierarchy
* Product behavior

AI may propose improvements but must not silently alter the approved design.

When a Figma design, screenshot, wireframe, or specification is provided, prioritize fidelity to that design.

## Important Principle

This repository is a **UI implementation project**, not a full-stack application.

When uncertain whether something belongs to the frontend or backend, prefer keeping it out of this repository until the product owner provides explicit integration requirements.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
