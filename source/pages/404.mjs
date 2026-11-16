/* Page 404 aux couleurs du cabinet, avec son image. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="hero hero-scinde introuvable" id="debut">
  <div class="hs-texte">
    <h1 class="hs-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('introuvable.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('introuvable.titre2')}</em></span></span></h1>
    <p class="hs-intro masque-ecran-tres-bas" data-anime="gsap"><span class="ouv-suite">${c.t('introuvable.texte')}</span></p>
    <p class="hero-actions" data-anime="gsap" data-info-cle><span class="ouv-suite hero-boutons">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('commun.actionEntete') })}</span></p>
  </div>
  ${c.media({ nom: 'grok/galets', alt: c.donnees.images['grok/galets'].alt, priorite: true, classe: 'hs-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-iris-centre' })}
</section>
`;
