/* Violences : ouverture scindée (texte, lumière du matin), bouton « Quitter vite » toujours visible,
   numéros d'aide, le secret (porte qui s'entrouvre), la culpabilité, les formes de violences, l'engagement, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';

export const page = { cle: 'violences', fichier: 'violences', imagePartage: 'grok/violences-matin-1280.webp' };

const alt = (c, n) => (c.donnees.images[n] ? c.donnees.images[n].alt : '');

export default (c) => html`
<a class="quitter" href="https://www.google.fr/" target="_blank" rel="noopener noreferrer" data-quitter data-sans-transition data-superpose aria-label="${c.s('violences.quitterAide')}">${c.t('violences.quitter')}</a>

<section class="hero hero-scinde" id="debut">
  <div class="hs-texte">
    <p class="surtitre" data-anime="gsap"><span class="ouv-suite">${c.t('violences.hero.surtitre')}</span></p>
    <h1 class="hs-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('violences.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('violences.hero.titre2')}</em></span></span></h1>
    <p class="hs-intro masque-ecran-tres-bas" data-anime="gsap"><span class="ouv-suite">${c.t('violences.hero.texte')}</span></p>
    <p class="hero-actions" data-anime="gsap"><span class="ouv-suite hero-boutons">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('violences.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<a class="hero-info hero-urgence" href="tel:17" data-info-cle>${c.t('violences.hero.info')}</a></span></p>
  </div>
  ${c.media({ nom: 'grok/violences-matin', alt: alt(c, 'grok/violences-matin'), priorite: true, classe: 'hs-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="section aide fond-olive" id="aide">
  <div class="conteneur">
    <p class="surtitre">${c.t('violences.aide.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.aide.titre1')} <em>${c.t('violences.aide.titre2')}</em></h2>
    <ul class="aide-grille" data-anime="cascade" data-visuel>
      ${c.donnees.aide.map((a) => html`<li class="aide-carte"><a href="tel:${a.lien}"><strong class="aide-num">${a.numero}</strong><span class="aide-titre">${a.titre}</span></a><p>${a.texte}</p></li>`)}
    </ul>
    <p class="aide-note">${c.t('violences.aide.note')}</p>
  </div>
</section>

<section class="section secret" id="secret">
  <div class="conteneur secret-grille">
    <svg class="porte" viewBox="0 0 260 360" aria-hidden="true" data-fx="trace" data-visuel>
      <path data-fx-trait d="M40 350 V40 Q40 20 60 20 H200 Q220 20 220 40 V350" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path data-fx-trait d="M60 340 V44 L150 64 V320 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path data-fx-trait d="M150 64 L214 44 V346 L150 320" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 7" stroke-linecap="round"/>
      <circle cx="136" cy="200" r="5" fill="currentColor"/>
      <path data-fx-trait d="M10 352 H250" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div>
      <p class="surtitre">${c.t('violences.secret.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('violences.secret.titre1')} <em>${c.t('violences.secret.titre2')}</em></h2>
      <p data-anime>${c.t('violences.secret.texte')}</p>
    </div>
  </div>
</section>

<section class="section culpabilite fond-argile" id="culpabilite">
  <div class="conteneur culpa-grille">
    <div><p class="surtitre">${c.t('violences.culpabilite.surtitre')}</p>
    <h2 class="titre-geant" data-anime="lettres">${c.t('violences.culpabilite.titre1')} <em>${c.t('violences.culpabilite.titre2')}</em></h2></div>
    <p class="culpa-texte" data-anime>${c.t('violences.culpabilite.texte')}</p>
  </div>
</section>

<section class="section formes" id="formes">
  <div class="conteneur">
    <p class="surtitre">${c.t('violences.formes.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.formes.titre1')} <em>${c.t('violences.formes.titre2')}</em></h2>
    <p class="formes-def" data-anime="mots">${c.t('violences.formes.definition')}</p>
    <div class="formes-grille" data-anime="cascade">
      ${c.donnees.formes.map((f, i) => html`<article class="forme"><span class="forme-num" aria-hidden="true">0${i + 1}</span><h3>${f.titre}</h3><p>${f.texte}</p>${f.lien ? html`<a class="lien-fleche" href="${f.lien}" target="_blank" rel="noopener">${c.t('violences.formes.lien')}<span class="visuellement-cache"> : violences ${f.titre.toLowerCase()} (${c.s('commun.nouvelOnglet')})</span></a>` : ''}</article>`)}
    </div>
  </div>
</section>

<section class="section engagement fond-argile" id="engagement">
  <div class="conteneur engagement-grille">
    <div>
      <p class="surtitre">${c.t('violences.engagement.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('violences.engagement.titre1')} <em>${c.t('violences.engagement.titre2')}</em></h2>
      <p data-anime>${c.t('violences.engagement.texte')}</p>
    </div>
    <a class="presse" href="#presse" id="presse" data-sans-transition data-visionneuse="presse">
      <img src="/assets/images/presse-480.webp" alt="${c.s('violences.engagement.presse')}" width="480" height="${Math.round(480 * 963 / 841)}" loading="lazy" decoding="async" data-fx="vitesse">
      <span class="presse-legende">${c.t('violences.engagement.presse')}</span>
    </a>
  </div>
</section>

${appelFinal(c, { titre1: c.s('violences.fin.titre1'), titre2: c.s('violences.fin.titre2'), texte: c.s('violences.fin.texte') })}
`;
