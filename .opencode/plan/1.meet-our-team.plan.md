# Feature: Team Page con Modal de Detalle

## 🎯 Objetivo
Crear una página en Next.js que muestre información del equipo:
- Título y descripción
- Grid de miembros del equipo (4 personas)
- Modal con detalle al hacer click en cada miembro

---

## 🧱 Stack técnico

- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui (Card, Dialog)

---

## 🏗️ Arquitectura

### 📍 Página principal
Ruta:
/app/team/page.tsx

Responsabilidad:
- Renderizar layout general
- Mostrar título y descripción
- Renderizar grid de team members

---

### 🧩 Componentes

#### 1. TeamGrid
Ubicación:
/components/team/TeamGrid.tsx

Responsabilidad:
- Mostrar lista de miembros
- Grid responsive

---

#### 2. TeamCard
Ubicación:
/components/team/TeamCard.tsx

Responsabilidad:
- Mostrar:
  - Imagen
  - Nombre
  - Especialidad
- Manejar interacción (click)

---

#### 3. TeamModal
Ubicación:
/components/team/TeamModal.tsx

Responsabilidad:
- Mostrar detalle del miembro
- Usar Dialog de shadcn/ui

Diseño:
- Layout en 2 columnas:
  - izquierda: imagen
  - derecha: descripción

---

## 🗂️ Modelo de datos

```ts
type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
};