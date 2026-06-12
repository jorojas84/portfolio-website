/* ============================================================
   DATOS DEL SITIO — edita SOLO este archivo para cambiar todo
   el contenido del portafolio (textos, links, proyectos, etc.)
   ============================================================ */

window.SITE_DATA = {

  /* ---------- TEMA / APARIENCIA DEL BANNER ----------
     Para cambiar el fondo del banner solo edita `fondoBanner`.
     Hay varios ejemplos listos abajo: descomenta el que quieras
     (deja activo SOLO uno) o escribe tu propio CSS de `background`. */
  tema: {
    /* ===== FONDO DE PÁGINA (detrás de las tarjetas de vidrio) =====
       El efecto translúcido necesita color/contraste detrás.
       Opción A — tu propia imagen: pon la ruta y listo.
         fondoImagen: "assets/img/fondo.jpg",
       Opción B — degradado abstracto (se usa si fondoImagen está ""). */
    fondoImagen: "",
    fondoPagina:
      "radial-gradient(60% 75% at 10% 5%, #7FA8E8 0%, rgba(127,168,232,0) 62%), radial-gradient(50% 65% at 92% 12%, #F0AE7E 0%, rgba(240,174,126,0) 60%), radial-gradient(65% 80% at 82% 92%, #7ECBA6 0%, rgba(126,203,166,0) 58%), radial-gradient(55% 70% at 8% 90%, #B68AE0 0%, rgba(182,138,224,0) 60%), radial-gradient(45% 60% at 50% 50%, #E8B8C8 0%, rgba(232,184,200,0) 55%), #D8DEE9",

    // Otros fondos de página listos para copiar en fondoPagina:
    // Azul hielo:  "radial-gradient(70% 90% at 50% 0%, #8FB8EC 0%, rgba(143,184,236,0) 65%), radial-gradient(60% 80% at 85% 85%, #A8CBE8 0%, rgba(168,203,232,0) 60%), #DCE6F2"
    // Atardecer:   "radial-gradient(60% 80% at 20% 15%, #F2A988 0%, rgba(242,169,136,0) 62%), radial-gradient(55% 70% at 85% 80%, #D898D0 0%, rgba(216,152,208,0) 58%), #EDE2DF"

    /* ===== VIDRIO (tarjetas claras) =====
       opacidadTarjetas: 0 (transparente) a 1 (sólido blanco).
       blur: desenfoque en px del cristal.
       brillo: intensidad del reflejo "liquid" (0 lo apaga, 1 máximo). */
    opacidadTarjetas: 0.42,
    blur: 22,
    brillo: 0.5,

    /* ===== BANNER (vidrio oscuro translúcido) =====
       Usa rgba(...) para que se vea el fondo a través del vidrio.
       Sube los alphas (0.9) si lo quieres más opaco. */
    fondoBanner:
      "linear-gradient(160deg, rgba(24,25,31,0.62) 0%, rgba(10,10,13,0.74) 100%)",

    // Patrón de puntos sobre el banner. "" para quitarlo.
    patronColor: "",
    // Tamaño de la rejilla de puntos en píxeles.
    patronTam: 20,
  },

  /* ---------- PERFIL / BANNER ---------- */
  perfil: {
    nombre: "Jose Miguel Rojas",
    profesion: "Estudiante de Ciencia de Datos - Diseñador Industrial",
    // Párrafo breve (2 líneas aprox.)
    resumen:
      "5 años de experiencia internacional en entornos técnicos y analíticos. Actualmente cursando Ciencia de Datos, con base en Python, Excel y control de versiones. Bilingüe (ES/EN).",
    // Texto del badge de disponibilidad (déjalo "" para ocultarlo)
    disponibilidad: "Disponible para trabajo presencial o remoto",
    // Silueta recortada (foto de hombros/cara) que se ancla al borde
    // inferior izquierdo del banner. Usa un PNG con FONDO TRANSPARENTE
    // para que se mezcle. Ej: "assets/img/silueta.png".
    // Si la dejas "", se muestra una silueta de marcador de posición.
    foto: "assets/img/1.png",
    // Tamaño de la foto en ESCRITORIO (ancho en px). Súbelo para que se vea
    // más grande, bájalo para más pequeña. En móvil sale en círculo (fijo).
    fotoAncho: 250,
  },

  /* ---------- CONTACTO Y REDES ---------- */
  contacto: {
    email: "jocmiguel2010@gmail.com",
    telefono: "+57-318-103-8888",
    ciudad: "Colombia",
    linkedin: "https://www.linkedin.com/in/jr97/",
    github: "https://github.com/jorojas84",
    tableau: "", // link a Tableau Public; "" para ocultarlo
    // Ruta del CV en PDF (súbelo a assets/, p. ej. "assets/cv.pdf").
    // Si la dejas "", el botón no se muestra.
    cv: "",
  },

  /* ---------- PROYECTOS ----------
     Para añadir un proyecto, copia un bloque { ... } y pégalo al final.
     - destacado: true → aparece al cargar la página; el resto se
       muestra al pulsar "Ver todos".
     - imagen: ruta a la vista previa (p. ej. "assets/img/proyecto1.png");
       "" muestra un recuadro de marcador de posición.
     - badge: sigla corta (SQL, PBI, PY...) que sale en el cuadrito.
     - links: cada botón del proyecto; el primero se pinta oscuro.       */
  proyectos: [
    {
      destacado: true,
      badge: "SQL",
      categoria: "Retail",
      titulo: "Análisis de ventas retail",
      descripcion:
        "Limpieza y análisis de 50.000 registros de ventas; identifiqué los 3 productos con mayor margen por región.",
      imagen: "assets/img/proyecto-retail.svg",
      links: [
        { texto: "Ver caso", url: "#" },
        { texto: "GitHub", url: "#" },
      ],
    },
    {
      destacado: true,
      badge: "PBI",
      categoria: "Dashboard",
      titulo: "Dashboard de churn de clientes",
      descripcion:
        "Dashboard interactivo en Power BI: el 62% de las bajas ocurría en los primeros 90 días de suscripción.",
      imagen: "assets/img/proyecto-churn.svg",
      links: [
        { texto: "Ver caso", url: "#" },
        { texto: "Demo", url: "#" },
      ],
    },
    {
      destacado: true,
      badge: "PY",
      categoria: "EDA",
      titulo: "Exploración de precios Airbnb",
      descripcion:
        "EDA con pandas y matplotlib sobre 18.000 anuncios: la distancia al centro explica el 40% de la variación de precio.",
      imagen: "assets/img/proyecto-airbnb.svg",
      links: [
        { texto: "Ver caso", url: "#" },
        { texto: "Notebook", url: "#" },
      ],
    },
    {
      destacado: true,
      badge: "XLS",
      categoria: "Reporte",
      titulo: "Reporte mensual automatizado",
      descripcion:
        "Plantilla en Excel con tablas dinámicas que resume ventas e indicadores clave; reduce el cierre mensual de horas a minutos.",
      imagen: "assets/img/proyecto-reporte.svg",
      links: [
        { texto: "Ver caso", url: "#" },
        { texto: "Plantilla", url: "#" },
      ],
    },
  ],

  /* ---------- EDUCACIÓN ---------- */
  educacion: [
    {
      sigla: "DS",           // letra del cuadrito
      siglaOscura: true,     // true = cuadrito oscuro, false = claro
      titulo: "B.Sc. Ciencia de Datos",
      lugar: "Universidad de La Salle · Ene 2025 – Actualidad",
      detalle: "Programa 100% en línea. Cubre estadística, machine learning, bases de datos y programación en Python.",
    },
    {
      sigla: "DI",
      siglaOscura: false,
      titulo: "B.Sc. Diseño Industrial",
      lugar: "Universidad del Norte · 2015 – 2018",
      detalle: "Medalla de Plata — mejor graduado de la cohorte. Formación en pensamiento analítico, visualización y modelado técnico.",
    },
  ],

  /* ---------- CERTIFICACIONES ----------
     url opcional: si la pones, la fila entera es un enlace.          */
  certificaciones: [
    { nombre: "Google Data Analytics", anio: "2025", url: "" },
    { nombre: "Microsoft PL-300 · Power BI", anio: "2026", url: "" },
    { nombre: "SQL (Advanced) · HackerRank", anio: "2025", url: "" },
    { nombre: "Python para Data Science · IBM", anio: "2025", url: "" },
  ],

  /* ---------- EXPERIENCIA LABORAL (línea de tiempo) ---------- */
  experiencia: {
    rangoCabecera: "2019 – actualidad", // texto a la derecha del título
    items: [
      {
        fechas: "Jul 2021 – Jun 2026",
        duracion: "5 años",
        puesto: "Technical Support Specialist",
        lugar: "RebusFarm · Remoto (internacional)",
        detalle:
          "Soporte técnico bilingüe (ES/EN) a una base global de clientes. Monitoreé jobs de renderizado en tiempo real, participé en ciclos de QA antes de cada release y documenté problemas recurrentes en la base de conocimiento interna. +200 reseñas de chat con calificación destacada.",
      },
      {
        fechas: "Feb 2019 – Ene 2021",
        duracion: "2 años",
        puesto: "Diseñador Industrial",
        lugar: "Stuario Design Lab",
        detalle:
          "Diseño, renderizado y planos técnicos para piezas de mobiliario e interiores. Manejo avanzado de Blender, Cinema 4D y 3ds Max; base sólida en visualización y comunicación de datos espaciales.",
      },
    ],
  },

  /* ---------- SKILLS & SOFTWARE ----------
     nivel: porcentaje de la barra (0–100).
     etiquetaNivel: texto que aparece a la derecha.
     color: color del iconito (sigla). Paleta sobria abajo; cambia el
            hex si quieres. Déjalo sin poner para que salga gris neutro. */
  skills: {
    subtitulo: "", // texto pequeño junto al título ("" para ocultarlo)
    grupos: [
      {
        grupo: "Datos y programación",
        items: [
          { sigla: "PY", nombre: "Python · pandas · OOP", nivel: 65, etiquetaNivel: "Intermedio", color: "#3776AB" },
          { sigla: "SQL", nombre: "SQL", nivel: 55, etiquetaNivel: "En desarrollo", color: "#00758F" },
          { sigla: "GIT", nombre: "Git · GitHub", nivel: 60, etiquetaNivel: "Intermedio", color: "#F05032" },
        ],
      },
      {
        grupo: "Hojas de cálculo y ofimática",
        items: [
          { sigla: "XLS", nombre: "Excel · tablas dinámicas", nivel: 85, etiquetaNivel: "Avanzado", color: "#217346" },
          { sigla: "MS", nombre: "Microsoft Office Suite", nivel: 85, etiquetaNivel: "Avanzado", color: "#D83B01" },
        ],
      },
      {
        grupo: "Diseño y 3D",
        items: [
          { sigla: "BL", nombre: "Blender · Cinema 4D", nivel: 80, etiquetaNivel: "Avanzado", color: "#EA7600" },
          { sigla: "3D", nombre: "3ds Max · Maya", nivel: 70, etiquetaNivel: "Intermedio", color: "#0696D7" },
        ],
      },
      {
        grupo: "Idiomas",
        items: [
          { sigla: "ES", nombre: "Español", nivel: 100, etiquetaNivel: "Nativo", color: "#C8102E" },
          { sigla: "EN", nombre: "English", nivel: 90, etiquetaNivel: "Professional", color: "#1D4ED8" },
        ],
      },
    ],
  },

  /* ---------- PIE DE PÁGINA ---------- */
  footer: "Portafolio de análisis de datos · 2026",
};
