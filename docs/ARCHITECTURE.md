# Application Architecture

## 1. Overview

The base product is a content-focused marketing site. Use Next.js server
rendering for public pages and small client components for interactive
elements such as the EMI calculator, mobile navigation, and enquiry
form.

``` text
Visitor
  |
  v
Next.js website
  |-- Public content pages (server-rendered)
  |-- Service cards and CTAs
  |-- Client-side EMI calculator
  |-- Contact / enquiry form
  |
  +--> Telephone / Email / WhatsApp links
  |
  +--> Optional server API for enquiries
          |
          +--> Input validation
          +--> Rate limiting / spam checks
          +--> Optional database
          +--> Email notification service
```

## 2. Route plan

-   `/` --- homepage
-   `/investments` --- overview
-   `/investments/mutual-funds` --- optional detail page
-   `/investments/stocks` --- optional detail page
-   `/investments/insurance` --- optional detail page
-   `/loans` --- loan overview
-   `/loans/home-loan`
-   `/loans/loan-against-property`
-   `/loans/vehicle-loan`
-   `/loans/business-loan`
-   `/loans/project-financing`
-   `/loans/personal-loan`
-   `/loans/education-loan`
-   `/emi-calculator`
-   `/about`
-   `/contact`
-   `/privacy-policy`
-   `/disclaimer`

Routes marked optional should be prioritized according to the final
budget and SEO requirements. If the base scope only allows a smaller
number of pages, use homepage sections and shared service templates.

## 3. Rendering strategy

-   Server components for text, layout, and service content.
-   Client components for calculator controls, tabs, mobile navigation,
    and form interaction.
-   Use static generation for content pages where possible.
-   Use route handlers only for server-side operations such as storing
    enquiries or sending notifications.
-   Do not expose SMTP credentials, database credentials, API keys, or
    other secrets to the browser.

## 4. EMI calculation

Let: - `P` = principal - `r` = monthly interest rate as a decimal
(`annualRate / 12 / 100`) - `n` = number of monthly instalments

For `r > 0`: `EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)`

For `r = 0`: `EMI = P / n`

Round displayed currency to the nearest rupee, while retaining
sufficient internal precision. Use
`Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })`
for display.

Total repayment = EMI × n.\
Total interest = total repayment − P.

Document whether the calculator assumes a fixed interest rate and equal
monthly instalments. Actual lender calculations, fees, insurance, rate
changes, and rounding may differ.

## 5. Lead data flow (optional backend)

1.  Visitor submits the enquiry form.
2.  Browser performs basic validation.
3.  Server validates the request again with a shared schema.
4.  Server applies rate limiting and spam controls.
5.  Server stores only approved, necessary fields if persistence is
    enabled.
6.  Server sends a notification through an approved provider.
7.  Browser receives a generic success or failure response.
8.  Logs must not contain unnecessary personal or financial data.

## 6. Data minimization

Suggested initial enquiry fields: - Name - Phone or email (at least one
required) - Service category - Optional short message - Consent checkbox
where appropriate

Do not request PAN, Aadhaar, account numbers, credentials, or financial
documents in a general enquiry form.

## 7. Security boundaries

-   HTTPS in production.
-   Secrets stored in hosting environment variables.
-   Server-side validation and rate limiting for write endpoints.
-   Restrict CORS only if a separate API origin is introduced.
-   Keep dependencies updated.
-   Avoid collecting sensitive data until a documented need and
    appropriate controls are approved.
-   Set a retention and deletion process if leads are stored.
-   Add a privacy notice and client-approved legal copy.

## 8. Future extensions

-   Admin lead dashboard.
-   CRM integration.
-   Approved analytics and conversion tracking.
-   CMS for content editing.
-   Hindi localization.
-   Lender integrations, only after separate discovery, contractual,
    security, and compliance review.
