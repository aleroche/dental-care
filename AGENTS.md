# AGENTS.md - Dental Care Project Guidelines

## Project Overview

This is a Next.js 16 application with TypeScript, Tailwind CSS v4, and shadcn/ui components.
The project uses the App Router architecture and follows a modular folder structure.

## Build, Lint, and Test Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
```

### Build
```bash
npm run build        # Create production build
npm run start        # Start production server (after build)
```

### Linting
```bash
npx next lint        # Run ESLint (Next.js built-in)
```

### Testing (Recommended Setup)
This project does not currently have a test framework configured. For new implementations:

```bash
# Install Vitest (recommended for Next.js)
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom

# Run all tests
npx vitest

# Run single test file
npx vitest run src/components/MyComponent.test.tsx

# Run tests in watch mode
npx vitest

# Run single test
npx vitest run --reporter=verbose src/path/to/test.test.tsx -t "test name"
```

For Jest users:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
npx jest                    # Run all tests
npx jest --testPathPattern=src/components  # Run specific file
npx jest --testNamePattern="test name"     # Run single test
```

## Code Style Guidelines

### TypeScript

- **Always use strict TypeScript**: The `tsconfig.json` has `"strict": true`
- **Avoid `any`**: Use `unknown` or proper typing instead
- **Use type inference**: Let TypeScript infer types when obvious
- **Explicit return types**: Add return types to exported functions for clarity
- **Use `interface` for objects**: Prefer `interface` over `type` for object shapes

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

export function getUser(id: string): Promise<User | null> {
  // implementation
}

// Avoid
type User = {
  id: string;
  name: string;
  email: string;
};
```

### Imports

- **Use path aliases**: Use `@/` prefix for imports (configured in tsconfig.json)
- **Order imports**: External first, then internal
- **Named imports**: Use named imports for React, Next.js components

```typescript
// External imports
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Internal imports
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
```

### Component Structure

Follow this structure for React components:

```typescript
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ComponentProps {
  title: string;
  onSubmit: () => void;
  className?: string;
}

export function Component({ title, onSubmit, className }: ComponentProps) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // side effects
  }, []);

  return (
    <div className={cn("base-classes", className)}>
      {title}
    </div>
  );
}
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `UserCard`, `AppointmentForm`)
- **Hooks**: camelCase with `use` prefix (`useAuth`, `useAppointments`)
- **Utilities**: camelCase (`formatDate`, `validateEmail`)
- **Constants**: UPPER_SNAKE_CASE for config values
- **Files**: kebab-case for non-component files (`utils.ts`, `api-client.ts`)
- **React Components**: PascalCase files (`Button.tsx`, `UserCard.tsx`)

### CSS and Styling

- **Use Tailwind CSS**: Prefer utility classes over custom CSS
- **Use `cn()` utility**: Merge classes with `cn()` from `@/lib/utils`
- **Dark mode support**: Include dark mode classes (`dark:bg-black`)
- **Responsive design**: Use mobile-first approach (`sm:`, `md:`, `lg:`)

```typescript
// Good
<div className={cn(
  "flex items-center justify-between p-4",
  isActive && "bg-primary text-white",
  className
)} />

// Avoid
<div style={{ display: 'flex', alignItems: 'center' }} />
```

### Error Handling

- **Use proper error boundaries**: Implement ErrorBoundary components
- **Handle async errors**: Use try/catch with proper error states
- **Type error responses**: Define error types for API responses

```typescript
interface ApiError {
  code: string;
  message: string;
}

async function fetchData() {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      // handle typed error
    }
    throw error;
  }
}
```

### API Routes (Next.js App Router)

- **Place in `app/api/`**: Follow Next.js App Router conventions
- **Use proper HTTP methods**: GET, POST, PUT, DELETE
- **Return typed responses**: Use `NextResponse` with proper typing
- **Handle errors gracefully**: Return appropriate status codes

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchData();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
```

### shadcn/ui Components

- **Use shadcn for UI**: Install components via `npx shadcn@latest add [component]`
- **Customize in components/ui/**: Edit components in `components/ui/` directory
- **Follow shadcn patterns**: Use the installed components as base

### Performance Guidelines

- **Use Server Components**: Default to Server Components in App Router
- **Client Components**: Add `'use client'` only when needed (hooks, interactivity)
- **Image optimization**: Use `next/image` for images
- **Lazy loading**: Use `next/dynamic` for heavy components

### File Organization

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── (route)/           # Route groups
│   ├── layout.tsx         # Layouts
│   └── page.tsx           # Pages
├── components/
│   ├── ui/                # shadcn/ui components
│   └── shared/            # Shared components
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

### Git Conventions

- **Commits**: Use conventional commit format (`feat:`, `fix:`, `docs:`)
- **Branch naming**: `feature/description`, `fix/description`, `hotfix/description`
- **Pull requests**: Keep focused and small

### Additional Recommendations

1. **Add ESLint**: Run `npx next lint` to set up ESLint with recommended rules
2. **Add Prettier**: Install `prettier` and `.prettierrc` for consistent formatting
3. **Add testing**: Set up Vitest or Jest as shown above before writing tests
4. **Use environment variables**: Add `.env.local` for local development
5. **Type checking**: Run `npx tsc --noEmit` to type-check without building
