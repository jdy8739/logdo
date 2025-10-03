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
src/components/
├── common/
│   ├── layout/          # Header, Footer, Layout (applied via wrapPageElement in gatsby-browser/ssr)
│   ├── content/         # Code, CodeBlock (PrismJS integration)
│   └── Seo.tsx         # SEO head tags
├── main/               # Category, Introduction (for main page)
└── post/               # PostHeader, PostBody, PostItem, PostList, TableOfContents, Comments
```

### Styling

- Type-safe CSS-in-TS implementation using Vanilla Extract (`.css.ts` files)
- `src/styles/responsive.css.ts`: Responsive media query definitions
- Component-specific CSS files co-located in same directory (e.g., `PostBody.tsx` ↔ `PostBody.css.ts`)

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

- Use **pnpm** as package manager (see packageManager field in package.json)
- PrismJS theme globally imported in `gatsby-browser.tsx` ('prism-tomorrow.min.css')
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
- **NEVER** modify `gatsby-browser.tsx` PrismJS imports - both `prismjs/themes/prism-tomorrow.min.css` and `./src/styles/prism-theme.css` must remain
