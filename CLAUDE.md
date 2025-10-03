# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal development blog built with Gatsby 5. Content is sourced from Contentful CMS, styled with Vanilla Extract, and deployed statically to Netlify.

## Tech Stack

- **Gatsby 5**: React-based static site generator
- **Contentful**: Headless CMS for blog posts and asset management
- **Vanilla Extract**: CSS-in-TypeScript styling
- **PrismJS**: Code block syntax highlighting
- **TypeScript**: Strict mode enabled

## Essential Commands

```bash
# Start development server (http://localhost:8000)
pnpm develop
# or
pnpm start

# Production build
pnpm build

# Serve built site locally
pnpm serve

# Type check
pnpm typecheck

# Clean Gatsby cache
pnpm clean
```

## Environment Variables

Required variables in `.env` file:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `GOOGLE_ANALYTICS_ID`

## Architecture

### Contentful Integration

- Queries `BlogPost` content type from Contentful via GraphQL
- Rich Text content rendered using `@contentful/rich-text-react-renderer`
- Custom rendering logic defined in `src/const/render-options.ts`
- Custom renderers provided for BLOCKS, INLINES, and MARKS elements

### Page Generation

- **Main Page** (`src/pages/index.tsx`): Lists all blog posts
- **Post Pages** (`src/pages/{contentfulBlogPost.slug}.tsx`): Dynamically generated using Gatsby's File System Route API
  - Queries post data via GraphQL (title, date, slug, category, thumbnail, content)
  - Composed of `PostHeader` and `PostBody` components

### Rich Text Rendering System

**Core Files:**
- `src/const/render-options.ts`: Defines Contentful Rich Text rendering options
- `src/const/node-renderers.ts`: Custom node renderers (images, links, headings, etc.)
- `src/const/tag-map.ts`: Maps Contentful block/inline types to HTML tags
- `src/const/enums.ts`: BLOCKS, INLINES, MARKS enum definitions
- `src/const/classnames/`: Vanilla Extract CSS class name definitions

**Special Handling:**
- Code blocks: Inline/block differentiation via `language::` metadata
  - Inline code: `<Code>` component
  - Block code: `<CodeBlock>` component + PrismJS highlighting
- Heading elements: Auto-generate text-based IDs (spaces converted to `-`)
- Images: Optimized with Gatsby Image plugin, rendered with figcaption
- External links: Automatically add `target="_blank"` and `rel="noopener noreferrer"`

### Component Structure

```
src/
├── components/
│   ├── common/
│   │   ├── layout/          # Header, Footer, Layout (applied via wrapPageElement in gatsby-browser/ssr)
│   │   ├── content/         # Code, CodeBlock (PrismJS integration)
│   │   ├── ThemeToggle.tsx  # Theme mode switcher (light/dark/system)
│   │   └── Seo.tsx          # SEO head tags
│   ├── main/                # Category, Introduction (for main page)
│   └── post/                # PostHeader, PostBody, PostItem, PostList, TableOfContents, Comments
└── contexts/
    └── ThemeContext.tsx     # Theme state management with localStorage & OS sync
```

### Styling

- Type-safe CSS-in-TS implementation using Vanilla Extract (`.css.ts` files)
- `src/styles/responsive.css.ts`: Responsive media query definitions
- Component-specific CSS files co-located in same directory (e.g., `PostBody.tsx` ↔ `PostBody.css.ts`)

#### Dark Mode Theming

- Theme system with 3 modes: **light**, **dark**, **system** (syncs with OS preference)
- CSS variable-based theming using `createGlobalThemeContract` from Vanilla Extract
- Core theme files:
  - `src/styles/theme.css.ts`: Theme contract and color tokens for light/dark modes
  - `src/styles/global.css.ts`: Global styles with theme variables
  - `src/styles/prism-theme.css`: PrismJS syntax highlighting themes for light/dark
- Theme applied via `[data-theme="light|dark"]` attribute on `<html>` element
- ThemeContext manages state, localStorage persistence, and OS theme synchronization

### SEO Plugins

- `gatsby-plugin-canonical-urls`: Canonical URL configuration
- `gatsby-plugin-sitemap`: Auto-generate sitemap.xml
- `gatsby-plugin-robots-txt`: Generate robots.txt
- `gatsby-plugin-gtag`: Google Analytics v4

### Type System

- Gatsby GraphQL Typegen enabled (`graphqlTypegen: true`)
- Auto-generated types: `src/gatsby-types.d.ts`
- Custom types: `src/types/type.d.ts` (Post, PostItem, PostDetail)
- JSX runtime: `react-jsx` (automatic import)

## Development Notes

- Use **Node.js version 20** (Gatsby 5 supports Node 18 and 20, not Node 24+)
  - Run `nvm use 20` before starting development
  - See `.nvmrc` file for version specification
- Use **pnpm** as package manager (see packageManager field in package.json)
- **PrismJS theming**: Two imports required in `gatsby-browser.tsx`
  - `prismjs/themes/prism-tomorrow.min.css`: Base PrismJS theme with syntax colors
  - `./src/styles/prism-theme.css`: Custom overrides for light/dark mode switching
  - Both imports must coexist - removing either will break code highlighting
- Layout component automatically applied to all pages via `wrapPageElement` in gatsby-browser/ssr
- May need to restart dev server after Contentful content changes

## Code Style Guidelines

### Export Conventions
- **Main components/hooks**: Use `export default`
- **Sub-components, utilities, types**: Use named exports `export {}`

Example:
```typescript
// Main component - default export
const MyComponent = () => { ... }
export default MyComponent;

// Sub utilities - named exports
export { helperFunction, UtilityType };
```

### Files to Never Modify

**gatsby-browser.tsx** - PrismJS imports (lines 4-5):
- **NEVER** remove `import 'prismjs/themes/prism-tomorrow.min.css'` - provides base syntax highlighting colors
- **NEVER** remove `import './src/styles/prism-theme.css'` - applies light/dark mode overrides
- Both imports must remain for proper code block theming across all theme modes
