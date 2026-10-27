# SEO, Analytics, and Performance Plan

## 1. SEO goals

-   Make the company and its verified services understandable to search
    engines.
-   Create distinct, useful pages for major services where scope
    permits.
-   Improve crawlability, mobile usability, and page performance.
-   Avoid misleading financial claims or thin, duplicated service pages.

## 2. Technical SEO

-   Unique page title and meta description per route.
-   Canonical URL for each indexable page.
-   XML sitemap generated from public routes.
-   `robots.txt` that allows intended public pages and excludes
    private/staging routes.
-   Open Graph and social-sharing metadata.
-   One clear H1 per page and logical H2/H3 structure.
-   Descriptive internal links and image alt text.
-   Redirect plan for any replaced URLs.
-   Custom 404 page.
-   HTTPS and a single preferred hostname.
-   Avoid indexing preview deployments or private admin routes.

## 3. Draft metadata

These are starting points and must be edited to match the approved
company identity and actual service scope.

### Homepage

Title: `Sohum Fintech Solutions LLP | Loans & Financial Services`
Description:
`Explore loan options, financial services and an EMI calculator from Sohum Fintech Solutions LLP. Contact the team to discuss your requirements.`

### Loans

Title: `Loan Options | Sohum Fintech Solutions LLP` Description:
`Explore home, personal, vehicle, business, education and other loan categories. Eligibility and terms depend on the relevant lender.`

### EMI calculator

Title: `EMI Calculator | Sohum Fintech Solutions LLP` Description:
`Estimate monthly EMI, total interest and repayment using your loan amount, tenure and annual interest rate.`

### Contact

Title: `Contact Sohum Fintech Solutions LLP` Description:
`Contact Sohum Fintech Solutions LLP to discuss the services you are interested in. Verify published phone, email and location before launch.`

## 4. Structured data

Use only structured data that reflects verified facts. Potential types
include `Organization` and `WebSite`; use a local-business type only if
appropriate and accurate. Do not invent a street address, opening hours,
ratings, reviews, or registration information.

Financial-services pages may be held to higher trust expectations by
users and search engines. Clearly identify the company,
authorship/review responsibility where relevant, risks, and the basis of
any claims.

## 5. Analytics

If the client approves analytics, track: - `cta_click` with CTA location
and type. - `service_card_click` with service slug. - `emi_calculation`
without sending personally identifying input data. -
`lead_form_start`. - `lead_form_submit_success`. -
`lead_form_submit_error` using non-sensitive error categories.

Choose an analytics provider only after reviewing the client's privacy
requirements and consent obligations. Do not send names, phone numbers,
email addresses, messages, or financial application details to
analytics.

## 6. Performance practices

-   Optimize hero imagery and use responsive image sizes.
-   Avoid loading large hero images as CSS backgrounds if optimization
    benefits are lost.
-   Use `next/image` where appropriate.
-   Use `next/font` or carefully optimized font loading.
-   Avoid unnecessary animation and third-party scripts.
-   Lazy-load below-the-fold imagery.
-   Reserve image dimensions to reduce layout shift.
-   Test on a mid-range mobile device and throttled network.

## 7. Launch checks

-   Verify the domain in Google Search Console.
-   Submit sitemap.
-   Confirm preferred hostname and redirects.
-   Confirm no staging URLs are indexed.
-   Check metadata previews and broken links.
-   Test Core Web Vitals and accessibility.
-   Verify conversion events without exposing personal data.
