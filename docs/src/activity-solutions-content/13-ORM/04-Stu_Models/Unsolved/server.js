const express = require('express');

const connection = require('./config/connection');
const Book = require('./models/Book');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = async () => {
  try {
    await connection.sync();

    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
