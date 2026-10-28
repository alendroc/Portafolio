const burgerInput = document.getElementById("burger"); 
const dropdown = document.getElementById("dropdownMenu");
const navbar = document.getElementById("navBar")
const burgerLabel = document.getElementById("burgerToggle");
burgerInput.onclick = function() {
 dropdown.classList.toggle("show"); 
 navbar.classList.toggle("show");

 };

window.addEventListener("resize", () => {
const isMobile = window.innerWidth <= 872; 
if (!isMobile) {
burgerInput.checked = false; 
dropdown.classList.remove("show"); 
 navbar.classList.remove("show");
}
});

document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    const isWindows = /windows/i.test(userAgent);

    const scaledContainer = document.getElementById("scaled-container");

    // En teléfonos se usa una escala menor para que quepa más contenido
    const scale = window.innerWidth <= 800 ? 1.2 : 1.8;

    // El ancho máximo del contenido se expresa en px reales de pantalla (ver --container en styles.css)
    if (isIOS || isAndroid || isWindows) document.documentElement.style.setProperty('--zoom', scale);

    if (isIOS) {
      scaledContainer.style.setProperty("--ui-scale", scale);
      scaledContainer.classList.add("use-scale");
    } else if (isAndroid || isWindows) {
      document.body.style.zoom = String(scale);
    }
  });





const translationMap = [
  ['name', 'name'],
  ['title', 'title'],
  ['title_2', 'title_2'],
  ['title_3', 'title_3'],
  ['tag1', 'tag1'],
  ['tag2', 'tag2'],
  ['description', 'description'],
  ['nav_about', 'nav_about'],
  ['nav_projects', 'nav_projects'],
  ['nav_contact', 'nav_contact'],
  ['drop_about', 'nav_about'],
  ['drop_projects', 'nav_projects'],
  ['drop_contact', 'nav_contact'],
  ['section_technologies', 'section_technologies'],
  ['section_experience', 'section_experience'],
  ['section_projects', 'section_projects'],
  ['exp_ponderosa_title', 'exp_ponderosa_title'],
  ['exp_ponderosa_text', 'exp_ponderosa_text'],
  ['exp_exportpack_title', 'exp_exportpack_title'],
  ['exp_exportpack_text', 'exp_exportpack_text'],
  ['exp_4geeks_title', 'exp_4geeks_title'],
  ['exp_4geeks_text', 'exp_4geeks_text'],
  ['exp_knotfix_role', 'exp_knotfix_role'],
  ['exp_knotfix_title', 'exp_knotfix_title'],
  ['exp_knotfix_period', 'exp_knotfix_period'],
  ['exp_knotfix_text', 'exp_knotfix_text'],
  ['exp_knotfix_sales_t', 'exp_knotfix_sales_t'],
  ['exp_knotfix_dev_t', 'exp_knotfix_dev_t'],
  ['exp_knotfix_mkt_t', 'exp_knotfix_mkt_t'],
  ['exp_ponderosa_role', 'exp_ponderosa_role'],
  ['exp_exportpack_role', 'exp_exportpack_role'],
  ['exp_exportpack_period', 'exp_exportpack_period'],
  ['exp_4geeks_role', 'exp_4geeks_role'],
  ['exp_4geeks_period', 'exp_4geeks_period'],
  ['agricola_tittle', 'agricola_title'],
  ['agricola_text', 'agricola_text'],
  ['censuma_text', 'censuma_text'],
  ['censuma_p1', 'censuma_p1'],
  ['censuma_p2', 'censuma_p2'],
  ['censuma_p3', 'censuma_p3'],
  ['ong_p4', 'ong_p4'],
  ['ong_text', 'ong_text'],
  ['ong_p1', 'ong_p1'],
  ['ong_p2', 'ong_p2'],
  ['ong_p3', 'ong_p3'],
  ['luckdream_text', 'luckdream_text'],
  ['luckdream_p1', 'luckdream_p1'],
  ['luckdream_p2', 'luckdream_p2'],
  ['luckdream_p3', 'luckdream_p3'],
  ['agricola_p1', 'agricola_p1'],
  ['agricola_p2', 'agricola_p2'],
  ['agricola_p3', 'agricola_p3'],
  ['proj_code_agricola', 'proj_code_agricola'],
  ['sites_title', 'sites_title'],
  ['magicplace_kind', 'magicplace_kind'],
  ['studio27_kind', 'studio27_kind'],
  ['section_studies', 'section_studies'],
  ['study_highschool_years', 'study_highschool_years'],
  ['study_highschool_level', 'study_highschool_level'],
  ['study_highschool_title', 'study_highschool_title'],
  ['study_university_years', 'study_university_years'],
  ['study_university_level', 'study_university_level'],
  ['study_university_institution', 'study_university_institution'],
  ['study_university_title', 'study_university_title'],
  ['certification_occupational_year', 'certification_occupational_year'],
  ['certification_occupational_type', 'certification_occupational_type'],
  ['certification_occupational_name', 'certification_occupational_name'],
  ['certification_itoperator_year', 'certification_itoperator_year'],
  ['certification_itoperator_type', 'certification_itoperator_type'],
  ['certification_itoperator_name', 'certification_itoperator_name'],
  ['certification_itessentials_year', 'certification_itessentials_year'],
  ['certification_itessentials_type', 'certification_itessentials_type'],
  ['certification_itessentials_name', 'certification_itessentials_name'],
  ['certification_scrum_type', 'certification_scrum_type'],
  ['certification_scrum_name', 'certification_scrum_name'],
  ['section_research', 'section_research'],
  ['paper_t1', 'paper_t1'],
  ['paper_t2', 'paper_t2'],
  ['paper_t3', 'paper_t3'],
  ['paper_t4', 'paper_t4'],
  ['paper_venue', 'paper_venue'],
  ['paper_read', 'paper_read'],
  ['paper_book', 'paper_book'],
  ['section_me', 'section_me'],
  ['text_me', 'text_me'],
  ['footer_residence_title', 'footer_residence_title'],
  ['footer_residence_extra', 'footer_residence_extra'],
  ['footer_contact_title', 'footer_contact_title'],
  ['footer_big', 'footer_big'],
  ['footer_top', 'footer_top']
];

