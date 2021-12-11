const mysql = require('mysql2');

const books = require('./data/books');

const dbOptions = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'library_db',
};

const db = mysql.createConnection(dbOptions);

const values = books
  .map(
    (book) =>
      `('${book.title}', '${book.genre}', '${book.author}', ${book.pages}, '${book.isbn}', ${book.year})`
  )
  .join(',');

const query = `INSERT INTO books(title, genre, author, pages, isbn, year) VALUE${values}`;

db.query(query, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Successfully inserted books to DB');
  db.end();
});
