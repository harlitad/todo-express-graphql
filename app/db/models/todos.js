"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class todos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            
        }
    }
    todos.init(
        {
            title: DataTypes.TEXT,
            description: DataTypes.TEXT,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "todos",
            paranoid: true,
        }
    );
    return todos;
};
