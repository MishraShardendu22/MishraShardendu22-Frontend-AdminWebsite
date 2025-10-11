# Vite Microfrontends Configuration - UPDATED

## ✅ Correct Configuration (January 2025)

The Vite configuration has been updated to use the **plugin approach** instead of the wrapper approach.

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import { microfrontends } from '@vercel/microfrontends/experimental/vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    microfrontends(), // Add this as the first plugin
    preact(),
    tailwindcss(),
  ],
  // ... rest of your config
})
```

## Key Points

1. **Import:** Use `@vercel/microfrontends/experimental/vite`
2. **Usage:** Add `microfrontends()` as a plugin (preferably first)
3. **Version:** Requires `@vercel/microfrontends` version **1.0.1** or higher
4. **Order:** Place `microfrontends()` before other plugins for best results

## Installation

```bash
pnpm i @vercel/microfrontends
```

## How It Works

The `microfrontends()` plugin automatically:

- Prefixes all static assets with `/vc-ap-<hash>`
- Configures the build to work with Vercel's microfrontends routing
- Handles CSS, JS, and other build artifacts

## With Base Path (Optional)

If you're using a base path:

```typescript
export default defineConfig({
  plugins: [microfrontends({ basePath: '/admin' })],
})
```

Then add to `microfrontends.json`:

```json
{
  "applications": {
    "mishrashardendu22-admin": {
      "routing": [
        {
          "paths": ["/admin/:path*"]
        }
      ]
    }
  }
}
```

## Troubleshooting

### TypeScript Error

If you see `Cannot find module '@vercel/microfrontends/experimental/vite'`:

- Make sure you have version 1.0.1+ installed
- The error won't affect Vercel builds (it uses the deployed version)
- You can ignore it or update your local package

### Assets Not Loading

- Check that `microfrontends()` is the first plugin
- Verify the package is installed in dependencies
- Check browser DevTools → Network for 404s

## References

- [Vercel Microfrontends Docs - Vite](https://vercel.com/docs/microfrontends/quickstart#set-up-microfrontends-with-your-framework)
- Requires `@vercel/microfrontends` 1.0.1+
