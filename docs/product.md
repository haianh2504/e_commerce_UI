# Product Requirements Document

## 1. Product Overview

### Product Name

**KOMO**

The current brand treatment is a text wordmark until an AI-generated logo has been created and visually approved. The approved customer-facing tagline is:

* Vietnamese: **Tiện nghi mỗi ngày, giá trị trong tầm tay.**
* English reference: **Everyday comfort, thoughtfully priced.**

### Product Type

A single-vendor home-furniture e-commerce application focused initially on chairs, study desks, and sofas. It allows customers to discover products, view product information, manage a shopping cart, and proceed through a checkout experience.

The application is being developed as a software engineering learning project. The frontend UI is implemented with AI assistance, while the backend, database, business logic, and API design are handled separately by the product owner.

### Product Vision

Create a modern, trustworthy, and easy-to-use furniture shopping experience that helps customers find practical, comfortable products for studying and everyday living with minimal friction.

The interface should feel calm, premium, and approachable, with generous whitespace, clear product information, and consistent visual design.

## 2. Project Scope

This repository is responsible for the **frontend UI layer only**.

The UI should demonstrate realistic e-commerce journeys using mock data and local interaction state where necessary. It must not implement or invent backend services, database models, authentication systems, payment processing, or business rules.

Backend integration will be handled later using API contracts explicitly provided by the product owner.

### In Scope

* Responsive page layouts
* Navigation and routing
* Product presentation
* Product catalog and detail interfaces
* Search, filter, and sort interfaces
* Shopping cart UI
* Checkout UI
* About / Store Information page
* Authentication screens
* User account screens
* Order history and detail screens
* Loading, empty, error, and success states
* Reusable components
* Accessibility and SEO-friendly presentation

### Out of Scope

* Database access
* Backend API implementation
* Authentication and authorization logic
* Real payment processing
* Stock reservation or inventory management
* Real order creation
* Shipping fee business rules
* Discount validation business rules
* Email or notification delivery
* Administrative backend operations

## 3. Target Users

### Primary Users

KOMO is intended to remain accessible to customers of all ages. Its primary audience is Vietnamese teenagers and adults approximately 16–40 years old:

* Teenagers and students looking for practical study desks and chairs.
* Adults furnishing their homes with comfortable, modern sofas, desks, and chairs.
* Budget-conscious customers who value useful everyday furniture and clear product information.

### User Needs

Customers should be able to:

* Understand what the store offers quickly.
* Discover products through categories and search.
* View detailed product information before purchasing.
* Manage quantities and items in a cart.
* Understand the checkout steps and order summary.
* Access their account and view previous orders.

### Design Priorities

* Simple navigation
* Fast product discovery
* Clear calls to action
* Trustworthy product presentation
* Minimal visual clutter
* Accessible interaction
* Comfortable mobile shopping

### Language, Locale, and Currency

* Vietnamese is the primary storefront language.
* The primary locale is `vi-VN`.
* VND is the primary display currency.
* USD is a planned secondary display currency, but currency switching and conversion behavior are deferred until their rules are explicitly defined.
* The provided Đồng Nai street address is provisional and must not be displayed as a real business address until the project owner supplies and approves the complete address.

## 4. Product Assumptions

The following assumptions are used for UI planning only and may be revised by the product owner:

* The store is operated by a single vendor.
* The initial product catalog contains chairs, study desks, and sofas.
* Products may have images, names, prices, descriptions, and availability indicators.
* Customers may browse products without being signed in.
* Account-related and checkout experiences may require authentication in the final application.
* The frontend will initially use mock data.
* Final pricing, stock, shipping, discount, and order rules are determined by the backend.

Do not treat these assumptions as final backend contracts.

## 5. Core User Journeys

### Journey A: Discover and View a Product

1. Customer visits the homepage.
2. Customer browses featured products or categories.
3. Customer opens a category or product listing.
4. Customer uses search, filters, or sorting if needed.
5. Customer selects a product.
6. Customer reviews images, price, description, and available product information.

### Journey B: Add Products to Cart

1. Customer opens a product detail page.
2. Customer selects available UI options, if applicable.
3. Customer chooses a quantity.
4. Customer activates Add to Cart.
5. The UI displays feedback.
6. Customer opens the cart to review selected items.

All cart interactions are mock/local UI behavior until backend integration is explicitly requested.

### Journey C: Checkout

1. Customer reviews the cart.
2. Customer proceeds to checkout.
3. Customer enters or selects shipping information.
4. Customer reviews the order summary.
5. Customer selects a displayed payment option.
6. Customer confirms the checkout action.
7. The UI displays an appropriate mock confirmation or result state.

The frontend must not implement real payment transactions, stock validation, order persistence, or backend checkout rules.

