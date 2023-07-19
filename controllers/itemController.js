// itemController.js
const Item = require('../models/itemModel');
const generateQRCode = require('../qrMiddleware');
//Creation Item
// exports.createItem = async (req, res) => {
//   try {
//     const { libelle, description } = req.body;
//     const qrFileName = await generateQRCode(libelle, description);
//     const itemId = await Item.create(libelle, description, qrFileName);
//     res.status(201).json({ message: 'Item created successfully', itemId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.createItem = async (req, res) => {
    try {
      const { libelle, description } = req.body;
      const qrFilePath = await generateQRCode(libelle, description);
    console.log(qrFilePath);
      // Ici, qrFilePath contiendra le chemin complet du fichier image QR généré
  
      const itemId = await Item.createItems(libelle, description, qrFilePath);
      res.status(201).json({ message: 'Item created successfully', itemId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.getById(id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.getAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle, description } = req.body;
    await Item.update(id, libelle, description);
    res.json({ message: 'Item updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.delete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
