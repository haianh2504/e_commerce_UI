# Frontend UI Architecture

## 1. Purpose

This document defines the architecture and code organization for the e-commerce UI project.

The application is a frontend presentation layer built with Next.js, TypeScript, React, and Tailwind CSS. Backend development, database access, business rules, and API design are handled separately by the project owner.

The architecture should remain simple, scalable, and understandable for a software engineering learning project.

## 2. Technology Stack

* Next.js with App Router
* TypeScript
* React functional components
* Tailwind CSS
* `next/font` for font optimization
* `next/image` for appropriate image rendering
* Next.js Metadata API for page metadata

Do not introduce additional frameworks or dependencies without approval.

## 3. Architectural Principles

### UI-Only Boundary

The frontend is responsible for presentation, navigation, and user interaction.

It must not implement:

* Database access
* Backend repositories or services
* Authentication infrastructure
* Payment processing
* Inventory management
* Order persistence
* Backend validation or business rules
* Undocumented API contracts

### Separation of Concerns

Keep the following responsibilities separate:

* Routes and page composition
* Reusable presentation components
* Feature-specific UI components
* Mock data
* UI state and interaction logic
* Design tokens and global styling
* Shared TypeScript types

### Simplicity First

Do not introduce complex architecture patterns before they are needed. Prefer clear, readable code over unnecessary abstractions.

## 4. Recommended Folder Structure

```text
ecommerce-ui/
│
├── AGENTS.md
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
│
├── docs/
│   ├── product.md
│   ├── design-system.md
│   ├── architecture.md
│   ├── roadmap.md
│   └── decisions.md
│
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   │
│   │   ├── (store)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── categories/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   └── checkout/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   └── (account)/
│   │       └── account/
│   │           ├── page.tsx
│   │           └── orders/
│   │               ├── page.tsx
│   │               └── [id]/
│   │                   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   └── feedback/
│   │       ├── EmptyState.tsx
│   │       ├── ErrorState.tsx
│   │       └── LoadingState.tsx
│   │
│   ├── features/
│   │   ├── home/
│   │   │   └── components/
│   │   ├── catalog/
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   └── types.ts
│   │   ├── product/
│   │   │   └── components/
│   │   ├── cart/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── types.ts
│   │   ├── checkout/
│   │   │   └── components/
│   │   └── account/
│   │       └── components/
│   │
│   ├── data/
│   │   └── mock/
│   │       ├── products.ts
│   │       ├── categories.ts
│   │       ├── cart.ts
│   │       └── orders.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── formatters.ts
│   │
│   └── types/
│       └── ui.ts
│
└── ...
```

This is a recommended structure, not a requirement to create every folder immediately. Create folders only when the relevant feature is implemented.

## 5. App Router Organization

The `app/` directory is responsible for routing, layouts, and page-level composition.

### Route Groups

Route groups such as `(store)`, `(auth)`, and `(account)` organize routes without adding those group names to the URL.

Use route groups when they improve layout organization. Do not create unnecessary nested layouts.

### Page Responsibilities

A page should:

* Define or receive route-level data.
* Compose feature and shared components.
* Provide relevant metadata.
* Avoid containing large amounts of presentation code.
* Avoid implementing backend business logic.

### Layout Responsibilities

Layouts should contain shared page structure such as:

* Header
* Navigation
* Footer
* Main content container
* Shared visual wrappers

Do not duplicate the same layout across multiple pages.

## 6. Component Architecture

### Shared UI Components

Place generic reusable components in `src/components/ui/`.

Examples:

* Button
* Input
* Card
* Badge
* Dialog
* Select
* Checkbox

These components should not contain e-commerce-specific business logic.

### Shared Layout Components

Place reusable application layout components in `src/components/layout/`.

Examples:

* Header
* Navbar
* Footer
* Container
* Breadcrumb

### Feature Components

Place components that belong to a specific feature in `src/features/<feature>/components/`.

Examples:

```text
features/catalog/components/ProductGrid.tsx
features/catalog/components/ProductCard.tsx
features/product/components/ProductGallery.tsx
features/cart/components/CartItem.tsx
features/checkout/components/OrderSummary.tsx
```

If a component becomes genuinely reusable across features, it may be moved to the shared components directory.

## 7. Component Design Rules

* Use functional React components.
* Use explicit TypeScript props.
* Prefer composition over large monolithic components.
* Keep components focused on one clear responsibility.
* Avoid unnecessary abstraction layers.
* Reuse existing design tokens and components.
* Use semantic HTML.
* Use links for navigation and buttons for actions.
* Keep interactive client components as small as practical.

## 8. Server and Client Components

Prefer Server Components by default.

Use Client Components only when the UI requires:

* React state
* Event handlers
* Effects
* Browser APIs
* Client-side interaction

Examples of likely Client Components:

* Mobile navigation menu
* Quantity selector
* Product image gallery
* Cart interaction controls
* Interactive filters
* Form interaction components

