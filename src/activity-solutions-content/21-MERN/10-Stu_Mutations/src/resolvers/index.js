const schools = require("./schools");
const classes = require("./classes");
const professors = require("./professors");
const singleClass = require("./singleClass");
const addSchool = require("./addSchool");
const updateClass = require("./updateClass");

const resolvers = {
  Query: {
    schools,
    classes,
    professors,
    singleClass,
  },
  Mutation: {
    addSchool,
    updateClass,
  },
};

module.exports = resolvers;
