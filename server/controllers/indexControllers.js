const indexPage = (req, res) => {
    res.render('');
}

const helloWorld = (req, res) => {
    res.send(
        `
            <h1>Hello World!</h1>
        `)
}

module.exports = { indexPage, helloWorld }