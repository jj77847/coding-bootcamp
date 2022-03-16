const { Class } = require("../models");

const classes = async () => {
  return await Class.find({});
};

module.exports = classes;
