const schools = require("./schools");
const classes = require("./classes");
const professors = require("./professors");

const resolvers = {
  Query: {
    schools,
    classes,
    professors,
  },
};

module.exports = resolvers;
