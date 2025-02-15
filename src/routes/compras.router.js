const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras.controller');
const { verificaUsuario } = require('../middleware/auth.middleware');

// Rota de pegar todas as compras
router.get("/", verificaUsuario, comprasController.listarCompras);

// Rota para listar todas as compras de um cliente específico
router.get('/:id', verificaUsuario, comprasController.listarComprasPorUsuario);

// Rota de criar nova compra
router.post('/', verificaUsuario, comprasController.criarCompra);

// Rota de alterar a compra
router.put('/:id', verificaUsuario, comprasController.editarCompra);

// Rota de excluir a compra
router.delete('/:id', verificaUsuario, comprasController.excluirCompra);

// Excluir todas as compras de um único cliente
router.delete('/cliente/:numero', comprasController.excluirComprasPorCliente);

module.exports = router;