let translationsPromise = null;
function getTranslations() {
  if (!translationsPromise) translationsPromise = fetch('lang.json').then(r => r.json());
  return translationsPromise;
}

async function loadLanguage(lang) {
  const texts = (await getTranslations())[lang];
  if (!texts) return;

  document.body.classList.add('lang-switching');
  setTimeout(() => {
    translationMap.forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && texts[key] !== undefined) el.textContent = texts[key];
    });
    document.documentElement.lang = lang;
    document.body.classList.remove('lang-switching');
    // Avisa a los efectos que dependen del texto (palabras reveladas, globo del footer)
    document.dispatchEvent(new Event('langchange'));
  }, 120);

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function syncSwitchers(lang) {
  document.querySelectorAll('.languageSwitcher').forEach(sw => {
    sw.setAttribute('data-value', lang);
    const opt = sw.querySelector('.lenguaje[data-lang="' + lang + '"]');
    if (opt) sw.querySelector('.selected-text').textContent = opt.getAttribute('data-text');
    sw.querySelectorAll('.lenguaje').forEach(o => o.classList.toggle('active', o.getAttribute('data-lang') === lang));
  });
}

let initialLang = 'en';
try { initialLang = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en'); } catch (e) {}
syncSwitchers(initialLang);
loadLanguage(initialLang);

const languageSwitchers = document.querySelectorAll('.languageSwitcher');

languageSwitchers.forEach(switcher => {
  const selected = switcher.querySelector('.dropdown-selected');
  const selectedText = switcher.querySelector('.selected-text');
  const options = switcher.querySelectorAll('.lenguaje');

  // Toggle dropdown
  selected.addEventListener('click', function(e) {
    e.stopPropagation();
    
    // Cerrar otros dropdowns
    languageSwitchers.forEach(other => {
      if (other !== switcher) other.classList.remove('open');
    });
    
    switcher.classList.toggle('open');
  });

  // Seleccionar opción
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const lang = this.getAttribute('data-lang');
      const text = this.getAttribute('data-text');
      
      loadLanguage(lang);

      // Actualizar todos los switchers
      languageSwitchers.forEach(otherSwitcher => {
        otherSwitcher.setAttribute('data-value', lang);
        otherSwitcher.querySelector('.selected-text').textContent = text;
        
        // Actualizar clase activa
        const otherOptions = otherSwitcher.querySelectorAll('.lenguaje');
        otherOptions.forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
        
        // Cerrar dropdown
        otherSwitcher.classList.remove('open');
      });
    });
  });
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function() {
  languageSwitchers.forEach(switcher => {
    switcher.classList.remove('open');
  });
});

