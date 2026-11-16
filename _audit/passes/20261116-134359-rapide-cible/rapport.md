# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 15:00:49 · 17 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/psychotherapie,/sophrologie,/violences,/rendez-vous,/404

## Résumé

- Statut : **57 échec(s)**
- Passe : `20261116-134359-rapide-cible` · version ?v=4
- Échecs : **57**
- À regarder : **36**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (11), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (6), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `index.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `psychotherapie.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `rendez-vous.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `sophrologie.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `violences.html` — mailto:info@sandrabarba.fr

### image de partage (5)

- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `psychotherapie.html` — fichier introuvable : /assets/partage/psychotherapie-fr.jpg
- **image de partage** — `rendez-vous.html` — fichier introuvable : /assets/partage/rendez-vous-fr.jpg
- **image de partage** — `sophrologie.html` — fichier introuvable : /assets/partage/sophrologie-fr.jpg
- **image de partage** — `violences.html` — fichier introuvable : /assets/partage/violences-fr.jpg

### textes qui se chevauchent (27)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « La vie est un combat. » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « Ne le vivez » _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « Ne le vivez » — avec h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.ouv-ligne > em « plus seul·e. » _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(1) « Un » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(2) « deuil. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(3) « Une » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(4) « séparation. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(5) « Un » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(7) « Des » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(8) « nuits » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(9) « trop » _(1366×768 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(10) « courtes, » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(6) « burn-out. » — avec div.conteneur.amene-grille > div.amene-texte > p.phrase-eclaire:nth-of-type(1) > span.pe-mot:nth-of-type(11) « une » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#cabinet > div > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — avec section#cabinet > div > div.cabinet-legende > h2 « Un cabinet au calme, à Aubignan. » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#cabinet > div > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — avec div > div.cabinet-legende > h2 > em « à Aubignan. » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/404` — div.hs-texte > h1.hs-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Respirez : » — avec h1.hs-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « cette page n'existe pas. » _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.hv-tete > h1.hv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Affronter un moment difficile. » — avec div.conteneur.hv-tete > h1.hv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « Se reconstruire. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.hv-tete > h1.hv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « Se reconstruire. » — avec h1.hv-titre > span.ligne-masque:nth-of-type(3) > span.ouv-ligne > em « Retrouver le sourire. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/rendez-vous` — div.hx-texte > h1.hx-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Une heure » — avec h1.hx-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « pour vous. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/rendez-vous` — h1.hx-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « pour vous. » — avec div.hx-texte > p.hx-prix:nth-of-type(2) > span.ouv-suite > strong « 65 € » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/rendez-vous` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur.hp-texte > h1.hp-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Il n'y a pas de magie : » — avec h1.hp-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « retrouvez-vous. » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — div.hs-texte > h1.hs-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Mettre des mots. » — avec h1.hs-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « Sortir du silence. » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(1) « Mentions légales · à compléter » — avec footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span.a-completer:nth-of-type(2) « Politique de confidentialité · à compléter » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### image non chargée (4)

- **image non chargée** — `/` — body#haut > div.visionneuse:nth-of-type(6) > div.vis-image:nth-of-type(2) > img _(1366×768 normal)_
- **image non chargée** — `/` — body#haut > div.visionneuse:nth-of-type(5) > div.vis-image:nth-of-type(2) > img _(390×844 sansWebgl, 390×844 normal, 844×390 normal)_
- **image non chargée** — `/violences` — body#haut > div.visionneuse:nth-of-type(5) > div.vis-image:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **image non chargée** — `/violences` — body#haut > div.visionneuse:nth-of-type(6) > div.vis-image:nth-of-type(2) > img _(1366×768 normal)_

### photo faible affichée en grand (6)

