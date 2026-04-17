import Avaliacao from '../models/Avaliacao.js';

export const criar = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.create(req.body);
        res.status(201).json(avaliacao);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const listar = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.findAll();
        res.status(200).json(avaliacoes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

const AvaliacaoController = { criar, listar };
export default AvaliacaoController;