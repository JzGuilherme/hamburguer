import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();

router.get('/', ProdutoController.listar);
router.post('/', ProdutoController.criar);
router.get('/:id', ProdutoController.obterPorId);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

export default router;