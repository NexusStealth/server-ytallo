const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
  const { name, html, css, js } = req.body;
  const folderPath = path.join(__dirname, `../public/sites/${name}`);

  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'index.html'), html);
  fs.writeFileSync(path.join(folderPath, 'style.css'), css);
  fs.writeFileSync(path.join(folderPath, 'script.js'), js);

  res.json({ url: `https://${name}.server-ytallo.app` });
});

module.exports = router;
