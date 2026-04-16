import sequelize from "./Database.js";
import { DataTypes, Model } from "sequelize";

export default class Avaliacao extends Model {
    static associate(models) {
        Avaliacao.belongsTo(models.Pedido, {
            foreignKey: 'pedido_id',
            as: 'pedido'
        });
    }
}

Avaliacao.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: { args: [1], msg: 'A nota mínima é 1' },
            max: { args: [5], msg: 'A nota máxima é 5' }
        }
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Avaliacao',
    tableName: 'avaliacoes',
    timestamps: true,
    paranoid: true
});