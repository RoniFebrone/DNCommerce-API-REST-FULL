const express = require('express');
const router = express.Router();
const pedidoProdutoController = require('../../controllers/Pedido_ProdutoController/pedido_produtoController')

router.get('/:id', pedidoProdutoController.getPedidosProduto);

module.exports = router;