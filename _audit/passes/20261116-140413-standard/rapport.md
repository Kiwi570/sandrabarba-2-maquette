# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 15:22:42 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261116-140413-standard` · version ?v=4
- Échecs : **8**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (11), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (6), vitesse (5), captures (1)

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

## Passes de cette version (?v=4)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-134359-rapide-cible | rapide | /,/psychotherapie,/sophrologie,/violences,/rendez-vous,/404 | toutes | 57 | 36 | 1 | échecs |
| **20261116-140413-standard** (celle-ci) | standard | toutes | toutes | 8 | 13 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Séance d'une heure · 65 € · au cabinet ou en visio » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/sophrologie` — div.conteneur.hp-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > span.hero-info « Séance d'une heure · 65 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### débordement horizontal (3)

- **débordement horizontal** — `/` — section#debut > div.hero-portrait:nth-of-type(2) > div.souffle-halo > span:nth-of-type(1) — page large de 783 px pour un écran de 781 px _(768×1024 normal)_
- **débordement horizontal** — `/` — page large de 1123 px — largeurs : 1120, 1160, 1200, 1240 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/sophrologie` — page large de 803 px — largeurs : 800 px _(balayage 320–1920 normal)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.conteneur.deroule-grille > figure.media.deroule-media > picture > img « Un ordinateur portable à demi ouvert sur un bureau » — grok/visio (5/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/rendez-vous` — h1.hx-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « pour vous. » — avec div.hx-texte > p.hx-prix:nth-of-type(2) > span.ouv-suite > strong « 65 € » _(390×844 normal, 768×1024 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +4)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/sophrologie` — div.conteneur.hp-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.bouton « Réserver une séance » _(1366×768 sansJs, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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

### section sans visuel (6)

- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Elles en parlent Une vraie écoute et a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/psychotherapie` — section#pourquoi « POURQUOI CONSULTER Pour soi, ou pour un proche. 01 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/rendez-vous` — section#questions « QUESTIONS FRÉQUENTES Avant de vous lancer Combien  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sophrologie` — section#histoire « UN PEU D'HISTOIRE L'étude de la conscience en équi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/violences` — section#culpabilite « LA CULPABILITÉ Coupable ? Mais de quoi ? Les agres » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/violences` — section#formes « COMPRENDRE Qu'est-ce que la violence ? L'usage de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (5.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

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
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2903 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2904 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2853 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2862 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2854 ms depuis le premier octet
- Ouverture / (390×844) : 2904 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2893 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2894 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2885 ms depuis le premier octet
- Ouverture /violences (390×844) : 2862 ms depuis le premier octet
- bords de l’écran /violences 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 588 images d’intro, 19 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 431, tâche la plus longue 0 ms
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 248, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 261, tâche la plus longue 0 ms
- Fluidité /sophrologie 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 263, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1328, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1330, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /psychotherapie : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/rendez-vous,/sophrologie --seulement=fichiers,mesures
```
