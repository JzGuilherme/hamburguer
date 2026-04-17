import express from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController.js';

const router = express.Router();

router.post('/', AvaliacaoController.criar);
router.get('/', AvaliacaoController.listar);
router.get('/:id', AvaliacaoController.findById);
router.put('/:id', AvaliacaoController.update);
router.delete('/:id', AvaliacaoController.remove);

export default router;