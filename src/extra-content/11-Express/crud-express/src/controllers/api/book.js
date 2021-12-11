const { v4: uuidv4 } = require('uuid');

const { getBooksFromFile, writeBooksToFile } = require('../../utils');

const validKeys = ['title', 'author', 'pages'];

const getBooks = (req, res) => {
  const books = getBooksFromFile();

  res.json(books);
};

const getBookById = (req, res) => {
  const { id } = req.params;

  const books = getBooksFromFile();

  const book = books.find((book) => book.id === id);

  if (book) {
    return res.json(book);
  }

  return res.status(404).json({
    message: `No book with id: ${id}`,
  });
};

const addBook = (req, res) => {
  const payload = req.body;

  const isValid = validKeys.every((key) => Object.keys(payload).includes(key));

  if (isValid) {
    const newBook = {
      id: uuidv4(),
      ...payload,
    };

    const books = getBooksFromFile();

    books.push(newBook);

    writeBooksToFile(JSON.stringify(books));

    return res.json(newBook);
  }

  return res.status(400).json({ message: 'Please read our documentation' });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const isValid = Object.keys(payload).every((key) => validKeys.includes(key));

  if (isValid) {
    const books = getBooksFromFile();

    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return res.status(404).json({
        message: `No book with id: ${id}`,
      });
    }

    Object.entries(payload).forEach(([key, value]) => {
      books[bookIndex][key] = value;
    });

    writeBooksToFile(JSON.stringify(books));

    return res.json(books[bookIndex]);
  }

  return res.status(400).json({ message: 'Please read our documentation' });
};

const deleteBook = (req, res) => {
  const { id } = req.params;

  const books = getBooksFromFile();

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: `No book with id: ${id}`,
    });
  }

  const newBooks = books.filter((book) => book.id !== id);

  writeBooksToFile(JSON.stringify(newBooks));

  return res.json(newBooks);
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
