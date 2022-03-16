const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class Location extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  location_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "location",
};

Location.init(schema, options);

module.exports = Location;
