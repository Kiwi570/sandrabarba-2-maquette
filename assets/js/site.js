/* Effets propres au cabinet de Sandra Barba (direction « Respirer »). Le socle gère l'ouverture, les transitions,
   l'en-tête, le menu, les boucles, les mesures et la bibliothèque d'effets (posés par attributs dans les pages).
   Effets du plan (data-effet) : souffle (halo du portrait, CSS), phrase-eclaire, lumiere, respiration, lueur (CSS).
   Interactions : visionneuse des diplômes et de la presse, « Quitter vite », formulaire par étapes, FAQ animée. */
import { demarrer, boucle, versObjet, suivre, lacher, quand } from './socle/index.js?v=2';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Ce qui vous amène : chaque mot s'éclaire au défilement, et reste éclairé (jamais de retour en arrière). */
function phraseEclaire() {
  const p = $('.phrase-eclaire');
  if (!p || !gsap || !window.ScrollTrigger) return;
  const mots = $$('.pe-mot', p);
  const tl = gsap.timeline({ paused: true }).fromTo(mots, { opacity: 0.16 }, { opacity: 1, stagger: 0.1, duration: 0.3, ease: 'none' });
  let max = 0;
  window.ScrollTrigger.create({
    trigger: p, start: 'top 82%', end: 'bottom 48%',
    onUpdate: (st) => { if (st.progress > max) { max = st.progress; tl.progress(max); } },
    onLeave: () => { max = 1; tl.progress(1); },
  });
}

/* Bande violences : une lumière douce grandit pendant qu'on lit. */
function lumiere() {
  const l = $('.lumiere');
  if (!l || !gsap || !window.ScrollTrigger) return;
  gsap.fromTo(l, { scale: 0.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: l.parentElement, start: 'top bottom', end: 'bottom 30%', scrub: 0.6 } });
}

/* Sophrologie : le cercle grandit (4 s, inspirez), puis se resserre (6 s, soufflez). Pause par le bouton (socle). */
function respiration() {
  const c = $('.respiration-cercle');
  if (!c) return;
  const d = $('.rc-disque', c);
  const ease = (x) => 0.5 - Math.cos(Math.PI * x) / 2;
  let h = 0;
  boucle(c, (dt) => {
    h = (h + dt) % 10;
    const inspire = h < 4;
    const s = inspire ? 0.6 + 0.4 * ease(h / 4) : 1 - 0.4 * ease((h - 4) / 6);
    d.style.transform = `scale(${s.toFixed(4)})`;
    c.classList.toggle('expire', !inspire);
  });
}

/* Visionneuse : diplômes et article de presse, chacun avec son propre lien (#diplome-efpp…). */
function visionneuse() {
  const liens = $$('[data-visionneuse]');
  if (!liens.length) return;
  const v = document.createElement('div');
  v.className = 'visionneuse';
  v.hidden = true;
  v.setAttribute('role', 'dialog');
  v.setAttribute('aria-modal', 'true');
  v.setAttribute('aria-label', document.documentElement.dataset.visTitre || 'Visionneuse');
  v.setAttribute('data-recouvrement', '');
  v.setAttribute('data-gouttiere', '#1E2923');
  v.innerHTML = `<div class="vis-haut"><button type="button" class="vis-bouton" data-vis-fermer>Fermer</button></div>
    <div class="vis-image"></div>
    <div class="vis-bas"><button type="button" class="vis-bouton" data-vis-prec aria-label="Image précédente">←</button><p class="vis-legende" aria-live="polite"></p><button type="button" class="vis-bouton" data-vis-suiv aria-label="Image suivante">→</button></div>`;
  document.body.appendChild(v);
  const zone = $('.vis-image', v), leg = $('.vis-legende', v);
  let img = null;
  let i = 0, retour = null;
  const source = (a) => { const im = $('img', a); return im ? im.currentSrc.replace(/-480\.webp/, '-960.webp').replace(/presse-960/, 'presse-800') : ''; };
  const legende = (a) => ($('.formation-titre', a) ? `${$('.formation-titre', a).textContent} · ${$('.formation-detail', a).textContent}` : ($('.presse-legende', a) || a).textContent.trim());
  const montrer = (n) => {
    i = (n + liens.length) % liens.length;
    const a = liens[i];
    if (!img) { img = document.createElement('img'); zone.appendChild(img); }
    img.src = source(a); img.alt = legende(a); leg.textContent = legende(a);
    const nav = liens.length > 1;
    $('[data-vis-prec]', v).hidden = !nav; $('[data-vis-suiv]', v).hidden = !nav;
    history.replaceState(history.state, '', '#' + a.dataset.visionneuse);
  };
  const ouvrir = (n, depuis) => {
    retour = depuis || document.activeElement;
    montrer(n);
    v.hidden = false;
    document.documentElement.classList.add('defilement-bloque');
    suivre(v);
    if (gsap) gsap.fromTo(v, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    $('[data-vis-fermer]', v).focus();
  };
  const fermer = () => {
    v.hidden = true;
    if (img) { img.remove(); img = null; }
    document.documentElement.classList.remove('defilement-bloque');
    lacher(v);
    history.replaceState(history.state, '', location.pathname + location.search);
    if (retour) retour.focus();
  };
  liens.forEach((a, n) => a.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); ouvrir(n, a); }, true));
  $('[data-vis-fermer]', v).addEventListener('click', fermer);
  $('[data-vis-prec]', v).addEventListener('click', () => montrer(i - 1));
  $('[data-vis-suiv]', v).addEventListener('click', () => montrer(i + 1));
  v.addEventListener('click', (e) => { if (e.target === v || e.target.classList.contains('vis-image')) fermer(); });
  document.addEventListener('keydown', (e) => {
    if (v.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') montrer(i - 1);
    else if (e.key === 'ArrowRight') montrer(i + 1);
    else if (e.key === 'Tab') {
      const f = $$('button:not([hidden])', v);
      const premier = f[0], dernier = f[f.length - 1];
      if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
      else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
    }
  });
  let x0 = null;
  v.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) montrer(i + (dx < 0 ? 1 : -1)); x0 = null; });
  /* Lien direct : la page s'ouvre sur l'image demandée, une fois l'ouverture terminée. */
  const id = location.hash.slice(1);
  const n = liens.findIndex((a) => a.dataset.visionneuse === id);
  if (n >= 0) quand('pret', () => setTimeout(() => ouvrir(n, liens[n]), 200));
}

