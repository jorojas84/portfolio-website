/* ============================================================
   RENDER — construye la página a partir de window.SITE_DATA
   (definido en data.js). No hace falta tocar este archivo para
   cambiar contenido; solo si quieres cambiar la estructura.
   ============================================================ */

(function () {
  const D = window.SITE_DATA;
  const $ = (sel) => document.querySelector(sel);

  // Crea un elemento con clase y texto opcionales
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(href, className, text) {
    const a = el("a", className, text);
    a.href = href || "#";
    if (href && /^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  // Iconos de redes (usan currentColor para adaptarse al fondo)
  const SOCIAL_ICONS = {
    linkedin:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    github:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>',
  };

  // Botón de red social: icon = "linkedin"|"github", className aplica estilo
  function socialButton(href, icon, title, className) {
    const a = link(href, className);
    a.title = title;
    a.setAttribute("aria-label", title);
    a.innerHTML = SOCIAL_ICONS[icon];
    return a;
  }

  /* ---------- TEMA (fondo y patrón del banner) ---------- */
  function applyTheme() {
    const t = D.tema || {};
    const root = document.documentElement.style;
    // fondo de página: imagen propia o degradado abstracto
    if (t.fondoImagen) {
      root.setProperty("--page-bg", 'url("' + t.fondoImagen + '") center / cover no-repeat');
    } else if (t.fondoPagina) {
      root.setProperty("--page-bg", t.fondoPagina);
    }
    // banner: opacidad y blur PROPIOS (independientes de las tarjetas)
    if (typeof t.opacidadBanner === "number") {
      root.setProperty(
        "--banner-bg",
        "linear-gradient(160deg, rgba(18,18,18," + t.opacidadBanner +
          ") 0%, rgba(0,0,0," + Math.min(1, t.opacidadBanner + 0.12) + ") 100%)"
      );
    } else if (t.fondoBanner) {
      root.setProperty("--banner-bg", t.fondoBanner);
    }
    if (typeof t.blurBanner === "number") root.setProperty("--banner-blur", t.blurBanner + "px");
    // vidrio: opacidad, blur y brillo "liquid" de las tarjetas
    if (typeof t.opacidadTarjetas === "number") {
      root.setProperty("--glass-bg", "rgba(255,255,255," + t.opacidadTarjetas + ")");
    }
    if (typeof t.blur === "number") root.setProperty("--glass-blur", t.blur + "px");
    if (typeof t.brillo === "number") root.setProperty("--glass-sheen", t.brillo);
    root.setProperty("--pattern-color", t.patronColor || "transparent");
    if (t.patronTam) root.setProperty("--pattern-size", t.patronTam + "px");
    // ancho de la foto del banner en escritorio
    if (D.perfil && D.perfil.fotoAncho) root.setProperty("--foto-ancho", D.perfil.fotoAncho + "px");
  }

  /* ---------- TOPBAR ---------- */
  function renderTopbar() {
    const c = D.contacto;
    const social = $("#topbar-social");

    if (c.linkedin) social.appendChild(socialButton(c.linkedin, "linkedin", "LinkedIn", "social-btn"));
    if (c.github) social.appendChild(socialButton(c.github, "github", "GitHub", "social-btn"));

    const contact = $("#topbar-contact");
    if (c.email) contact.appendChild(link("mailto:" + c.email, "contact-pill", c.email));
    if (c.telefono) contact.appendChild(el("div", "contact-pill", c.telefono));
    // (la ciudad va solo en el bloque de contacto del final, no en la barra)
  }

  /* ---------- HERO ---------- */
  function renderHero() {
    const p = D.perfil;

    const photo = $("#hero-photo");
    if (p.foto) {
      const img = document.createElement("img");
      img.src = p.foto;
      img.alt = p.nombre;
      photo.appendChild(img);
    } else {
      // silueta de marcador de posición (busto)
      const ph = el("div", "photo-placeholder");
      ph.innerHTML =
        '<svg width="180" height="230" viewBox="0 0 180 230" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">' +
        '<circle cx="90" cy="72" r="46"/>' +
        '<path d="M10 230c0-46 36-78 80-78s80 32 80 78z"/>' +
        "</svg>";
      photo.appendChild(ph);
    }

    const badge = $("#hero-badge");
    if (p.disponibilidad) {
      badge.appendChild(el("span", "dot"));
      badge.appendChild(document.createTextNode(p.disponibilidad));
    } else {
      badge.remove();
    }

    $("#hero-name").textContent = p.nombre;
    $("#hero-role").textContent = p.profesion;
    $("#hero-summary").textContent = p.resumen;
  }

  /* ---------- PROYECTOS ---------- */
  function projectCard(p) {
    const card = el("div", "project-card");

    const preview = el("div", "project-preview");
    if (p.imagen) {
      const img = document.createElement("img");
      img.src = p.imagen;
      img.alt = p.titulo;
      img.loading = "lazy";
      preview.appendChild(img);
    } else {
      preview.textContent = "Vista previa";
    }
    card.appendChild(preview);

    const meta = el("div", "project-meta");
    meta.appendChild(el("div", "tool-tile", p.badge));
    if (p.categoria) meta.appendChild(el("div", "cat-chip", p.categoria));
    card.appendChild(meta);

    card.appendChild(el("div", "project-title", p.titulo));
    card.appendChild(el("div", "project-desc", p.descripcion));

    const actions = el("div", "project-actions");
    const btn = el("button", "btn btn-dark", "Ver proyecto");
    btn.type = "button";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProjectModal(p);
    });
    actions.appendChild(btn);
    card.appendChild(actions);
    return card;
  }

  /* ---------- POPUP DE PROYECTO (PDF) ---------- */
  function openProjectModal(p) {
    const modal = $("#pdf-modal");
    $("#pdf-modal-title").textContent = p.titulo;
    const body = $("#pdf-modal-body");
    body.innerHTML = "";
    if (p.pdf) {
      const frame = document.createElement("iframe");
      frame.src = p.pdf;
      frame.className = "pdf-frame";
      frame.title = p.titulo;
      body.appendChild(frame);
    } else {
      const empty = el("div", "pdf-empty");
      empty.appendChild(el("div", "pdf-empty-title", "Documento en preparación"));
      empty.appendChild(
        el("div", "pdf-empty-text", "Pronto encontrarás aquí el caso completo de este proyecto.")
      );
      body.appendChild(empty);
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    const modal = $("#pdf-modal");
    modal.classList.remove("open");
    $("#pdf-modal-body").innerHTML = "";
    document.body.style.overflow = "";
  }

  function setupModal() {
    const modal = $("#pdf-modal");
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
    $("#pdf-modal-close").addEventListener("click", closeProjectModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProjectModal();
    });
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    const featured = D.proyectos.filter((p) => p.destacado);
    const rest = D.proyectos.filter((p) => !p.destacado);

    const countChip = $("#projects-count");
    if (countChip) countChip.remove(); // sin conteo de destacados
    featured.forEach((p) => grid.appendChild(projectCard(p)));

    const seeAll = $("#projects-see-all");
    if (rest.length === 0) {
      seeAll.remove();
      return;
    }
    let expanded = false;
    seeAll.addEventListener("click", () => {
      expanded = !expanded;
      if (expanded) {
        rest.forEach((p) => grid.appendChild(projectCard(p)));
        seeAll.firstChild.textContent = "Ver menos ";
      } else {
        while (grid.children.length > featured.length) grid.removeChild(grid.lastChild);
        seeAll.firstChild.textContent = "Ver todos ";
      }
    });
  }

  /* ---------- EDUCACIÓN + CERTIFICACIONES ---------- */
  function renderEducation() {
    const cont = $("#edu-list");
    D.educacion.forEach((e, i) => {
      if (i > 0) cont.appendChild(el("div", "divider"));
      const item = el("div", "edu-item");
      item.appendChild(el("div", "edu-icon " + (e.siglaOscura ? "dark" : "light"), e.sigla));
      const body = el("div", "edu-body");
      body.appendChild(el("div", "edu-title", e.titulo));
      body.appendChild(el("div", "edu-place", e.lugar));
      if (e.detalle) body.appendChild(el("div", "edu-detail", e.detalle));
      item.appendChild(body);
      cont.appendChild(item);
    });

    const certs = $("#cert-list");
    D.certificaciones.forEach((c) => {
      const row = c.url ? link(c.url, "cert-row") : el("div", "cert-row");
      row.appendChild(el("div", "cert-dot"));
      row.appendChild(el("div", "cert-name", c.nombre));
      row.appendChild(el("div", "cert-year", c.anio));
      certs.appendChild(row);
    });
  }

  /* ---------- EXPERIENCIA ---------- */
  function renderExperience() {
    $("#exp-range").textContent = D.experiencia.rangoCabecera || "";
    const cont = $("#exp-list");
    const items = D.experiencia.items;
    items.forEach((x, i) => {
      const row = el("div", "exp-item");

      const dates = el("div", "exp-dates");
      dates.appendChild(el("div", "exp-date", x.fechas));
      dates.appendChild(el("div", "exp-duration", x.duracion));
      row.appendChild(dates);

      const track = el("div", "exp-track");
      track.appendChild(el("div", "exp-node"));
      if (i < items.length - 1) track.appendChild(el("div", "exp-line"));
      row.appendChild(track);

      const body = el("div", "exp-body");
      body.appendChild(el("div", "exp-role", x.puesto));
      body.appendChild(el("div", "exp-place", x.lugar));
      body.appendChild(el("div", "exp-detail", x.detalle));
      row.appendChild(body);

      cont.appendChild(row);
    });
  }

  /* ---------- SKILLS ---------- */
  function renderSkills() {
    $("#skills-count").textContent = D.skills.subtitulo || "";
    const cont = $("#skills-groups");
    D.skills.grupos.forEach((g) => {
      const group = el("div", "skill-group");
      group.appendChild(el("div", "skill-group-label", g.grupo));
      g.items.forEach((s) => {
        const row = el("div", "skill-row");
        const icon = el("div", "skill-icon", s.sigla);
        if (s.color) {
          // tinte del color para fondo/borde + texto a color pleno
          icon.style.color = s.color;
          icon.style.background = s.color + "26"; // ~15% alpha
          icon.style.borderColor = s.color + "59"; // ~35% alpha
        }
        row.appendChild(icon);
        const info = el("div", "skill-info");
        info.appendChild(el("div", "skill-name", s.nombre));
        const bar = el("div", "skill-bar");
        const fill = el("div", "skill-bar-fill");
        fill.style.width = Math.max(0, Math.min(100, s.nivel)) + "%";
        bar.appendChild(fill);
        info.appendChild(bar);
        row.appendChild(info);
        row.appendChild(el("div", "skill-level", s.etiquetaNivel));
        group.appendChild(row);
      });
      cont.appendChild(group);
    });
  }

  /* ---------- CONTACTO (columna derecha) ---------- */
  function renderContactBlock() {
    const c = D.contacto;
    const cont = $("#contact-block");

    // una sola fila compacta: Contáctame (+ CV) + logos de redes
    const actions = el("div", "cta-actions");
    if (c.email) {
      actions.appendChild(link("mailto:" + c.email, "btn-big btn-dark", "Contáctame"));
    }
    if (c.cv) {
      const a = link(c.cv, "btn-big btn-light", "Descargar CV");
      a.removeAttribute("target");
      a.download = "";
      actions.appendChild(a);
    }
    if (c.linkedin) actions.appendChild(socialButton(c.linkedin, "linkedin", "LinkedIn", "social-btn-dark"));
    if (c.github) actions.appendChild(socialButton(c.github, "github", "GitHub", "social-btn-dark"));
    if (c.tableau) {
      const t = link(c.tableau, "social-btn-dark");
      t.title = "Tableau Public";
      t.setAttribute("aria-label", "Tableau Public");
      t.textContent = "Tb";
      actions.appendChild(t);
    }

    cont.appendChild(actions);
  }

  /* ---------- INFO DE CONTACTO (lado derecho del CTA) ---------- */
  function renderContactInfo() {
    const c = D.contacto;
    const cont = $("#contact-info");
    const rows = [
      { label: "Email", value: c.email, href: "mailto:" + c.email },
      { label: "Teléfono", value: c.telefono },
      { label: "Ubicación", value: c.ciudad },
    ].filter((r) => r.value);

    rows.forEach((r) => {
      const row = el("div", "info-row");
      row.appendChild(el("span", "info-label", r.label));
      row.appendChild(
        r.href ? link(r.href, "info-value", r.value) : el("span", "info-value", r.value)
      );
      cont.appendChild(row);
    });
  }

  /* ---------- FOOTER + <title> ---------- */
  function renderFooter() {
    $("#footer").textContent = D.perfil.nombre + " · " + D.footer;
    document.title = D.perfil.nombre + " · " + D.perfil.profesion;
  }

  applyTheme();
  setupModal();
  renderTopbar();
  renderHero();
  renderProjects();
  renderEducation();
  renderExperience();
  renderSkills();
  renderContactBlock();
  renderContactInfo();
  renderFooter();
})();
