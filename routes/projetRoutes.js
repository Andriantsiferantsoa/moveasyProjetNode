const express = require('express');
const router = express.Router();
const projetController = require('../controllers/projetController');

// Routes CRUD pour les projets
router.post('/projets', projetController.createProjet);
router.get('/projets', projetController.getAllProjets);
router.get('/projets/:id', projetController.getProjetById);
router.put('/projets/:id', projetController.updateProjet);
router.delete('/projets/:id', projetController.deleteProjet);

module.exports = router;