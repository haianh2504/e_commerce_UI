# E-commerce UI Design System

## 1. Design Direction

The interface should feel modern, calm, premium, and approachable. It should emphasize product photography, clear information, and a comfortable shopping experience.

The design must prioritize:

* Generous whitespace
* Strong visual hierarchy
* Consistent typography and spacing
* Soft but eye-catching interactive elements
* Accessible contrast
* Responsive layouts
* Reusable components
* Semantic HTML and SEO-friendly rendering

Avoid excessive decoration, unnecessary gradients, heavy shadows, and crowded layouts.

## 2. Color System

### Main Colors

| Token      | Hex       | Usage                                                               |
| ---------- | --------- | ------------------------------------------------------------------- |
| Primary    | `#092328` | Primary buttons, headings, important text, icons, and dark sections |
| Primary hover | `#15363C` | Hover state for primary interactive surfaces |
| Background | `#F3F4F4` | Dominant page background and general application canvas             |

### Supporting Neutral Colors

The following colors support the two main colors without introducing a competing brand palette.

| Token          | Hex       | Usage                                           |
| -------------- | --------- | ----------------------------------------------- |
| Surface        | `#FFFFFF` | Cards, inputs, menus, and elevated content      |
| Surface subtle | `#E9ECEC` | Secondary sections and subtle hover backgrounds |
| Text primary   | `#092328` | Main body text and headings                     |
| Text secondary | `#526367` | Descriptions, metadata, and supporting text     |
| Border         | `#D8DEDE` | Subtle dividers and component borders           |
| Disabled       | `#AAB5B7` | Disabled visual states                          |

### Semantic Status Colors

Use status colors only to communicate a real interface state. Text or another non-color cue must accompany the color.

| Token          | Hex       | Usage                            |
| -------------- | --------- | -------------------------------- |
| Success        | `#166534` | Success text and status emphasis |
| Success subtle | `#ECFDF3` | Success-state background         |
| Warning        | `#713F12` | Warning text and status emphasis |
| Warning subtle | `#FFF7D6` | Warning-state background         |
| Error          | `#B42318` | Error text and status emphasis   |
| Error subtle   | `#FFF1F0` | Error-state background           |

### Color Rules

* Use `#F3F4F4` as the general page background.
* Use `#092328` for important text and primary actions.
* Use white or lighter neutral surfaces to distinguish cards from the page background.
* Do not introduce arbitrary brand colors without approval.
* Status colors such as success, warning, and error may be introduced only when semantically necessary.
* Ensure text and interactive elements meet accessible contrast requirements.
* Do not use low-contrast light gray text for important content.

## 3. Typography

### Font Families

* **Be Vietnam Pro:** Primarily for headings, page titles, section titles, and prominent display text.
* **Inter:** Primarily for body content, navigation, buttons, forms, prices, descriptions, and supporting text.

Use `next/font` to load and optimize fonts when appropriate. Avoid loading unnecessary font weights.

### Typography Scale

| Element        | Desktop | Mobile  | Font    |
| -------------- | ------- | ------- | ------- |
| Display / Hero | 48–64px | 32–40px | Be Vietnam Pro |
| H1             | 40–48px | 30–36px | Be Vietnam Pro |
| H2             | 30–36px | 24–28px | Be Vietnam Pro |
| H3             | 22–26px | 20–22px | Be Vietnam Pro |
| Body           | 16px    | 16px    | Inter   |
| Small text     | 14px    | 14px    | Inter   |
| Caption        | 12–13px | 12–13px | Inter   |

### Typography Rules

* Use a clear and logical heading hierarchy.
* Avoid using font weight alone to establish hierarchy.
* Maintain comfortable line height for long-form content.
* Prefer line-height around 1.5–1.7 for body text.
* Avoid excessively long text lines; use appropriate content max-widths.
* Do not use multiple competing font families.
* Use consistent font weights and sizes through reusable tokens.

## 4. Spacing and Whitespace

Whitespace is a primary design principle, not unused space.

Use an 8px-based spacing scale where practical:

| Token | Value |
| ----- | ----- |
| 1     | 4px   |
| 2     | 8px   |
| 3     | 12px  |
| 4     | 16px  |
| 5     | 24px  |
| 6     | 32px  |
| 7     | 48px  |
| 8     | 64px  |
| 9     | 96px  |

### Layout Guidelines

