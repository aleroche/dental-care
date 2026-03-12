# SPEC.md - MiraMar Family Dental Website

## 1. Project Overview

- **Project Name**: MiraMar Family Dental Website
- **Type**: Dental clinic website (marketing + booking)
- **Core Functionality**: Multi-page dental care website with bilingual support (English/Spanish), service展示, team presentation, patient testimonials, and contact information
- **Target Users**: Families in Katy, Texas seeking dental care services

---

## 2. Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | shadcn/ui |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Dark Mode | next-themes |
| Forms | React Hook Form |
| Animations | Framer Motion |
| Testing | Vitest + React Testing Library |

### Render Strategy (Priority Order)

1. **Server Components (SSR)** - Default for all pages
2. **Static Generation** - When content doesn't change frequently
3. **Client Components** - Only for interactivity (menus, forms, animations)

---

## 3. Design System

### Colors

| Role | Color | Hex |
|------|-------|-----|
| Primary | Blue | `#0A6CFF` |
| Accent | Green | `#00B894` |
| Neutral | Gray 50-900 | Tailwind default |
| Background Light | White | `#FFFFFF` |
| Background Dark | Black | `#000000` |

### Dark Mode

- **Provider**: `next-themes`
- **Options**: `light` | `dark` | `system`
- **Storage**: `localStorage` key: `theme`

### Typography

- **Font Family**: Geist (configured in `app/layout.tsx`)
- **Headings**: Bold, varying sizes by section
- **Body**: Regular weight, readable line-heights

---

## 4. Pages Structure

```
app/
├── page.tsx              # Home (priority)
├── about/
│   └── page.tsx         # About page
├── services/
│   └── page.tsx        # Services listing
├── patients/
│   └── page.tsx        # Patient info
├── blog/
│   └── page.tsx        # Blog/News
├── contact/
│   └── page.tsx        # Contact form
└── api/                # Future API routes
```

---

## 5. Components Architecture

```
components/
├── ui/                    # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── badge.tsx
│   ├── sheet.tsx         # Mobile drawer
│   ├── dropdown-menu.tsx
│   ├── navigation-menu.tsx
│   └── ...
├── navbar/               # Navigation
│   ├── navbar.tsx        # Main navbar component
│   ├── mega-menu.tsx    # Desktop dropdown
│   ├── mobile-menu.tsx  # Mobile drawer
│   ├── language-switcher.tsx
│   └── cta-button.tsx
├── sections/             # Home page sections (11 total)
│   ├── hero-section.tsx
│   ├── offers-section.tsx
│   ├── about-section.tsx
│   ├── why-us-section.tsx
│   ├── bilingual-section.tsx
│   ├── services-section.tsx
│   ├── insurance-section.tsx
│   ├── financing-section.tsx
│   ├── team-section.tsx
│   ├── testimonials-section.tsx
│   └── footer.tsx
└── shared/               # Reusable components
    ├── container.tsx
    ├── heading.tsx
    ├── video-embed.tsx
    ├── service-card.tsx
    ├── team-card.tsx
    ├── testimonial-card.tsx
    └── section.tsx
```

---

## 6. Home Page Sections

### 6.1 Hero Section

- **Background**: Video (autoplay, muted, loop) with gradient overlay
- **Fallback**: Static image
- **Content**:
  - Headline: "Your family dentist in Katy, Texas"
  - Subheadline: "Top-rated dental care you can count on"
  - Description: "At MiraMar Family Dental, we're more than just your family dentist in Katy, Texas – we're your partners in oral health."
  - CTA: "Book your next appointment"

### 6.2 Offers Section

- **Layout**: 3-column grid of cards
- **Card Content**: Title, Description, CTA
- **Examples**:
  - New Patient Special
  - Free Consultation
  - Teeth Whitening Promo

### 6.3 About + Video Section

- **Layout**: Text | Video (side by side on desktop, stacked on mobile)
- **Content**: About text + CTA left, video testimonial/clinic video right

### 6.4 Why We Are Your Best Choice

- **Layout**: 3-column grid
- **Items**:
  1. Latest Dental Equipment
  2. Private Offices
  3. Affordable Dentist

### 6.5 Bilingual Clinic Section

- **Layout**: Image of team | Text
- **Content**: "Services available in English and Spanish"
- **CTA**: "Meet our team"

### 6.6 Services Section

- **Title**: "Comprehensive dental care for the whole family"
- **Layout**: 3x3 grid (9 services)
- **Services**:
  1. Dental Cleanings
  2. Dental Implants
  3. Cosmetic Dentistry
  4. Orthodontics
  5. Root Canals
  6. Pediatric Dentistry
  7. Teeth Whitening
  8. Emergency Dental Care
  9. Preventive Dentistry
- **Card Design**: Image background, overlay title, hover animation

### 6.7 Insurance Section

- **Layout**: Logo grid
- **Providers** (placeholders):
  - Delta Dental
  - Aetna
  - Cigna
  - Humana
  - MetLife
  - Guardian

