const connection = require("../configs/db_connection").promise();

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
    const { nome, email, telefone, comentario } = req.body;

    if (!nome || !email || !telefone) {
        error.push("Ei, preencha todos os campos para entrarmos em contato com você!");
        res.redirect("/");
        return;
    };

    try {
        const [emailResults] = await connection.query("SELECT * FROM leads WHERE lead_email = ?", [email]);
        if (emailResults.length > 0) {
            error.push("Obrigado pelo seu contato!");
            res.redirect("/");
            return;
        }

        const [phoneResults] = await connection.query("SELECT * FROM leads WHERE lead_phone = ?", [telefone]);
        if (phoneResults.length > 0) {
            error.push("Obrigado pelo seu contato!");
            res.redirect("/");
            return;
        }

        await connection.query("INSERT INTO leads (lead_name, lead_email, lead_phone, lead_comment, lead_proj, origem) VALUES (?, ?, ?, ?, ?, ?)", [nome, email, telefone, comentario || null, 1, "Primeira Landing Page"]);

        error = [];
        res.redirect("/");

    } catch (err) {
        console.log(err);
        error.push("Houve um erro ao conectar com o banco de dados. Tente novamente mais tarde!");
        res.redirect("/");
    }
}
module.exports = { renderIndex, addLead };