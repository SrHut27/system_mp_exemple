require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;

// Conectando ao banco de dados e criando tabelas:
const { createAllTables } = require("./database/createTables");
const connection = require("./configs/db_connection");

// Configurando MIDDLEWARES e view templates:
app.use(bodyParser.urlencoded({ extended:true })) // permitindo processamento de forms
app.engine("hbs", hbs.engine({
    defaultLayout: "main",
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

connection.connect((error) => {
    if (error) throw error;
    createAllTables(connection);
});

// Importando e utilizando rotas da aplicação:
const indexRoutes = require("./routes/indexRoutes");

app.use("", indexRoutes);


app.listen(PORT, () => {
    console.log("app is running in:", PORT);
})