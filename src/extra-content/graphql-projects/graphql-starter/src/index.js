const { ApolloServer, gql } = require('apollo-server');

const booksFromDB = [
  {
    id: '111',
    title: 'Book 1',
    pages: 100,
    author: {
      firstName: 'Bob',
      lastName: 'Smith',
    },
  },
  {
    id: '222',
    title: 'Book 2',
    pages: 100,
    author: {
      firstName: 'Bob',
      lastName: 'Smith',
    },
  },
  {
    id: '333',
    title: 'Book 3',
    pages: 100,
    author: {
      firstName: 'Dan',
      lastName: 'Smith',
    },
  },
  {
    id: '444',
    title: 'Book 4',
    pages: 100,
    author: {
      firstName: 'Jane',
      lastName: 'Smith',
    },
  },
];

const authorsFromDB = [
  {
    firstName: 'Bob',
    lastName: 'Smith',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
  },
  {
    firstName: 'Dan',
    lastName: 'Smith',
  },
];

// Step 1: Define schema or type definitions
const typeDefs = gql`
  type Author {
    firstName: String
    lastName: String
  }

  type Book {
    id: ID
    title: String
    author: Author
  }

  type Query {
    # all your queries here
    books: [Book]
    authors: [Author]
  }
`;

// Step 2: Define your resolvers
const booksResolver = () => {
  // return value should respect schema
  return booksFromDB;
};

const authorsResolver = () => {
  // return value should respect schema
  return authorsFromDB;
};

const resolvers = {
  Query: {
    books: booksResolver,
    authors: authorsResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
