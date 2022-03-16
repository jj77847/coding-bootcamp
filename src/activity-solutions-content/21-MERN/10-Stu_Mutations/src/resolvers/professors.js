const { Professor } = require("../models");

const professors = async () => {
  return await Professor.find({}).populate("classes");
};

module.exports = professors;
