import express from 'express';
import EntregaController from '../controllers/EntregaController.js';

const router = express.Router();

router.post('/', EntregaController.criar);
router.get('/', EntregaController.listar);
router.put('/:id', EntregaController.atualizarStatus);

export default router;