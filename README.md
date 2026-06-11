# Portafolio · Analista de Datos

Sitio estático de una sola página (sin frameworks ni build), listo para desplegar en **Vercel**.

## Cómo editar el contenido

**Todo el contenido vive en [`data.js`](data.js).** No necesitas tocar HTML ni CSS:

| Qué quieres cambiar | Dónde en `data.js` |
|---|---|
| Nombre, profesión, resumen, foto | `perfil` |
| Email, teléfono, ciudad, LinkedIn, GitHub, CV | `contacto` |
| Las 4 cajas del banner | `stats` |
| Proyectos (añadir/editar/quitar) | `proyectos` |
| Educación | `educacion` |
| Certificaciones | `certificaciones` |
| Experiencia laboral | `experiencia` |
| Skills y barras de nivel | `skills` |

### Añadir un proyecto

Copia un bloque dentro de `proyectos` y edítalo:

```js
{
  destacado: true,            // true = visible al cargar; false = aparece con "Ver todos"
  badge: "SQL",               // sigla del cuadrito
  categoria: "Retail",        // chip de categoría
  titulo: "Mi nuevo proyecto",
  descripcion: "Qué hice y qué resultado obtuve.",
  imagen: "assets/img/mi-proyecto.png",  // "" = recuadro de marcador
  links: [
    { texto: "Ver caso", url: "https://..." },  // el primero se pinta oscuro
    { texto: "GitHub", url: "https://..." },
  ],
},
```

### Imágenes

- Pon tus imágenes en `assets/img/` y referencia la ruta en `data.js`
  (foto de perfil → `perfil.foto`, vistas previas → `imagen` de cada proyecto).
- CV: sube el PDF (p. ej. `assets/cv.pdf`) y pon la ruta en `contacto.cv`;
  si está vacío, el botón "Descargar CV" no aparece.
- Los campos opcionales (`tableau`, `disponibilidad`, `url` de certificaciones…)
  se ocultan automáticamente si los dejas en `""`.

## Ver en local

```bash
npx serve .
# o simplemente abre index.html en el navegador
```

## Desplegar en Vercel

1. Sube el repo a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Framework preset: **Other** (sitio estático, sin build). Deploy.

Cada `git push` a `main` redespliega automáticamente.

## Estructura

```
index.html      → estructura de la página (no suele tocarse)
data.js         → TODO el contenido editable
css/styles.css  → diseño y estilos
js/render.js    → pinta data.js en la página
assets/img/     → fotos e imágenes de proyectos
```
