
---

# 📄 `1.my-feature.tasks.md`

```md id="tasksfile"
# Tasks: Team Page

## 🧱 Setup

- [ ] Crear carpeta src/components/team
- [ ] Verificar instalación de shadcn/ui (Dialog, Card)
- [ ] Confirmar Tailwind funcionando

---

## 📍 Página principal

- [ ] Crear src/app/team/page.tsx
- [ ] Añadir título (h1)
- [ ] Añadir descripción
- [ ] Crear layout base (container + spacing)

---

## 🗂️ Datos

- [ ] Crear array mock de TeamMember (4 elementos)
- [ ] Incluir:
  - name
  - role
  - image
  - description

---

## 🧩 Componentes

### TeamGrid

- [ ] Crear TeamGrid.tsx
- [ ] Recibir lista de miembros por props
- [ ] Implementar grid responsive

---

### TeamCard

- [ ] Crear TeamCard.tsx
- [ ] Mostrar imagen (next/image)
- [ ] Mostrar nombre y rol
- [ ] Añadir estilos hover
- [ ] Emitir evento onClick

---

### TeamModal

- [ ] Crear TeamModal.tsx
- [ ] Usar Dialog de shadcn
- [ ] Crear layout 2 columnas
- [ ] Mostrar imagen
- [ ] Mostrar descripción
- [ ] Añadir botón cerrar

---

## 🔗 Integración

- [ ] Manejar estado selectedMember
- [ ] Pasar handler a TeamCard
- [ ] Abrir modal al hacer click
- [ ] Cerrar modal correctamente

---

## 🎨 Estilos

- [ ] Aplicar Tailwind a layout principal
- [ ] Ajustar tipografía
- [ ] Ajustar spacing
- [ ] Añadir animaciones hover

---

## 📱 Responsive

- [ ] Verificar mobile (1 columna)
- [ ] Verificar tablet (2 columnas)
- [ ] Verificar desktop (4 columnas)
- [ ] Ajustar modal en mobile

---

## 🧪 Testing manual

- [ ] Click en cada miembro abre modal correcto
- [ ] Modal muestra info correcta
- [ ] Modal cierra correctamente
- [ ] No errores en consola

---

## 🚀 Final

- [ ] Refactor si es necesario
- [ ] Revisar accesibilidad básica
- [ ] Código limpio y tipado