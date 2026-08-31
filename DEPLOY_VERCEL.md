# Deploying to Vercel

This project is a TanStack Start (React 19 + Vite 7) app with SSR.

## Steps

1. Push the project to a GitHub/GitLab repo (or drag-and-drop the zip into Vercel).
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Other** (settings are already provided by `vercel.json`).
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: handled automatically (Build Output API `.vercel/output`).
4. Node.js version: 20 or newer.
5. Deploy.

## How it works

`vite.config.ts` detects Vercel's `VERCEL` environment variable and pins the
Nitro `vercel` preset, so the production build emits `.vercel/output` which
Vercel serves directly (static assets + SSR function). Locally and on Lovable
the default target is used, so nothing else changes.

## Environment variables

None are required for this UI-only site. Any client-side variable must be
prefixed with `VITE_` and added in Vercel → Project → Settings → Environment Variables.
