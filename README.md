# NEXT_STATIC_GEN_BAILOUT error with cacheComponents and Prisma on Vercel

After upgrading to Vercel CLI 50.27.0, Next.js apps using Prisma and `cacheComponents` started getting this runtime error when prefetching links:

```
2026-03-09 18:28:01.661 [error] Error: Route "/[id]" used `new Date()` before accessing either uncached data (e.g. `fetch()`) or Request data (e.g. `cookies()`, `headers()`, `connection()`, and `searchParams`). Accessing the current time in a Server Component requires reading one of these data sources first. Alternatively, consider moving this expression into a Client Component or Cache Component. See more info here: https://nextjs.org/docs/messages/next-prerender-current-time
    at ignore-listed frames
2026-03-09 18:28:01.661 [error] To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running `next dev`, then open "/[id]" in your browser to investigate the error.
  - Rerun the production build with `next build --debug-prerender` to generate better stack traces.
2026-03-09 18:28:01.661 [error] Error: 
    at async m (.next/server/chunks/ssr/_6d94782d._.js:1:7177) {
  code: 'NEXT_STATIC_GEN_BAILOUT'
}
```

## Steps to Reproduce

1. Create a Next.js app
2. Enable `cacheComponents` in `next.config.ts`
3. Create a route with dynamic parameters (e.g. `pages/[id].tsx`)
4. Use Prisma to fetch data in the route's Server Component
5. Add a link to the home page using `prefetch` to prefetch the route
6. Deploy to Vercel
7. Visit https://nextjs-cache-prefetch-error.vercel.app/
8. Open the browser network tab. You'll see 500 errors for the prefetch requests
9. Check the Vercel logs to see the error message above

## Notes

- This error doesn't happen on Vercel CLI 50.26.1 or earlier
- If we make a prisma query to a route without dynamic parameters (e.g. `posts/page.tsx`), then we get a build time error instead of a runtime error, which makes me guess this is expected behavior and the "bug" here must on Next.js not actually catching this case for dynamic routes? So, I'm not sure if this should be fixed on Vercel CLI or Next.js side.
