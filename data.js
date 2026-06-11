/* ============================================================
   DATOS DEL SITIO — edita SOLO este archivo para cambiar todo
   el contenido del portafolio (textos, links, proyectos, etc.)
   ============================================================ */

window.SITE_DATA = {

  /* ---------- PERFIL / BANNER ---------- */
  perfil: {
    nombre: "Jose Miguel Rojas",
    profesion: "Estudiante de Ciencia de Datos y Diseñador Industrial",
    // Párrafo breve (2 líneas aprox.)
    resumen:
      "Base sólida en SQL, Python y Power BI. Aprendo construyendo: cada proyecto de este portafolio resuelve una pregunta real con datos reales.",
    // Texto del badge de disponibilidad (déjalo "" para ocultarlo)
    disponibilidad: "Disponible para trabajo presencial o remoto",
    // Foto del banner: pon tu imagen en assets/img/ y escribe la ruta aquí.
    // Si la dejas "", se muestra un recuadro de marcador de posición.
    foto: "",
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

  /* ---------- CAJAS DE HIGHLIGHTS (grilla 2×2 del banner) ---------- */
  stats: [
    { valor: "6",   sufijo: "",  etiqueta: "Proyectos completados",   nota: "↑ 2 este trimestre" },
    { valor: "4",   sufijo: "",  etiqueta: "Certificaciones",         nota: "Google · Microsoft" },
    { valor: "8",   sufijo: "",  etiqueta: "Herramientas que manejo", nota: "SQL · Python · BI" },
    { valor: "520", sufijo: "h", etiqueta: "Horas de práctica",       nota: "↑ desde 2025" },
  ],

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
      imagen: "",
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
      imagen: "",
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
      imagen: "",
      links: [
        { texto: "Ver caso", url: "#" },
        { texto: "Notebook", url: "#" },
      ],
    },
  ],

  /* ---------- EDUCACIÓN ---------- */
  educacion: [
    {
      sigla: "U",            // letra del cuadrito
      siglaOscura: true,     // true = cuadrito oscuro, false = claro
      titulo: "Licenciatura en Economía",
      lugar: "Universidad Nacional · 2019 – 2023",
      detalle: "Enfoque en estadística y econometría. Tesis con análisis de datos de consumo.",
    },
    {
      sigla: "B",
      siglaOscura: false,
      titulo: "Bootcamp de Análisis de Datos",
      lugar: "Plataforma online · 2025 · 400 h",
      detalle: "SQL, Python, visualización y storytelling con datos. Proyecto final con datos reales.",
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
    rangoCabecera: "2022 – actualidad", // texto a la derecha del título
    items: [
      {
        fechas: "Ene 2025 – hoy",
        duracion: "1 año 6 meses",
        puesto: "Analista de datos freelance",
        lugar: "Negocio local · Remoto",
        detalle:
          "Organicé el historial de ventas en Excel y construí un reporte mensual automático con tablas dinámicas; el dueño ahora revisa sus márgenes en 10 minutos en vez de una tarde entera.",
      },
      {
        fechas: "Jun – Dic 2024",
        duracion: "7 meses",
        puesto: "Voluntariado de datos",
        lugar: "ONG · Medio tiempo",
        detalle:
          "Limpié y normalicé la base de donantes (3.000 registros) y monté un dashboard de seguimiento de campañas que el equipo sigue usando.",
      },
      {
        fechas: "Mar 2022 – Feb 2023",
        duracion: "1 año",
        puesto: "Proyecto académico de tesis",
        lugar: "Universidad Nacional",
        detalle:
          "Diseñé una encuesta, recogí 300 respuestas y realicé el análisis estadístico completo (descriptivos, correlaciones, regresión) para la tesis de licenciatura.",
      },
    ],
  },

  /* ---------- SKILLS & SOFTWARE ----------
     nivel: porcentaje de la barra (0–100).
     etiquetaNivel: texto que aparece a la derecha.                   */
  skills: {
    subtitulo: "8 herramientas", // texto pequeño junto al título
    grupos: [
      {
        grupo: "Lenguajes y consultas",
        items: [
          { sigla: "SQL", nombre: "SQL · PostgreSQL", nivel: 85, etiquetaNivel: "Avanzado" },
          { sigla: "PY", nombre: "Python · pandas", nivel: 70, etiquetaNivel: "Intermedio" },
        ],
      },
      {
        grupo: "Visualización",
        items: [
          { sigla: "PBI", nombre: "Power BI · DAX", nivel: 80, etiquetaNivel: "Avanzado" },
          { sigla: "TAB", nombre: "Tableau", nivel: 55, etiquetaNivel: "Intermedio" },
        ],
      },
      {
        grupo: "Hojas de cálculo",
        items: [
          { sigla: "XLS", nombre: "Excel · tablas dinámicas", nivel: 90, etiquetaNivel: "Avanzado" },
          { sigla: "GS", nombre: "Google Sheets", nivel: 85, etiquetaNivel: "Avanzado" },
        ],
      },
      {
        grupo: "Otros",
        items: [
          { sigla: "GIT", nombre: "Git · GitHub", nivel: 50, etiquetaNivel: "Básico" },
          { sigla: "ST", nombre: "Estadística aplicada", nivel: 75, etiquetaNivel: "Intermedio" },
        ],
      },
    ],
  },

  /* ---------- PIE DE PÁGINA ---------- */
  footer: "Portafolio de análisis de datos · 2026",
};
