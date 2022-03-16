const { ApolloError } = require("apollo-server");

const { Class } = require("../models");

const updateClass = async (_, { input }) => {
  const ERROR_MESSAGE = "Failed to update class";

  try {
    const { _id } = input;
    const newClass = await Class.findByIdAndUpdate(
      _id,
      {
        $set: input,
      },
      { new: true }
    ).populate("professor");

    return newClass;
  } catch (error) {
    console.log(`[ERROR]: ${ERROR_MESSAGE} | ${error.message}`);
    throw new ApolloError(ERROR_MESSAGE);
  }
};

module.exports = updateClass;
