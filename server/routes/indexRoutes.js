const express = require("express");
const router = express.Router();

// Importando controles dessa rota:
const { renderIndex,
        addLead
 } = require("../controllers/indexControll");

router.get("/", renderIndex);

router.post("/addLead", addLead);

module.exports = router;