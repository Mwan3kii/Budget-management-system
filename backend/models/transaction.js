const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Transaction extends Model {
    // Handle logic functions here
}

Transaction.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories',  
            key: 'id'             
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
}, {sequelize,
    modelName: 'Transaction'
});

Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});
    Transaction.belongsTo(models.Category);
}

module.exports = Transaction;