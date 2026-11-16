/* Sophrologie : ouverture plein cadre (voilage), la méthode en trois principes, l'exercice de respiration avec le
   cercle (le souffle de l'intro revient une seule fois ici), pour qui, un peu d'histoire, une séance, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';

export const page = { cle: 'sophrologie', fichier: 'sophrologie', imagePartage: 'grok/voilage-1280.webp' };

const alt = (c, n) => (c.donnees.images[n] ? c.donnees.images[n].alt : '');
/* Mots décoratifs : écrits par le CSS (attr), ce ne sont pas des textes à lire (aria-hidden sur le bandeau). */
const rangee = (mots, sens) => html`<p data-fx-rangee data-sens="${sens}">${[...mots, ...mots].map((m) => html`<span data-mot="${m}"></span>`)}</p>`;

export default (c) => html`
<section class="hero hero-plein" id="debut">
  ${c.media({ nom: 'grok/voilage', alt: alt(c, 'grok/voilage'), priorite: true, classe: 'hp-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  <div class="conteneur hp-texte">
    <p class="surtitre" data-anime="gsap"><span class="ouv-suite">${c.t('sophrologie.hero.surtitre')}</span></p>
    <h1 class="hp-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('sophrologie.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('sophrologie.hero.titre2')}</em></span></span></h1>
    <p class="hp-intro masque-ecran-tres-bas" data-anime="gsap"><span class="ouv-suite">${c.t('sophrologie.hero.texte')}</span></p>
    <p class="hero-actions" data-anime="gsap"><span class="ouv-suite hero-boutons">${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('sophrologie.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="hero-info" data-info-cle>${c.t('sophrologie.hero.info')}</span></span></p>
  </div>
</section>

<section class="section methode" id="methode">
  <div class="conteneur methode-grille">
    <div>
      <p class="surtitre">${c.t('sophrologie.methode.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.methode.titre1')} <em>${c.t('sophrologie.methode.titre2')}</em></h2>
      <p data-anime>${c.t('sophrologie.methode.texte')}</p>
      <ol class="principes" data-anime="cascade">${c.donnees.principes.map((p, i) => html`<li><span class="principe-num" aria-hidden="true">${i + 1}</span><div><h3>${p.titre}</h3><p>${p.texte}</p></div></li>`)}</ol>
    </div>
    ${c.media({ nom: 'grok/sophro-chaise', alt: alt(c, 'grok/sophro-chaise'), classe: 'methode-media', sizes: '(max-width: 760px) 90vw, 44vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="section respiration fond-argile" id="respirer">
  <div class="conteneur respiration-grille">
    <div class="respiration-texte">
      <p class="surtitre">${c.t('sophrologie.souffle.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.souffle.titre1')} <em>${c.t('sophrologie.souffle.titre2')}</em></h2>
      <p data-anime>${c.t('sophrologie.souffle.texte')}</p>
      <p class="respiration-note">${c.t('sophrologie.souffle.note')}</p>
      <button type="button" class="bouton bouton--contour" data-pause-pour="cercle-souffle" data-libelle-pause="${c.s('sophrologie.souffle.pause')}" data-libelle-lecture="${c.s('sophrologie.souffle.reprendre')}"><span data-libelle-bouton>${c.t('sophrologie.souffle.pause')}</span></button>
    </div>
    <div class="respiration-cercle" id="cercle-souffle" data-effet="respiration" data-visuel>
      <span class="rc-anneau" aria-hidden="true"></span>
      <span class="rc-disque" aria-hidden="true"></span>
      <span class="rc-mot" aria-hidden="true"><span class="rc-in">${c.t('sophrologie.souffle.inspirez')}</span><span class="rc-out">${c.t('sophrologie.souffle.soufflez')}</span></span>
    </div>
  </div>
</section>

<section class="section pourqui" id="pour-qui">
  <div class="mots-bande" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    ${rangee(c.donnees.sophro.mots1, '1')}
    ${rangee(c.donnees.sophro.mots2, '-1')}
  </div>
  <div class="conteneur">
    <p class="surtitre">${c.t('sophrologie.pourqui.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.pourqui.titre1')} <em>${c.t('sophrologie.pourqui.titre2')}</em></h2>
    <ul class="puces" data-anime="cascade">${c.donnees.sophro.pourqui.map((x) => html`<li>${x}</li>`)}</ul>
    <p data-anime>${c.t('sophrologie.pourqui.texte')}</p>
  </div>
</section>

<section class="section histoire fond-argile" id="histoire">
  <div class="conteneur">
    <p class="surtitre">${c.t('sophrologie.histoire.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.histoire.titre1')} <em>${c.t('sophrologie.histoire.titre2')}</em></h2>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-visuel><path d="M2 10 C 200 2, 300 18, 500 10 S 800 2, 998 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>
      <ol class="frise-liste" data-anime="cascade">${c.donnees.sophro.histoire.map((h) => html`<li><p class="frise-quand">${h.quand}</p><p>${h.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="section seance" id="seance">
  <div class="conteneur seance-grille">
    ${c.media({ nom: 'grok/olivier-fenetre', alt: alt(c, 'grok/olivier-fenetre'), classe: 'seance-media', sizes: '(max-width: 760px) 90vw, 400px', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('sophrologie.seance.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.seance.titre1')} <em>${c.t('sophrologie.seance.titre2')}</em></h2>
      <p data-anime>${c.t('sophrologie.seance.texte')}</p>
      <p data-anime>${c.t('sophrologie.seance.lieu')}</p>
      <p class="seance-prix" data-prix data-anime>${c.t('sophrologie.seance.prix')}</p>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('sophrologie.hero.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
