const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log("DB sync successful");

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Users seed successful");

  process.exit(0);
};

seedDatabase();
