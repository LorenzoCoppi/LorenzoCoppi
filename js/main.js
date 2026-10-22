/* Portfolio — Lorenzo Maria Coppi
   Legge i dati da js/data.js (window.PROJECTS), costruisce home e pagine progetto,
   e gestisce il cambio lingua IT / EN (scelta salvata nel browser). */

   (function () {
    const projects = window.PROJECTS || [];
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  
    /* ---------------- Testi dell'interfaccia ----------------
       Per le pagine statiche (home, Su di me) i testi italiani stanno nell'HTML;
       qui sotto ci sono le traduzioni inglesi, agganciate con data-i18n="chiave". */
    const UI = {
      it: {
        works: 'Progetti', all: 'Tutti', project: 'Il progetto', next: 'Progetto successivo',
        prev: 'Immagine precedente', nextImg: 'Immagine successiva', close: 'Chiudi',
        prevProject: 'Progetto precedente', nextProject: 'Progetto successivo',
        notFound: 'Progetto non trovato', backToWorks: 'Torna ai progetti',
        enlarge: 'Ingrandisci: ', gallery: 'Immagini del progetto', filter: 'Filtra per categoria',
        titleHome: 'Portfolio di Lorenzo Coppi',
        descHome: 'Portfolio di Lorenzo Maria Coppi, studente di Design della Comunicazione al Politecnico di Milano: prodotto, web design, branding, editoria.',
        titleAbout: 'Su di me — Lorenzo Maria Coppi',
        descAbout: 'Chi è Lorenzo Maria Coppi: studente di Design della Comunicazione al Politecnico di Milano. Formazione, esperienze, competenze e CV.',
      },
      en: {
        works: 'Projects', all: 'All', project: 'The project', next: 'Next project',
        prev: 'Previous image', nextImg: 'Next image', close: 'Close',
        prevProject: 'Previous project', nextProject: 'Next project', scroll: 'Scroll',
        notFound: 'Project not found', backToWorks: 'Back to projects',
        enlarge: 'Enlarge: ', gallery: 'Project images', filter: 'Filter by category',
        titleHome: 'Lorenzo Coppi’s portfolio',
        descHome: 'Portfolio of Lorenzo Maria Coppi, Communication Design student at Politecnico di Milano: product, web design, branding, editorial.',
        titleAbout: 'About — Lorenzo Maria Coppi',
        descAbout: 'About Lorenzo Maria Coppi: Communication Design student at Politecnico di Milano. Education, experience, skills and CV.',
        // pagine statiche
        skip: 'Skip to content', navHome: 'Home', navWorks: 'Projects', navAbout: 'About', contacts: 'Contacts', cv: 'CV',
        heroSide: 'Fourth-year Communication Design student at Politecnico di Milano. I design from graphic design to woodwork, from code to 3D modelling.',
        updated: 'Last updated', heroTitle: 'Lorenzo Coppi’s portfolio',
        top: 'Back to top', city: 'Milan, Italy',
        aboutName: 'Lorenzo Maria Coppi',
        bio: 'Curious and versatile designer, I combine a strong problem-solving attitude with a creative spirit. I design across the board, from woodworking to digital tools such as graphic design, 3D modelling and code. A proactive team player, I consider dialogue with mentors and professionals essential to my growth.',
        dlCv: 'Download CV',
        exp: 'Experience', edu: 'Education', skills: 'Skills', langs: 'Languages and interests',
        e0t: 'Product, Communication Designer & Strategist', e0d: 'Fourth-year product design student, with a multidisciplinary course of study in communication integrated with industrial product design courses.', e0w: 'Now',
        e1t: 'Exhibition at Fuori Salone', e1d: 'The “Zeta” lamp was selected for exhibition at Fuori Salone 2026 at the Assolombarda venue.',
        e2t: 'University orientation tutor', e2d: 'Assistant to a high-school teacher in university-preparation lessons at Fondazione Sacro Cuore.',
        e3t: 'Communication lead, MuD (Milano University District)', e3d: 'Concept and management of the visual identity and online/offline strategy for the edition “What makes man man?”.',
        e4t: 'School-work internship, Studio Gumier', e4d: 'School-work placement of 150 hours at the architecture studio Gumier in Piazza Cinque Giornate, Milan.',
        e5t: 'Catering waiter', e5d: 'Work at private and corporate events: service, set-up and guest management.', since: 'Since 2022',
        e6t: 'Football coach / educator', e6d: 'Football coach at ASD Sacro Cuore, for the Under 19–20 and youngest age groups.',
        e7t: 'Winery operator, La Barbatella', e7d: 'Nizza Monferrato (AT). Cross-functional operational support: wine sales, vineyard work, cellar operations and maintenance of the facilities.',
        d0: 'Bachelor’s degree in Communication Design, Politecnico di Milano', d1: 'High-school diploma, Liceo Artistico Sacro Cuore',
        l_it: 'Italian', l_itv: 'Native', l0: 'English', l1: 'Interests', l1v: 'Architecture, publishing, sport, art, mountains', photography: 'Photography',
        htmlCss: 'HTML, CSS and JavaScript', aboutAlt: 'Portrait of Lorenzo Maria Coppi',
      },
    };
  
    let lang = 'it';
    try { lang = localStorage.getItem('lang') || 'it'; } catch (e) { /* storage non disponibile */ }
    if (lang !== 'it' && lang !== 'en') lang = 'it';
  
    const t = (k) => (UI[lang] && UI[lang][k]) || UI.it[k] || '';
    const pad = (n) => String(n).padStart(2, '0');
  
    function el(tag, attrs = {}, children = []) {
      const node = document.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class') node.className = v;
        else if (k === 'text') node.textContent = v;
        else if (v === true) node.setAttribute(k, '');
        else if (v !== false && v != null) node.setAttribute(k, v);
      }
      [].concat(children).forEach((c) => c && node.appendChild(c));
      return node;
    }
  
    // dati del progetto nella lingua corrente
    const loc = (p) => (lang === 'en' && p.en ? p.en : p);
    const capOf = (im) => (lang === 'en' && im.cap_en) || im.cap || '';
  
    /* ---------------- Tipografia: niente vedove né orfane ----------------
       - le ultime due parole di ogni testo restano unite (mai una parola sola nell'ultima riga)
       - le parole brevi (a, e, di, il, un…) restano unite alla parola che segue
       Funziona su qualsiasi larghezza di schermo e in tutti i browser; il CSS aggiunge
       text-wrap: pretty / balance dove il browser lo supporta. */
    const NB = '\u00A0';
    const done = new WeakMap();
    const TYPESET = 'p, h1, h2, h3, figcaption, dd, dt, .sub, .intro, .kicker span, .titles .sub, .card .info h3, .p-nav a span:not(.arr), .next .t, .timeline .when, .plain li, .site-footer .c, .hero .updated span';
    function typesetText(s) {
      const w = s.trim().split(/\s+/);
      if (w.length < 2) return s;
      const isDash = (x) => /^[–—·|•←→-]$/.test(x);
      const letters = (x) => x.replace(/[^A-Za-zÀ-ÿ0-9]/g, '').length;
      let out = w[0];
      for (let i = 1; i < w.length; i++) {
        const prev = w[i - 1], cur = w[i];
        // trattini e simboli restano attaccati alla parola prima; parole brevi (a, e, di, il…) a quella dopo
        const bind = isDash(cur) || (letters(prev) <= 2 && !isDash(prev) && letters(prev) > 0);
        out += (bind ? NB : ' ') + cur;
      }
      // le ultime due parole restano unite (se la coppia non è troppo lunga)
      const k = out.lastIndexOf(' ');
      if (k > 0) {
        const lastTwo = out.slice(out.slice(0, k).search(/\S+$/)).length;
        if (lastTwo <= 28) out = out.slice(0, k) + NB + out.slice(k + 1);
      }
      return out;
    }
    function typeset(root) {
      (root || document).querySelectorAll(TYPESET).forEach((n) => {
        if (n.children.length) return;           // solo elementi di solo testo
        const cur = n.textContent;
        if (done.get(n) === cur) return;         // già elaborato
        const out = typesetText(cur);
        n.textContent = out;
        done.set(n, out);
      });
    }
  
    /* ---------------- Pagine statiche: traduzione ---------------- */
    function applyStatic() {
      document.documentElement.lang = lang;
      $$('[data-i18n]').forEach((n) => {
        if (n.dataset.it === undefined) n.dataset.it = n.textContent; // testo italiano originale
        n.textContent = lang === 'en' ? (UI.en[n.dataset.i18n] ?? n.dataset.it) : n.dataset.it;
      });
      $$('[data-i18n-alt]').forEach((n) => {
        if (n.dataset.itAlt === undefined) n.dataset.itAlt = n.getAttribute('alt');
        n.setAttribute('alt', lang === 'en' ? (UI.en[n.dataset.i18nAlt] || n.dataset.itAlt) : n.dataset.itAlt);
      });
      $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  
      const page = document.body.dataset.page;
      const desc = $('meta[name="description"]');
      if (page === 'home') { document.title = t('titleHome'); desc && desc.setAttribute('content', t('descHome')); }
      if (page === 'about') { document.title = t('titleAbout'); desc && desc.setAttribute('content', t('descAbout')); }
  
      typeset();
      // lightbox
      const lb = $('#lightbox');
      if (lb) {
        $('[data-act="prev"]', lb).setAttribute('aria-label', t('prev'));
        $('[data-act="next"]', lb).setAttribute('aria-label', t('nextImg'));
        $('[data-act="close"]', lb).setAttribute('aria-label', t('close'));
      }
    }
  
    function setLang(l) {
      lang = l;
      try { localStorage.setItem('lang', l); } catch (e) { /* ignora */ }
      applyStatic();
      renderHome();
      renderProject();
    }
  
    /* ---------------- Lightbox (unica per pagina) ---------------- */
    const lb = (function () {
      const box = $('#lightbox');
      if (!box) return null;
      const img = $('img', box);
      const cap = $('.cap', box);
      let list = [], cur = 0, opener = null;
  
      const show = (n) => {
        cur = (n + list.length) % list.length;
        const im = list[cur];
        img.src = im.src;
        img.alt = capOf(im);
        const c = capOf(im);
        cap.textContent = (c ? c + '  ' : '') + (cur + 1) + ' / ' + list.length;
        const pre = new Image(); pre.src = list[(cur + 1) % list.length].src;
      };
      const open = (n, from) => {
        opener = from;
        show(n);
        box.classList.add('open');
        box.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        $('[data-act="close"]', box).focus();
      };
      const close = () => {
        box.classList.remove('open');
        box.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (opener && document.contains(opener)) opener.focus();
      };
  
      box.addEventListener('click', (e) => {
        const act = e.target.closest('[data-act]');
        if (act) {
          const a = act.dataset.act;
          if (a === 'close') close();
          if (a === 'prev') show(cur - 1);
          if (a === 'next') show(cur + 1);
        } else if (e.target === box || e.target.classList.contains('stage')) {
          close();
        }
      });
      let x0 = null;
      box.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
      box.addEventListener('touchend', (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
        x0 = null;
      }, { passive: true });
      document.addEventListener('keydown', (e) => {
        if (!box.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(cur - 1);
        if (e.key === 'ArrowRight') show(cur + 1);
      });
      return { setList: (l) => { list = l; }, open };
    })();
  
    /* ---------------- Home ---------------- */
    function renderHome() {
      const list = $('#works');
      if (!list) return;
      list.innerHTML = '';
  
      const count = $('#works-count');
      if (count) count.textContent = projects.length;
  
      projects.forEach((p, i) => {
        const L = loc(p);
        const img = el('img', {
          src: p.cover.src, width: p.cover.w, height: p.cover.h,
          alt: p.title + ' — ' + L.sub, loading: i < 4 ? 'eager' : 'lazy', decoding: 'async',
        });
        img.style.objectPosition = p.cover_pos || 'center';
  
        list.appendChild(el('a', { class: 'card', href: 'progetto.html?p=' + p.slug, 'data-cat': p.cat }, [
          el('div', { class: 'thumb' }, [
            img,
            el('div', { class: 'tags' }, [el('span', { text: pad(i + 1) }), el('span', { text: p.year })]),
          ]),
          el('div', { class: 'info' }, [el('h3', { text: p.title }), el('span', { text: L.cat })]),
        ]));
      });
  
      // Filtri per categoria (le chiavi restano in italiano, le etichette seguono la lingua)
      const bar = $('#filters');
      if (!bar) return;
      bar.innerHTML = '';
      bar.setAttribute('aria-label', t('filter'));
      const cats = [];
      projects.forEach((p) => { if (!cats.find((c) => c.key === p.cat)) cats.push({ key: p.cat, label: loc(p).cat }); });
      [{ key: '*', label: t('all') }, ...cats].forEach((c, i) => {
        const b = el('button', { type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false', text: c.label });
        b.addEventListener('click', () => {
          $$('button', bar).forEach((x) => x.setAttribute('aria-pressed', 'false'));
          b.setAttribute('aria-pressed', 'true');
          let n = 0;
          $$('.card', list).forEach((card) => {
            const show = c.key === '*' || card.dataset.cat === c.key;
            card.hidden = !show;
            if (show) n++;
          });
          if (count) count.textContent = n;
        });
        bar.appendChild(b);
      });
      typeset(list);
    }
  
    /* ---------------- Pagina progetto ----------------
       Apertura (titolo + dati | immagine grande), poi sezioni che accoppiano
       ogni testo alle sue immagini, alternando testo a sinistra e a destra. */
    function renderProject() {
      const root = $('#project');
      if (!root) return;
  
      const slug = new URLSearchParams(location.search).get('p');
      const i = projects.findIndex((p) => p.slug === slug);
      root.innerHTML = '';
      if (i < 0) {
        root.appendChild(el('div', { class: 'p-open' }, [el('div', { class: 'p-open-l' }, [
          el('h1', { text: t('notFound') }),
          el('p', { class: 'sub' }, [el('a', { href: 'index.html#progetti', text: t('backToWorks') })]),
        ])]));
        return;
      }
      const p = projects[i];
      const L = loc(p);
      const prev = projects[(i - 1 + projects.length) % projects.length];
      const next = projects[(i + 1) % projects.length];
      document.title = p.title + ' — Lorenzo Maria Coppi';
      const desc = $('meta[name="description"]');
      if (desc) desc.setAttribute('content', p.title + ': ' + L.sub + '. Lorenzo Maria Coppi.');
  
      // elenco per la lightbox: immagine di apertura (0), poi le sezioni in ordine
      lb && lb.setList([p.open, ...p.sections.flatMap((s) => s.imgs)]);
  
      // Piccola barra: progetto precedente / successivo
      const nav = el('nav', { class: 'p-nav', 'aria-label': 'Progetti' }, [
        i > 0
          ? el('a', { href: 'progetto.html?p=' + prev.slug }, [el('span', { class: 'arr', text: '←' }), el('span', { text: t('prevProject') + ' · ' + prev.title })])
          : el('a', { href: 'index.html#progetti' }, [el('span', { class: 'arr', text: '←' }), el('span', { text: t('works') })]),
        el('a', { href: 'progetto.html?p=' + next.slug }, [el('span', { text: next.title + ' · ' + t('nextProject') }), el('span', { class: 'arr', text: '→' })]),
      ]);
  
      // Apertura
      const dl = el('dl', { class: 'meta' });
      L.meta.forEach(([k, v]) => dl.appendChild(el('div', {}, [el('dt', { text: k }), el('dd', { text: v })])));
      const openImg = el('img', { src: p.open.src, width: p.open.w, height: p.open.h, alt: p.title, decoding: 'async' });
      openImg.style.objectPosition = p.open_pos || 'center';
      const open = el('section', { class: 'p-open' }, [
        el('div', { class: 'p-open-l' }, [
          el('div', { class: 'kicker' }, [el('span', { text: L.cat }), el('span', { class: 'muted', text: p.period })]),
          el('div', { class: 'titles' }, [el('h1', { text: p.title }), el('p', { class: 'sub', text: L.sub })]),
          dl,
        ]),
        el('div', { class: 'p-open-r' }, [
          el('button', { type: 'button', 'data-i': 0, 'aria-label': t('enlarge') + p.title }, [openImg]),
        ]),
      ]);
  
      // Video (se presente), a tutta larghezza
      let video = null;
      if (p.video) {
        const v = el('video', {
          src: p.video.src, poster: p.video.poster, width: p.video.w, height: p.video.h,
          controls: true, playsinline: true, loop: true, preload: 'metadata', 'aria-label': p.video.label,
        });
        v.muted = true;
        video = el('div', { class: 'p-video' }, [v]);
        if ('IntersectionObserver' in window) {
          let userPaused = false, auto = false, visible = false;
          v.addEventListener('pause', () => { if (!auto && visible) userPaused = true; });
          v.addEventListener('play', () => { userPaused = false; });
          new IntersectionObserver((en) => en.forEach((x) => {
            visible = x.isIntersecting;
            if (visible && !userPaused) v.play().catch(() => {});
            if (!visible) { auto = true; v.pause(); setTimeout(() => { auto = false; }, 0); }
          }), { threshold: 0.45 }).observe(v);
        }
      }
  
      // Sezioni: testo + immagini
      let n = 0;
      const sections = p.sections.map((s, si) => {
        const hasText = s.t.length > 0;
        const sec = el('section', { class: 'sec ' + (hasText ? (si % 2 === 0 ? 'sec-l' : 'sec-r') : 'sec-full') + (si === 0 ? ' sec-first' : '') });
        if (hasText) {
          sec.appendChild(el('div', { class: 'sec-text' }, s.t.map((k, pi) => el('p', { class: si === 0 && pi === 0 ? 'lead' : '', text: L.text[k] }))));
        }
        const grid = el('div', { class: 'sec-imgs' });
        const figs = s.imgs.map((im) => {
          const c = capOf(im);
          const idx = ++n;
          return { im, fig: el('figure', { class: im.big ? 'big' : '' }, [
            el('button', { type: 'button', class: 'fit-' + (im.fit || 'cover'), 'data-i': idx, 'aria-label': t('enlarge') + (c || p.title) }, [
              el('img', { src: im.src, width: im.w, height: im.h, alt: c || p.title, loading: 'lazy', decoding: 'async' }),
            ]),
            c ? el('figcaption', { text: c }) : null,
          ]) };
        });
        // se le immagini normali sono dispari, l'ultima occupa tutta la riga
        const normals = figs.filter((f) => !f.im.big);
        if (normals.length % 2 === 1) normals[normals.length - 1].fig.classList.add('wide');
        figs.forEach((f) => grid.appendChild(f.fig));
        sec.appendChild(grid);
        return sec;
      });
  
      const nextLink = el('a', { class: 'next', href: 'progetto.html?p=' + next.slug }, [
        el('span', { class: 'label', text: t('next') }),
        el('span', { class: 't', text: next.title }),
      ]);
  
      [nav, open, video, ...sections, nextLink].forEach((x) => x && root.appendChild(x));
      typeset(root);
    }
  
    /* ---------------- Home: gradiente che segue il puntatore ---------------- */
    function initHeroGradient() {
      const hero = $('.hero');
      if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, raf = null;
      const loop = () => {
        x += (tx - x) * 0.06; y += (ty - y) * 0.06;
        hero.style.setProperty('--mx', x.toFixed(4));
        hero.style.setProperty('--my', y.toFixed(4));
        raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(loop) : null;
      };
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height;
        if (!raf) raf = requestAnimationFrame(loop);
      });
    }
  
    /* ---------------- Cursore personalizzato ----------------
       Cerchio pieno che segue il mouse; sugli elementi cliccabili diventa
       una circonferenza con un piccolo cerchio al centro. Solo con mouse. */
    function initCursor() {
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      document.documentElement.classList.add('has-cursor');
      const c = el('div', { class: 'cursor', 'aria-hidden': 'true' }, [el('i')]);
      document.body.appendChild(c);
      let x = -100, y = -100, cx = x, cy = y, raf = null;
      const tick = () => {
        cx += (x - cx) * 0.28; cy += (y - cy) * 0.28;
        c.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
        raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(tick) : null;
      };
      const CLICKABLE = 'a, button, [role="button"], summary, label, input, select, textarea, .card';
      document.addEventListener('pointermove', (e) => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        x = e.clientX; y = e.clientY;
        c.classList.add('on');
        const tgt = e.target;
        c.classList.toggle('link', !!(tgt.closest && tgt.closest(CLICKABLE)));
        c.classList.toggle('native', !!(tgt.closest && tgt.closest('video')));
        if (!raf) raf = requestAnimationFrame(tick);
      }, { passive: true });
      document.addEventListener('pointerdown', () => c.classList.add('down'));
      document.addEventListener('pointerup', () => c.classList.remove('down'));
      document.documentElement.addEventListener('mouseleave', () => c.classList.remove('on'));
    }
  
    /* ---------------- Avvio ---------------- */
    $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
    const pr = $('#project');
    if (pr) pr.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-i]');
      if (b && lb) lb.open(Number(b.dataset.i), b);
    });
    applyStatic();
    renderHome();
    renderProject();
    initHeroGradient();
    initCursor();
  })();
  