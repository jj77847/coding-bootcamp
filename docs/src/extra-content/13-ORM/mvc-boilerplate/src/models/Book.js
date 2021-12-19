const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Book extends Model {}

const schema = {
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  isbn: {
    type: DataTypes.STRING,
  },
  pages: {
    type: DataTypes.INTEGER,
  },
  edition: {
    type: DataTypes.INTEGER,
  },
  isPaperback: {
    type: DataTypes.BOOLEAN,
  },
};

const options = {
  sequelize,
  timestamps: false,
  underscored: false,
  modelName: 'book',
};

Book.init(schema, options);

module.exports = Book;