- **photo faible affichée en grand** — `/` — div.conteneur.sandra-grille:nth-of-type(1) > figure.media.sandra-media > picture > img « Sandra Barba souriante, emmitouflée dans un pull d » — sandra-laine (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.deroule-grille > figure.media.deroule-media > picture > img « Un ordinateur portable à demi ouvert sur un bureau » — grok/visio (5/5, faible, 43 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.couple-grille > figure.media.couple-media > picture > img « Deux fauteuils de velours gris tournés l'un vers l » — grok/deux-fauteuils (5/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.couple-grille > figure.media.couple-media > picture > img « Deux fauteuils de velours gris tournés l'un vers l » — grok/deux-fauteuils (5/5, faible, 43 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.modes-grille > figure.media.modes-media > picture > img « Un ordinateur portable à demi ouvert sur un bureau » — grok/visio (5/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/violences` — a#presse > img « Article de presse : « Éveiller les consciences sur » — presse (3/5, faible, 47 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/` — div.vb-visuel:nth-of-type(2) > div.vb-numeros.fx-fini > p:nth-of-type(1) > a « 17 » — 33 × 57 px _(390×844 sansWebgl, 390×844 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.vb-visuel:nth-of-type(2) > div.vb-numeros > p:nth-of-type(1) > a « 17 » — 33 × 57 px _(390×844 sansJs, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/psychotherapie` — div.hv-bas > p.hero-actions:nth-of-type(2) > span.ouv-suite.hero-boutons > a.bouton « Prendre rendez-vous » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/sophrologie` — div.conteneur.hp-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.bouton « Réserver une séance » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/violences` — div.hs-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/psychotherapie` — div.hv-bas > p.hero-actions:nth-of-type(2) > span.ouv-suite.hero-boutons > span.hero-info « Séance d'une heure · 65 € » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/sophrologie` — div.conteneur.hp-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > span.hero-info « Séance d'une heure · 65 € » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/violences` — div.hs-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.hero-info.hero-urgence:nth-of-type(2) « En danger maintenant : appelez le 17 » _(320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/sophrologie` — p[data-sens="1"] > span:nth-child(1) ; p[data-sens="1"] > span:nth-child(2) ; p[data-sens="1"] > span:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 4 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (20)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#ce-qui-vous-amene > div.conteneur.amene-grille > figure.media.amene-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille.fx-fini > article.offre:nth-of-type(1) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille.fx-fini > article.offre:nth-of-type(2) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille.fx-fini > article.offre:nth-of-type(3) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#deroule > div.conteneur.deroule-grille > figure.media.deroule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#cabinet > div > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille > article.offre:nth-of-type(1) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille > article.offre:nth-of-type(2) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.offres-grille > article.offre:nth-of-type(3) > figure.media.offre-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(390×844 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.hs-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/psychotherapie` — section#debut > figure.media.hv-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/psychotherapie` — section#couple > div.conteneur.couple-grille > figure.media.couple-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/psychotherapie` — div.conteneur > div.modes-grille > figure.media.modes-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/rendez-vous` — section#demande > div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > p.fpe__note:nth-of-type(3) « Démonstration : rien n'est envoyé. » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/rendez-vous` — div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > figure.media.demande-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/rendez-vous` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · SÉANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sophrologie` — section#debut > figure.media.hp-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sophrologie` — section#methode > div.conteneur.methode-grille > figure.media.methode-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sophrologie` — section#seance > div.conteneur.seance-grille > figure.media.seance-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/violences` — section#debut > figure.media.hs-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (2)

- **typographie française** — `/` — div.conteneur.sandra-grille:nth-of-type(1) > div.sandra-texte > blockquote.citation > p « « J'ai toujours considéré la vie comme un combat.  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/psychotherapie` — div.conteneur.approche-grille > div > blockquote.citation.citation--grande > p « « Nous cherchons ensemble à répondre à vos propres » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### section sans visuel (6)

- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Elles en parlent Une vraie écoute et a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/psychotherapie` — section#pourquoi « POURQUOI CONSULTER Pour soi, ou pour un proche. 01 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/rendez-vous` — section#questions « QUESTIONS FRÉQUENTES Avant de vous lancer Combien  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/sophrologie` — section#histoire « UN PEU D'HISTOIRE L'étude de la conscience en équi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/violences` — section#culpabilite « LA CULPABILITÉ Coupable ? Mais de quoi ? Les agres » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/violences` — section#formes « COMPRENDRE Qu'est-ce que la violence ? L'usage de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (5.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=4
- Audit rapide : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2904 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2900 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2897 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2896 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2904 ms depuis le premier octet
- Ouverture / (390×844) : 2897 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2903 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2869 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2895 ms depuis le premier octet
- film de l'ouverture /sophrologie 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /violences (390×844) : 2899 ms depuis le premier octet
- bords de l’écran /psychotherapie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /sophrologie 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 504 images d’intro, 14 de voile et 108 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 433, tâche la plus longue 0 ms
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 281, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité /sophrologie 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Vitesse / : 0.59 s de calcul au chargement (téléphone ralenti).
- Vitesse /psychotherapie : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.38 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
