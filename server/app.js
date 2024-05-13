const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const PORT = 3003 // sua porta 4 digitos

// Instânciando o servidor
const app = express();

// Configurando o motor de visualização:
app.engine("hbs", hbs.engine({
    defaultLayout: "main",  // falando que o layout principal, que conecta tudo, será o main.hbs na pasta layouts
    extname: "hbs" // falando que os templates receberão a extensão hbs
}));

// falando qual motor de visualização usaremos:
app.set("view engine", "hbs"); // usaremos aquele que acabamos de configurar, express-handlebars

// onde ficará os arquivos estáticos, que são != dos arquivos de templates (que ficam no views)
app.use(express.static(path.join(__dirname + "/public"))) // criaremos uma pasta chamada public na raiz, onde ficará os arquivos estáticos

// Vamos chamar as rotas que declaramos fora do nosso servidor; para isso precisamos armazená-las em uma constante, que darémos o mesmo nome do arquivo de suas rotas
const indexRoute = require("./routes/indexRoute");
const landingRoute = require("./routes/landingRoute");

// Agora que o temos as rotas externas, precisamos dizer ao código que queremos elas em nosso servidor:
app.use("", indexRoute);
// Fazendo a rota das langind pages, definindo uma parte da rota direto no servidor:
app.use("/home", landingRoute);

// Oubvindo nosso servidor na rede local, usando como saída uma PORTA, que definimos no princípio do código
app.listen(PORT, () => {
    console.log("running");
})