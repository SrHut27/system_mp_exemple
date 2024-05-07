// importando funções necessárias:
const connection = require('../configs/database'); // Importando a instância do banco de dados
const contactEmail = require('./email/contact');


// Conectando ao banco de dados, usando a instância importada:
connection.connect((error) => {
    if (error) throw error;
    return;
})

// Helpers para uso durante a execução do códiog:
var messages = [];

// Rotas usadas na aplicação, para renderizar templates e tratar dados (exemplo: formulário)

const indexPage = (req, res) => {
    res.render('', {messages: messages});
}

const helloWorld = (req, res) => {
    res.send(
        `
            <h1>Hello World!</h1>
        `)
}

const sendForm = async (req, res) => {
    const {emailAddress} = req.body;

    if (!emailAddress) {
        messages = [];
        messages.push('Ei! Para enviar, precisa informar-me seu email : )');
        res.redirect('/')
        return;
    }
    try {
        const existUser = await new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM emails WHERE email = ?', [emailAddress], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                };
                resolve(results);
            });
        });

        if (existUser.length > 0) {
            console.log(`O usuário ${emailAddress} já existe e não foi alocado novamente no banco de dados`);
            messages = [];
            messages.push('Obrigado por entrar em contato novamente!');
            contactEmail(emailAddress);
            res.redirect('/');
            return;
        } else {
            const addUser = await new Promise((resolve, reject) => {
                connection.execute('INSERT INTO emails (email) VALUES (?)', [emailAddress], (error, results) => {
                    if (error){
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });
            messages = [];
            messages.push('Olhe sua caixa de email! Deixei um recado para você ; )');
            contactEmail(emailAddress);
            res.status(200).redirect('/');
        }

    } catch (error) {
        console.log(error);
        res.redirect('/')
        return;
        
    }
}

module.exports = { indexPage, helloWorld, sendForm }