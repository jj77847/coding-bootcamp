const { Class } = require("../models");

const classes = async () => {
  return await Class.find({}).populate("professor");
};

module.exports = classes;