// Pastilla deslizante en hover (estilo Animate UI)
function attachPill(container, itemSelector) {
  if (!container) return;
  const pill = document.createElement('span');
  pill.className = 'nav-pill';
  container.prepend(pill);

  const moveTo = item => {
    const first = !pill.classList.contains('visible');
    if (first) pill.classList.add('no-anim');
    pill.style.width = item.offsetWidth + 'px';
    pill.style.height = item.offsetHeight + 'px';
    pill.style.transform = 'translate(' + item.offsetLeft + 'px,' + item.offsetTop + 'px)';
    if (first) {
      void pill.offsetWidth;
      pill.classList.remove('no-anim');
    }
    pill.classList.add('visible');
  };

  container.addEventListener('mouseover', e => {
    const item = e.target.closest(itemSelector);
    if (item && container.contains(item)) moveTo(item);
  });
  container.addEventListener('focusin', e => {
    const item = e.target.closest(itemSelector);
    if (item) moveTo(item);
  });
  const hide = () => pill.classList.remove('visible');
  container.addEventListener('mouseleave', hide);
  container.addEventListener('focusout', hide);
}

attachPill(document.querySelector('.nav-links'), 'a');
attachPill(document.querySelector('.nav-social'), 'a');
document.querySelectorAll('.dropdown-options').forEach(c => attachPill(c, '.lenguaje'));


// Parallax del hero (mouse + scroll)
(function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layers = Array.from(hero.querySelectorAll('[data-depth]')).map(el => ({
    el,
    depth: parseFloat(el.dataset.depth) || 0
  }));
  const canHover = window.matchMedia('(hover: hover)').matches;
  const state = { mx: 0, my: 0, cx: 0, cy: 0, scroll: 0, visible: true, running: false };

  const render = () => {
    state.cx += (state.mx - state.cx) * 0.08;
    state.cy += (state.my - state.cy) * 0.08;
    layers.forEach(({ el, depth }) => {
      const x = state.cx * depth * 140;
      const y = state.cy * depth * 140 - state.scroll * depth * 1.2;
      el.style.translate = el.classList.contains('hero-bigtext')
        ? `-50% ${y}px`
        : `${x}px ${y}px`;
    });
    const settled = Math.abs(state.mx - state.cx) < 0.001 && Math.abs(state.my - state.cy) < 0.001;
    if (state.visible && !settled) requestAnimationFrame(render);
    else state.running = false;
  };
  const kick = () => {
    if (!state.running && state.visible) {
      state.running = true;
      requestAnimationFrame(render);
    }
  };

  if (canHover) {
    window.addEventListener('mousemove', e => {
      state.mx = e.clientX / window.innerWidth - 0.5;
      state.my = e.clientY / window.innerHeight - 0.5;
      kick();
    }, { passive: true });
  }
  window.addEventListener('scroll', () => {
    state.scroll = Math.min(lenis ? lenis.scroll : window.scrollY, hero.offsetHeight);
    kick();
  }, { passive: true });

  new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    if (state.visible) kick();
  }).observe(hero);
})();

// Scroll suave (Lenis)
const lenis = (!window.Lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  ? null
  : new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true, anchors: true });
if (lenis) {
  const lenisLoop = time => {
    lenis.raf(time);
    requestAnimationFrame(lenisLoop);
  };
  requestAnimationFrame(lenisLoop);
}

