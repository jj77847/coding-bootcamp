const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Dish extends Model {
  serialize() {
    return this.get({ plain: true });
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  dish_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  guest_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  has_nuts: {
    type: DataTypes.BOOLEAN,
  },
};

const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  modelName: "dish",
};

Dish.init(schema, options);

module.exports = Dish;
