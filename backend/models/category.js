const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

class Category extends Model{
}

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {sequelize,
    modelName: 'Category'
});

Category.associate = (models) => {
    Category.hasMany(models.Transaction);
    Category.belongsTo(models.User);
}

module.exports = Category;