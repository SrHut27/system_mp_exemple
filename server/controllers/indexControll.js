// Aqui ficarão os controles das rotas da página do nosso index (página primária, principal), que nesse projeto, é a página do portifólio do aluno, por isso recebe o nome de index

// Rota inincial "/", que renderiza o template index.hbs, o template do portifólio
const indexPage = (req, res) => {
    res.render("index"); // estamos falando que a resposta de quando o usuário acessar essa rota (aqui é o controle da rota, definiremos a rota em si no indexRoute) é a renderização de um template, sendo esse template o "index.hbs"
};

// Como usaremos esse controle no reoteamento da aplicação (indexRoute), precisamos export-a-lo, para usarmos em outra parte do nosso código
module.exports = {indexPage}