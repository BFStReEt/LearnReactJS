'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {

        static associate(models) {
            // define association here
        }
    };
    Allcode.init({
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        value_en: DataTypes.STRING,
        value_vi: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};