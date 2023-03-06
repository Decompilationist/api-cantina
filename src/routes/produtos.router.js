const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos.controller');

router.get('/', produtosController.pegaTodosProdutos)
router.get('/:categoria', produtosController.pegaProdutoCategoria);
router.post('/', produtosController.insereProduto);

module.exports = router;