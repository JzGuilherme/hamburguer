import express from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = express.Router();

router.post('/', ProdutoController.criar);
router.get('/', ProdutoController.listar);

export default router;