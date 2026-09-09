# Shared Component Reference

## 1. Purpose

This document records the currently implemented Milestone 1 shared components and their intended usage. The visual source of truth remains `docs/design-system.md`. Review the live development showcase at `/dev/components` when assessing appearance and interaction states.

## 2. Layout Components

### `Container`

Path: `src/components/layout/Container.tsx`

Use for consistent horizontal page padding and content width. It supports `wide` and `content` sizes and may render as another semantic element through the `as` prop.

### `Stack`

Path: `src/components/layout/Stack.tsx`

Use for vertical groups with consistent spacing. Available gap values are `sm`, `md`, `lg`, and `xl`. Use the `as` prop when a semantic list, section, or other element is more appropriate than a `div`.

## 3. Action Components

### `Button`

Path: `src/components/ui/Button.tsx`

Use for actions. Variants are `primary`, `secondary`, and `ghost`; sizes are `sm`, `md`, and `lg`. The component supports native button props plus a loading state. It defaults to `type="button"` to prevent accidental form submission.

### `ButtonLink`

Path: `src/components/ui/Button.tsx`

Use for navigation that needs button styling. It shares Button variants and sizes while retaining link semantics through Next.js `Link`.

## 4. Form Components

### `Input`, `Select`, and `Textarea`

Paths: `src/components/ui/Input.tsx`, `Select.tsx`, and `Textarea.tsx`

Use these labeled controls for forms. Each requires an `id` and visible `label`, accepts native control props, and supports helper and error text. Use suitable native input types and autocomplete values for the form context.

### `Checkbox`

Path: `src/components/ui/Checkbox.tsx`

Use for a native binary choice. It requires an `id` and visible `label`, and supports description, error, checked, and disabled states through native input behavior.

### `Field`

Path: `src/components/ui/Field.tsx`

This is the internal shared field wrapper used to keep labels, help text, error text, and control styling consistent. Prefer the concrete form components in page and feature code.

## 5. Content Components

### `Card`

Path: `src/components/ui/Card.tsx`

Use for grouped content on a light surface. Tones are `surface` and `subtle`; padding values are `none`, `sm`, and `md`.

### `Badge`

Path: `src/components/ui/Badge.tsx`

Use for concise labels or status text. Tones are `neutral`, `success`, `warning`, and `error`. Never communicate status by color alone.

### `Breadcrumb`

Path: `src/components/ui/Breadcrumb.tsx`

Use for hierarchical navigation on nested pages. Provide items in order; linked non-current items receive `href`, while the final item is exposed as the current page.

### `SectionHeading`

Path: `src/components/ui/SectionHeading.tsx`

Use for reusable section introductions with optional eyebrow and description text. Alignment may be `left` or `center`; `titleId` associates the rendered heading with a labeled section. Preserve a logical page heading hierarchy when composing sections.

## 6. Feedback Components

Paths: `src/components/feedback/`

* `LoadingState` communicates loading through a polite status region.
* `EmptyState` explains that content is absent and may include an action.
* `ErrorState` communicates a failure through an alert region and may include a recovery action.
* `SuccessState` communicates successful completion and may include a next action.
* `StatePanel` is the shared internal presentation primitive for these states.

Use feedback states only when relevant to the current UI. They demonstrate interface behavior and must not invent backend error codes, response structures, or business outcomes.

## 7. Usage Rules

* Reuse these components before creating competing variants.
* Use links for navigation and buttons for actions.
* Preserve visible focus, disabled, loading, and error behavior.
* Keep feature-specific product, cart, checkout, and account behavior outside generic shared components.
* Add a new variant only when an approved design requires it and the variant is reusable.
* Review visual changes at `/dev/components` across phone, tablet, and desktop widths.
