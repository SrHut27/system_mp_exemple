const express = require('express');
const router = express.Router();

// Importando os controllers
const { indexPage, helloWorld, sendForm } = require('../controllers/indexControllers')

router.get('/', (req, res) => {
    indexPage(req, res);
});

router.get('/helloworld', (req, res) => {
    helloWorld(req, res);
});

router.post('/form', (req, res) => {
    sendForm(req, res);
});

module.exports = router;