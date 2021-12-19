const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

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
  sequelize: connection,
  timestamps: true,
  underscored: true,
  freezeTableName: true,
  modelName: 'book',
};

class Book extends Model {}

Book.init(schema, options);

module.exports = Book;
