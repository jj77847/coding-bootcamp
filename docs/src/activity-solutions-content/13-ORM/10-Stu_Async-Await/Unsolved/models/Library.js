const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Library extends Model {}

const schema = {
  location_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  amount_of_books: {
    type: DataTypes.INTEGER,
  },
  book_capacity: {
    type: DataTypes.INTEGER,
  },
  year_built: {
    type: DataTypes.INTEGER,
  },
  is_accessible: {
    type: DataTypes.BOOLEAN,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'library',
};

Library.init(schema, options);

module.exports = Library;
