const mongoose = require("mongoose");

const { Library } = require("../models");

const libraries = [
  {
    name: "Library 1",
    books: [
      {
        title: "Book 1",
        price: 10,
      },
      {
        title: "Book 2",
        price: 20,
      },
    ],
  },
  {
    name: "Library 2",
    books: [
      {
        title: "Book 1",
        price: 10,
      },
      {
        title: "Book 2",
        price: 20,
      },
      {
        title: "Book 3",
        price: 30,
      },
      {
        title: "Book 4",
        price: 40,
      },
      {
        title: "Book 5",
        price: 50,
      },
    ],
  },
];

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/libraryDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await Library.deleteMany({});
    await Library.insertMany(libraries);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
