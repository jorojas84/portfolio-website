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

  /* ---------- TEMA (fondo y patrón del banner) ---------- */
  function applyTheme() {
    const t = D.tema || {};
    const root = document.documentElement.style;
    if (t.fondoBanner) root.setProperty("--banner-bg", t.fondoBanner);
    root.setProperty("--pattern-color", t.patronColor || "transparent");
    if (t.patronTam) root.setProperty("--pattern-size", t.patronTam + "px");
  }

  /* ---------- TOPBAR ---------- */
  function renderTopbar() {
    const c = D.contacto;
    const social = $("#topbar-social");

    const icons = {
      linkedin:
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H8V8z"/></svg>',
      github:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>',
    };

    if (c.linkedin) {
      const a = link(c.linkedin, "social-btn");
      a.title = "LinkedIn";
      a.innerHTML = icons.linkedin;
      social.appendChild(a);
    }
    if (c.github) {
      const a = link(c.github, "social-btn");
      a.title = "GitHub";
      a.innerHTML = icons.github;
      social.appendChild(a);
    }

    const contact = $("#topbar-contact");
    if (c.email) contact.appendChild(link("mailto:" + c.email, "contact-pill", c.email));
    if (c.telefono) contact.appendChild(el("div", "contact-pill", c.telefono));
    if (c.ciudad) contact.appendChild(el("div", "contact-pill", c.ciudad));
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

    if (p.links && p.links.length) {
      const actions = el("div", "project-actions");
      p.links.forEach((l, i) => {
        actions.appendChild(link(l.url, "btn " + (i === 0 ? "btn-dark" : "btn-light"), l.texto));
      });
      card.appendChild(actions);
    }
    return card;
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    const featured = D.proyectos.filter((p) => p.destacado);
    const rest = D.proyectos.filter((p) => !p.destacado);

    $("#projects-count").textContent = featured.length + " destacados";
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
        row.appendChild(el("div", "skill-icon", s.sigla));
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

    if (c.email) {
      cont.appendChild(link("mailto:" + c.email, "btn-big btn-dark", "Contáctame"));
    }
    if (c.cv) {
      const a = link(c.cv, "btn-big btn-light", "Descargar CV en PDF");
      a.removeAttribute("target");
      a.download = "";
      cont.appendChild(a);
    }

    const links = [
      { texto: "LinkedIn", url: c.linkedin },
      { texto: "GitHub", url: c.github },
      { texto: "Tableau Public", url: c.tableau },
    ].filter((l) => l.url);

    if (links.length) {
      const row = el("div", "contact-links");
      links.forEach((l, i) => {
        if (i > 0) row.appendChild(el("span", "sep", "·"));
        row.appendChild(link(l.url, "", l.texto));
      });
      cont.appendChild(row);
    }
  }

  /* ---------- FOOTER + <title> ---------- */
  function renderFooter() {
    $("#footer").textContent = D.perfil.nombre + " · " + D.footer;
    document.title = D.perfil.nombre + " · " + D.perfil.profesion;
  }

  applyTheme();
  renderTopbar();
  renderHero();
  renderProjects();
  renderEducation();
  renderExperience();
  renderSkills();
  renderContactBlock();
  renderFooter();
})();
