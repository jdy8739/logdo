# Static Assets Directory

This folder contains static files that are copied directly to the `public` folder during the Gatsby build process.

## Favicon

- **File**: `favicon.svg`
- **Location**: `/static/favicon.svg` → copies to `/public/favicon.svg`
- **Reference**: Added in `src/components/common/Seo.tsx:63`

## How It Works

### Local Development
```bash
pnpm develop
```
- Gatsby automatically copies `/static/*` → `/public/*`
- Favicon accessible at: `http://localhost:8000/favicon.svg`

### Production Build
```bash
pnpm build
```
- Same copy process: `/static/*` → `/public/*`
- Works with Netlify, Vercel, or any static host

## Customization

To replace the favicon:
1. Replace `/static/favicon.svg` with your own SVG
2. Keep the same filename, or update the path in `Seo.tsx`
3. Restart dev server to see changes

## Supported Formats
- `.svg` (recommended - scalable, theme-aware)
- `.png`, `.ico` (traditional formats)
- Multiple sizes for different devices (e.g., `favicon-16x16.png`, `favicon-32x32.png`)

## Current Implementation

The current favicon is a simple purple "L" logo. You can customize it or replace it with your brand logo.
