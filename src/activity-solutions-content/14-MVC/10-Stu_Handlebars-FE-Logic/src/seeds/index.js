const sequelize = require("../config/connection");
const Dish = require("../models/Dish");
const dishesData = require("./dish-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log("DB sync successful");

  await Dish.bulkCreate(dishesData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Dishes seed successful");

  process.exit(0);
};

seedDatabase();
