# Product Requirements Document (PRD)

## Sohum Fintech Solutions LLP Website

**Status:** Draft --- requires client approval\
**Version:** 1.0\
**Product type:** Public-facing corporate website and lead-generation
experience

## 1. Product vision

Build a trustworthy, modern, mobile-first website that helps prospective
customers understand Sohum Fintech Solutions LLP's investment and loan
offerings and contact the company for further information.

## 2. Business objectives

-   Establish a credible online presence for the company.
-   Present investment and loan offerings in a clear, scannable format.
-   Explain the company's stated differentiators: trusted partnerships,
    guidance, transparent processes, and local presence.
-   Let users estimate loan repayments through an interactive EMI
    calculator.
-   Generate qualified enquiries through contact forms, telephone,
    email, and WhatsApp.
-   Provide a maintainable foundation for future service pages or lead
    management.

## 3. Target users

### Primary

-   Individuals exploring home, personal, vehicle, or education loans.
-   Business owners exploring business loans or project financing.
-   Visitors researching investment products or insurance options.
-   Users who want to contact a local financial-services company.

### Secondary

-   Existing customers seeking contact information.
-   Referral partners and financial institutions evaluating the company.
-   Search visitors arriving on a specific service page.

## 4. Core user needs

-   Understand what the company offers.
-   Compare the categories of services available.
-   Estimate monthly loan repayments using their own inputs.
-   Find the company's verified contact details.
-   Send an enquiry with minimal friction.
-   Understand that calculator output is indicative, not a loan offer or
    approval.

## 5. Information architecture

1.  Home
2.  Investments
    -   Mutual Funds
    -   Stocks
    -   Insurance
3.  Loans
    -   Home Loan
    -   LAP (Loan Against Property)
    -   Vehicle Loan
    -   Business Loan
    -   Project Financing
    -   Personal Loan
    -   Education Loan
4.  EMI Calculator
5.  About Us
6.  Contact
7.  Privacy Policy
8.  Disclaimer
9.  Terms of Use, if approved by the client/legal adviser

Service-detail pages may be implemented as dedicated routes or anchored
sections depending on the approved scope. The recommended approach is
dedicated pages for high-value loan categories if SEO is a priority.

## 6. Functional requirements

### FR-01 Navigation

-   Display the company logo and primary navigation on desktop.
-   Provide accessible mobile navigation on smaller screens.
-   Include a prominent "Get Started" CTA.
-   Navigation links must lead to valid routes or sections.
-   Header should remain usable at common mobile and desktop viewport
    widths.

### FR-02 Hero section

-   Display approved headline, supporting copy, primary CTA, and
    financial-growth visual.
-   CTA should lead to services or the enquiry/contact path.
-   Avoid unlicensed imagery and unsupported financial performance
    claims.

### FR-03 Investment services

-   Display Mutual Funds, Stocks, and Insurance cards.
-   Each card includes a short description and a clear action.
-   Service descriptions and regulatory wording must be approved by the
    client.

### FR-04 Loan services

-   Display all seven loan categories shown in the reference.
-   Cards must be keyboard-accessible and link to a relevant service
    page, enquiry form, or section.
-   Do not promise loan approval, guaranteed rates, or guaranteed
    turnaround times.

### FR-05 EMI calculator

Inputs: - Loan type - Principal amount in INR - Annual interest rate
(%) - Tenure in years or months

Outputs: - Estimated monthly EMI - Total repayment - Total interest

Rules: - Validate positive principal, valid tenure, and a non-negative
interest rate. - Handle a zero-interest rate without division-by-zero
errors. - Update results on submission or immediately after valid input
changes, according to the approved design. - Display a clear disclaimer
that results are estimates and actual lender terms may differ. - Use a
documented standard EMI formula; add automated unit tests.

### FR-06 Lead generation

-   Provide contact options: telephone, email, and WhatsApp, subject to
    client verification.
-   Contact/loan enquiry form should collect only necessary information.
-   Validate fields on client and server where a server endpoint exists.
-   Show success and failure states without exposing internal errors.
-   Include an appropriate privacy notice and consent wording approved
    by the client.
-   Protect server-side forms against spam and abuse.

### FR-07 Company trust section

-   Present approved company differentiators and verified partner
    relationships.
-   Do not display partner logos without permission or confirmation that
    the relationship may be represented publicly.

### FR-08 Footer

-   Include logo, quick links, verified contact details, approved social
    links, and current copyright year.
-   Include privacy and disclaimer links.

### FR-09 SEO

-   Unique title and meta description per route.
-   Canonical URLs, sitemap, robots directives, Open Graph metadata, and
    meaningful headings.
-   Structured data only where accurate and appropriate.
-   No fabricated ratings, reviews, awards, or financial claims.

### FR-10 Responsive design and accessibility

-   Support mobile, tablet, laptop, and desktop layouts.
-   Use semantic HTML, keyboard navigation, visible focus states,
    adequate contrast, and labels for inputs.
-   Respect reduced-motion preferences.

## 7. Non-functional requirements

-   Performance: optimize images, fonts, JavaScript, and third-party
    scripts.
-   Reliability: forms and calculator must provide clear
    failure/validation feedback.
-   Security: HTTPS in production; secrets never committed to source
    control.
-   Maintainability: reusable components, typed data models, documented
    environment variables.
-   Privacy: collect the minimum required personal information and
    define retention/access practices if data is stored.
-   Compatibility: current stable versions of major browsers at release
    time.
-   Localization: INR and Indian number formatting; English initially.
    Hindi can be added as a separate approved scope.

## 8. Out of scope for the base website

-   Loan underwriting, eligibility decisions, approvals, disbursal, or
    lender API integrations.
-   Mutual fund transactions, stock trading, insurance policy purchase,
    or investment account management.
-   Collection or storage of PAN, Aadhaar, bank credentials, financial
    statements, or identity documents.
-   Customer login, employee/admin dashboard, CRM, automated lead
    assignment, or analytics dashboard.
-   Payment gateway.
-   Legal/regulatory certification or legal advice.
-   Ongoing SEO campaigns, paid advertising, and content operations.

## 9. Success metrics

-   Visitors can reach a relevant service or contact action within a
    small number of interactions.
-   EMI results match tested reference calculations within rounding
    tolerance.
-   Forms show clear success/failure feedback and submissions reach the
    approved destination.
-   No critical accessibility, broken-link, or mobile-layout defects at
    launch.
-   Analytics, if enabled, tracks CTA clicks and form completion with
    privacy-appropriate configuration.

## 10. Acceptance criteria

-   All approved pages and navigation links work.
-   Investment and loan cards show approved content.
-   EMI calculator handles normal, boundary, and invalid inputs.
-   Contact methods use client-verified details.
-   Forms validate inputs and provide accessible feedback.
-   Layout is tested at mobile, tablet, and desktop widths.
-   SEO metadata, sitemap, robots rules, and favicon are configured.
-   HTTPS is active on the production domain.
-   Client approves content, partner representations, legal text, and
    final design before launch.
