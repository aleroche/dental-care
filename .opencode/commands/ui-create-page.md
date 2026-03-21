---
description: Crear una nueva pagina utilizando shadcn y nextjs con estilo blog
---

Cuando el usuario solicite una página:

1. Crear ruta en /app/{$1}
2. Crear archivo page.tsx
3. Usar Server Component por defecto
4. Usar Tailwind para layout
5. Usar componentes de shadcn/ui cuando sea posible
6. Usar estilo blog (light theme):

Si el usuario menciona:
- "tabla" → usar Table de shadcn
- "formulario" → usar Input, Button, Label
- "cards" → usar Card
- "dark" o "oscuro" → usar bg-[#020617] con texto white

Template base (estilo blog - light theme):

```tsx
export default function Page() {
  return (
    <main>
      {/* Header Section - Blue-50 background, full height centered */}
     <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
             Page Title
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section - White background */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="text-[#475569] text-lg leading-relaxed space-y-4 px-10">
              <p>
               Page Description
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

Notes:
- Usar `animate-fade-in-up` y `delay-*` classes para animaciones (definidas en globals.css)
- Para expandir: agregar más sections debajo del content section