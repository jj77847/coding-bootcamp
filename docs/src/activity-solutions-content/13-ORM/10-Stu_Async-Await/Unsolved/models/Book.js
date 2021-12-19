const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Book extends Model {}

const schema = {
  book_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
  is_paperback: {
    type: DataTypes.BOOLEAN,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'book',
};

Book.init(schema, options);

module.exports = Book;
