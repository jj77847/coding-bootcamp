const mongoose = require("mongoose");
const { Book } = require("../models");

const books = [
  {
    title: "Diary of Anne Frank",
    author: "Anne Frank",
    publisher: "Scholastic",
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  { title: "Oh the Places You Will Go!", author: "Dr. Seuss" },
  { title: "Harold and the Purple Crayon" },
];

const init = async () => {
  try {
    // from the new instance of the client use the connect method to establish a connection
    await mongoose.connect("mongodb://localhost:27017/myfirstmongooseapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO]: Database connection successful");

    await Book.insertMany(books);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
