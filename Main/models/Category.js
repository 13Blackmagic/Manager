// Purpose: To create the Category model for the database
const { Model, DataTypes } = require('sequelize');
// import the connection to the database from config/connection.js
const sequelize = require('../config/connection.js');
// create our Category model
class Category extends Model {}
// create fields/columns for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// export the Category model
module.exports = Category;
