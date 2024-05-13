// Semelhante a index, mas usaremos esses controles desse código em outras rotas. Farei como exemplo dois controles, para duas rotas diferentes de landig pages  diferentes

const landingPage1 = (req, res) => {
    res.render("home_1"); // Esse template deve ficar na views também, pois assim como o portifólio, ele é um template
}

const landingPage2 = (req, res) => {
    res.render("home_2");
}

// Atenção! Esses controles estão bem simples, compactos, pois nossa aplicação só terá uma função: entregar páginas para os usuários. Mas poderia ter várias outras funções! Como puxar dados de um banco de dados (ex: mostrar as pessoas que enviaram seus email) OU até tratar um dado enviado pelo usuário, como o cadastro do email do usuário no formulário. Prepare-se pois farémos MUITAS vezes isso!

// Exportando os controles para usarmos nas rotas:
module.exports = {landingPage1, landingPage2}