const { Schema, model } = require("mongoose");

// define the schema object
const bookSchema = {
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
};

// create a new instance of the schema
const schema = new Schema(bookSchema);

// initialise the model will create the collection in the db
const Book = model("Book", schema);

module.exports = Book;
