require('dotenv').config();
const Sequelize = require('sequelize')
const variableDbName = process.env.DB_NAME;
const variableDbHost = process.env.DB_HOST;
const variableDbUser = process.env.DB_USER;
const variableDbPassword = process.env.DB_PASSWORD;


const sequelize = new Sequelize(variableDbName, variableDbUser, variableDbPassword, {
    host: variableDbHost,
    dialect: "mysql"
});

const EstoqueModel = require('../src/models/Estoque/estoque')(sequelize, Sequelize.DataTypes);

sequelize.models.estoque = EstoqueModel;


sequelize.authenticate().then(function () {
    console.log("Conectardo com sucesso!")
}).catch(function (erro) {
    console.log(" Falha ao se conectar: " + erro)
})

module.exports = sequelize;


