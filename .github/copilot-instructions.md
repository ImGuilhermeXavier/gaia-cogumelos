# Gaia Cogumelos - Project Guidelines

## Overview

B2B landing page for Gaia Cogumelos, a Ganoderma lucidum (Reishi) supplier. Built as a SEO-optimized static site in Portuguese using vanilla TypeScript with Vite and Tailwind CSS.

## Code Style

- **Language**: All user-facing content, comments, and variable names in Portuguese (pt-BR)
- **TypeScript**: Vanilla TypeScript—no frameworks (React, Vue, etc.)
- **Formatting**: Use Biome for linting and formatting (`biome.json` contains project rules)
- **Module Pattern**: Use IIFEs (Immediately Invoked Function Expressions) for encapsulation in [src/main.ts](src/main.ts)
- **Imports**: ES modules with `.css` imports in TypeScript files

## Build and Test

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Important**: Project uses `rolldown-vite` (Vite fork) instead of standard Vite—configured in package.json resolutions.

## Architecture

- **Entry points**: 
  - HTML: [index.html](index.html) (single-page with inline content)
  - TypeScript: [src/main.ts](src/main.ts) (mobile menu, contact form logic)
  - Styles: [src/style.css](src/style.css) (Tailwind config import)
- **No routing**: Single-page site with anchor navigation
- **Public folder**: Static assets, schema.org JSON files for SEO

## Conventions

### Tailwind CSS

- **Version**: Tailwind CSS v4 with Vite plugin (`@tailwindcss/vite`)
- **Custom colors**: Use semantic color names from [tailwind.config.js](tailwind.config.js):
  - `forest` (#1B4332) - primary dark green
  - `leaf` (#40916C) - accent green
  - `mint` (#95D5B2) - light green
  - `cream` (#F6F4EB) - neutral background
  - `stone` (#3D3D3D) - text/dark neutral
- **Class sorting**: Biome sorts Tailwind classes automatically—don't manually reorder

### TypeScript Patterns

- **DOM queries**: Always check for null before using elements
  ```typescript
  const element = document.getElementById('id')
  if (!element) return
  ```
- **Event handlers**: Use `addEventListener` with explicit types
- **Async/await**: Prefer over promise chains for readability

### Accessibility

- Mobile menu must include:
  - `aria-expanded` attribute updates
  - Keyboard support (ESC to close)
  - Focus management
  - Click-outside-to-close behavior
- Follow accessibility rules in biome.json (alt text, button types, etc.)

### SEO

- Structured data: Update schema.org JSON files in `/public` when business info changes
- Meta tags: Keep Open Graph, Twitter Card, and geo tags current in index.html

## Portuguese Naming

Variables and functions should use Portuguese terms relevant to the business domain:
- `cogumelos` (mushrooms), `reishi`, `ganoderma`
- `formulario` (form), `enviar` (send), `contato` (contact)
- `empresa` (company), `mensagem` (message)

## Common Tasks

- **Adding sections**: Edit [index.html](index.html) directly—no template system
- **Styling changes**: Update Tailwind classes or extend theme in [tailwind.config.js](tailwind.config.js)
- **Interactive features**: Add to [src/main.ts](src/main.ts) using IIFE pattern
- **Linting**: Run `npx biome check .` before committing
