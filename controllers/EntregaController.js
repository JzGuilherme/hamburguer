import Entrega from '../models/Entrega.js';

export const criar = async (req, res) => {
    try {
        const entrega = await Entrega.create(req.body);
        res.status(201).json(entrega);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const listar = async (req, res) => {
    try {
        const entregas = await Entrega.findAll();
        res.status(200).json(entregas);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const atualizarStatus = async (req, res) => {
    try {
        const entrega = await Entrega.findByPk(req.params.id);
        if (!entrega) return res.status(404).json({ erro: 'Entrega não encontrada' });
        await entrega.update(req.body);
        res.status(200).json(entrega);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

const EntregaController = { criar, listar, atualizarStatus };
export default EntregaController;