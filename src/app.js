const express = require ('express');
const app = express();
const bodyParser= require('body-parser');
const clientesRoute = require('./routes/ClientesRoute/clientesRoute')
const produtosRoute = require('./routes/ProdutosRoute/produtosRoute') 
const estoqueRoute = require('./routes/EstoqueRoute/estoqueRoute')
const pedidosRoute = require('./routes/PedidosRoute/pedidosRoute')
const pedido_produtoRoute = require('./routes/Pedido_ProdutoRoute/pedido_produtoRoute')
const vendasRoute = require('./routes/VendasRoute/vendasRoute')
const cors = require('cors');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use('/clientes', clientesRoute)
app.use('/produtos', produtosRoute) 
app.use('/estoque', estoqueRoute)
app.use('/pedidos', pedidosRoute)
app.use('/pp', pedido_produtoRoute)
app.use('/vendas', vendasRoute)

module.exports = app;