const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const connection = require('../config/connection');
const { beforeCreateUser, beforeUpdateUser } = require('../hooks');

class User extends Model {
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);
    return isValid;
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
};

const options = {
  hooks: {
    beforeCreate: beforeCreateUser,
    beforeUpdate: beforeUpdateUser,
  },
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
};

User.init(schema, options);

module.exports = User;
