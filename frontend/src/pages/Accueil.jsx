import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import database from "../assets/database.png";

function Accueil() {
  const content = `# 🥳 Bienvenue sur WikiWilder :
  **Votre Compagnon de Formation à la Wild Code School !! 🤖**

WikiWilder est bien plus qu'un simple wiki. C'est votre hub personnalisé de connaissances et de partage, conçu exclusivement pour les apprenants de la Wild Code School. Grâce à une interface conviviale et des fonctionnalités avancées, WikiWilder s'adresse à ceux qui cherchent à consolider leurs connaissances et à élargir leur compréhension du développement web.

## ⚙️ Fonctionnalités du Projet :

- **1. Recaps Quotidiens :**
Découvrez une section dédiée aux récapitulatifs quotidiens, offrant un aperçu complet des cours de la journée.

- **2. Mot-Clé et Acronymes :**
Plongez dans la richesse des termes techniques avec notre section Mot-Clé, regroupant les acronymes essentiels rencontrés au fil de la formation.

- **3. Cours Basiques :**
Affinez vos compétences de base avec des cours sur le développement web, couvrant HTML, CSS, JavaScript, React, API, et bases de données SQL.

- **4. Carte Interactive avec Vis.js :**
Explorez visuellement les relations entre les mots-clés grâce à notre carte interactive alimentée par Vis.js.

- **5. Partage de Packages :**
Découvrez et partagez des packages intéressants pour enrichir votre boîte à outils de développement.

- **6. Système  "Admin / Rôle / Team" Sécurisé :**
Notre système d'administration garantit l'intégrité des informations. Seuls les administrateurs ont le pouvoir de modifier les mots-clés et les cours. Les Wilders peuvent uniquement consulter les informations choisis par un admin et en aucun cas les modifiers. Les autres membres (DWWM CDA etc) peuvent quant à eux, poster des packages qu'ils auraient trouvés interessant.

- **7. Connexion Personnalisée :**
WikiWilder va au-delà de la simple consultation. ***Pour accéder aux fonctionnalités, connectez-vous avec votre compte personnel.*** Cela garantit une expérience adaptée à vos besoins spécifiques.

- **8. Sécurité et Confidentialité :**
Votre expérience sur WikiWilder est sécurisée et confidentielle. Grâce à un système de login sécurisé et à la gestion des rôles, seuls les utilisateurs autorisés peuvent accéder au contenu spécifique et y contribuer.


## 📦 Packages et Technologies Utilisés :

### *Frontend :*

- **React** : Bibliothèque JavaScript pour la construction de l'interface utilisateur.
- **Material UI** : Bibliothèque de composants React pour un design esthétique et cohérent. https://mui.com/material-ui/
- **Axios** : Bibliothèque pour effectuer des requêtes HTTP.
- **MD Editor** : Éditeur Markdown pour la saisie de contenu. https://uiwjs.github.io/react-md-editor/
- **SASS (SCSS)** : Préprocesseur CSS pour une gestion avancée des styles.
- **Vis.js (vis network)** : Bibliothèque pour la création de graphiques interactifs. https://visjs.org/
- **Neumorphism** : Le néomorphisme ou neumorphisme est un style de design d'interface graphique caractérisé par son souhait de donner un effet de relief. Ce style apparaît après le skeuomorphisme et le flat design dont il tente de faire la synthèse. https://neumorphism.io/ 
- **Inspirations** : Obsidian, GitHub, Wikipédia. https://obsidian.md/

### *Backend :*

- **Express** : Cadre de développement Node.js pour la création d'API.
- **Cors** : Middleware pour gérer les autorisations d'accès aux ressources côté serveur.
- **Mysql2** : Module MySQL pour Node.js.
- **Argon2** : Algorithme de hachage sécurisé pour le stockage des mots de passe.
- **Cookie-parser** : Middleware pour la manipulation des cookies.
- **Jsonwebtoken** : Génération de tokens JWT pour l'authentification.


### *Développement :*

- **Template de la Wild** : Permet de partir d'une base complète et structuré, limitant un peu le code mais lui offrant une meilleur re-lecture pour la suite du développement.
Utilisation des CORS, CRUD, BREAD...
- **Eslint** : Linter pour maintenir la qualité du code.
- **Prettier** : Outil de formatage de code pour une cohérence stylistique.
- **Nodemon** : Utilitaire pour redémarrer automatiquement le serveur lors des modifications.

## ➕ Mises à Jour à Venir :

- Système de favoris à optimiser (créer un filtre pour les pages en question et la map).

- Ajouter, Éditer, Supprimer des catégories pour les mot-clés.

- Sytème de récap + l'afficher spécifiquement pour la team de l'utilisateur.

- Rendre le système de rôles fonctionnel (Wilder, DWWM, CDA, TA, Master).

- Panneau admin complet avec gestion des utilisateurs, des rôles et des team (SACOD, JURASCRIPT, etc) en liste, détaillée, avec des boutons de modifications faciles d'accès et pertinant.

- Proposer d'autres vues dans la carte, par exemple les packages + rajouter une toolbar pour modifier la phyisque du graph, revenir au centre, et d'autres améliorations...

- Terminer le responsive de certaines pages.

- Refaire un design propre pour le point Culture Dev et pour la 404.

- Peaufiner le parcours utilisateurs et admin.

- Rendre l'application PWA pour faciliter les révisions sur appareils portables.

- Faire un check complet de la sécurité, double verifications des données envoyées en front et en back (regex etc)


## ↘️ Justification des Technologies Utilisées :

- **React** : Facilite la construction d'interfaces dynamiques et réactives.
- **Material UI** : Offre une conception esthétique et des composants prêts à l'emploi.
- **Axios** : Simple et efficace pour les requêtes HTTP.
- **Express** : Léger et rapide pour le développement d'API.
- **Argon2** : Assure une sécurité robuste pour le stockage des mots de passe.
- **Jsonwebtoken** : Gestion sécurisée des tokens JWT pour l'authentification.
- **Vis.js** : Idéal pour la représentation graphique des mots-clés.
- **MD Editor** : Idéal pour écrire du code, et styliser facilement les cours.

### Voici le diagramme de la base de donnée actuel :`;

  return (
    <div className="body-content">
      <div
        style={{
          padding: "2rem",
          margin: "2rem auto 3.5rem auto",
          borderRadius: "1rem",
          background: "white",
          boxShadow: "41px 41px 82px #c4c4c4, -41px -41px 82px #ffffff",
        }}
      >
        <div data-color-mode="light">
          <div style={{ height: "100%", overflow: "hidden" }}>
            <MDEditor.Markdown
              source={content}
              style={{
                height: "100%",
                overflow: "hidden",
                margin: "1rem 0 0 0",
              }}
            />
          </div>
        </div>
        <img
          src={database}
          width={935}
          alt="Diagramme de la Base de Données"
          style={{ marginTop: "2rem", borderRadius: "1rem" }}
        />
      </div>
    </div>
  );
}

export default Accueil;
