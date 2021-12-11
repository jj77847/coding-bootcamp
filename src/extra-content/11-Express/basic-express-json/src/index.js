const express = require('express');

const PORT = 4000;

const app = express();

const getUsers = (req, res) => {
  const users = [
    {
      firstName: null,
      lastName: 'Smith',
      email: 'bob.smith@email.com',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
    },
  ];

  res.json({
    data: users,
  });
};

const getBooks = (req, res) => {
  const books = [
    {
      title: 'ABC',
      author: 'AAA',
      pages: 45678,
    },
    {
      title: 'XYY',
      author: 'ZZZ',
      pages: 43,
    },
  ];

  res.json({
    data: books,
  });
};

app.get('/users', getUsers);

app.get('/books', getBooks);

app.listen(PORT, () =>
  console.log(`🚀🚀 Server running on http://localhost:${PORT}`)
);
