
// Importation du module Express
const express = require('express');

// Importation des routes définies dans un fichier séparé (route.js)
const routes = require('./route.js');

// Fonction pour créer et configurer un serveur Express
function createServer() {
  // Création d'une instance d'application Express
  const app = express();

  // Utilisation du middleware pour gérer les données JSON
  app.use(express.json());

  // Montage des routes sous le préfixe '/api'
  app.use('/api', routes);

  // Retourner l'application configurée
  return app;
}

// Fonction pour démarrer le serveur sur un port spécifique
function startServer(port) {
  // Créer l'application serveur en appelant createServer
  const app = createServer();

  // Démarrer l'application en écoutant sur le port spécifié
  app.listen(port, (err) => {
    if (err) {
      // Si une erreur se produit lors du démarrage, elle est affichée dans la console
      console.error('Erreur lors du démarrage du serveur :', err);
    } else {
      // Si le serveur démarre correctement, un message de confirmation est affiché
      console.log(`Serveur en cours d'exécution sur le port ${port}`);
    }
  });
}

// Exportation des fonctions createServer et startServer
module.exports = { createServer, startServer };
