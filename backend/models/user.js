const { Model, DataTypes } = require('sequelize');
const validator = require('validator');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User extends Model {
    // gets categories made by user
    async userCategories() {
        return await this.getCategories({
            order: [['createdAt', 'DESC']]
        })
    }

    getJwToken() {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_TIME
        });
    }

    async comparePassword(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    }
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your name'
            },
            len: {
                args: [0, 255],
                msg: 'Name should not exceed 255 characters'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Please enter a valid email'
            },
            notEmpty: {
                msg: 'Please enter email to proceed.'
            }
        }
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your name',
            },
            len: {
                args: [0, 255],
                msg: 'Your bio cannot exceed 255 characters'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your password'
            },
            len: {
                args: [8, undefined],
                msg: 'Your password must be longer than 8 characters'
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, 10) // determines computation complexity of hashing higher means secure
            }
        }
    }
});

User.associate = (models) => {
    User.hasMany(models.Category);
    User.hasMany(models.Transaction, {foreignKey: 'author_id', sourceKey: 'id'});
}

module.exports = User;