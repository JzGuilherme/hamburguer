import sequelize from "./Database.js";
import { DataTypes, Model } from "sequelize";

export default class Entrega extends Model {
    static associate(models) {
        Entrega.belongsTo(models.Pedido, {
            foreignKey: 'pedido_id',
            as: 'pedido'
        });
    }
}

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
    tableName: 'entregas',
    timestamps: true
});