// Importation du module de connexion à la base de données MySQL
const db = require('../config/db');

// Modèle du projet
const Projet = {
  create: (nom, description, callback) => {
    db.query('INSERT INTO projet (nom, description) VALUES (?, ?)', [nom, description], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, { id: results.insertId, nom, description });
    });
  },
  getAll: (callback) => {
    db.query('SELECT * FROM projet', (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM projet WHERE id = ?', [id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      if (results.length === 0) {
        return callback('Projet non trouvé', null);
      }
      return callback(null, results[0]);
    });
  },
  update: (id, nom, description, callback) => {
    db.query('UPDATE projet SET nom = ?, description = ? WHERE id = ?', [nom, description, id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, { id, nom, description });
    });
  },
  delete: (id, callback) => {
    db.query('DELETE FROM projet WHERE id = ?', [id], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null);
    });
  },
};

module.exports = Projet;
