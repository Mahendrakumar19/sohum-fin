# Design System and UI Specification

## Sohum Fintech Solutions LLP

**Direction:** Premium, approachable, trustworthy fintech\
**Reference:** Client-provided homepage screenshot\
**Status:** Proposed design tokens; confirm against the official logo
and brand guidelines

## 1. Visual principles

-   Trustworthy rather than flashy.
-   Clear financial information hierarchy.
-   White and pale-blue surfaces with deep navy typography.
-   Green used for growth, trust, and positive accent details.
-   Rounded cards, subtle shadows, clean spacing, and restrained motion.
-   Avoid implying guaranteed returns or guaranteed loan approval.

## 2. Proposed design tokens

Treat these as initial values, not a substitute for extracting colors
from the official logo.

### Colors

-   Primary navy: `#0B3766`
-   Deep navy: `#06284B`
-   Link/action blue: `#0A4D86`
-   Growth green: `#168653`
-   Pale blue surface: `#EFF7FC`
-   Soft neutral surface: `#F7FAFC`
-   Main text: `#18334D`
-   Secondary text: `#53697C`
-   Border: `#D8E5EE`
-   White: `#FFFFFF`
-   Error: `#B42318`
-   Success: `#167647`

Check color contrast for all text and interactive states before release.

### Typography

Recommended: - Headings: `Inter` or `Manrope` - Body: `Inter` -
Fallback: system sans-serif

Use a restrained type scale: - H1: 40--56 px desktop, 32--40 px mobile -
H2: 28--36 px desktop, 24--30 px mobile - H3: 18--22 px - Body: 15--17
px - Small labels: 12--14 px

### Layout

-   Maximum content width: approximately 1200--1280 px.
-   Desktop page gutters: 32--40 px.
-   Tablet gutters: 24 px.
-   Mobile gutters: 16--20 px.
-   Section spacing: 64--88 px desktop; 40--56 px mobile.
-   Cards: 12--18 px radius.
-   Buttons: 10--999 px radius depending on pill style; consistent
    height and focus treatment.

## 3. Homepage layout

### A. Header

-   Logo/wordmark at left.
-   Navigation: Home, Investments, Loans, EMI Calculator, About Us,
    Contact.
-   Location text and primary CTA on desktop if confirmed.
-   Mobile menu with clear focus and close behavior.
-   Optional sticky behavior only if it does not consume excessive
    mobile space.

### B. Hero

-   Two-column desktop composition: headline/copy/CTAs on the left and
    financial-growth imagery on the right.
-   On mobile, stack copy before imagery or use a cropped background
    with sufficient text contrast.
-   Headline: "Financial Solutions for a Brighter Tomorrow" (client
    approval required).
-   Supporting line: "Invest \| Grow \| Achieve".
-   Primary CTA: "Explore Our Services".
-   Trust highlights: Wealth Creation, Financial Security, Trusted
    Partnerships, Customer First.
-   Use a licensed image or a custom visual; do not copy the reference
    image unless the client owns or licenses it.

### C. Investments

-   Left: section title, concise supporting copy, "Know More" CTA.
-   Right: three cards for Mutual Funds, Stocks, Insurance.
-   Each card includes an icon, title, one-sentence description, and
    text link.
-   Stack cards on narrow viewports.

### D. Loans

-   Left: section title, supporting copy, CTA.
-   Right: seven loan cards in a responsive grid.
-   Use consistent icon sizes and content alignment.
-   Use a 3-column layout on wide screens, 2 columns on tablet, and 1
    column on small phones.

### E. EMI calculator

-   High-contrast navy/blue panel.
-   Calculator form with loan-type tabs or segmented controls.
-   Inputs for amount, tenure, interest rate.
-   Result area showing monthly EMI, total interest, and total payable.
-   Clear estimate disclaimer.
-   On mobile, form and results stack vertically; avoid horizontal
    scrolling.

### F. Why choose us

-   Five differentiator items with green line icons.
-   Suggested items: Trusted Partnerships, Expert Guidance, Quick &
    Hassle-Free Process, Transparent & Fair, Local Presence.
-   Publish only claims the client can substantiate.

### G. Banking and NBFC partners

-   Horizontal logo row or responsive grid.
-   Use only approved, current partner marks and follow their brand
    usage requirements.
-   If approval is not available, use text names or omit the section.

### H. Footer

-   Dark navy background.
-   Company identity, quick links, verified contact details, social
    links, and legal links.
-   Stack into clear groups on mobile.

## 4. Component inventory

-   `SiteHeader`
-   `MobileNavigation`
-   `HeroSection`
-   `TrustHighlights`
-   `SectionIntro`
-   `InvestmentCard`
-   `LoanCard`
-   `EMICalculator`
-   `EMIResultSummary`
-   `WhyChooseUs`
-   `PartnerLogoStrip`
-   `ContactCTA`
-   `ContactForm`
-   `SiteFooter`
-   `DisclaimerNotice`
-   `Button`, `Card`, `Input`, `Select`, `Tabs`, `Accordion`, `Toast`

## 5. Interaction rules

-   All buttons and cards that look interactive must work.
-   Use visible hover, focus, active, disabled, success, and error
    states.
-   Avoid motion that interferes with reading; respect
    `prefers-reduced-motion`.
-   Calculator output should be understandable without relying on color
    alone.
-   External links should be distinguishable and open according to
    agreed behavior.

## 6. Responsive breakpoints

Use Tailwind defaults unless design QA requires adjustments: - Small
mobile: under 640 px - Tablet: 640--1023 px - Desktop: 1024 px and
above - Wide desktop: 1280 px and above

## 7. Accessibility checklist

-   Semantic landmarks and ordered heading hierarchy.
-   Keyboard-accessible menus, forms, tabs, and cards.
-   Visible focus rings.
-   Input labels and accessible error messages.
-   Descriptive image alt text; decorative images use empty alt text.
-   Sufficient contrast and touch targets.
-   No essential information conveyed only by color.
-   Reduced-motion support.

## 8. Image and asset guidance

-   Use client-supplied approved logo files.
-   Use licensed stock imagery or original graphics.
-   Prefer optimized WebP/AVIF when supported.
-   Keep decorative imagery from delaying critical content.
-   Do not fabricate bank partnerships, endorsements, certifications, or
    testimonials.
