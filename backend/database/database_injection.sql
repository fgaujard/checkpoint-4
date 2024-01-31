-- Insertion des données dans la table `keyword_category`
INSERT INTO `keyword_category` (`name`) VALUES
('Technology'),
('Web Development'),
('Development Process'),
('Marketing'),
('Software Architecture'),
('Development Tools'),
('Software Development'),
('Database Design'),
('Software Operations'),
('Coding Conventions'),
('Package Manager');

-- Insertion des données dans la table `keyword`
INSERT INTO `keyword` (`acronyme`, `name`, `description`, `content`, `category_id`) VALUES
("CLI", "Command Line Interface", "Interface en ligne de commande", "## Mini-cours sur la CLI\n\nLa CLI (Command Line Interface) est un moyen puissant de communiquer avec un système d\'exploitation. Voici quelques commandes de base :\n\n- `cd` : Changer de répertoire\n- `ls` : Lister les fichiers\n- `mkdir` : Créer un répertoire\n\n```bash\n# Exemple d\'utilisation de la commande cd\ncd chemin/vers/le/dossier\n```", 1),
("HTML", "Hypertext Markup Language", "Langage de balisage pour la création de pages web", "## Mini-cours sur HTML\n\nHTML est le langage de balisage standard pour la création de pages web. Voici un exemple de code HTML de base :\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Titre de la page</title>\n</head>\n<body>\n  <h1>Mon premier en-tête</h1>\n  <p>Mon premier paragraphe.</p>\n</body>\n</html>\n```", 2),
("CSS", "Cascading Style Sheets", "Feuilles de style pour la présentation des pages web","## Mini-cours sur CSS\n\nCSS est utilisé pour styliser les pages web. Voici un exemple de code CSS pour changer la couleur de fond du corps et le style d\'un en-tête :\n\n```css\nbody {\n  background-color: #f0f0f0;\n}\nh1 {\n  color: blue;\n}\n```", 2),
("MVP", "Minimum Viable Product", "Produit minimal viable", "## Mini-cours sur le MVP\n\nLe MVP est une stratégie de développement de produit qui se concentre sur la création d\'une version initiale avec des fonctionnalités essentielles. Voici comment définir un MVP :\n\n1. Identifiez les fonctionnalités essentielles\n2. Développez rapidement\n3. Collectez les retours des utilisateurs\n4. Itérez et améliorez", 3),
("SEO", "Search Engine Optimization", "Optimisation pour les moteurs de recherche", '## Mini-cours sur le SEO\n\nLe SEO vise à améliorer la visibilité d\'un site web dans les résultats des moteurs de recherche. Voici quelques conseils :\n\n- Utilisez des balises méta\n- Produisez un contenu de qualité\n- Optimisez les images\n\n```html\n<meta name="description" content="Description de votre page">\n```', 4),
("Hook", "React Hook", "Fonction qui permet d\'utiliser l\'état et les fonctionnalités React dans les composants fonctionnels",  "## Mini-cours sur le MVP\n\nLe MVP est une stratégie de développement de produit qui se concentre sur la création d\'une version initiale avec des fonctionnalités essentielles. Voici comment définir un MVP :\n\n1. Identifiez les fonctionnalités essentielles\n2. Développez rapidement\n3. Collectez les retours des utilisateurs\n4. Itérez et améliorez", 2),
("Middleware", "Middleware", "Logiciel intermédiaire facilitant la communication entre les applications", "## Mini-cours sur les Middleware\n\nLes middlewares agissent comme des intermédiaires dans le flux de données entre différentes parties d'une application. Voici un exemple de middleware en Express.js :\n\n```javascript\nconst myMiddleware = (req, res, next) => {\n  // Faire quelque chose avant de passer à la prochaine étape\n  next();\n};\n```", 5),
("IDLE", "Integrated Development and Learning Environment", "Environnement intégré de développement et d\'apprentissage",  "## Mini-cours sur les Environnements de Développement Intégrés (IDE)\n\nUn IDE est un outil qui combine un éditeur de texte, un compilateur, et d\'autres fonctionnalités pour simplifier le développement. Exemple avec Visual Studio Code :\n\n![VS Code](https://code.visualstudio.com/assets/updates/1_58/logo-stable.png)", 6),
("Framework", "Framework", "Structure logicielle facilitant le développement d\'applications", "## Mini-cours sur les Frameworks\n\nUn framework offre une structure et des composants pré-construits pour accélérer le développement. Exemples de frameworks populaires :\n\n- **Django** pour Python\n- **Ruby on Rails** pour Ruby\n- **Angular** pour JavaScript/TypeScript", 7),
("Library", "Bibliothèque", "Ensemble de fonctions réutilisables pour le développement logiciel", "## Mini-cours sur les Bibliothèques\n\nUne bibliothèque est un ensemble de fonctions réutilisables. Exemples de bibliothèques :\n\n- **jQuery** pour JavaScript\n- **Requests** pour Python\n- **Lodash** pour JavaScript", 7),
("MVC", "Model-View-Controller", "Architecture logicielle pour organiser le code", "## Mini-cours sur l\'Architecture MVC\n\nMVC divise une application en trois composants :\n\n- **Model** : Représente les données et la logique métier\n- **View** : Gère l\'affichage des données\n- **Controller** : Gère les interactions utilisateur", 5),
("Merise", "Merise", "Méthode d\'analyse et de conception de systèmes d\'information", "## Mini-cours sur la Méthode Merise\n\nPhases de la méthode Merise :\n\n1. **Analyse** : Comprendre les besoins et spécifier les exigences\n2. **Conception** : Définir la structure et les composants du système\n3. **Implémentation** : Mettre en œuvre la solution", 7),
("MCD", "Modèle Conceptuel de Données", "Représentation des concepts et relations entre les données",  "## Mini-cours sur le Modèle Conceptuel de Données (MCD)\n\nUn MCD représente les concepts et les relations entre les données d'un système. Il utilise des symboles pour décrire les entités, les attributs et les relations.", 8),
("MLD", "Modèle Logique de Données", "Description détaillée de la structure de la base de données","## Mini-cours sur le Modèle Logique de Données (MLD)\n\nUn MLD offre une description détaillée de la structure de la base de données. Il définit les tables, les clés primaires et étrangères, ainsi que les contraintes associées.", 8),
("MPD", "Modèle Physique de Données", "Implémentation concrète du modèle logique dans une base de données réelle", "## Mini-cours sur le Modèle Physique de Données (MPD)\n\nUn MPD concrétise le modèle logique dans une base de données réelle. Il implique la création de tables, d\'index et d\'autres objets de base de données.", 8),
("API", "Application Programming Interface", "Ensemble de règles pour permettre à des logiciels de communiquer entre eux", "## Mini-cours sur les APIs\n\nUne API (Interface de Programmation d\'Application) permet à des logiciels de communiquer entre eux. Exemples de types d\'API :\n\n- **RESTful APIs**\n- **SOAP APIs**\n- **GraphQL APIs**", 7),
("REST", "Representational State Transfer", "Style architectural pour le développement d\'applications réseau", "## Mini-cours sur REST\n\nREST est un style architectural qui utilise des contraintes pour le développement d\'applications réseau. Principes clés :\n\n- **Ressources**\n- **Opérations standardisées (GET, POST, PUT, DELETE)**\n- **État représentationnel**", 5),
("CORS", "Cross-Origin Resource Sharing", "Mécanisme permettant les requêtes HTTP entre différentes sources", "## Mini-cours sur CORS\n\nCORS est utilisé pour permettre ou bloquer les requêtes HTTP entre différentes sources. Exemple de configuration côté serveur (Node.js) :\n\n```javascript\nconst express = require(\'express\');\nconst cors = require(\'cors\');\n\nconst app = express();\napp.use(cors());\n```", 2),
("CRUD", "Create, Read, Update, Delete", "Opérations de base pour la gestion des données", "## Mini-cours sur CRUD\n\nCRUD représente les opérations de base pour la gestion des données :\n\n- **Create** : Ajouter des données\n- **Read** : Lire des données\n- **Update** : Mettre à jour des données\n- **Delete** : Supprimer des données", 10),
("BREAD", "Browse, Read, Edit, Add, Delete", "Extensions du CRUD avec des opérations supplémentaires", "## Mini-cours sur BREAD\n\nBREAD étend les opérations CRUD avec :\n\n- **Browse** : Parcourir les données\n- **Edit** : Éditer les données\n- **Add** : Ajouter de nouvelles données", 10),
("PascalCase", "Pascal Case", "Conventions de nommage pour les identifiants", "## Mini-cours sur PascalCase et CamelCase\n\nPascalCase et CamelCase sont des conventions de nommage pour les identifiants dans le code. Exemples :\n\n- **PascalCase** : MyVariableName\n- **CamelCase** : myVariableName", 10),
("NPM", "Node Package Manager", "Gestionnaire de paquets Node.js", "## Node Package Manager (NPM)\n\nNPM est le gestionnaire de paquets par défaut pour Node.js. Il permet d\'installer, de partager et de gérer les dépendances d\'un projet. Voici comment utiliser NPM :\n\n```bash\n# Installation d\'une dépendance\nnpm install package-name\n\n# Exécution d\'un script\nnpm run script-name\n```", 11);

