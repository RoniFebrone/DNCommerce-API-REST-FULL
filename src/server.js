
const app = require('./app');
const sequelize = require('../config/mysql'); 

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados com sucesso');
        
        app.listen(PORT, () => {
            console.log(`Servidor iniciado na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Falha ao conectar ao banco de dados:', error);
    });
