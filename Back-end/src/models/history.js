'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {

        static associate(models) {
            // define association here
        }
    };
    History.init({
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        roleid: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'History',
    });
    return history;
};