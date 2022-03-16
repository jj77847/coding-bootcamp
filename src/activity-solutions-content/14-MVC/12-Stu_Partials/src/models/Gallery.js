const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Gallery extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  starting_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ending_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "gallery",
};

Gallery.init(schema, options);

module.exports = Gallery;
