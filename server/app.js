const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3001;

// Instânciando o servidor usando a função express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname + '/static')))

// Importando rotas:
const indexRoute = require('./routes/indexRoute');

// Anexando rotas:
app.use('', indexRoute);

app.listen(PORT, () => {
    console.log('app is running')
})