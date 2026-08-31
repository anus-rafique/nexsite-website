// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// On Vercel (VERCEL env var is set during their build) we pin the nitro "vercel"
// preset so the build emits .vercel/output. On Netlify (NETLIFY env var is set
// during their build) we pin the "netlify" preset instead. Everywhere else the
// default target is used.
const isVercel = !!process.env["VERCEL"];
const isNetlify = !!process.env["NETLIFY"];

export default defineConfig({
  ...(isVercel ? { nitro: { preset: "vercel" } } : {}),
  ...(isNetlify ? { nitro: { preset: "netlify" } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});