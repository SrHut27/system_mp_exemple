const express = require("express");
const router = express.Router();

// Importando os controllers
const {
  indexPage,
  helloWorld,
  sendForm,
  pagina,
} = require("../controllers/indexControllers");

router.get("/", (req, res) => {
  indexPage(req, res);
});

router.get("/helloworld", (req, res) => {
  helloWorld(req, res);
});

router.post("/form", (req, res) => {
  sendForm(req, res);
});

router.get("/pagina", (req, res) => {
  pagina(req, res);
});

module.exports = router;
