const users = require("./users");
const projects = require("./projects");
const connection = require("../config/connection");
const User = require("../models/User");
const Project = require("../models/Project");

const seedAll = async () => {
  try {
    await connection.sync({ force: true });

    console.log("DB sync successful");

    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log("Users seeded successful");

    await Project.bulkCreate(projects);

    console.log("Projects seeded successful");
  } catch (error) {
    console.log(`[ERROR]: Seed failed | ${error.message}`);
  }

  process.exit(0);
};

seedAll();
