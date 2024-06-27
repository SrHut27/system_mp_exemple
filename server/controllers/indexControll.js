const connection = require("../configs/db_connection");

connection.connect((error) => {
    if (error) throw error;
});

// variável para armazenar error:
let error;

const renderIndex = (req, res) => {
    res.render("index", {error});
};

const addLead = async (req, res) => {
    error = [];
    const {nome, email, telefone, comentario} = req.body;

    if (!nome || ! email|| !telefone) {
        error.push("Ei, preencha todos os campos para entrarmos em contato com você!");
        res.redirect("/");
        return;
    };
    try {
        await connection.execute("INSERT INTO leads (lead_name, lead_email, lead_phone, lead_comment, lead_proj) VALUES (?, ?, ?, ?, ?)", [nome, email, telefone, comentario || null, 1]);

        error = [];
        res.redirect("/")
    } catch (error) {
        console.log(error);
        error.push("Houve um erro ao conectar com o banco de dados. Tente novamente mais tarde!");
        res.redirect("/");
    }
}

module.exports = { renderIndex, addLead };