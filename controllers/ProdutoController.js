import Produto from '../models/Produto.js';

export const criar = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const listar = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

const ProdutoController = { criar, listar };
export default ProdutoController;