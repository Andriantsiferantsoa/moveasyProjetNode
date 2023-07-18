const Projet = require('../models/projet');

const projetController = {
  createProjet: (req, res) => {
    const { nom, description } = req.body;

    Projet.create(nom, description, (error, projet) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de la création du projet' });
      }
      return res.status(201).json(projet);
    });
  },
  getAllProjets: (req, res) => {
    Projet.getAll((error, projets) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
      }
      return res.status(200).json(projets);
    });
  },
  getProjetById: (req, res) => {
    const id = req.params.id;

    Projet.getById(id, (error, projet) => {
      if (error) {
        console.error(error);
        return res.status(404).json({ error: 'Projet non trouvé' });
      }
      return res.status(200).json(projet);
    });
  },
  updateProjet: (req, res) => {
    const id = req.params.id;
    const { nom, description } = req.body;

    Projet.update(id, nom, description, (error, projet) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de la mise à jour du projet' });
      }
      return res.status(200).json(projet);
    });
  },
  deleteProjet: (req, res) => {
    const id = req.params.id;

    Projet.delete(id, (error) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de la suppression du projet' });
      }
      return res.status(204).end();
    });
  },
};

module.exports = projetController;
