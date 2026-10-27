# Testing and Quality Assurance Plan

## 1. Test layers

-   Unit tests for EMI calculation and formatting.
-   Component tests for calculator inputs and form validation.
-   Integration tests for enquiry API if implemented.
-   End-to-end tests for navigation, calculator, and contact flow.
-   Manual visual QA at mobile, tablet, and desktop widths.
-   Accessibility and performance checks.

## 2. EMI unit test cases

1.  Typical positive principal, positive rate, and positive tenure.
2.  Zero interest rate.
3.  Fractional annual interest rate.
4.  Very short tenure.
5.  High principal.
6.  Invalid principal (zero, negative, NaN).
7.  Invalid tenure (zero, negative, non-integer months if months are
    required).
8.  Negative or non-finite interest rate.
9.  INR output formatting.
10. Verify total interest is approximately total repayment minus
    principal, subject to displayed rounding.

Use independently calculated test fixtures; do not treat screenshot
numbers as authoritative if they do not match the implemented formula.

## 3. Form test cases

-   Empty form.
-   Invalid email.
-   Invalid phone.
-   Both contact methods missing.
-   Service not selected.
-   Message too long.
-   Consent unchecked when required.
-   Double click / duplicate submission.
-   API unavailable.
-   Rate limited.
-   Spam challenge failure if used.
-   Success and error messages are accessible to screen readers.

## 4. Responsive viewports

At minimum: - 360 × 800 - 390 × 844 - 768 × 1024 - 1024 × 768 - 1440 ×
900 - 1920 × 1080

Check for horizontal overflow, clipped text, tap target size, menu
behavior, card grid changes, and calculator stacking.

## 5. Accessibility

-   Keyboard-only navigation.
-   Focus visibility.
-   Logical focus order.
-   Labels for all form fields.
-   Accessible name and expanded state for mobile menu.
-   Error text associated with relevant inputs.
-   Contrast check.
-   Reduced-motion behavior.
-   Heading and landmark structure.
-   Automated scan plus manual review.

## 6. Security and privacy checks

-   No secrets in browser bundles or Git.
-   HTTPS enforced.
-   Server-side validation on any write endpoint.
-   Rate limiting and request size limits.
-   No sensitive personal data in logs or analytics.
-   Privacy policy and consent behavior approved.
-   Third-party scripts reviewed.
-   Admin endpoints, if added later, require authentication and
    authorization.

## 7. Launch acceptance checklist

-   [ ] All approved routes work.
-   [ ] All navigation links and CTAs work.
-   [ ] No broken images or missing fonts.
-   [ ] All partner logos and claims approved.
-   [ ] Contact details verified.
-   [ ] EMI calculations pass test cases.
-   [ ] Forms tested from the deployed domain.
-   [ ] Mobile and desktop QA completed.
-   [ ] SEO metadata and sitemap configured.
-   [ ] HTTPS and redirects verified.
-   [ ] Analytics privacy reviewed, if enabled.
-   [ ] Client sign-off recorded.
