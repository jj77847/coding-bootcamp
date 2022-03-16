const bcrypt = require('bcrypt');

const hashPassword = async (data) => {
  console.log(data.password);
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(hashedPassword);
  data.password = hashedPassword;

  return data;
};

module.exports = hashPassword;