-- Insertion des données dans la table `package_category`
INSERT INTO `package_category` (`name`) VALUES
('front-end'),
('back-end'),
('both'),
('dev');

-- Insertion des données dans la table `package`
INSERT INTO `package` (`name`, `description`, `content`, `category_id`) VALUES
("mUI", "Material UI", "Contenu de mUI", 1);

-- Insertion des données dans la table `package`
INSERT INTO `user_role` (`name`, `acronyme`) VALUES
("Wild Student", "Wilder"),
("Développeur Web et Web Mobile", "DWWM"),
("Concepteur Développeur d'Application", "CDA"),
("Teacher Assistant", "TA"),
("Formateur", "Boss");

INSERT INTO `user_team` (`name`, `formateur_id`) VALUES
("SACOD", 1);

INSERT INTO `user` (`username`, `password`, `is_admin`, `role_id`, `team_id`) VALUES
("AnthoLeBG", "$argon2id$v=19$m=65536,t=3,p=4$pJd0fNR0vUdUiI4JIFwThQ$Y+Jsqdci2QQZO2DIIynHaspjJFYpSJCe2TXTkYCBl+8", 1, 5, 1);

INSERT INTO `user` (`username`, `password`, `is_admin`, `role_id`, `team_id`) VALUES
("Flavito", "$argon2id$v=19$m=65536,t=3,p=4$U2xka5a/Bd9QuCQvbPrqsA$lUG+Y6SWtE+S+zH55HYFdONJsCx6vL3S5lE6C2oEJEw", 0, 5, 1);