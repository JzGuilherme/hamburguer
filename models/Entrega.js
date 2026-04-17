import { DataTypes, Model } from 'sequelize';
import sequelize from './Database.js';

export default class Entrega extends Model {}

Entrega.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Entrega',
    tableName: 'entregas',
    timestamps: true
});