const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,

  formatError: (error) => error,

  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at http://localhost:4000/graphql
  `);
});
