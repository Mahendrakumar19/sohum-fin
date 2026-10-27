# Development and Deployment Guide

## 1. Prerequisites

-   Supported Node.js LTS version compatible with the selected Next.js
    release.
-   npm (or the package manager selected for the repository).
-   Git and access to the project repository.
-   Client-approved logo, imagery, copy, and verified contact details.
-   Domain and hosting account access for launch.

## 2. Local setup

After the project has been scaffolded:

``` bash
npm install
npm run dev
```

Open the local development URL printed by Next.js.

Before committing:

``` bash
npm run lint
npm run typecheck
npm run build
```

The `typecheck` and test scripts should be added to `package.json` when
their tools are configured.

## 3. Environment variables

Create `.env.example` with variable names and safe placeholder values
only. Examples, if required:

``` dotenv
NEXT_PUBLIC_SITE_URL=https://example.com
# Optional backend only:
DATABASE_URL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
LEAD_NOTIFICATION_TO=
```

Do not commit `.env.local` or production secrets. Use the hosting
provider's secret manager/environment configuration. `NEXT_PUBLIC_`
values are exposed to the browser and must never contain secrets.

## 4. Deployment options

### Option A: Vercel

-   Connect the Git repository.
-   Configure production environment variables.
-   Set the production domain.
-   Deploy the production branch.
-   Verify HTTPS, redirects, routes, forms, and build output.

### Option B: VPS

-   Install a supported Node.js version.
-   Build the application in the deployment environment.
-   Run the production server under an appropriate process manager or
    service manager.
-   Put Nginx, Caddy, or the existing reverse proxy in front.
-   Configure HTTPS and renewal.
-   Restrict database/network access and firewall ports.
-   Configure health monitoring and backups if a database is used.

Choose one hosting path based on the client's access, maintenance
expectations, and operating budget.

## 5. Domain and DNS

-   Confirm the exact domain and preferred hostname.
-   Configure the required DNS records with the hosting provider's
    documented values.
-   Redirect HTTP to HTTPS.
-   Choose either apex or `www` as canonical and redirect the other.
-   Do not publish placeholder contact details or test content.

## 6. Release checklist

1.  Obtain client approval for content and design.
2.  Verify logo and image licensing.
3.  Configure environment variables.
4.  Run lint, type checks, tests, and production build.
5.  Deploy to preview/staging.
6.  Complete QA and client acceptance.
7.  Deploy to production.
8.  Verify live domain, HTTPS, forms, calculator, metadata, and sitemap.
9.  Submit sitemap to Search Console if requested.
10. Document repository ownership, hosting access, and support
    arrangements.

## 7. Maintenance

Agree on the warranty period, response times, update responsibilities,
backup strategy, and recurring charges in writing. Hosting and domain
renewals are separate from one-time development fees unless the contract
states otherwise.
