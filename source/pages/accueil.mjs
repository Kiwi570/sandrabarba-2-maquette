/* Accueil : le cercle de souffle de l'intro devient le portrait de Sandra, puis le site se lit comme une respiration :
   ce qui vous amène (phrase qui s'éclaire), trois accompagnements, Sandra et ses formations, la spécialisation
   violences (lumière qui grandit), le déroulé, les avis réels, le cabinet qui s'ouvre en plein écran, l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'sandra-rampe-800.webp' };

const mots = (s) => s.split(' ').map((m) => html`<span class="pe-mot">${m}</span> `);

export default (c) => html`
<section class="hero hero-accueil" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap"><span class="ouv-suite">${c.t('accueil.hero.surtitre')}</span></p>
    <h1 class="hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne">${c.t('accueil.hero.titre2')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('accueil.hero.titre3')}</em></span></span></h1>
    <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap"><span class="ouv-suite">${c.t('accueil.hero.texte')}</span></p>
    <p class="hero-actions" data-anime="gsap">
      <span class="ouv-suite hero-boutons">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></span>
    </p>
    <p class="hero-info" data-info-cle data-anime="gsap"><span class="ouv-suite">${c.t('accueil.hero.info')}</span></p>
  </div>
  <div class="hero-portrait" data-boucle-css>
    <div class="souffle-halo" data-effet="souffle" data-boucle-css data-audit-ignorer aria-hidden="true"><span></span><span></span><span></span></div>
    ${c.media({ nom: 'sandra-rampe', alt: c.donnees.images['sandra-rampe'].alt, cadrage: '46% 42%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 40vw, 42vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre="disque"' })}
  </div>
</section>

<section class="section amene" id="ce-qui-vous-amene">
  <div class="conteneur amene-grille">
    <div class="amene-texte">
      <h2 class="surtitre">${c.t('accueil.amene.titre')}</h2>
      <p class="phrase-eclaire" data-effet="phrase-eclaire">${mots(c.s('accueil.amene.phrase'))}</p>
      <p class="amene-suite" data-anime>${c.t('accueil.amene.suite')}</p>
    </div>
    ${c.media({ nom: 'grok/souffle-lin', alt: c.donnees.images['grok/souffle-lin'] ? c.donnees.images['grok/souffle-lin'].alt : '', classe: 'amene-media', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="section offres fond-argile" id="accompagnements">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.offres.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.offres.titre1')} <em>${c.t('accueil.offres.titre2')}</em></h2>
    <div class="offres-grille" data-anime="cascade">
      ${c.donnees.offres.map((o) => html`<article class="offre" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: o.image, alt: '', classe: 'offre-media', sizes: '(max-width: 760px) 90vw, 30vw', ratio: '4 / 5' })}
        <div class="offre-corps">
          <p class="offre-besoin">${o.besoin}</p>
          <h3>${o.titre}</h3>
          <p>${o.texte}</p>
          <p class="offre-prix" data-prix>${o.prix}</p>
          ${c.lien(o.page, { ancre: o.ancre, classe: 'lien-fleche', texte: html`${c.t('accueil.offres.lien')}<span class="visuellement-cache"> : ${o.titre}</span>` })}
        </div>
      </article>`)}
    </div>
  </div>
</section>

<section class="section sandra" id="sandra">
  <div class="conteneur sandra-grille">
    ${c.media({ nom: 'sandra-laine', alt: c.donnees.images['sandra-laine'].alt, cadrage: '50% 40%', classe: 'sandra-media', sizes: '(max-width: 760px) 90vw, 400px', attrs: 'data-anime="rideau"' })}
    <div class="sandra-texte">
      <p class="surtitre">${c.t('accueil.sandra.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.sandra.titre1')} <em>${c.t('accueil.sandra.titre2')}</em></h2>
      <blockquote class="citation" data-anime="mots"><p>${c.t('accueil.sandra.citation')}</p></blockquote>
      <p data-anime>${c.t('accueil.sandra.texte')}</p>
      <div class="seule" data-anime>
        <svg class="seule-icone" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 11h24v15H18l-6 5v-5H8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="15" cy="18.5" r="1.6"/><circle cx="20" cy="18.5" r="1.6"/><circle cx="25" cy="18.5" r="1.6"/></svg>
        <div><h3>${c.t('accueil.sandra.seuleTitre')}</h3><p>${c.t('accueil.sandra.seuleTexte')}</p></div>
      </div>
    </div>
  </div>
  <div class="conteneur formations">
    <h3 class="formations-titre">${c.t('accueil.sandra.formations')}</h3>
    <div class="formations-piste" tabindex="0" role="region" aria-label="${c.s('accueil.sandra.formations')}">
    <ul class="formations-liste" data-anime="cascade">
      ${c.donnees.formations.map((f) => html`<li id="${f.id}">
        <a class="formation" href="#${f.id}" data-sans-transition data-visionneuse="${f.id}">
          <img src="/assets/images/${f.image}-480.webp" alt="" width="480" height="${Math.round(480 / c.donnees.images[f.image].ratio.split(':').reduce((a, b) => a / b))}" loading="lazy" decoding="async">
          <span class="formation-titre">${f.titre}</span>
          <span class="formation-detail">${f.detail}</span>
          <span class="formation-voir">${c.t('accueil.sandra.voir')}<span class="visuellement-cache"> : ${f.titre}</span></span>
        </a>
      </li>`)}
    </ul>
    </div>
  </div>
</section>

<section class="section violences-bande fond-olive" id="violences">
  <div class="lumiere" data-effet="lumiere" aria-hidden="true"></div>
  <div class="conteneur vb-grille">
    <div class="vb-texte">
      <p class="surtitre">${c.t('accueil.violences.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.violences.titre1')} <em>${c.t('accueil.violences.titre2')}</em></h2>
      <p data-anime>${c.t('accueil.violences.texte')}</p>
      <p class="vb-certif" data-anime>${c.t('accueil.violences.certifiee')}</p>
      <p data-anime>${c.lien('violences', { classe: 'bouton bouton--clair', texte: c.t('accueil.violences.lien'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="vb-visuel" data-visuel>
      <ul class="vb-formes" data-anime="cascade">${c.donnees.formes.map((f) => html`<li>${f.titre}</li>`)}</ul>
      <div class="vb-numeros" data-anime="cascade">
        <p><a href="tel:17"><strong>17</strong></a> ${c.t('accueil.violences.urgence')}</p>
        <p><a href="tel:3919"><strong>3919</strong></a> ${c.t('accueil.violences.ecoute')}</p>
      </div>
    </div>
  </div>
</section>

<section class="section deroule" id="deroule">
  <div class="conteneur deroule-grille">
    <div>
      <p class="surtitre">${c.t('accueil.deroule.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.deroule.titre1')} <em>${c.t('accueil.deroule.titre2')}</em></h2>
      <div class="etapes-cadre">
      <ol class="etapes" data-anime="cascade">
        ${c.donnees.etapes.map((e, i) => html`<li><span class="etape-num" aria-hidden="true">${i + 1}</span><div><h3>${e.titre}</h3><p>${e.texte}</p></div></li>`)}
      </ol>
      <svg class="etapes-trait" viewBox="0 0 12 400" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M6 4 C 10 100, 2 200, 6 300 S 8 380, 6 396" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>
      </div>
    </div>
    ${c.media({ nom: 'grok/visio', alt: c.donnees.images['grok/visio'].alt, classe: 'deroule-media', sizes: '(max-width: 760px) 90vw, 340px', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="section avis fond-argile" id="avis">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.avis.surtitre')}</p>
    <h2 class="titre-section" data-anime="lettres">${c.t('accueil.avis.titre')}</h2>
    <svg class="avis-guillemet" viewBox="0 0 120 90" aria-hidden="true" data-visuel data-fx="trace"><path d="M48 10 C 22 18 8 40 10 64 C 12 80 26 86 36 82 C 48 78 50 62 40 56 C 30 50 18 56 18 56 M108 10 C 82 18 68 40 70 64 C 72 80 86 86 96 82 C 108 78 110 62 100 56 C 90 50 78 56 78 56" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
    <div class="avis-grille" data-anime="cascade">
      ${c.donnees.avis.map((a) => html`<figure class="avis-carte"><blockquote><p>${a.texte}</p></blockquote><figcaption>${a.auteur} · ${a.source}</figcaption></figure>`)}
    </div>
    <p class="avis-note">${c.t('accueil.avis.note')}</p>
  </div>
</section>

<section class="cabinet" id="cabinet" data-fx="plein-ecran" data-fx-depart="inset(20% 26% 20% 26% round 32px)" style="--fx-longueur: 210svh">
  <div data-collant>
    ${c.media({ nom: 'grok/cabinet-lumiere', alt: c.donnees.images['grok/cabinet-lumiere'].alt, cadrage: '55% 55%', sizes: '100vw', classe: 'cabinet-media', attrs: 'data-fx-cible' })}
    <p class="cabinet-mot cabinet-mot--g" data-fx-ecarte="g" data-superpose aria-hidden="true">${c.t('accueil.cabinet.gauche')}</p>
    <p class="cabinet-mot cabinet-mot--d" data-fx-ecarte="d" data-superpose aria-hidden="true">${c.t('accueil.cabinet.droite')}</p>
    <div class="cabinet-legende" data-fx-apres>
      <h2>${c.t('accueil.cabinet.titre1')} <em>${c.t('accueil.cabinet.titre2')}</em></h2>
      <p class="cabinet-adresse">${c.site.contact.adresse} · ${c.t('rendezvous.acces.parking')}</p>
      <p class="masque-ecran-bas">${c.t('accueil.cabinet.texte')}</p>
      <p>${c.lien('rendez-vous', { ancre: 'acces', classe: 'lien-fleche', texte: c.t('accueil.cabinet.lien') })}</p>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
