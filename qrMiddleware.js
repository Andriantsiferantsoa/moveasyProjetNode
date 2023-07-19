// qrMiddleware.js
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const uploadDir = path.join(__dirname, 'uploads');

// Vérifie si le dossier d'uploads existe, sinon le crée
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const generateQRCode = (libelle, description) => {
  const content = `${libelle} - ${description}`;
  const qrFileName = `${libelle}-${Date.now()}.png`;
  const qrFilePath = path.join(uploadDir, qrFileName); // Chemin complet du fichier

  return new Promise((resolve, reject) => {
    QRCode.toFile(qrFilePath, content, (err) => {
      if (err) reject(err);
      else resolve(qrFilePath);
    });
  });
};

module.exports = generateQRCode;



// // qrMiddleware.js
// const fs = require('fs');
// const path = require('path');
// const QRCode = require('qrcode');

// const uploadDir = path.join(__dirname, 'uploads');

// // Vérifie si le dossier d'uploads existe, sinon le crée
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const generateQRCode = (libelle, description) => {
//   const content = `${libelle} - ${description}`;
//   return new Promise((resolve, reject) => {
//     QRCode.toFile(
//       path.join(uploadDir, `${libelle}-${Date.now()}.png`),
//       content,
//       (err, filename) => {
//         if (err) reject(err);
//         else resolve(filename);
//       }
//     );
//   });
// };

// module.exports = generateQRCode;
