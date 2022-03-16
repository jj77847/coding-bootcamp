const mongoose = require("mongoose");

const { Genre } = require("../models");

const genres = [
  { name: "Kids" },
  { name: "Kids" },
  { name: "Kids" },
  { name: "Romance" },
  { name: "Mystery" },
  { name: "Contemporary" },
  { name: "Biography" },
];

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/departmentsDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await Genre.deleteMany({});
    await Genre.insertMany(genres);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
