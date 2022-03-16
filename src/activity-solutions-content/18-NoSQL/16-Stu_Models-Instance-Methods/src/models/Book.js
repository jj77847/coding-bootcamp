const { Schema, model } = require("mongoose");

const bookSchema = {
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
};

const schema = new Schema(bookSchema);

schema.methods.getDiscount = function (discount) {
  this.price -= (this.price * discount) / 100;
  return this;
};

const Book = model("Book", schema);

module.exports = Book;
