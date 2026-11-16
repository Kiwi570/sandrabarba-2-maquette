/* Psychothérapie : ouverture en grand titre de trois verbes (les mots du site actuel), puis large bandeau photo.
   Pourquoi consulter, l'approche, couple et famille, où et comment, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';

export const page = { cle: 'psychotherapie', fichier: 'psychotherapie', imagePartage: 'grok/psy-fauteuil-1280.webp' };

const alt = (c, n) => (c.donnees.images[n] ? c.donnees.images[n].alt : '');

export default (c) => html`
<section class="hero hero-verbes" id="debut">
  <div class="conteneur hv-tete">
    <p class="surtitre" data-anime="gsap"><span class="ouv-suite">${c.t('psychotherapie.hero.surtitre')}</span></p>
    <h1 class="hv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('psychotherapie.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne">${c.t('psychotherapie.hero.titre2')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('psychotherapie.hero.titre3')}</em></span></span></h1>
    <div class="hv-bas">
      <p class="hv-intro masque-ecran-bas" data-anime="gsap"><span class="ouv-suite">${c.t('psychotherapie.hero.texte')}</span></p>
      <p class="hero-actions" data-anime="gsap"><span class="ouv-suite hero-boutons">${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('psychotherapie.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="hero-info" data-info-cle>${c.t('psychotherapie.hero.info')}</span></span></p>
    </div>
  </div>
  ${c.media({ nom: 'grok/psy-fauteuil', alt: alt(c, 'grok/psy-fauteuil'), priorite: true, classe: 'hv-bandeau', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="14" data-iris-centre' })}
</section>

<section class="section pourquoi" id="pourquoi">
  <div class="conteneur">
    <p class="surtitre">${c.t('psychotherapie.pourquoi.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.pourquoi.titre1')} <em>${c.t('psychotherapie.pourquoi.titre2')}</em></h2>
    <div class="themes" data-anime="cascade">
      ${c.donnees.themes.map((t, i) => html`<article class="theme"><span class="theme-num" aria-hidden="true">0${i + 1}</span><h3>${t.titre}</h3><ul>${t.liste.map((x) => html`<li>${x}</li>`)}</ul></article>`)}
    </div>
    <p class="themes-aussi" data-anime>${c.t('psychotherapie.pourquoi.aussi')}</p>
  </div>
</section>

<section class="section approche fond-argile" id="approche">
  <div class="conteneur approche-grille">
    <div>
      <p class="surtitre">${c.t('psychotherapie.approche.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.approche.titre1')} <em>${c.t('psychotherapie.approche.titre2')}</em></h2>
      <ol class="approche-liste" data-anime="cascade">${c.donnees.approche.map((x) => html`<li>${x}</li>`)}</ol>
      <blockquote class="citation citation--grande" data-anime="mots"><p>${c.t('psychotherapie.approche.citation')}</p></blockquote>
    </div>
    ${c.media({ nom: 'cabinet-photo', alt: alt(c, 'cabinet-photo'), classe: 'approche-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="section couple" id="couple">
  <div class="conteneur couple-grille">
    ${c.media({ nom: 'grok/deux-fauteuils', alt: alt(c, 'grok/deux-fauteuils'), classe: 'couple-media', sizes: '(max-width: 760px) 90vw, 400px', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('psychotherapie.couple.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.couple.titre1')} <em>${c.t('psychotherapie.couple.titre2')}</em></h2>
      <p data-anime>${c.t('psychotherapie.couple.texte')}</p>
      <p class="couple-famille" data-anime>${c.t('psychotherapie.couple.famille')}</p>
      <ul class="tarifs-mini" data-anime="cascade">
        ${c.donnees.seances.filter((s) => s.id === 'couple' || s.id === 'famille').map((s) => html`<li><span>${s.titre}</span><span data-prix>${s.duree} · ${s.prix}</span></li>`)}
      </ul>
      <p class="actions" data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=couple', classe: 'bouton', texte: c.t('psychotherapie.couple.action'), attrs: 'data-survol="magnetique"' })} ${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=famille', classe: 'lien-fleche', texte: c.t('psychotherapie.couple.actionFamille') })}</p>
    </div>
  </div>
</section>

<section class="section modes fond-argile" id="modes">
  <div class="conteneur">
    <p class="surtitre">${c.t('psychotherapie.modes.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.modes.titre1')} <em>${c.t('psychotherapie.modes.titre2')}</em></h2>
    <div class="modes-grille">
      ${c.media({ nom: 'grok/visio', alt: alt(c, 'grok/visio'), classe: 'modes-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="zoom"' })}
      <ul class="modes-liste" data-anime="cascade">
        ${c.donnees.modes.map((m) => html`<li class="mode"><h3>${m.titre}</h3><p class="mode-prix" data-prix>${m.prix}</p><p>${m.texte}</p>${m.seance ? c.lien('rendez-vous', { ancre: 'demande', params: `seance=${m.seance}`, classe: 'lien-fleche', texte: html`${c.t('rendezvous.seances.choisir')}<span class="visuellement-cache"> : ${m.titre}</span>` }) : html`<a class="lien-fleche" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>`}</li>`)}
      </ul>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
