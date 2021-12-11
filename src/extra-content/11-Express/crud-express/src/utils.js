const fs = require('fs');
const path = require('path');

const getBooksFromFile = () => {
  const booksJSON = fs.readFileSync(
    path.join(__dirname, '/db/books.json'),
    'utf-8'
  );

  const books = JSON.parse(booksJSON);

  return books;
};

const writeBooksToFile = (data) => {
  fs.writeFileSync(path.join(__dirname, '/db/books.json'), data);
};

module.exports = {
  getBooksFromFile,
  writeBooksToFile,
};