Do not add `"use client"` to entire pages or layouts when only a small child component requires interactivity.

## 9. Styling Architecture

Tailwind CSS is the primary styling solution.

The visual source of truth is `docs/design-system.md`.

### Design Tokens

Define reusable tokens for:

* Primary color
* Background color
* Surface colors
* Text colors
* Borders
* Typography
* Spacing
* Border radius
* Shadows

Prefer centralized CSS variables or the project's Tailwind theme configuration where appropriate.

### Styling Rules

* Use the established design tokens.
* Avoid arbitrary colors and inconsistent spacing.
* Do not introduce a second styling framework.
* Keep responsive classes readable.
* Avoid large amounts of duplicated styling.
* Use global CSS only for global styles, font variables, resets, and shared tokens.

## 10. Mock Data Architecture

Mock data is used to demonstrate the UI before backend integration.

Store mock data separately from presentation components.

Example:

```text
src/data/mock/products.ts
src/data/mock/categories.ts
src/data/mock/cart.ts
src/data/mock/orders.ts
```

Mock data must not be treated as the final backend data model.

Use clearly named mock types and values. Do not invent final API DTOs or database entities.

## 11. UI State Management

Use the simplest state solution appropriate for the task.

Prefer:

* Local React state for component-level interaction
* Props for simple parent-child communication
* Context only when shared UI state genuinely requires it

Do not introduce Redux, Zustand, or another state-management library without approval.

Examples of acceptable UI state:

* Mobile menu open/closed
* Selected product image
* Selected filter
* Quantity input
* Mock cart contents
* Modal visibility
* Form input values

Do not implement backend business rules in UI state.

## 12. Cart and Checkout Boundaries

Cart and checkout interactions may use mock/local state for demonstration.

Examples:

* Increase or decrease quantity
* Remove an item visually
* Select a shipping option
* Display a mock order summary
* Navigate to a mock confirmation page

These interactions must not be treated as real business transactions.

Final pricing, stock validation, discounts, shipping fees, order creation, and payment behavior belong to the backend.

## 13. Types and Data Contracts

Use TypeScript types for component props and mock data.

Keep UI types separate from future backend API contracts.

Do not create final API request or response types until the project owner provides the actual contract.

Avoid unnecessary use of `any`.

Do not duplicate types across multiple files when a shared type is appropriate.

## 14. Utilities

Place small, reusable, framework-independent helpers in `src/lib/`.

Examples:

* Currency display formatting
* Date display formatting
* Class name composition
* Simple UI formatting helpers

Do not place backend business calculations in utility files.

For example, formatting a price is a frontend responsibility; determining the authoritative final checkout total is a backend responsibility.

## 15. SEO Architecture

Public storefront pages should use semantic, indexable rendering where appropriate.

* Use Next.js Metadata API.
* Prefer Server Components for static public content.
* Use semantic headings and landmarks.
* Use descriptive internal links.
* Use meaningful image alt text.
* Support canonical URLs when appropriate.
* Use structured data only with valid, approved information.
* Do not invent ratings, reviews, prices, or availability for SEO.

SEO should not be used as a reason to add unnecessary logic to every component.

## 16. Accessibility Architecture

Accessibility should be built into shared components.

* Use native semantic elements.
* Provide visible focus states.
* Ensure keyboard interaction.
* Maintain sufficient contrast.
* Use accessible labels.
* Support reduced-motion preferences.
* Avoid unnecessary ARIA when native HTML is sufficient.

## 17. Error and Loading States

Implement UI states where relevant:

* Loading
* Empty
* Error
* Success
* Disabled
* Out of stock

These states may be demonstrated using mock data or local state.

Do not invent backend error codes or response structures.

## 18. Testing and Verification

For each meaningful change, run relevant checks when available:

* ESLint
* TypeScript type checking
* Production build
* Existing tests

Review:

* Mobile responsiveness
* Tablet responsiveness
* Desktop layout
* Keyboard navigation
* Visual consistency
* Semantic HTML

Do not claim checks passed unless they were actually executed.

## 19. Dependency Rules

Before adding a dependency:

1. Check whether the existing stack already provides the functionality.
2. Explain why the dependency is necessary.
3. Consider bundle size and maintenance.
4. Obtain approval.

Do not add dependencies simply because they are popular.

## 20. Future Backend Integration

Backend integration is a separate, explicitly approved phase.

When the project owner provides API contracts:

* Review the actual endpoints and schemas.
* Define frontend API types from those contracts.
* Replace mock data incrementally.
* Keep API access separate from presentation components.
* Preserve backend ownership of business rules.

Do not invent integration details in advance.

## 21. Architecture Decision Authority

The project owner has final authority over architecture and product decisions.

AI may suggest improvements but must not silently introduce new frameworks, state-management systems, backend layers, or major structural changes.
