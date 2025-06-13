const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('*', (req, res) => res.status(404).render('404'));

module.exports = router;
