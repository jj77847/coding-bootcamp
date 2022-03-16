const { Schema, model } = require("mongoose");

// sub document
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// parent document
const librarySchema = {
  name: {
    type: String,
    required: true,
  },
  lastAccessed: { type: Date, default: Date.now },
  books: [bookSchema],
};

const schema = new Schema(librarySchema);

const Library = model("Library", schema);

module.exports = Library;
