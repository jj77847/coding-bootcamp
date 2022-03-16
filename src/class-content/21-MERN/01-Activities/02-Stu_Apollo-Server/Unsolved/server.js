const express = require('express');

// TODO: Add a comment describing the functionality of this expression
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// TODO: Add a comment describing the functionality of this expression
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// TODO: Add a comment describing the functionality of this method
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