// Foco de luz que sigue el cursor (botones del hero y tarjetas de tecnologías)
(function initButtonGlow() {
  document.addEventListener('pointermove', e => {
    const el = e.target.closest('.metal-btn, .tech-card, .exp-tab');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    el.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
})();

// La línea bajo el hero se extiende hasta el ancho completo al bajar
(function initHeroLine() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.6)));
    hero.style.setProperty('--line', p.toFixed(3));
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// Tecnologías: marquee infinito (clona las pistas) que acelera con el scroll
(function initTechMarquee() {
  const tracks = Array.from(document.querySelectorAll('.tech-track'));
  if (!tracks.length) return;
  tracks.forEach(track => {
    const originals = Array.from(track.children);
    for (let i = 0; i < 2; i++) {
      originals.forEach(li => {
        const clone = li.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
    }
  });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Desvanece cada tarjeta al entrar/salir por los bordes (sin mask-image, que rompe el vidrio)
  const marquee = tracks[0].parentElement;
  const cards = Array.from(marquee.querySelectorAll('.tech-card'));
  let fadeOn = false;
  const fadeLoop = () => {
    if (!fadeOn) return;
    const box = marquee.getBoundingClientRect();
    const zone = box.width * 0.14;
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, Math.min(r.left - box.left, box.right - r.right) / zone));
      card.style.opacity = (t * t * (3 - 2 * t)).toFixed(3);
    });
    requestAnimationFrame(fadeLoop);
  };
  new IntersectionObserver(([entry]) => {
    const was = fadeOn;
    fadeOn = entry.isIntersecting;
    if (fadeOn && !was) requestAnimationFrame(fadeLoop);
  }).observe(marquee);

  let rate = 1;
  let raf = 0;
  const apply = () => {
    tracks.forEach(t => t.getAnimations().forEach(a => a.updatePlaybackRate(rate)));
  };
  const decay = () => {
    rate += (1 - rate) * 0.06;
    if (rate < 1.01) { rate = 1; apply(); raf = 0; return; }
    apply();
    raf = requestAnimationFrame(decay);
  };
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const delta = Math.abs(window.scrollY - lastY);
    lastY = window.scrollY;
    rate = Math.min(4, Math.max(rate, 1 + delta * 0.08));
    apply();
    if (!raf) raf = requestAnimationFrame(decay);
  }, { passive: true });
})();

