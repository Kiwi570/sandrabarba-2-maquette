# Sandra Barba · maquette « Respirer » (v1)

Maquette du site du cabinet de psychothérapie et de sophrologie de Sandra Barba (Aubignan, Vaucluse), faite à partir de www.sandrabarba.fr. Nouvelle maquette, distincte de la première (dépôt sandrabarba-maquette, 13 novembre 2026, qui reste en ligne). Dépôt sandrabarba-2-maquette, adresse : https://sandrabarba-2-maquette.vercel.app

Direction « Respirer » : lin, argile, olive nuit et laurier-rose (le rose du logo), titres Fraunces, texte Figtree. L'intro est un cercle de lumière qui inspire, souffle, puis devient le portrait de Sandra ; le souffle revient une seule fois, dans l'exercice de respiration de la page Sophrologie.

Pages : Accueil · Psychothérapie (couple et famille compris) · Sophrologie · Violences · Rendez-vous · 404.

## Mettre à jour

Le site est statique. Les pages HTML sont générées : ne jamais les modifier à la main.

```
node outils/generer.mjs
```

Textes : `donnees/textes/fr.json`. Listes (séances, avis, formations, numéros d'aide…) : `donnees/*.json`. Gabarits : `source/`. Style : `assets/css/site.css`. Effets : `assets/js/site.js`.

## À fournir par le client (à compléter)

- Mentions légales : éditeur, directeur de la publication, hébergeur (Vercel Inc., adresse à vérifier au moment de la mise en ligne), SIRET (514 610 393 00019, à confirmer).
- Politique de confidentialité (formulaire de demande de rendez-vous, cookies).
- Titre professionnel : le site dit « psychothérapie » (la pratique) et jamais « psychothérapeute » ni « psychologue », titres protégés (art. 52 de la loi 2004-806 ; registre national des psychothérapeutes tenu par l'ARS). Si Sandra Barba est inscrite au registre, donner le numéro : le titre pourra être employé. Le mot « psychologue » figure aujourd'hui dans les métadonnées du site actuel : à retirer.
- Horaires : le site actuel dit « du lundi au samedi, sur rendez-vous », sans heures. Aucune heure ni statut « ouvert maintenant » n'est affiché.
- Une photo plus grande du portrait au pull de laine (la source fait 960 px).
- Agréments de sophrologie (Observatoire, fédération, chambre syndicale, Sophrologie française) : les logos du site actuel ne sont pas repris tant que leur intitulé exact n'est pas confirmé.

## Retiré ou reformulé faute d'information, ou par prudence

- Sophrologie : « tics, TOC, acouphènes, arrêter de fumer, faire un régime » et « devenez le meilleur de vous-même » : non repris (promesses de résultat sur la santé). « Meilleure sophrologue Vaucluse » (texte alternatif d'une image) : non repris.
- Violences : la statistique sur les enfants victimes, sans source, n'est pas affichée. Les numéros publics vérifiés (17, 112, 114, 3919, 119) sont ajoutés, avec un bouton « Quitter vite ».
- Trois principes de Caycedo : courtes explications rédigées pour la maquette, à valider par Sandra Barba.
- Avis : trois avis réels repris mot pour mot (Facebook, Resalib), relevés sur les captures du site lors de la version précédente.
- Page Diplômes : cinq diplômes en vignettes qui s'ouvrent ; les autres restent disponibles.
- Blog (20 articles) et page À propos : non repris en v1 (À propos est une section de l'accueil).

Incohérences du site actuel : la page Sophrologie dit « séances uniquement en cabinet » alors que la consultation en visio existe ; le pied de page colle le numéro de rue au téléphone (« 07 60 36 58 32 - 89 ») ; menu « Plus… » vide ; coquilles (« victies »).

## Crédits

Les images du dossier `assets/images/grok/` sont des illustrations générées par IA (Grok). Elles portent la mention « Illustration générée », à garder sur le site final. Photos de Sandra Barba et du cabinet, logo, diplômes et article de presse : site actuel du client.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), le formulaire simulé (brancher un vrai envoi ou un `mailto:`), les mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée ».
