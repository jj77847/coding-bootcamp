const schools = require("./schools");
const classes = require("./classes");
const professors = require("./professors");
const singleClass = require("./singleClass");

const resolvers = {
  Query: {
    schools,
    classes,
    professors,
    singleClass,
  },
};

module.exports = resolvers;
