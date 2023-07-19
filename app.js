const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const projetRoutes = require('./routes/projetRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Middleware pour le traitement du corps des requêtes en JSON
app.use(express.json());


// Middleware pour analyser les données JSON dans les requêtes POST
app.use(bodyParser.json());

// Middleware pour gérer les fichiers téléchargés (image QR)
const upload = multer({ dest: 'uploads/' });
app.use(upload.single('qrImage'));

// Utilisation des routes pour les projets
app.use('api', projetRoutes);

// Utilisation des routes pour les items
app.use('', itemRoutes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});