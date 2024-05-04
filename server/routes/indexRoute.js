const express = require('express');
const router = express.Router();

// Importando os controllers
const { indexPage, helloWorld } = require('../controllers/indexControllers')

router.get('/', (req, res) => {
    indexPage(req, res);
});

router.get('/helloworld', (req, res) => {
    helloWorld(req, res);
})

module.exports = router;