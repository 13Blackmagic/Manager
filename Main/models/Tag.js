// Description: This file contains the model for the Tag table, which is used to store the tags for each post.
const { Model, DataTypes } = require('sequelize');
// Description: This file imports the connection to the database from the config/connection.js file.
const sequelize = require('../config/connection.js');
// Description: This file creates the Tag model.
class Tag extends Model {}
// Description: This file creates the fields/columns for the Tag model.
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// Description: This file exports the Tag model.
module.exports = Tag;
