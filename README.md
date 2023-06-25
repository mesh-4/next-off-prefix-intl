This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Currently not interest at e-commerce and tired to create i18n route redirect handle those things so did that.

## client side

With [react-intl](https://github.com/formatjs/formatjs/tree/main/packages/react-intl).

## server side

`src/locales/server/intl.ts` to create intl instance from server side. `useIntl` in that file can be used at server component, layout and page.

## middleware

Steps:

1. Take a look at is there any `lang` been set into cookies.
2. Then check is pathname has `lang` params(`/?lang=en`).
3. Finally extract and match language from `Accept-Language` header.

Mostly base on https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
