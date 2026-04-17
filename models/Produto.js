import { DataTypes, Model } from 'sequelize';
import sequelize from './Database.js';

export default class Produto extends Model {}

Produto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produtos',
    timestamps: true
});