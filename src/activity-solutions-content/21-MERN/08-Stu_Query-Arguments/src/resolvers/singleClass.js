const { ApolloError } = require("apollo-server");
const { Class } = require("../models");

const ERROR_MESSAGE = "Failed to get single class";

const singleClass = async (_, args) => {
  try {
    const { classId } = args;

    const newClass = await Class.findById(classId).populate("professor");

    return newClass;
  } catch (error) {
    console.log(`[ERROR]: ${ERROR_MESSAGE} | ${error.message}`);
    throw new ApolloError(ERROR_MESSAGE);
  }
};

module.exports = singleClass;
