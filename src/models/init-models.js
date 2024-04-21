var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./Clientes/clientes");
var _estoque = require("./Estoque/estoque");
var _pedido_produto = require("./Pedido_Produto/pedido_produto");
var _pedidos = require("./Pedidos/pedidos");
var _produtos = require("./Produtos/produtos");
var _vendas = require("./Vendas/vendas");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var estoque = _estoque(sequelize, DataTypes);
  var pedido_produto = _pedido_produto(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);
  var produtos = _produtos(sequelize, DataTypes);
  var vendas = _vendas(sequelize, DataTypes);

  pedidos.belongsToMany(produtos, { as: 'IdProduto_produtos', through: pedido_produto, foreignKey: "IdPedido", otherKey: "IdProduto" });
  produtos.belongsToMany(pedidos, { as: 'IdPedido_pedidos', through: pedido_produto, foreignKey: "IdProduto", otherKey: "IdPedido" });
  pedidos.belongsTo(clientes, { as: "IdCliente_cliente", foreignKey: "IdCliente"});
  clientes.hasMany(pedidos, { as: "pedidos", foreignKey: "IdCliente"});
  pedido_produto.belongsTo(pedidos, { as: "IdPedido_pedido", foreignKey: "IdPedido"});
  pedidos.hasMany(pedido_produto, { as: "pedido_produtos", foreignKey: "IdPedido"});
  vendas.belongsTo(pedidos, { as: "IdPedido_pedido", foreignKey: "IdPedido"});
  pedidos.hasMany(vendas, { as: "vendas", foreignKey: "IdPedido"});
  estoque.belongsTo(produtos, { as: "IdProduto_produto", foreignKey: "IdProduto"});
  produtos.hasOne(estoque, { as: "estoque", foreignKey: "IdProduto"});
  pedido_produto.belongsTo(produtos, { as: "IdProduto_produto", foreignKey: "IdProduto"});
  produtos.hasMany(pedido_produto, { as: "pedido_produtos", foreignKey: "IdProduto"});

  return {
    clientes,
    estoque,
    pedido_produto,
    pedidos,
    produtos,
    vendas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
