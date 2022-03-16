const mongoose = require("mongoose");

const { Book } = require("../models");

const books = [
  {
    title: "Book 1",
    author: "Author 1",
    price: 10,
  },
  {
    title: "Book 2",
    author: "Author 2",
    price: 20,
  },
  {
    title: "Book 3",
    author: "Author 3",
    price: 30,
  },
  {
    title: "Book 4",
    author: "Author 4",
    price: 40,
  },
  {
    title: "Book 5",
    author: "Author 5",
    price: 50,
  },
];

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/libraryDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await Book.deleteMany({});
    await Book.insertMany(books);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
