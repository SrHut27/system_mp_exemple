const mysql = require('mysql2'); // importando o módul que conversa com o sistema de banco de dados mySql

const connection = mysql.createConnection({
    host: "192.168.15.149", // estava testando: você aluno fará "localhost"
    user: "mp_gabriel",  // use o usuário padrão do computador, o "root"
    password: "****************", // deixe em branco: ""
    database: "projeto_1" // esse é a tabela que usaremos, Vocês vão nomeá-la de Sistema_mp, no arquivo database.sql na pasta extras
});

module.exports = connection; // exportando a conexão pois usaremos nos nossos controladores de rota
