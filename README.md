# Portafolio · Analista de Datos

Sitio estático de una sola página (sin frameworks ni build), listo para desplegar en **Vercel**.

## Cómo editar el contenido

**Todo el contenido vive en [`data.js`](data.js).** No necesitas tocar HTML ni CSS:

| Qué quieres cambiar | Dónde en `data.js` |
|---|---|
| Fondo del banner y patrón de puntos | `tema` |
| Nombre, profesión, resumen, silueta | `perfil` |
| Email, teléfono, ciudad, LinkedIn, GitHub, CV | `contacto` |
| Proyectos (añadir/editar/quitar) | `proyectos` |
| Educación | `educacion` |
| Certificaciones | `certificaciones` |
| Experiencia laboral | `experiencia` |
| Skills y barras de nivel | `skills` |

### Estilo liquid glass (translúcido)

El sitio usa tarjetas de vidrio (`backdrop-filter`) sobre un fondo con color.
Todo se controla en `data.js` → `tema`:

- **`fondoImagen`** — pon la ruta de tu propia imagen (ej. `"assets/img/fondo.jpg"`)
  y se usa como fondo de página detrás del vidrio.
- **`fondoPagina`** — si no hay imagen, se usa este degradado abstracto (CSS).
  Hay variantes listas comentadas (azul hielo, atardecer); cuanto más color
  tenga el fondo, más se nota el efecto translúcido.
- **`opacidadTarjetas`** — opacidad del vidrio de las tarjetas (0 a 1).
- **`blur`** — desenfoque del cristal en px.
- **`brillo`** — intensidad del reflejo "liquid" (0 lo apaga, 1 máximo).
- **`fondoBanner`** — vidrio oscuro del banner. Usa `rgba(...)` para mantener
  la translucidez; sube el alpha (0.9) si lo quieres más opaco.
- **`patronColor` / `patronTam`** — patrón de puntos del banner (`""` lo quita).

### PDF de cada proyecto

Cada proyecto tiene un campo `pdf`. Sube el archivo (ej. `assets/docs/retail.pdf`)
y escribe la ruta; el botón **Ver proyecto** abre un popup con ese PDF.
Si está `""`, el popup muestra "Documento en preparación".

### Silueta del banner

`perfil.foto` debe ser un **PNG con fondo transparente** (recorte de hombros/cara).
Se ancla al borde inferior izquierdo y se desvanece para mezclarse con el fondo.
Mientras esté `""` se muestra una silueta de marcador de posición.

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
