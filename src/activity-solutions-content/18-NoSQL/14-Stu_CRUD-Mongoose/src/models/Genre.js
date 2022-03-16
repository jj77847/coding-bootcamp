const { Schema, model } = require("mongoose");

const genreSchema = {
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
};

const schema = new Schema(genreSchema);

const Genre = model("Genre", schema);

module.exports = Genre;
