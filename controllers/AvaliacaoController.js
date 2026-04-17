import Avaliacao from '../models/Avaliacao.js';
import Pedido from '../models/Pedido.js';
import { ValidationError } from 'sequelize';

const handleValidation = (error) => {
    if (error instanceof ValidationError) {
        const messages = error.errors.map((err) => err.message);
        return { status: 400, body: { erro: messages.join(', ') } };
    }
    return { status: 500, body: { erro: error.message } };
};

export const criar = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.create(req.body);
        res.status(201).json(avaliacao);
    } catch (error) {
        const response = handleValidation(error);
        res.status(response.status).json(response.body);
    }
};

export const listar = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.findAll({
            include: [{ model: Pedido, as: 'pedido' }]
        });
        res.status(200).json(avaliacoes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const findById = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id, {
            include: [{ model: Pedido, as: 'pedido' }]
        });
        if (!avaliacao) {
            return res.status(404).json({ erro: 'Avaliação não encontrada' });
        }
        res.status(200).json(avaliacao);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ erro: 'Avaliação não encontrada' });
        }
        await avaliacao.update(req.body);
        res.status(200).json(avaliacao);
    } catch (error) {
        const response = handleValidation(error);
        res.status(response.status).json(response.body);
    }
};

export const remove = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ erro: 'Avaliação não encontrada' });
        }
        await avaliacao.destroy();
        res.status(200).json({ message: 'Avaliação excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

const AvaliacaoController = { criar, listar, findById, update, remove };
export default AvaliacaoController;