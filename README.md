# E-commerce UI

Frontend-only e-commerce interface built with Next.js, TypeScript, React, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The shared component showcase is available during development at
[http://localhost:3000/dev/components](http://localhost:3000/dev/components).
The route is marked `noindex, nofollow` and is not part of the storefront.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Product behavior is currently represented only by UI and mock/local state. Backend services, authentication, payments, databases, and business rules are outside this repository.
