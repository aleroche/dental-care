# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

> There is no lint or test script defined. Vitest is installed but no test files exist yet.

## Architecture

**MiraMar Family Dental** — a Next.js 16 App Router website for a dental practice.

### Routing

Uses the `/app` directory (App Router). Pages: `/`, `/about`, `/services`, `/contact`, `/patients`, `/blog`.

### Component Organization

- `components/sections/` — One file per homepage section (hero, about, services, etc.). The home `page.tsx` composes all 11 sections in order.
- `components/navbar/` — Site navigation with theme toggle.
- `components/ui/` — shadcn/ui components (New York style, neutral base color).
- `components/providers/` — `ThemeProvider` wrapping the root layout.

### Data / Constants

All static content lives in `lib/`:
- `constants.ts` — App-wide constants
- `navigation.ts`, `services.ts`, `team.ts`, `financing.ts`, `insurance.ts` — Structured data consumed by section components

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.*` file — configuration is in `app/globals.css`).
- Custom CSS variables define the color palette (primary: `#0A6CFF` blue, accent: `#00B894` green) and light/dark themes.
- Fonts: DM Sans (body) and Cormorant Garamond (headings) from Google Fonts.
- Custom animations (`fadeInUp`, `float`, `pulse-gentle`, `blob`) and stagger delay utilities are defined in `globals.css`.
- Dark mode via `next-themes` (default: system preference, stored in localStorage key `"theme"`).

### Key Libraries

- `framer-motion` — animations
- `lucide-react` — icons
- `@radix-ui/react-*` — unstyled accessible primitives (via shadcn)
- `class-variance-authority` + `clsx` + `tailwind-merge` — className management (use `cn()` from `lib/utils.ts`)

### Path Aliases

`@/` maps to the project root. Use `@/components`, `@/lib`, `@/hooks`, `@/components/ui`.

### Image Configuration

Remote images are allowed from `miramarfamilydental.com` and `images.unsplash.com` (configured in `next.config.ts`).
