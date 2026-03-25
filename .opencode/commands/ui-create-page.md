---
description: Crear una nueva pagina utilizando shadcn y nextjs con estilo blog
---

## Crear página

Cuando el usuario solicite una página:

### 1. Setup

1. Crear carpeta en `src/app/{ruta}`
2. Crear archivo `page.tsx`
3. Usar Server Component por defecto
4. Verificar si necesita Client Component (hooks, interactividad)

---

### 2. Estructura base

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Dental Care",
  description: "Page description for SEO",
};

export default function Page() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Page Title
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="text-[#475569] text-lg leading-relaxed space-y-4 px-10">
              <p>
                Page description goes here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

### 3. Componentes shadcn/ui

Segun el tipo de pagina:

| Tipo | Componentes a usar |
|------|-------------------|
| Tabla | Table, TableHeader, TableRow, TableCell |
| Formulario | Input, Button, Label, Form |
| Cards | Card, CardHeader, CardTitle, CardContent |
| Listado | Card con grid responsive |
| Detalle | Card con imagen + texto |
| Modal/Dialog | Dialog, DialogTrigger, DialogContent |

---

### 4. Estilos

#### Light theme (default)
- Background: `bg-white`
- Texto: `text-[#475569]`
- Header: `bg-[#5EC8F2]`

#### Dark theme
- Background: `bg-[#020617]`
- Texto: `text-white`
- Header: `bg-[#0C4A6E]`

#### Tipografía
- Títulos: `font-serif text-3xl md:text-4xl lg:text-5xl font-bold`
- Subtítulos: `font-serif text-xl md:text-2xl font-semibold`
- Párrafos: `text-lg leading-relaxed`

#### Animaciones
- Usar `animate-fade-in-up` (definido en globals.css)
- Agregar delay: `style={{ animationDelay: "200ms" }}`

---

### 5. Templates

#### Página con tabla
```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full px-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Page Title
          </h1>
        </div>
      </section>

      {/* Table Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full px-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column 1</TableHead>
                <TableHead>Column 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Data 1</TableCell>
                <TableCell>Data 2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
```

#### Página con cards (grid)
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Item {
  id: string;
  title: string;
  description: string;
}

const items: Item[] = [];

export default function Page() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full px-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Page Title
          </h1>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

#### Página con formulario
```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full px-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Page Title
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full px-10">
          <form className="max-w-md space-y-4">
            <div>
              <Label htmlFor="field">Field Label</Label>
              <Input id="field" type="text" placeholder="Placeholder" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
```

---

### 6. Responsive

- Mobile first
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Padding: `px-4 md:px-10`

---

### 7. SEO

1. Añadir `export const metadata`
2. Title: `"{Page Title} | Dental Care"`
3. Description: descripción breve de la página

---

Notes:
- Usar `animate-fade-in-up` para animaciones (definido en globals.css)
- Usar `container-wide` para el ancho máximo
- Para páginas más complejas: crear sub-componentes en `src/components/`
- Mantener Server Components cuando sea posible
