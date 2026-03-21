---
description: Crear un nuevo componente utilizando shadcn y nextjs
---
## generate component

Cuando el usuario solicite un componente:

1. Crear carpeta en src/components/{$1}
2. Crear:
   - {$1}.tsx
3. Usar TypeScript con Props tipadas
4. Usar Tailwind
5. Usar shadcn/ui si aplica
6. Mantenerlo reutilizable
7. Utilizar componentes de la carpeta @ui

Reglas:
- Usar arrow functions
- Export nombrado
- Separar lógica y UI si crece

Template:

type Props = {
  className?: string;
};

export const {$2} = ({ className }: Props) => {
  return (
    <div className={className}>
      {$2}
    </div>
  );
};