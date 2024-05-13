// Aqui ficarão nossas rotas, que estão externas ao nosso servidor (fora do arquivo ap.js) por fins de organização de código, para estrura de projetos comerciais e reconhecimentos de erros. Para faze-lo, precisamos da função Router do express, pois ele permite o uso de métodos FORA do arquivo do servidor (app.js)

const express = require("express");
const router = express.Router() // Lembre-se do parênteses! Significa que estamos chamando uma função

// Agora precisamos importar os controles dessa rota (ou rotas : )). Pode ser o quanto for necessário, pois do mesmo modo que podemos ter vários controles no indexControl, podemos ter as rotas que chamam cada um desses controles.

// MAS lembre-se! Uma rota deve chamar apenas UM controle. Se você fez outro controle, e quer ele em sua aplicação, faça outra rota!

const {indexPage} = require("../controllers/indexControll");

// Rota raíz de nossa aplicação (por isso não tem outro caminho, é apenas "/")
// Usando o método GET pois não pedi nada do usuário, apenas irei entregar
router.get("/", (req, res) => {
    indexPage(req, res);
})


// Agora vamos exportar TODAS as rotas, para chamarmos em nosso servidor (app.js)
module.exports = router;