### Journey D: Account and Orders

1. Customer opens the account area.
2. Customer views profile information.
3. Customer opens order history.
4. Customer selects an order.
5. Customer views order details and status information.

Mock order data may be used until actual backend contracts are available.

## 6. Information Architecture

### Public Storefront

```text
Home
├── Product Categories
│   └── Product Listing
│       └── Product Detail
├── Search Results
│   └── Product Detail
├── Cart
│   └── Checkout
├── About / Store Information
└── Account
    ├── Login
    ├── Register
    ├── Profile
    └── Orders
        └── Order Detail
```

This is the approved MVP UI structure, not a backend architecture.

## 7. Page Requirements

### 7.1 Homepage

**Purpose:** Introduce the store and guide customers toward product discovery.

The approved Milestone 2 homepage order is:

1. Shared header and primary navigation layered over the hero.
2. Full-width photographic hero.
3. Featured categories: chairs, study desks, and sofas.
4. Featured products.
5. Shared footer.

The homepage should prioritize clear visual hierarchy and avoid excessive promotional clutter. Milestone 2 does not include an announcement bar, carousel, sale CTA, newsletter, testimonials, value-proposition strip, or editorial section. These require separate approval before being added.

The detailed, approved homepage composition is defined in `docs/homepage-design.md`.

### 7.2 Product Listing

**Purpose:** Allow customers to browse and discover products.

UI requirements:

* Page title and optional category description
* Breadcrumbs
* Product grid
* Product cards
* Search or category context
* Filter controls
* Sort controls
* Result count
* Pagination or another approved navigation pattern
* Empty results state
* Loading state

Filters and sorting may operate on mock data for demonstration. Do not invent final backend filtering contracts.

### 7.3 Product Detail

**Purpose:** Provide sufficient information for a customer to evaluate a product.

UI requirements:

* Breadcrumbs
* Product image gallery
* Product name
* Price display
* Product description
* Availability indicator when data is provided
* Quantity selector
* Add to Cart button
* Product specifications or details
* Related products, if approved
* Responsive mobile layout

Product-specific options such as size, color, weight, or variants should only be implemented when the product requirements define them.

### 7.4 Shopping Cart

**Purpose:** Allow customers to review and adjust selected products.

UI requirements:

* Cart item list
* Product image and name
* Unit price
* Quantity controls
* Remove item action
* Subtotal display
* Order summary area
* Continue shopping action
* Proceed to checkout action
* Empty cart state

Displayed totals may use mock calculations for UI demonstration. They must not be treated as authoritative business calculations.

### 7.5 Checkout

**Purpose:** Present a clear, trustworthy purchase review experience.

Potential UI sections:

* Checkout progress or step indicator
* Customer information
* Shipping address form
* Shipping method selection
* Payment method selection
* Order summary
* Confirmation action
* Loading and error states

The exact checkout steps must follow the backend and product requirements when those are provided.

Do not implement real payment processing, order creation, stock validation, or discount rules.

### 7.6 Authentication Screens

**Purpose:** Provide UI for account access.

Potential screens:

* Login
* Registration
* Forgot password
* Reset password, if approved

These screens are presentation-only. Do not implement authentication services, token storage, session management, or backend validation without explicit instructions.

### 7.7 User Account

**Purpose:** Allow customers to view account-related information.

Potential sections:

* Profile overview
* Personal information
* Address information
* Order history
* Order detail

The final available features depend on backend capabilities and approved requirements.

### 7.8 Order History and Detail

**Purpose:** Allow customers to review previous purchases.

UI requirements:

* Order list
* Order identifier
* Order date
* Order status
* Total amount
* Order detail navigation
* Ordered product information
* Empty order history state

Do not invent order status transitions or backend order management rules.

### 7.9 About / Store Information

**Purpose:** Introduce the brand, build customer confidence, and guide customers toward the product catalog.

UI requirements:

* Brand introduction
* Company story or mission
* A clear description of whom KOMO serves and the types of furniture it offers
* Clear call to action linking to the product catalog
* Responsive, accessible content layout
* Appropriate page metadata and semantic headings

The About page is required for the MVP and uses the `/about` route. Until final company information is supplied, use approved generic copy describing KOMO's intended product focus and customer experience. Do not present invented history, achievements, certifications, guarantees, statistics, addresses, partnerships, or other factual company claims as true.

## 8. Shared UI Components

The project should establish reusable components where appropriate, including:

* Header
* Navbar
* Mobile navigation
* Footer
* Button
* Input
* Select
* Checkbox
* Modal or dialog
* Breadcrumb
* ProductCard
* ProductGrid
* ProductGallery
* PriceDisplay
* QuantitySelector
* CartItem
* OrderSummary
* EmptyState
* LoadingState
* ErrorState
* Pagination
* SectionHeading

