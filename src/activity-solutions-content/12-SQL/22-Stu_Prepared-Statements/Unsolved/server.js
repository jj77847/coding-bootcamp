const express = require('express');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'books_db',
};

const db = mysql.createConnection(dbOptions);

db.query('DELETE FROM favorite_books WHERE id = 2', (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

db.query('SELECT * FROM favorite_books', (err, results) => {
  if (err) {
    console.log(err);
  }
  printTable(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