### 6.8 Financing Options

- **Layout**: 4-column grid of cards
- **Each Card**: Logo, Description, "Apply now" button
- **Options** (placeholders):
  - Alphaeon Credit
  - Lending Club
  - Care Credit
  - Cherry

### 6.9 Medical Team Section

- **Layout**: 3 profile cards
- **Card Content**: Photo, Name, Description
- **Team Members**:
  - Dr Keyttia Beovides
  - Dr Tihany Rodriguez
  - Helen Vega RDH

### 6.10 Patient Stories (Testimonials)

- **Title**: "Real patient stories at our Katy dental office"
- **Layout**: Video cards
- **Each Card**: YouTube embed, Patient quote, Name

### 6.11 Footer

- **Layout**: 4-column grid
- **Column 1**: Logo, Description, Social icons
- **Column 2**: Quick Navigation
  - Meet Dr Beovides
  - Specials
  - Meet The Team
  - Reviews
  - Financing
  - FAQs
- **Column 3**: Dental Services
  - New patients exam
  - Pediatric dentist
  - Dental cleanings
  - Dental implants
  - Cosmetic dentistry
  - Orthodontics
  - Root canals
- **Column 4**: Location
  - Address
  - Map
  - Phone
  - Hours

**Bottom Footer**:
- Privacy Policy | HIPAA | New Patient Form | Privacy Practice Notice
- Copyright: "© 2026 MiraMar Family Dental"
- "Created by Blue Mountain Web"
- Language switch: "Español | English"

---

## 7. Navigation Structure

### Navbar Layout

```
LOGO   |   MENUS   |   CTA BUTTON
```

**CTA**: "Book Appointment"

### Menu Items

| Main Item | Dropdown Items |
|-----------|----------------|
| **Language** | English, Spanish |
| **About us** | Dr Keyttia Beovides, Meet the Team |
| **Dental Services** | Diagnostic & Preventive (Dental Radiographs), Oral Surgery (Dental Implants - All-on-X), Restorative Dentistry, Endodontics, Cosmetic Dentistry, Periodontal (Deep Dental Cleaning), Orthodontic, Pediatric Dentistry, Other Services |
| **Patients** | New patients, MFD Membership, Financing plans, Dental Insurance, FAQs |
| **Blog** | - |
| **Deals** | - |
| **Reviews** | - |
| **Contact us** | - |

### Navbar Components

- Logo
- MegaMenu (desktop dropdown)
- LanguageSwitcher
- CTAButton
- Mobile: Hamburger + Drawer navigation

---

## 8. SEO Strategy

### Meta Tags

Primary keywords:
- Dentist Katy Texas
- Family Dental Katy
- Dental Implants Katy
- Cosmetic Dentistry Katy

### Schema

- **LocalBusiness Schema** for dentist
- Include: name, address, phone, hours, geo coordinates

---

## 9. Performance Strategy

- **SSR First**: Server Components by default
- **Lazy Load Videos**: Use `next/dynamic` for video components
- **Image Optimization**: Use `next/image` for all images
- **Streaming Rendering**: Enable where applicable
- **Partial Hydration**: Minimize client-side JavaScript

---

## 10. Animations (Framer Motion)

- **Section fade-in**: Animate sections on scroll
- **Hover effects**: Cards, buttons, links
- **Menu animations**: Smooth open/close transitions
- **Page transitions**: Subtle route changes

---

## 11. Component Strategy

All components must be reusable:

- `Button` - Multiple variants (primary, secondary, ghost, etc.)
- `Card` - Base card wrapper
- `Section` - Page section with consistent padding
- `Container` - Max-width wrapper
- `Heading` - Reusable heading component
- `VideoEmbed` - YouTube/video embed wrapper
- `ServiceCard` - Service display card
- `TeamCard` - Team member card
- `TestimonialCard` - Patient testimonial card

### Example Usage

```tsx
<Button variant="primary">
  Book Appointment
</Button>
```

---

## 12. Data Files (lib/)

```typescript
// lib/constants.ts
// Site-wide constants (address, phone, hours, social links)

// lib/navigation.ts
// Navigation menu data structure

// lib/services.ts
// Dental services data

// lib/insurance.ts
// Insurance providers (placeholder logos)

// lib/financing.ts
// Financing options (placeholder logos)

// lib/team.ts
// Team members data
```

---

## 13. Types (types/)

```typescript
// types/navigation.ts
// Navigation types

// types/services.ts
// Service types

// types/team.ts
// Team member types
```

---

## 14. Hooks (hooks/)

```typescript
// hooks/use-scroll.ts
// Scroll position detection

// hooks/use-media-query.ts
// Media query helper

// hooks/use-intersection.ts
// Element visibility detection (for animations)
```

---

## 15. Testing Strategy

- **Framework**: Vitest
- **Assertions**: React Testing Library
- **Coverage**: Focus on component rendering, user interactions
- **Location**: `*.test.tsx` files co-located with components