// Experiencia: lista seleccionable + panel con imagen
(function initExperience() {
  const layout = document.querySelector('.exp-layout');
  if (!layout) return;
  const tabs = Array.from(layout.querySelectorAll('.exp-tab'));
  const panels = Array.from(layout.querySelectorAll('.exp-panel'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;

  const select = (index, byUser, keepWheel) => {
    current = (index + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      const on = i === current;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel, i) => {
      const on = i === current;
      panel.hidden = !on;
      panel.classList.toggle('is-active', on);
    });
    if (isWheel()) {
      if (!keepWheel) goTo(current, true);
    } else if (list && list.scrollWidth > list.clientWidth) {
      // En celular la fila se desplaza de lado para que la opción activa quede visible
      list.scrollTo({ left: tabs[current].offsetLeft - list.offsetLeft - 30, behavior: reduce ? 'auto' : 'smooth' });
    }
    if (byUser) tabs[current].focus({ preventScroll: true });
  };

  // Rueda de opciones (solo escritorio): las pestañas giran sobre un arco y la seleccionada queda al centro
  const list = layout.querySelector('.exp-list');
  const mobile = window.matchMedia('(max-width: 800px)');
  const isWheel = () => !!list && list.classList.contains('is-wheel');
  const TILT = 6 * Math.PI / 180, BLUR = 0.8, FADE = 0.2, MIN_OPACITY = 0.06, SMOOTHING = 0.2;
  const wheel = { pos: 0, target: 0, rowH: 60, raf: null, last: 0 };
  let drag = null, dragMoved = false, wheelTimer;

  const measure = () => { wheel.rowH = Math.max(...tabs.map(t => t.offsetHeight)) + 30; };
  const layoutWheel = () => {
    const R = wheel.rowH / TILT;
    tabs.forEach((tab, i) => {
      const d = i - wheel.pos;
      const dist = Math.abs(d);
      const ang = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, d * TILT));
      // La activa queda arriba; las siguientes bajan por el arco hacia la derecha y las anteriores se esfuman al subir
      const x = R * (1 - Math.cos(ang));
      const y = R * Math.sin(ang);
      const fade = d < 0 ? FADE * 2 : FADE;
      tab.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${(ang * 180 / Math.PI).toFixed(3)}deg)`;
      tab.style.opacity = Math.max(MIN_OPACITY, 1 - dist * fade).toFixed(3);
      tab.style.filter = dist > 0.01 ? `blur(${(dist * BLUR).toFixed(2)}px)` : 'none';
      tab.style.setProperty('--ow-p', Math.max(0, 1 - Math.min(dist, 1)).toFixed(3));
    });
  };
  // Suavizado exponencial independiente de los fps hacia la posición objetivo
  const frame = now => {
    const dt = Math.min((now - wheel.last) / 1000, 0.05);
    wheel.last = now;
    const k = reduce ? 1 : 1 - Math.exp(-dt / SMOOTHING);
    wheel.pos += (wheel.target - wheel.pos) * k;
    const settled = Math.abs(wheel.target - wheel.pos) < 0.001;
    if (settled) wheel.pos = wheel.target;
    if (isWheel()) layoutWheel();
    wheel.raf = settled ? null : requestAnimationFrame(frame);
  };
  function goTo(value, snap) {
    let v = Math.min(Math.max(value, 0), tabs.length - 1);
    if (snap) v = Math.round(v);
    wheel.target = v;
    if (Math.round(v) !== current) select(Math.round(v), false, true);
    if (wheel.raf == null) {
      wheel.last = performance.now();
      wheel.raf = requestAnimationFrame(frame);
    }
  }

  // Flechas del menú en celular: aparecen solo si hay más opciones hacia ese lado
  const prevBtn = layout.querySelector('.exp-arrow--prev');
  const nextBtn = layout.querySelector('.exp-arrow--next');
  let arrowsTick = false;
  const updateArrows = () => {
    arrowsTick = false;
    if (!list || !prevBtn || !nextBtn) return;
    const max = list.scrollWidth - list.clientWidth;
    prevBtn.hidden = isWheel() || list.scrollLeft <= 2;
    nextBtn.hidden = isWheel() || list.scrollLeft >= max - 2;
  };
  const queueArrows = () => {
    if (arrowsTick) return;
    arrowsTick = true;
    requestAnimationFrame(updateArrows);
  };

  // Escritorio usa la rueda; celular, la fila horizontal que se desliza
  const applyMode = () => {
    const useWheel = !mobile.matches;
    list.classList.toggle('is-wheel', useWheel);
    list.setAttribute('aria-orientation', useWheel ? 'vertical' : 'horizontal');
    if (useWheel) {
      measure();
      wheel.pos = wheel.target = current;
      layoutWheel();
    } else {
      tabs.forEach(tab => {
        tab.style.transform = tab.style.opacity = tab.style.filter = '';
        tab.style.removeProperty('--ow-p');
      });
    }
    queueArrows();
  };

  if (list) {
    applyMode();
    mobile.addEventListener('change', applyMode);
    const refresh = () => { if (isWheel()) { measure(); layoutWheel(); } queueArrows(); };
    window.addEventListener('resize', refresh);
    if (document.fonts) document.fonts.ready.then(refresh);
    list.addEventListener('scroll', queueArrows, { passive: true });
    if (prevBtn) prevBtn.addEventListener('click', () => { if (current > 0) select(current - 1, false); });
    if (nextBtn) nextBtn.addEventListener('click', () => { if (current < tabs.length - 1) select(current + 1, false); });

    // Rueda del mouse / touchpad: un paso por evento; en los extremos deja pasar el scroll de la página
    list.addEventListener('wheel', e => {
      if (!isWheel()) return;
      const delta = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaY;
      const step = Math.max(-1, Math.min(1, delta / wheel.rowH));
      const next = Math.min(Math.max(wheel.target + step, 0), tabs.length - 1);
      if (next === wheel.target) return;
      e.preventDefault();
      e.stopPropagation();
      goTo(next, false);
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => goTo(wheel.target, true), 140);
    }, { passive: false });

    // Arrastre vertical; la captura empieza solo cuando hay movimiento real para no romper los clics
    list.addEventListener('pointerdown', e => {
      if (e.button !== 0 || !isWheel()) return;
      const ratio = list.getBoundingClientRect().height / (list.offsetHeight || 1);
      drag = { y: e.clientY, start: wheel.target, id: e.pointerId, row: wheel.rowH * ratio };
      dragMoved = false;
    });
    list.addEventListener('pointermove', e => {
      if (!drag) return;
      const dy = e.clientY - drag.y;
      if (!dragMoved && Math.abs(dy) > 4) {
        dragMoved = true;
        list.setPointerCapture(drag.id);
        list.classList.add('is-dragging');
      }
      if (dragMoved) goTo(drag.start - dy / drag.row, false);
    });
    const endDrag = () => {
      if (!drag) return;
      drag = null;
      list.classList.remove('is-dragging');
      if (dragMoved) goTo(wheel.target, true);
      setTimeout(() => { dragMoved = false; });
    };
    list.addEventListener('pointerup', endDrag);
    list.addEventListener('pointercancel', endDrag);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => { if (!dragMoved) select(i, true); });
    tab.addEventListener('keydown', e => {
      const next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (next) { e.preventDefault(); select(current + next, true); }
      else if (e.key === 'Home') { e.preventDefault(); select(0, true); }
      else if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
    });
  });

  if (reduce) return;

  // Inclinación suave de la imagen con el mouse
  layout.addEventListener('pointermove', e => {
    const media = e.target.closest('.exp-media');
    if (!media) return;
    const r = media.getBoundingClientRect();
    media.style.setProperty('--rx', (((e.clientY - r.top) / r.height - 0.5) * -5).toFixed(2) + 'deg');
    media.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 6).toFixed(2) + 'deg');
  });
  layout.addEventListener('pointerleave', () => {
    layout.querySelectorAll('.exp-media').forEach(m => {
      m.style.setProperty('--rx', '0deg');
      m.style.setProperty('--ry', '0deg');
    });
  });
})();

// Proyectos: la lista avanza con el scroll y la ventana fija muestra el proyecto activo
(function initProjects() {
  const showcase = document.querySelector('.proj-showcase');
  if (!showcase) return;
  const items = Array.from(showcase.querySelectorAll('.proj-item'));
  const windows = Array.from(showcase.querySelectorAll('.proj-window'));
  const list = showcase.querySelector('.proj-list');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;
  let timer = null;
  let inView = false;
  let hovering = false;

  const showShot = (win, index) => {
    // Las capturas que no existen se quitan solas (onerror), así que se cuentan las que quedan
    const imgs = win.querySelectorAll('.proj-screen img');
    const dots = win.querySelectorAll('.proj-dots button');
    dots.forEach((dot, n) => { dot.hidden = imgs.length < 2 || n >= imgs.length; });
    if (!imgs.length) return;
    const i = (index + imgs.length) % imgs.length;
    // La captura anterior queda debajo mientras la nueva entra, así no se ve el fondo entre ambas
    imgs.forEach((img, n) => {
      img.classList.toggle('is-prev', n !== i && img.classList.contains('is-shown'));
      img.classList.toggle('is-shown', n === i);
    });
    dots.forEach((dot, n) => dot.classList.toggle('is-on', n === i));
    win.dataset.shot = i;
  };

  // Las capturas de la ventana activa rotan solas mientras la sección está en pantalla
  const restartTimer = () => {
    clearInterval(timer);
    if (reduce || !inView || hovering) return;
    timer = setInterval(() => {
      const win = windows[active];
      showShot(win, Number(win.dataset.shot || 0) + 1);
    }, 3500);
  };

  const setActive = index => {
    if (index === active) return;
    active = index;
    items.forEach((item, i) => item.classList.toggle('is-active', i === active));
    // Las ventanas anteriores esperan arriba y las siguientes abajo: la transición sigue la dirección del scroll
    windows.forEach((win, i) => {
      win.classList.toggle('is-active', i === active);
      win.classList.toggle('is-before', i < active);
    });
    list.style.setProperty('--prog', items.length > 1 ? (active / (items.length - 1)).toFixed(3) : 1);
    showShot(windows[active], Number(windows[active].dataset.shot || 0));
    restartTimer();
  };

  window.addEventListener('load', () => windows.forEach(win => showShot(win, 0)));

  // El proyecto activo es el último cuyo nombre ya cruzó la mitad de la pantalla;
  // el margen evita que cambie de ida y vuelta cuando un nombre queda justo en el borde
  const titles = items.map(item => item.querySelector('.proj-title'));
  const margin = 40;
  let ticking = false;
  const pickActive = () => {
    ticking = false;
    const mid = window.innerHeight / 2;
    let next = 0;
    titles.forEach((title, i) => {
      const r = title.getBoundingClientRect();
      if ((r.top + r.bottom) / 2 <= mid + (i <= active ? margin : -margin)) next = i;
    });
    setActive(next);
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(pickActive);
  };
  if (lenis) lenis.on('scroll', onScroll);
  else window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  pickActive();

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    restartTimer();
  }).observe(showcase);

  // Antes de llegar a la sección se cargan todas las capturas, así cambiar de proyecto no muestra el placeholder
  const preload = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    showcase.querySelectorAll('.proj-screen img').forEach(img => { img.loading = 'eager'; });
    preload.disconnect();
  }, { rootMargin: '800px 0px' });
  preload.observe(showcase);

  // Clic en un proyecto de la lista lleva su nombre al centro de la pantalla (justo donde se activa)
  items.forEach((item, i) => {
    item.addEventListener('click', e => {
      if (e.target.closest('a, button') || window.innerWidth <= 800) return;
      const title = titles[i];
      if (lenis) lenis.scrollTo(title, { offset: -window.innerHeight * 0.45 });
      else title.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
  });

  windows.forEach(win => {
    // La rotación automática se pausa mientras el mouse está sobre la ventana
    win.addEventListener('mouseenter', () => { hovering = true; clearInterval(timer); });
    win.addEventListener('mouseleave', () => { hovering = false; restartTimer(); });
    win.querySelectorAll('.proj-dots button').forEach(dot => {
      dot.addEventListener('click', () => { showShot(win, Number(dot.dataset.shot)); restartTimer(); });
    });
    win.querySelector('.proj-screen').addEventListener('click', () => {
      openLightbox(Array.from(win.querySelectorAll('.proj-screen img')), Number(win.dataset.shot || 0));
    });
  });
  items.forEach(item => {
    item.querySelectorAll('.proj-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        openLightbox(Array.from(item.querySelectorAll('.proj-thumb img')), Number(thumb.dataset.shot));
      });
    });
  });

  // Visor de imágenes
  const box = document.querySelector('.lightbox');
  const boxImg = box && box.querySelector('.lightbox-img');
  const boxCount = box && box.querySelector('.lightbox-count');
  let shots = [];
  let shot = 0;

  const render = () => {
    shot = (shot + shots.length) % shots.length;
    boxImg.src = shots[shot].src;
    boxImg.alt = shots[shot].alt;
    boxCount.textContent = `${shot + 1} / ${shots.length}`;
  };
  function openLightbox(imgs, index) {
    if (!box || !imgs.length) return;
    shots = imgs;
    shot = index;
    render();
    // El body tiene zoom; el visor lo compensa para ocupar la pantalla real
    box.style.zoom = String(1 / (parseFloat(document.body.style.zoom) || 1));
    box.showModal();
    clearInterval(timer);
    if (lenis) lenis.stop();
  }
  if (box) {
    box.querySelector('.lightbox-prev').addEventListener('click', () => { shot--; render(); });
    box.querySelector('.lightbox-next').addEventListener('click', () => { shot++; render(); });
    box.querySelector('.lightbox-close').addEventListener('click', () => box.close());
    box.addEventListener('click', e => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { shot--; render(); }
      else if (e.key === 'ArrowRight') { shot++; render(); }
    });
    box.addEventListener('close', () => {
      if (lenis) lenis.start();
      restartTimer();
    });
  }
})();

// Parallax de secciones: entran subiendo con fade y salen alejándose; también mueve el fondo
(function initSectionParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sections = Array.from(document.querySelectorAll('.section'));
  const hero = document.querySelector('.hero');
  const heroInner = hero && hero.querySelector('.hero-inner');
  const root = document.documentElement;
  const footer = document.querySelector('.reveal-footer');
  const visible = new Set(sections);
  const clamp = v => Math.min(1, Math.max(0, v));
  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    visible.forEach(el => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--in', clamp((r.top - vh * 0.6) / (vh * 0.4)).toFixed(3));
      el.style.setProperty('--out', clamp((vh * 0.3 - r.bottom) / (vh * 0.3)).toFixed(3));
      el.style.setProperty('--p', Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh)).toFixed(3));
    });
    const max = document.documentElement.scrollHeight - vh;
    root.style.setProperty('--bg-shift', (max > 0 ? window.scrollY / max : 0).toFixed(4));
    if (heroInner) {
      const h = clamp(window.scrollY / (hero.offsetHeight * 0.8));
      heroInner.style.opacity = (1 - h * 0.85).toFixed(3);
      heroInner.style.scale = (1 - h * 0.05).toFixed(4);
    }
    // Cuánto del footer ya quedó descubierto (0 = oculto bajo el contenido, 1 = completo)
    if (footer) {
      const r = footer.getBoundingClientRect();
      const f = clamp((vh - r.top) / (r.height || 1));
      footer.style.setProperty('--f', f.toFixed(3));
      footer.classList.toggle('is-in', f > 0.92);
    }
  };
  const request = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-moving', entry.isIntersecting);
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    });
    request();
  });
  sections.forEach(el => io.observe(el));

  if (lenis) lenis.on('scroll', request);
  else window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  request();
})();

// Botones magnéticos del hero: se inclinan unos px hacia el cursor
(function initMagnetic() {
  if (!window.matchMedia('(hover: hover)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.hero .metal-btn').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
      btn.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
  });
})();

// Título del hero: rota entre roles
(function initFlipWords() {
  const words = Array.from(document.querySelectorAll('.flip-word'));
  if (words.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = words[0].parentElement;
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    // Se fija el alto actual y se anima hacia el de la palabra nueva (algunas ocupan dos líneas)
    box.style.height = box.offsetHeight + 'px';
    words[i].classList.remove('is-on');
    words[i].classList.add('is-off');
    words[i].setAttribute('aria-hidden', 'true');
    const prev = words[i];
    setTimeout(() => prev.classList.remove('is-off'), 700);
    i = (i + 1) % words.length;
    words[i].classList.add('is-on');
    words[i].removeAttribute('aria-hidden');
    requestAnimationFrame(() => { box.style.height = words[i].offsetHeight + 'px'; });
    setTimeout(() => { box.style.height = ''; }, 700);
  }, 2800);
})();

// "Sobre mí": las palabras se iluminan a medida que el texto sube por la pantalla
(function initTextReveal() {
  const el = document.getElementById('text_me');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let spans = [];
  const split = () => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    spans = words.map((w, n) => {
      const span = document.createElement('span');
      span.className = 'tr-word';
      span.textContent = w;
      el.appendChild(span);
      if (n < words.length - 1) el.appendChild(document.createTextNode(' '));
      return span;
    });
    update();
  };
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5)));
    const n = spans.length;
    spans.forEach((span, k) => {
      span.style.opacity = Math.min(1, Math.max(0.15, p * n * 1.15 - k)).toFixed(2);
    });
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  split();
  document.addEventListener('langchange', split);
  if (lenis) lenis.on('scroll', request);
  else window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
})();

// Footer: el avatar se inclina levemente siguiendo el mouse
(function initFooterAvatar() {
  const footer = document.querySelector('.reveal-footer');
  const avatar = footer && footer.querySelector('.rf-avatar');
  if (!avatar) return;
  // Con reduced motion no hay parallax que marque .is-in, así que se muestra completo desde el inicio
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    footer.classList.add('is-in');
    return;
  }
  if (!window.matchMedia('(hover: hover)').matches) return;
  footer.addEventListener('pointermove', e => {
    const r = avatar.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 300));
    avatar.style.setProperty('--tilt', (x * 4).toFixed(2) + 'deg');
  });
  footer.addEventListener('pointerleave', () => avatar.style.setProperty('--tilt', '0deg'));
})();
