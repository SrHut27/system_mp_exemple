// importando funções necessárias:
const connection = require('../configs/database');


const indexPage = (req, res) => {
    res.render('');
}

const helloWorld = (req, res) => {
    res.send(
        `
            <h1>Hello World!</h1>
        `)
}

const sendForm = async () => {
    const {email} = req.body;

    try {
        const existUser = await new Promise((resolve, reject) => {

        }) 

    } catch (error) {

    }
}

module.exports = { indexPage, helloWorld }