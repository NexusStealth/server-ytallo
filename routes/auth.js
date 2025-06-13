const express = require('express');
const router = express.Router();
const { db } = require('../utils/firebase');

router.post('/google-callback', async (req, res) => {
  const { nome, email, uid } = req.body;

  const snapshot = await db.collection('usuarios').where('uid', '==', uid).get();
  if (snapshot.empty) {
    await db.collection('usuarios').add({
      nome,
      email,
      uid,
      criadoEm: new Date()
    });
  }

  res.status(200).end();
});

module.exports = router;
