const { ApolloError } = require("apollo-server");

const { School } = require("../models");

const addSchool = async (_, { input }) => {
  const ERROR_MESSAGE = "Failed to create school";
  try {
    const school = await School.create(input);

    return school;
  } catch (error) {
    console.log(`[ERROR]: ${ERROR_MESSAGE} | ${error.message}`);
    throw new ApolloError(ERROR_MESSAGE);
  }
};

module.exports = addSchool;
