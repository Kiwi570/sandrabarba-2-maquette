# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 15:34:51 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261116-142821-complet-partiel` · version ?v=4
- Échecs : **7**
- À regarder : **6**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=4)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-134359-rapide-cible | rapide | /,/psychotherapie,/sophrologie,/violences,/rendez-vous,/404 | toutes | 57 | 36 | 1 | échecs |
| 20261116-140413-standard | standard | toutes | toutes | 8 | 13 | 1 | échecs |
| 20261116-142442-standard-cible-partiel | standard | /,/rendez-vous,/sophrologie | fichiers, mesures | 0 | 5 | 0 | complet |
| **20261116-142821-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 7 | 6 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Séance d'une heure · 65 € · au cabinet ou en visio » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.hs-texte > p.hero-actions:nth-of-type(2) « Revenir à l'accueil Prendre rendez-vous » _(844×390 sansJs)_
- **premier écran : information clé hors de l’écran** — `/violences` — div.hs-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.hero-info.hero-urgence:nth-of-type(2) « En danger maintenant : appelez le 17 » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (3)

- **texte coupé** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Préférences » — le contenu dépasse de son cadre _(1000×560 normal, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/rendez-vous` — div.hx-texte > p.hero-actions:nth-of-type(3) > span.ouv-suite.hero-boutons > a.bouton:nth-of-type(1) « Faire une demande » _(844×390 sansJs)_

## À regarder

### section sans visuel (6)

- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Elles en parlent Une vraie écoute et a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/psychotherapie` — section#pourquoi « POURQUOI CONSULTER Pour soi, ou pour un proche. 01 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/rendez-vous` — section#questions « QUESTIONS FRÉQUENTES Avant de vous lancer Combien  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sophrologie` — section#histoire « UN PEU D'HISTOIRE L'étude de la conscience en équi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/violences` — section#culpabilite « LA CULPABILITÉ Coupable ? Mais de quoi ? Les agres » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/violences` — section#formes « COMPRENDRE Qu'est-ce que la violence ? L'usage de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/rendez-vous,/violences --seulement=fichiers,mesures
```
