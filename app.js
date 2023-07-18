const express = require('express');
const app = express();
const projetRoutes = require('./routes/projetRoutes');

// Middleware pour le traitement du corps des requêtes en JSON
app.use(express.json());

// Utilisation des routes pour les projets
app.use('', projetRoutes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});