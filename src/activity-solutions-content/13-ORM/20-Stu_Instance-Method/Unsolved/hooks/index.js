const bcrypt = require('bcrypt');

const beforeCreateUser = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
};

const beforeUpdateUser = async (user, { fields }) => {
  if (fields.includes('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  return user;
};

module.exports = { beforeCreateUser, beforeUpdateUser };
