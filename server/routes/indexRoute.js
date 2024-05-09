const express = require('express');
const router = express.Router();

// Importando os controllers
const { indexPage, helloWorld, sendForm, showContacts } = require('../controllers/indexControllers')

router.get('/', (req, res) => {
    indexPage(req, res);
});

router.get('/helloworld', (req, res) => {
    helloWorld(req, res);
});

router.post('/form', (req, res) => {
    sendForm(req, res);
});

router.get('/contacts', (req, res) => {
    showContacts(req, res);
})

module.exports = router;