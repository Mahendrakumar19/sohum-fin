# Features and User Flows

## 1. Homepage discovery flow

1.  Visitor lands on the homepage.
2.  Visitor scans the hero headline and company introduction.
3.  Visitor chooses Explore Our Services, Investments, Loans, or EMI
    Calculator.
4.  Visitor opens a relevant service detail or section.
5.  Visitor clicks Get Started, Contact, call, email, or WhatsApp.

**Expected result:** The visitor can identify the service and contact
the company without confusion.

## 2. Loan discovery flow

1.  Visitor opens Loans.
2.  Visitor selects one of seven loan categories.
3.  Website displays approved information about the category.
4.  Visitor optionally uses the EMI calculator.
5.  Visitor submits a minimal enquiry or uses a direct contact channel.

Do not represent the website as a lender or imply approval is
guaranteed.

## 3. EMI calculator flow

### Inputs

-   Loan category
-   Principal amount
-   Annual interest rate
-   Tenure

### Behavior

-   Validate values.
-   Convert annual interest rate to monthly rate.
-   Calculate EMI using the formula in `ARCHITECTURE.md`.
-   Show monthly EMI, total repayment, and total interest.
-   Format values in INR.
-   Display an estimate disclaimer.

### Edge cases

-   Empty input.
-   Zero or negative principal.
-   Zero or negative tenure.
-   Negative or non-numeric rate.
-   Zero interest.
-   Very large values.
-   Decimal interest rates.
-   Values changed after a previous calculation.

## 4. Contact enquiry flow

1.  Visitor selects a service.
2.  Visitor enters their name and at least one contact method.
3.  Visitor optionally enters a short message.
4.  Browser validates required fields.
5.  If an API is used, server validates the same schema and applies spam
    controls.
6.  On success, show confirmation and a next-step message.
7.  On failure, retain safe form values where appropriate and allow
    retry.

## 5. Mobile navigation flow

1.  Visitor opens the menu button.
2.  Menu opens with accessible expanded state.
3.  Visitor selects a destination.
4.  Menu closes and focus remains sensible.
5.  Keyboard users can open, navigate, and close the menu.

## 6. UI states to design

-   Default
-   Hover
-   Keyboard focus
-   Active/selected
-   Disabled
-   Loading
-   Empty input
-   Validation error
-   Submission success
-   Submission failure
-   No network / server unavailable

## 7. CTA mapping

-   Explore Our Services → services section.
-   Know More → investments overview or detail page.
-   Explore Loan Options → loans section.
-   Calculate EMI → calculate and show results.
-   Get Started → contact/enquiry form.
-   Call → verified `tel:` link.
-   Email → verified `mailto:` link.
-   WhatsApp → approved number with a prefilled, non-sensitive message.

Never put sensitive personal data in a prefilled WhatsApp URL.
