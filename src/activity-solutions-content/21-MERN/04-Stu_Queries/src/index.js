const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const init = async () => {
  try {
    const mongoDbUrl =
      process.env.MONGODB_URI || "mongodb://localhost:27017/schools-db";

    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { url } = await server.listen();
    console.log(`Server running on ${url}`);
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
