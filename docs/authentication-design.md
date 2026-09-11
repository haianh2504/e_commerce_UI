# KOMO Authentication UI Specification

## 1. Status and Scope

**Status:** Approved for login-page implementation.

This document defines the approved presentation for the KOMO `/login` page. It uses the supplied reference for wireframe and content hierarchy only. The reference imagery, colors, fonts, third-party branding, calendar overlays, people, and decorative graphics must not be copied.

The login experience remains frontend UI only. It does not authorize authentication services, session handling, token storage, social sign-in providers, account persistence, backend validation, or invented API contracts.

## 2. Entry and Exit Navigation

* The shared-header **Đăng nhập** button links directly to `/login`.
* Display the KOMO wordmark at the upper-left of the login page and link it to `/`.
* Provide a clearly labeled close control at the upper-right. It links back to `/` and uses the accessible name **“Đóng và về trang chủ”**.
* Do not depend on browser history for the close action because a customer may open `/login` directly.
* Provide **“Chưa có tài khoản? Đăng ký”** below the form, linking to `/register`.

## 3. Desktop Wireframe

Use a full-viewport, two-column shell inspired by the reference:

1. A narrower form panel on the left, approximately `40–45%` of the available width.
2. A larger complementary visual panel on the right, approximately `55–60%`.
3. The KOMO wordmark remains near the upper-left edge of the form panel.
4. The close control sits near the upper-right edge of the overall shell.
5. Center the login form vertically within the left panel while keeping its fields constrained to a comfortable form width.
6. Keep the registration link near the lower edge of the form panel when viewport height permits, without removing it from logical document order.

No image is approved for the right panel. Preserve the split-layout structure with an intentionally minimal, non-image surface or reserved media region until the project owner separately supplies and approves an asset. Do not recreate the people, scheduling cards, avatars, or meeting content from the reference.

## 4. Approved Login Content

* Page heading: **Đăng nhập**.
* Supporting text: **Đăng nhập để xem thông tin tài khoản và đơn hàng của bạn.**
* Email label: **Email**.
* Email placeholder: **ban@example.com**.
* Password label: **Mật khẩu**.
* Primary action: **Đăng nhập**.
* Registration prompt: **Chưa có tài khoản? Đăng ký** → `/register`.
* Presentation disclosure: **Biểu mẫu minh họa — thông tin không được gửi hoặc lưu trữ.**

Do not copy **“Create an account,” “30 day free trial,” “Submit,”** or the reference company name because they describe a registration flow and unrelated product. Do not include Apple or Google buttons until those authentication providers are explicitly approved. Do not add a Terms and Conditions link until a valid legal route and approved content exist.

## 5. Form Behavior

* Use semantic labels rather than placeholder-only identification.
* Use `type="email"` with `autocomplete="email"` and `type="password"` with `autocomplete="current-password"`.
* A password-visibility control may appear inside the password field. It must be a keyboard-accessible button with a changing Vietnamese accessible label and must not alter the password value.
* The primary action remains presentation-only until an authentication contract is supplied. Activating it must not send credentials, create a session, store a token, or imply successful authentication.
* Display the presentation disclosure close to the primary action.
* Do not invent password rules, credential errors, account-locking behavior, or recovery behavior.

## 6. Responsive Behavior

* On desktop and wide laptop screens, use the approved two-column composition.
* On tablet portrait and mobile, collapse to a single-column form layout and hide the reserved visual panel before it reduces form usability.
* Keep the wordmark and close control visible in the single-column layout.
* Use at least `16px` horizontal page padding and prevent horizontal overflow at `320px`.
* Keep inputs and buttons at least `44px` high and allow the primary action to fill the available form width.
* When viewport height is limited, allow natural page scrolling instead of clipping the form or registration link.

## 7. Visual and Accessibility Rules

* Apply the KOMO design system for colors, Be Vietnam Pro and Inter typography, spacing, radii, focus states, and responsive breakpoints.
* Do not copy the reference’s yellow palette, typeface, image treatment, or ornamental border shapes.
* Use one semantic H1 and a logical reading order: wordmark, heading, supporting text, fields, primary action, disclosure, and registration link.
* Maintain visible focus indicators, sufficient contrast, understandable error associations, and comfortable touch targets.
* The reserved visual panel is decorative and must not interrupt keyboard or screen-reader navigation.

## 8. Excluded Until Approved

* Real form submission or credential validation.
* Authentication APIs, sessions, cookies, or token handling.
* Apple, Google, or other social sign-in.
* Password recovery or reset flows.
* Terms, privacy, or other legal destinations.
* Reference imagery, meeting widgets, calendar content, customer avatars, or unrelated promotional claims.
