# Technology Stack and Engineering Conventions

## 1. Recommended base stack

-   Framework: Next.js App Router
-   UI library: React
-   Language: TypeScript with strict mode
-   Styling: Tailwind CSS
-   Component primitives: shadcn/ui and Radix UI where useful
-   Icons: Lucide React
-   Forms: React Hook Form + Zod
-   Images: Next.js Image component
-   Font: `next/font` with an approved font
-   Version control: Git and GitHub
-   Hosting: Vercel or an existing managed VPS, selected based on client
    access and operating preference

## 2. Optional backend stack

Only add this if leads must be stored or managed: - API: Next.js Route
Handlers or Node.js/Express - Database: PostgreSQL or MySQL - ORM:
Prisma - Email: transactional email provider or Nodemailer through an
approved SMTP service - Spam controls: server-side rate limiting and
CAPTCHA/Turnstile where appropriate - Admin authentication: vetted
authentication library and role-based access

Do not introduce a database simply to calculate EMI. The base calculator
can run in the browser.

## 3. Suggested dependencies

Install current compatible stable versions at project creation and
commit the lockfile: - `next` - `react` - `react-dom` - `typescript` -
`tailwindcss` - `lucide-react` - `react-hook-form` - `zod` -
`@hookform/resolvers` - selected shadcn/ui components - optional:
`motion` - optional: `recharts`

Avoid adding packages without a clear feature requirement.

## 4. Code conventions

-   Use TypeScript strict mode.
-   Prefer server components for static content.
-   Add client components only where interactivity is required.
-   Keep content in typed data objects when it improves maintainability.
-   Use shared components rather than duplicating markup.
-   Use server-side validation for any data written to a backend.
-   Never put secrets in client-side environment variables.
-   Format and lint code before pull requests and deployment.
-   Do not disable TypeScript or lint checks merely to get a build
    passing.

## 5. Suggested project structure

``` text
sohum-fintech/
├── public/
│   ├── images/
│   ├── icons/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── investments/
│   │   ├── loans/
│   │   ├── emi-calculator/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── privacy-policy/
│   │   ├── disclaimer/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── forms/
│   │   ├── calculator/
│   │   └── ui/
│   ├── lib/
│   │   ├── emi.ts
│   │   ├── validation/
│   │   ├── analytics.ts
│   │   └── utils.ts
│   ├── content/
│   └── types/
├── tests/
├── .env.example
├── package.json
└── README.md
```

## 6. Quality gates

-   `npm run lint`
-   `npm run typecheck` (add script)
-   `npm run test` (if unit tests are configured)
-   `npm run build`
-   Manual responsive, accessibility, form, and calculator QA

## 7. Avoid in the base scope

-   Unnecessary microservices.
-   Redux or another global state library when local state is
    sufficient.
-   A database-backed CMS without a content-editing requirement.
-   User accounts or document uploads without a separately approved
    security plan.