/* Violences : « Quitter vite » ouvre Google dans un nouvel onglet et remplace cette page (sans retour possible). */
function quitter() {
  const q = $('[data-quitter]');
  if (!q) return;
  q.addEventListener('click', () => { setTimeout(() => location.replace('https://www.google.fr/'), 60); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && e.shiftKey) q.click(); });
}

/* Rendez-vous : formulaire par étapes (module de la bibliothèque), séance préremplie par l'adresse (?seance=couple). */
async function formulaire() {
  const root = $('.fpe[data-module="formulaire-par-etapes"]');
  if (!root) return;
  const choisir = (id) => { const r = root.querySelector(`input[name="seance"][value="${id}"]`); if (r) r.checked = true; };
  const p = new URLSearchParams(location.search).get('seance');
  if (p) choisir(p);
  const { init } = await import('./modules/formulaire-par-etapes.js?v=2');
  const f = await init(root, { mailto: 'info@sandrabarba.fr', sujet: 'Demande de rendez-vous depuis le site' });
  $$('[data-seance]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    choisir(a.dataset.seance);
    history.replaceState(history.state, '', `?seance=${a.dataset.seance}#demande`);
    if (f && f.aller) f.aller(0);
    const cible = $('#demande');
    const y = cible.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }));
  root.addEventListener('formulaire:envoye', () => {
    const fin = $('.fpe__fin', root);
    if (fin) setTimeout(() => { const r = fin.getBoundingClientRect(); if (r.top < 60 || r.top > innerHeight * 0.6) window.scrollTo({ top: r.top + window.scrollY - 120, behavior: 'smooth' }); }, 80);
  });
}

/* FAQ : ouverture et fermeture animées sans à-coup. */
function faq() {
  if (!gsap) return;
  $$('.faq-item').forEach((d) => {
    const s = $('summary', d), r = $('p', d);
    s.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.open) {
        gsap.to(r, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => { d.open = false; gsap.set(r, { clearProps: 'height,opacity' }); window.ScrollTrigger && window.ScrollTrigger.refresh(); } });
      } else {
        d.open = true;
        gsap.fromTo(r, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out', onComplete: () => { gsap.set(r, { clearProps: 'height,opacity' }); window.ScrollTrigger && window.ScrollTrigger.refresh(); } });
      }
    });
  });
}

/* Ouverture de chaque page : les lignes du titre montent, le reste du premier écran suit. */
const TITRE = '.hero h1[data-anime="gsap"]';
const LIGNES = '.hero .ouv-ligne';
const SUITE = '.hero [data-anime="gsap"]:not(h1)';
function premierEcran(tl, t) {
  if (document.querySelector(TITRE)) tl.set(TITRE, { opacity: 1 }, t);
  if (document.querySelector(LIGNES)) tl.fromTo(LIGNES, { yPercent: 140, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }, t);
  if (document.querySelector(SUITE)) tl.fromTo(SUITE, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power2.out' }, t + 0.15);
}

demarrer({
  preparer() {
    phraseEclaire();
    lumiere();
    respiration();
    visionneuse();
    quitter();
    faq();
    formulaire();
  },
  /* Intro (moins de 3 s) : le cercle de lumière inspire, souffle, puis glisse jusqu'à l'objet d'ouverture de la page
     (le portrait rond de l'accueil, la photo ailleurs) ; le panneau s'ouvre depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    tl.fromTo('.ouverture-souffle', { '--s': 0.45 }, { '--s': 1, duration: 1.0 }, 0.05)
      .fromTo('.ouverture-mot--in', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.1)
      .to('.ouverture-mot--in', { opacity: 0, duration: 0.25 }, 0.85)
      .fromTo('.ouverture-mot--out', { opacity: 0 }, { opacity: 1, duration: 0.25 }, 1.0)
      .to('.ouverture-souffle', { '--s': 0.9, duration: 0.35, ease: 'power1.inOut' }, 1.05)
      .fromTo('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.25)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-mot--out', { opacity: 0, duration: 0.2 }, 1.12)
      .to('.ouverture-souffle', { '--s': 1, duration: 0.5 }, 1.35);
    versObjet(tl, { a: 1.3, duree: 0.5, ouverture: 0.8, echelleMax: 3.2 });
    premierEcran(tl, 1.75);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set(`${TITRE}, ${LIGNES}, ${SUITE}`, { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    premierEcran(gsap.timeline({ delay: 0.12 }), 0);
  },
});