* Mobile horizontal page padding: 16–24px.
* Tablet horizontal page padding: 24–32px.
* Desktop horizontal page padding: 32–48px.
* Main content max-width: approximately 1200–1440px.
* Section spacing: 64–96px on desktop, reduced proportionally on smaller screens.
* Use consistent gaps between related elements.
* Avoid placing too many components into one viewport.
* Group related information visually and separate unrelated sections with whitespace.

## 5. Buttons

Buttons should feel soft, polished, and visually noticeable while maintaining accessible contrast.

For primary calls to action placed over photographic backgrounds, use the dedicated `imageCta` treatment: white `#FFFFFF` background, primary text `#092328`, no visible border or boundary color, and a subtle shadow. Use the surface-subtle token on hover while preserving primary text. Keep this as a component variant instead of combining conflicting primary-button utility overrides.

### Primary Button

* Background: `#092328`
* Text: `#FFFFFF`
* Border radius: 16px or 20px
* Comfortable horizontal and vertical padding
* Minimum recommended touch target: 44 × 44px
* Clear hover, focus, active, disabled, and loading states

### Secondary Button

* Background: transparent or white
* Text: `#092328`
* Border: subtle or primary-colored
* Border radius: 16px or 20px
* Hover state should provide a visible change without excessive animation

### Button Rules

* Use 16px radius for standard buttons and 20px for larger prominent buttons when appropriate.
* Use consistent button heights across related interfaces.
* Provide visible keyboard focus indicators.
* Hover effects may include subtle background changes, border changes, or a small elevation effect.
* Keep transitions restrained, generally around 150–250ms.
* Do not rely on hover alone to communicate an action.
* Respect reduced-motion preferences.
* Disabled buttons must remain distinguishable from active buttons.
* Use buttons for actions and links for navigation.

## 6. Cards

Cards should use lighter surfaces to stand out gently against the `#F3F4F4` background.

### Card Style

* Background: `#FFFFFF`
* Border radius: 16–20px
* Consistent internal padding: generally 20–24px
* Optional subtle border using the border token
* Minimal or no shadow
* Clear separation between image, title, description, price, and actions

### Card Hierarchy

For product cards, prefer:

1. Product image
2. Product name
3. Price
4. Supporting metadata
5. Action or interactive affordance

### Card Rules

* Maintain consistent image aspect ratios within a product grid.
* Avoid inconsistent card heights caused by uncontrolled content.
* Use line clamping where appropriate without hiding essential information.
* Keep padding and spacing consistent across card variants.
* Do not make an entire card clickable if it contains conflicting interactive controls.
* Use semantic links for product navigation.
* Provide meaningful image alternative text.

## 7. Responsive Design

The interface must support phones, tablets, iPads, laptops, and desktop PCs.

Use mobile-first responsive design and content-driven breakpoints.

### Target Viewports

| Device                  | Typical Width    |
| ----------------------- | ---------------- |
| Small phone             | 320–375px        |
| Large phone             | 390–430px        |
| Tablet / iPad portrait  | 768–834px        |
| Tablet / iPad landscape | 1024–1194px      |
| Laptop                  | 1280–1440px      |
| Desktop                 | 1600px and above |

These are testing targets, not rigid device-specific layouts.

### Responsive Rules

* No horizontal page overflow.
* Navigation must adapt to smaller screens.
* Product grids should adjust column count based on available width.
* Images must scale without distortion.
* Typography and section spacing should respond appropriately.
* Touch targets must remain comfortable on mobile and tablet.
* Do not rely on hover-only interactions for touch devices.
* Test both portrait and landscape tablet layouts.
* Avoid fixed widths that break at intermediate viewport sizes.
* Use responsive containers and flexible layouts rather than designing separately for every device.

## 8. Navigation and Page Layout

* Use a consistent header and navigation structure.
* Keep primary navigation clear and uncluttered.
* Provide visible active states where appropriate.
* Use breadcrumbs on relevant nested pages, such as product details and categories.
* Ensure mobile navigation is accessible and easy to dismiss.
* Keep the main content visually distinct from navigation and footer regions.
* Use a consistent footer structure across public pages.

## 9. Forms and Inputs

* Use white or light neutral input surfaces.
* Maintain consistent input heights and border radii.
* Provide visible labels rather than relying only on placeholders.
* Use clear focus states.
* Display helper text and error messages near the relevant field.
* Maintain accessible contrast for borders, labels, and error text.
* Use appropriate input types and autocomplete attributes.
* Do not invent backend validation or authentication logic.

