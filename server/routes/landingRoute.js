const express = require("express");
const router = express.Router();

// Importando os controles:
const {landingPage1, landingPage2} = require("../controllers/landingControll");

// fazendo as rotas, uma para cada controle, com funções diferentes:


// o caminho da aplicação ficará, na verdade, da seguinte forma: http://localhost:PORT/home/1
// isso porque o "home" da rota definiremos no próprio servidor, com o app.use("/home")
router.get("/1", (req, res) => {
    landingPage1(req, res);
})

router.get("/2", (req, res) => {
    landingPage2(req, res);
})

// Exportando as rotas para usarmos no servidor
module.exports = router;