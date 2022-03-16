const bcrypt = require("bcrypt");

const hashPassword = async (newUserData) => {
  newUserData.password = await bcrypt.hash(newUserData.password, 10);
  return newUserData;
};

module.exports = { hashPassword };