## 10. Images and Product Media

Product photography should be a major visual focus.

* Use consistent aspect ratios within product listings.
* Use `4:3` as the default featured-category image ratio and `4:5` as the default product-card image ratio unless an approved page specification requires otherwise.
* Preserve image quality and avoid distortion.
* Use `next/image` where appropriate.
* Provide meaningful alt text for informative images.
* Use appropriate image sizes and responsive loading.
* Avoid layout shifts by defining image dimensions or aspect ratios.
* Do not use decorative images that distract from product information.
* Use placeholders or mock images only when approved.

## 11. Motion and Interaction

Motion should communicate state and improve usability.

* Use subtle hover transitions.
* Avoid excessive animations, bouncing, or large movements.
* Prefer opacity, color, border, and small transform changes.
* Respect `prefers-reduced-motion`.
* Ensure all important interactions work without hover.
* Provide visible loading, empty, error, and success states where relevant.

## 12. Accessibility

All components must be designed and implemented with accessibility in mind.

* Use semantic HTML elements.
* Maintain logical heading order.
* Provide accessible names for buttons and links.
* Use visible keyboard focus states.
* Ensure interactive controls are keyboard accessible.
* Use sufficient color contrast.
* Do not communicate information using color alone.
* Provide alt text for meaningful images.
* Use appropriate labels and descriptions for form controls.
* Support reduced-motion preferences.
* Avoid unnecessary ARIA when native HTML provides the required semantics.

## 13. SEO and Semantic Rendering

Every component must support effective SEO where relevant. SEO is primarily achieved through semantic content, correct rendering, metadata, and page structure—not by adding keywords to every component.

### Component-Level Rules

* Use semantic HTML such as `header`, `nav`, `main`, `section`, `article`, and `footer` when appropriate.
* Use proper heading hierarchy and avoid skipping levels solely for visual styling.
* Use real text for important content rather than embedding text inside images.
* Use descriptive anchor text for navigation.
* Use `next/link` for internal navigation.
* Provide meaningful alt text for informative product images.
* Avoid unnecessary client-side rendering for static, indexable content.
* Prefer Server Components for content that does not require client-side interactivity.
* Keep interactive client components focused and avoid making entire pages client-only unnecessarily.

### Page-Level Rules

* Use Next.js Metadata API for page titles and descriptions.
* Provide unique, descriptive metadata for important pages.
* Use canonical URLs when appropriate.
* Support Open Graph metadata for shareable pages.
* Use structured data such as Product, BreadcrumbList, or Organization only when valid and based on actual available information.
* Do not invent product ratings, reviews, prices, availability, or other structured data.

### Rating Stars

* Use `#FDCC0D` for every customer-rating star in its default, hover, focus, and static display states.
* Do not recolor rating stars to match surrounding surfaces. Pair them with text so the rating does not rely on color alone.
* Ensure important public content is accessible through crawlable links.
* Use appropriate sitemap and robots configuration when the application is ready for deployment.
* Avoid duplicate or thin pages where possible.

### SEO Boundaries

The AI must not invent backend data, product information, or business claims for SEO purposes. Metadata and structured data must be derived from approved content or actual data contracts.

## 14. Component Consistency

Before creating a new component:

1. Check whether an existing component can be reused.
2. Check whether the design system already defines the required style.
3. Use established typography, spacing, colors, and radius tokens.
4. Ensure responsive behavior.
5. Ensure accessibility.
6. Use semantic markup appropriate to the component's purpose.
7. Avoid unnecessary abstractions.

## 15. Design Restrictions

Do not:

* Introduce arbitrary brand colors.
* Use excessive gradients or heavy shadows.
* Create crowded layouts with insufficient whitespace.
* Use inconsistent button or card radii.
* Use random font sizes outside the typography system.
* Build desktop-only layouts.
* Hide essential interactions behind hover.
* Use non-semantic clickable elements when native buttons or links are appropriate.
* Add decorative animations without a clear purpose.
* Change approved visual decisions without permission.

## 16. Design Authority

The product owner has final authority over the visual direction. AI may suggest improvements but must not silently alter the approved design system.

When implementing from Figma, screenshots, or wireframes, prioritize fidelity to the approved design while preserving accessibility, responsiveness, and maintainable code.

For page-specific work, follow the approved page specification after applying the product requirements, accepted decisions, architecture, and this global design system. Page specifications may refine composition and responsive behavior but must not silently replace global tokens or accepted decisions.
