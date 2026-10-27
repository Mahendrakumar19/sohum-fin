# Optional Lead API Specification

**Scope:** This specification applies only if the client approves
server-side lead capture. The marketing site can launch without a custom
database/API if a suitable third-party form workflow is selected.

## 1. Endpoint

`POST /api/leads`

## 2. Request

Content type: `application/json`

Example:

``` json
{
  "name": "Aarav Sharma",
  "phone": "+919876543210",
  "email": "aarav@example.com",
  "service": "home-loan",
  "message": "Please contact me about home loan options.",
  "consent": true
}
```

This is illustrative test data only. Do not use real personal data in
examples, logs, or source control.

## 3. Field rules

-   `name`: required, trimmed, reasonable maximum length.
-   `phone`: optional if email is provided; normalize and validate if
    supplied.
-   `email`: optional if phone is provided; validate if supplied.
-   At least one of phone or email is required.
-   `service`: required enum of approved service slugs.
-   `message`: optional, length-limited plain text.
-   `consent`: required if mandated by the approved privacy design.
-   Reject unknown fields if practical.
-   Do not accept PAN, Aadhaar, bank account credentials, or document
    uploads through this endpoint.

## 4. Success response

HTTP `201 Created`

``` json
{
  "ok": true,
  "message": "Your enquiry has been submitted."
}
```

## 5. Error responses

-   `400 Bad Request` --- malformed or invalid input.
-   `413 Content Too Large` --- request exceeds size limit.
-   `429 Too Many Requests` --- rate limit reached.
-   `500 Internal Server Error` --- unexpected server error.

Return generic public error messages. Never return stack traces,
database errors, SMTP credentials, or internal implementation details.

## 6. Server requirements

-   Validate using a shared Zod schema.
-   Rate-limit by an appropriate combination of IP/session and abuse
    signals.
-   Add spam protection if needed.
-   Set a request body size limit.
-   Use HTTPS.
-   Store only approved fields.
-   Protect database access with least-privilege credentials.
-   Avoid logging message contents and contact data unless necessary.
-   Configure retention/deletion rules before storing leads.
-   Ensure email delivery failures do not falsely report success if
    persistence also failed.

## 7. Data model (optional)

Suggested `Lead` fields: - `id` --- generated identifier - `name` -
`phone` nullable - `email` nullable - `service` - `message` nullable -
`consentAt` nullable - `status` --- new/contacted/qualified/closed -
`createdAt` - `updatedAt`

Admin workflow, authentication, export, and status updates are outside
the base website scope.

## 8. Security note

This API is for general enquiries only. It is not a loan application,
eligibility engine, underwriting service, or secure document-upload
portal.
