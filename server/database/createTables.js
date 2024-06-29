const tableProject = `
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proj_name VARCHAR(255) NOT NULL
)
`;

const tableLeads = `
CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_name VARCHAR(255) NOT NULL,
    lead_email VARCHAR(255) NOT NULL,
    lead_phone VARCHAR(255) NOT NULL,
    lead_comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    origem VARCHAR(255) NOT NULL,
    lead_proj INT,
    FOREIGN KEY (lead_proj) REFERENCES projects(id)
)
`;

const createAllTables = async (connection) => {
    try {
        await connection.execute(tableProject);
        console.log(`TABELA PROJETOS ===> PRONTA`);
        
        await connection.execute(tableLeads);
        console.log(`TABELA LEADS ===> PRONTA`);
    } catch (error) {
        console.log(`ERRO AO CRIAR TABELAS ===> ${error}`);
    }
};

module.exports = { createAllTables };
