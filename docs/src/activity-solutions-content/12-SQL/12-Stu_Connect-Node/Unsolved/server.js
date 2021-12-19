const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'classlist_db',
};

const db = mysql.createConnection(dbOptions);

app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', function (error, data) {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: 'Something went wrong!',
      });
    } else {
      res.json({
        success: true,
        data,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
