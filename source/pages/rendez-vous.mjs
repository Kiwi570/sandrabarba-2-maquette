/* Rendez-vous : ouverture « 65 € » en très grand à côté du portrait, les quatre séances, la demande en trois étapes
   (module formulaire-par-etapes de la bibliothèque, séance préremplie par ?seance=), contact direct, accès, questions. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';

export const page = { cle: 'rendez-vous', fichier: 'rendez-vous', imagePartage: 'sandra-rampe-portrait-960.webp' };

const alt = (c, n) => (c.donnees.images[n] ? c.donnees.images[n].alt : '');
const ICONES = {
  cabinet: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 15 16 6l11 9v11H5z"/><path d="M13 26v-7h6v7"/></svg>`,
  visio: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="18" height="15" rx="2"/><path d="m22 13 6-3v12l-6-3"/></svg>`,
  couple: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="11" r="4"/><circle cx="21" cy="11" r="4"/><path d="M4 26c1-5 4-7 7-7s5 1 5 1 2-1 5-1 6 2 7 7"/></svg>`,
  famille: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="10" r="4"/><circle cx="22" cy="14" r="3"/><path d="M4 27c1-6 4-8 7-8s6 2 7 8M17 27c1-4 3-6 5-6s4 2 5 6"/></svg>`,
};
const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export default (c) => html`
<section class="hero hero-prix" id="debut">
  <div class="hx-texte">
    <p class="surtitre" data-anime="gsap"><span class="ouv-suite">${c.t('rendezvous.hero.surtitre')}</span></p>
    <h1 class="hx-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('rendezvous.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('rendezvous.hero.titre2')}</em></span></span></h1>
    <p class="hx-prix" data-anime="gsap" data-info-cle><span class="ouv-suite"><strong data-prix>${c.t('rendezvous.hero.prix')}</strong><span>${c.t('rendezvous.hero.prixTexte')}</span></span></p>
    <p class="hero-actions" data-anime="gsap"><span class="ouv-suite hero-boutons"><a class="bouton" href="#demande" data-action-principale data-survol="magnetique">${c.t('rendezvous.hero.action')}</a><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></span></p>
    <p class="hero-info masque-ecran-tres-bas" data-anime="gsap"><span class="ouv-suite">${c.t('rendezvous.hero.info')}</span></p>
  </div>
  ${c.media({ nom: 'sandra-rampe-portrait', alt: alt(c, 'sandra-rampe-portrait'), priorite: true, classe: 'hx-media', sizes: '(max-width: 760px) 50vw, 36vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
</section>

<section class="section seances fond-argile" id="seances">
  <div class="conteneur">
    <p class="surtitre">${c.t('rendezvous.seances.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('rendezvous.seances.titre1')} <em>${c.t('rendezvous.seances.titre2')}</em></h2>
    <ul class="seances-liste" data-anime="cascade" data-visuel>
      ${c.donnees.seances.map((s) => html`<li class="seance-ligne">
        <span class="sl-icone">${ICONES[s.id]}</span>
        <span class="sl-titre"><strong>${s.titre}</strong><span>${s.detail}</span></span>
        <span class="sl-duree">${s.duree}</span>
        <span class="sl-prix" data-prix>${s.prix}</span>
        <a class="lien-fleche" href="?seance=${s.id}#demande" data-seance="${s.id}" data-sans-transition>${c.t('rendezvous.seances.choisir')}<span class="visuellement-cache"> : ${s.titre}</span></a>
      </li>`)}
    </ul>
    <p class="seances-note" data-anime>${c.t('rendezvous.seances.domicile')}</p>
  </div>
</section>

<section class="section fpe demande" id="demande" data-module="formulaire-par-etapes">
  <div class="conteneur demande-grille">
    <div class="fpe__tete">
      <p class="surtitre">${c.t('rendezvous.demande.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('rendezvous.demande.titre1')} <em>${c.t('rendezvous.demande.titre2')}</em></h2>
      <p class="fpe__intro">${c.t('rendezvous.demande.intro')}</p>
      <p class="fpe__note">${c.t('rendezvous.demande.note')}</p>
      ${c.media({ nom: 'grok/rdv-bureau', alt: c.s('rendezvous.demande.alt'), classe: 'demande-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="zoom"' })}
    </div>
    <div class="fpe__carton">
      <form class="fpe__form" action="mailto:${c.site.contact.email}" method="post" enctype="text/plain" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>
        <fieldset class="fpe__etape" data-etape="Séance">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('rendezvous.demande.q1')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="Séance">
            ${c.donnees.seances.map((s, i) => html`<label class="fpe__carte"><input type="radio" name="seance" value="${s.id}"${i === 0 ? ' required' : ''}>${ICONES[s.id]}<span class="fpe__carte-titre">${s.titre}</span><span class="fpe__carte-texte">${s.duree} · ${s.prix}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Quand">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('rendezvous.demande.q2')}</h3></legend>
          <fieldset class="fpe__groupe" data-min="1" data-libelle="Jours">
            <legend class="fpe__groupe-titre">${c.t('rendezvous.demande.jours')} <i aria-hidden="true">*</i></legend>
            <div class="fpe__puces">${JOURS.map((j) => html`<label class="fpe__puce"><input type="checkbox" name="jours" value="${j}"><span class="fpe__choix-texte">${j}</span></label>`)}</div>
          </fieldset>
          <fieldset class="fpe__groupe" data-libelle="Moment">
            <legend class="fpe__groupe-titre">${c.t('rendezvous.demande.moments')}</legend>
            <div class="fpe__puces">
              <label class="fpe__puce"><input type="radio" name="moment" value="${c.s('rendezvous.demande.matin')}"><span class="fpe__choix-texte">${c.t('rendezvous.demande.matin')}</span></label>
              <label class="fpe__puce"><input type="radio" name="moment" value="${c.s('rendezvous.demande.apresmidi')}"><span class="fpe__choix-texte">${c.t('rendezvous.demande.apresmidi')}</span></label>
              <label class="fpe__puce"><input type="radio" name="moment" value="${c.s('rendezvous.demande.soir')}"><span class="fpe__choix-texte">${c.t('rendezvous.demande.soir')}</span></label>
              <label class="fpe__puce"><input type="radio" name="moment" value="${c.s('rendezvous.demande.egal')}" checked><span class="fpe__choix-texte">${c.t('rendezvous.demande.egal')}</span></label>
            </div>
          </fieldset>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Contact">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('rendezvous.demande.q3')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="f-prenom">${c.t('rendezvous.demande.prenom')} <i aria-hidden="true">*</i></label><input id="f-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="fpe__champ"><label for="f-tel">${c.t('rendezvous.demande.tel')} <i aria-hidden="true">*</i></label><input id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\-]{8,20}" required></div>
            <div class="fpe__champ"><label for="f-email">${c.t('rendezvous.demande.email')}</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
          </div>
          <fieldset class="fpe__groupe" data-libelle="Recontacter par">
            <legend class="fpe__groupe-titre">${c.t('rendezvous.demande.contactPar')}</legend>
            <div class="fpe__puces">
              <label class="fpe__puce"><input type="radio" name="par" value="Téléphone" checked><span class="fpe__choix-texte">${c.t('rendezvous.demande.parTel')}</span></label>
              <label class="fpe__puce"><input type="radio" name="par" value="SMS"><span class="fpe__choix-texte">${c.t('rendezvous.demande.parSms')}</span></label>
              <label class="fpe__puce"><input type="radio" name="par" value="E-mail"><span class="fpe__choix-texte">${c.t('rendezvous.demande.parEmail')}</span></label>
            </div>
          </fieldset>
          <div class="fpe__champ"><label for="f-message">${c.t('rendezvous.demande.message')}</label><textarea id="f-message" name="message" rows="3" placeholder="${c.s('rendezvous.demande.messagePlaceholder')}"></textarea></div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${c.t('rendezvous.demande.accord')} <i aria-hidden="true">*</i></span></label>
          <p class="fpe__aide mention-donnees">${c.tb('rendezvous.demande.donnees')} ${c.t('rendezvous.demande.obligatoires')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Relire" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('rendezvous.demande.recap')}</h3></legend>
          <div class="fpe__recap"><p>${c.t('rendezvous.demande.recapVide')}</p></div>
        </fieldset>
        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('rendezvous.demande.retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('rendezvous.demande.revenir')}">${c.t('rendezvous.demande.continuer')}</button>
          <button class="fpe__bouton" type="submit">${c.t('rendezvous.demande.envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden tabindex="-1">
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${c.t('rendezvous.demande.merci')}</h3>
        <p data-resume></p>
        <p>${c.t('rendezvous.demande.simule')}</p>
        <div class="fpe__fin-actions">
          <a class="fpe__bouton" href="mailto:${c.site.contact.email}" data-mailto hidden>${c.t('rendezvous.demande.parMail')}</a>
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${c.t('rendezvous.demande.nouvelle')}</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section direct fond-argile" id="contact">
  <div class="conteneur">
    <p class="surtitre">${c.t('rendezvous.direct.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('rendezvous.direct.titre1')} <em>${c.t('rendezvous.direct.titre2')}</em></h2>
    <ul class="direct-grille" data-anime="cascade" data-visuel>
      <li><a class="direct-carte" href="tel:${c.site.contact.telephoneLien}"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 4h5l2 7-3 2c1.5 3 4 5.5 7 7l2-3 7 2v5c0 1.5-1.5 3-3 3C14 27 5 18 5 7c0-1.5 1.5-3 4-3z"/></svg><span class="direct-titre">${c.t('commun.appeler')}</span><span>${c.site.contact.telephone}</span></a></li>
      <li><a class="direct-carte" href="${c.site.contact.sms}"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 7h22v15H14l-6 5v-5H5z"/></svg><span class="direct-titre">${c.t('commun.sms')}</span><span>${c.site.contact.telephone}</span></a></li>
      <li><a class="direct-carte" href="mailto:${c.site.contact.email}"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="7" width="24" height="18" rx="2"/><path d="m5 9 11 8 11-8"/></svg><span class="direct-titre">${c.t('commun.ecrire')}</span><span>${c.site.contact.email}</span></a></li>
    </ul>
  </div>
</section>

<section class="section acces" id="acces">
  <div class="conteneur acces-grille">
    ${c.media({ nom: 'cabinet-photo', alt: alt(c, 'cabinet-photo'), classe: 'acces-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('rendezvous.acces.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('rendezvous.acces.titre1')} <em>${c.t('rendezvous.acces.titre2')}</em></h2>
      <ul class="acces-liste" data-anime="cascade">
        <li>${c.t('rendezvous.acces.parking')}</li>
        <li>${c.t('rendezvous.acces.jours')}</li>
        <li>${c.t('rendezvous.acces.domicile')}</li>
        <li>${c.t('rendezvous.acces.visio')}</li>
      </ul>
      <p data-anime><a class="bouton bouton--contour" href="${c.site.contact.itineraire}" target="_blank" rel="noopener">${c.t('rendezvous.acces.itineraire')}<span class="visuellement-cache"> (${c.s('commun.nouvelOnglet')})</span></a></p>
    </div>
  </div>
</section>

<section class="section faq fond-argile" id="questions">
  <div class="conteneur faq-grille">
    <div>
      <p class="surtitre">${c.t('rendezvous.faq.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('rendezvous.faq.titre')}</h2>
    </div>
    <div class="faq-liste" data-anime="cascade">
      ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
    </div>
  </div>
</section>

${appelFinal(c)}
`;
