import express from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController.js';

const router = express.Router();

router.post('/', AvaliacaoController.criar);
router.get('/', AvaliacaoController.listar);

export default router;