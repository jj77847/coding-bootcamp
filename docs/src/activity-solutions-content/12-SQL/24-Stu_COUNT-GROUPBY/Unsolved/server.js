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

db.query(
  'SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock',
  (err, results) => {
    if (err) {
      console.log(err);
    }
    printTable(results);
  }
);

db.query(
  'SELECT section, COUNT(quantity) AS total, SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section',
  (err, results) => {
    if (err) {
      console.log(err);
    }
    printTable(results);
  }
);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
