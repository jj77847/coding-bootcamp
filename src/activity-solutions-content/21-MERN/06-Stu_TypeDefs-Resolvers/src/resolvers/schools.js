const { School } = require("../models");

const schools = async () => {
  return await School.find({}).populate("classes").populate({
    path: "classes",
    populate: "professor",
  });
};

module.exports = schools;
