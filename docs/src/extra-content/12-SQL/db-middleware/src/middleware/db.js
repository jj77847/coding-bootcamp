const mysql = require('mysql2');

const dbOptions = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'library_db',
};

const connection = mysql.createConnection(dbOptions);

const db = (req, res, next) => {
  req.db = connection;
  next();
};

module.exports = db;
