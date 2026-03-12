1. Stack tecnológico
Framework

Next.js (App Router)

Renderizado SSR por defecto

Server Components siempre que sea posible

UI

shadcn/ui

Tailwind CSS

Utilidades

Lucide

next-themes (dark mode)

React Hook Form (formularios)

Render Strategy

Prioridad:

1️⃣ Server Components (SSR)
2️⃣ Static generation cuando posible
3️⃣ Client components solo para interactividad

2. Sistema de diseño
Colores principales

Primary Blue

#0A6CFF

Accent Green

#00B894

Neutral

Gray 50-900
Dark Mode

Configuración con next-themes

light
dark
system
3. Arquitectura de carpetas
app
 ├ layout.tsx
 ├ page.tsx
 ├ about
 ├ services
 ├ patients
 ├ blog
 └ contact

components
 ├ ui
 │   ├ button.tsx
 │   ├ card.tsx
 │   ├ input.tsx
 │   └ badge.tsx
 │
 ├ navbar
 │   ├ navbar.tsx
 │   ├ nav-menu.tsx
 │   └ mobile-menu.tsx
 │
 ├ sections
 │   ├ hero-section.tsx
 │   ├ offers-section.tsx
 │   ├ about-section.tsx
 │   ├ why-us-section.tsx
 │   ├ bilingual-section.tsx
 │   ├ services-section.tsx
 │   ├ insurance-section.tsx
 │   ├ financing-section.tsx
 │   ├ team-section.tsx
 │   ├ testimonials-section.tsx
 │   └ footer.tsx
 │
lib
 ├ constants.ts
 ├ navigation.ts
 └ services.ts
4. Navbar

Layout:

LOGO   |  MENUS  |  CTA BUTTON

CTA:

Book Appointment
Estructura
Language
  English
  Spanish

About us
  Dr Keyttia Beovides
  Meet the Team

Dental Services
  Diagnostic & Preventive
      Dental Radiographs
  Oral Surgery
      Dental Implants
          All-on-X Dental Implants
  Restorative Dentistry
  Endodontics
  Cosmetic Dentistry
  Periodontal
      Deep Dental Cleaning
  Orthodontic
  Pediatric Dentistry
  Other Services

Patients
  New patients
  MFD Membership
  Financing plans
  Dental Insurance
  FAQs

Blog
Deals
Reviews
Contact us
Componente
Navbar
 ├ Logo
 ├ MegaMenu
 ├ LanguageSwitcher
 └ CTAButton

Mobile:

Hamburger
Drawer navigation
5. Home Page Layout
Hero
Offers
About + Video
Why Us
Bilingual Clinic
Services
Insurance
Financing
Team
Testimonials
Footer
6. Hero Section

Texto:

Your family dentist in Katy, Texas
Top-rated dental care you can count on

Descripción:

At MiraMar Family Dental, we’re more than just your family dentist in Katy, Texas – we’re your partners in oral health.

CTA:

Book your next appointment
Diseño
VIDEO BACKGROUND
Overlay gradient
Centered content
CTA button

Soporte:

<video autoplay muted loop />
fallback image
7. Offers Section

Diseño:

3 cards grid

Card:

Title
Description
CTA

Ejemplo:

New Patient Special
Free Consultation
Teeth Whitening Promo
8. About + Video Section

Layout moderno:

Text | Video

Responsive:

Stacked mobile

Contenido:

Left

Texto + CTA

Right

Video testimonial / clinic video

9. Why We Are Your Best Choice

Grid 3 columnas:

ICON
TITLE
DESCRIPTION

1️⃣ Latest Dental Equipment
2️⃣ Private Offices
3️⃣ Affordable Dentist

Iconos sugeridos:

stethoscope
shield
dollar
10. Bilingual Clinic Section

Layout:

Image of team | Text

Texto:

Services available in English and Spanish

CTA:

Meet our team
11. Services Section

Título:

Comprehensive dental care for the whole family

Grid:

3 x 3 services

Servicios sugeridos:

Dental Cleanings

Dental Implants

Cosmetic Dentistry

Orthodontics

Root Canals

Pediatric Dentistry

Teeth Whitening

Emergency Dental Care

Preventive Dentistry

Diseño card:

Image background
Overlay title
Hover animation
12. Insurance Section
Logo grid

Ejemplo:

Delta Dental
Aetna
Cigna
Humana
MetLife
Guardian
13. Financing Options

Grid de 4 tarjetas

Cada una:

Logo
Description
Apply now button

Opciones:

Alphaeon Credit

Lending Club

Care Credit

Cherry

14. Medical Team Section

Layout:

3 profile cards

Card:

Photo
Name
Description

Team:

Dr Keyttia Beovides

Dr Tihany Rodriguez

Helen Vega RDH

15. Patient Stories

Título:

Real patient stories at our Katy dental office

Layout:

Video cards

Cada card:

Youtube embed
Patient quote
Name
16. Footer

Grid 4 columnas:

LOGO + ABOUT
QUICK NAVIGATION
DENTAL SERVICES
LOCATION
Columna 1

Logo
Descripción
Social icons

Columna 2

Quick Navigation

Meet Dr Beovides
Specials
Meet The Team
Reviews
Financing
FAQs
Columna 3

Dental Services

new patients exam
pediatric dentist
dental cleanings
dental implants
cosmetic dentistry
orthodontics
root canals
Columna 4

Location

Address
Map
Phone
Hours
17. Bottom Footer
Privacy Policy
HIPAA
New Patient Form
Privacy Practice Notice

Copyright

© 2026 MiraMar Family Dental
Created by Blue Mountain Web

Language switch

Español | English
18. Component Strategy (MUY IMPORTANTE)

Todos reutilizables.

Ejemplo:

Button
Card
Section
Container
Heading
VideoEmbed
ServiceCard
TeamCard
TestimonialCard

Ejemplo botón:

<Button variant="primary">
Book Appointment
</Button>
19. Performance Strategy

Para SEO y velocidad:

SSR first

Lazy load videos

Image optimization (next/image)

Streaming rendering

Partial hydration

20. SEO

Meta tags:

Dentist Katy Texas
Family Dental Katy
Dental Implants Katy
Cosmetic Dentistry Katy

Schema:

Dentist LocalBusiness Schema
21. Animaciones modernas

Usar:

Framer Motion

Ejemplos:

fade-in sections
hover cards
menu animations