Component names and structure may be adjusted to fit the existing codebase. Avoid creating unnecessary abstractions.

## 9. Visual Design Requirements

The visual source of truth is `docs/design-system.md`.

Key principles:

* General background: `#F3F4F4`
* Primary color: `#092328`
* Be Vietnam Pro for headings
* Inter for content
* Generous whitespace
* Soft, accessible buttons with 16px or 20px border radius
* Light card surfaces with consistent padding
* Clear product and content hierarchy
* Restrained hover effects
* Responsive layouts across phones, tablets, laptops, and desktop PCs

Do not introduce a competing visual style without approval.

## 10. Responsive Requirements

The UI must support:

* Small and large phones
* Tablets and iPads in portrait and landscape
* Laptops
* Desktop monitors

Requirements include:

* No horizontal page overflow
* Responsive navigation
* Adaptive product grids
* Flexible image layouts
* Readable typography
* Comfortable touch targets
* Appropriate spacing at intermediate viewport widths
* No essential hover-only interactions

## 11. Accessibility Requirements

* Use semantic HTML.
* Maintain logical heading hierarchy.
* Use links for navigation and buttons for actions.
* Provide visible keyboard focus states.
* Ensure controls have accessible labels.
* Maintain sufficient color contrast.
* Provide meaningful alt text for product images.
* Support reduced-motion preferences.
* Ensure forms have visible labels and understandable error states.

## 12. SEO Requirements

Public storefront pages should support effective SEO through semantic rendering and appropriate metadata.

Requirements:

* Use Next.js Metadata API for relevant pages.
* Provide descriptive page titles and meta descriptions.
* Use semantic headings and page landmarks.
* Use crawlable internal links.
* Prefer Server Components for static, indexable content.
* Use meaningful product image alt text.
* Support canonical URLs when appropriate.
* Use valid structured data only when actual product information is available.
* Do not invent ratings, reviews, availability, or other business claims.
* Consider sitemap and robots configuration when deployment requirements are defined.

Interactive components such as quantity selectors and dialogs should prioritize accessibility and correct semantics rather than unnecessary SEO-specific logic.

## 13. UI States

Relevant components should support appropriate states:

* Default
* Hover
* Focus
* Active
* Selected
* Disabled
* Loading
* Empty
* Error
* Success
* Out of stock, when applicable

States should be visually consistent and clearly communicate what is happening.

## 14. Mock Data and Integration

During UI development, use mock data when necessary to demonstrate realistic interfaces.

Mock data should:

* Be stored separately from presentation components.
* Use clear TypeScript types.
* Contain realistic but fictional product information.
* Use VND as the primary displayed currency.
* Be clearly identified in code and documentation as demonstration content.
* Avoid representing mock structures as final backend schemas.
* Be replaceable when actual API contracts are provided.

Do not invent endpoints, DTOs, authentication flows, or business rules.

## 15. MVP Definition

The initial MVP should focus on completing the essential shopping UI journey.

### MVP Pages

* Homepage
* Product listing
* Product detail
* Shopping cart
* Checkout interface
* Login and registration screens
* Basic account and order history interfaces
* About / Store Information (`/about`)

### MVP Completion Criteria

The UI is considered complete for the initial milestone when:

* Core pages are implemented.
* Navigation between pages works.
* Mock product data is displayed consistently.
* Cart and checkout UI interactions can be demonstrated.
* Responsive layouts are reviewed across target devices.
* Loading, empty, and error states are represented where relevant.
* Components follow the design system.
* Accessibility and semantic HTML are reviewed.
* Relevant lint, type-check, and build checks pass.

Backend integration is not required for UI MVP completion.

## 16. Future Enhancements

Potential future UI features may include:

* Wishlist
* Product comparison
* Advanced filtering
* Product reviews
* Promotional landing pages
* Enhanced account dashboard
* Order tracking interface
* Administrative UI

These features are not approved for implementation until the product owner explicitly adds them to the roadmap.

## 17. Success Criteria

The project should be evaluated by:

* Visual consistency
* Ease of navigation
* Clarity of product information
* Responsive quality
* Accessibility
* Component reusability
* Maintainable frontend structure
* Fidelity to approved designs
* Readiness for future backend integration

The goal is not to maximize the number of features. The goal is to create a polished, coherent, and reliable UI foundation.

## 18. Product Decision Authority

The product owner has final authority over product scope, user flows, design, and backend integration.

AI may suggest improvements, but must not silently introduce new features, alter business assumptions, or expand the project beyond the approved UI scope.

When requirements are missing, ask for clarification rather than inventing major product decisions.
