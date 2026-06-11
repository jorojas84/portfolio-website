/* ============================================================
   DATOS DEL SITIO — edita SOLO este archivo para cambiar todo
   el contenido del portafolio (textos, links, proyectos, etc.)
   ============================================================ */

window.SITE_DATA = {

  /* ---------- PERFIL / BANNER ---------- */
  perfil: {
    nombre: "Jose Rojas",
    profesion: "Estudiante de Ciencia de Datos · Diseñador Industrial",
    // Párrafo breve (2 líneas aprox.)
    resumen:
      "5 años de experiencia internacional en entornos técnicos y analíticos. Actualmente cursando Ciencia de Datos, con base en Python, Excel y control de versiones. Bilingüe (ES/EN).",
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
    ciudad: "Sincelejo, Colombia",
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
     etiquetaNivel: texto que aparece a la derecha.                   */
  skills: {
    subtitulo: "9 herramientas", // texto pequeño junto al título
    grupos: [
      {
        grupo: "Datos y programación",
        items: [
          { sigla: "PY", nombre: "Python · pandas · OOP", nivel: 65, etiquetaNivel: "Intermedio" },
          { sigla: "SQL", nombre: "SQL", nivel: 55, etiquetaNivel: "En desarrollo" },
          { sigla: "GIT", nombre: "Git · GitHub", nivel: 60, etiquetaNivel: "Intermedio" },
        ],
      },
      {
        grupo: "Hojas de cálculo y ofimática",
        items: [
          { sigla: "XLS", nombre: "Excel · tablas dinámicas", nivel: 85, etiquetaNivel: "Avanzado" },
          { sigla: "MS", nombre: "Microsoft Office Suite", nivel: 85, etiquetaNivel: "Avanzado" },
        ],
      },
      {
        grupo: "Diseño y 3D",
        items: [
          { sigla: "BL", nombre: "Blender · Cinema 4D", nivel: 80, etiquetaNivel: "Avanzado" },
          { sigla: "3D", nombre: "3ds Max · Maya", nivel: 70, etiquetaNivel: "Intermedio" },
        ],
      },
      {
        grupo: "Idiomas",
        items: [
          { sigla: "ES", nombre: "Español", nivel: 100, etiquetaNivel: "Nativo" },
          { sigla: "EN", nombre: "English", nivel: 90, etiquetaNivel: "Professional" },
        ],
      },
    ],
  },

  /* ---------- PIE DE PÁGINA ---------- */
  footer: "Portafolio de análisis de datos · 2026",
};
