// itemModel.js
const connection = require('../config/db');

const Item = {};

Item.createItems = (libelle, description, qrFileName) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO item (libelle, description, qrFileName) VALUES (?, ?, ?)';
      connection.query(sql, [libelle, description, qrFileName], (err, result) => {
        if (err) reject(err);
        else resolve(result.insertId);
      });
    });
  };
// Item.create = (libelle, description, qrFileName) => {
//   return new Promise((resolve, reject) => {
//     const sql = 'INSERT INTO item (libelle, description, qrFileName) VALUES (?, ?, ?)';
//     connection.query(sql, [libelle, description, qrFileName], (err, result) => {
//       if (err) reject(err);
//       else resolve(result.insertId);
//     });
//   });
// };

Item.getById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM item WHERE id = ?';
    connection.query(sql, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows[0]);
    });
  });
};

Item.getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM item';
    connection.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

Item.update = (id, libelle, description) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE item SET libelle = ?, description = ? WHERE id = ?';
    connection.query(sql, [libelle, description, id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

Item.delete = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM item WHERE id = ?';
    connection.query(sql, [id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = Item;
