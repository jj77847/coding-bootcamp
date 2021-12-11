const getBooks = (req, res) => {
  const { db } = req;

  db.query(`SELECT * FROM books`, (err, records) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false });
    }

    return res.json({ books: records });
  });
};

const getBookById = (req, res) => {
  const {
    db,
    params: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ success: false });
  }

  db.query(`SELECT * FROM books WHERE id="${id}"`, (err, records) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false });
    }

    return res.json({ books: records });
  });
};

const createBook = (req, res) => {
  const {
    db,
    body: { title, isbn, pages, author, genre, year },
  } = req;

  if (title && isbn && pages && author && genre && year) {
    const query = `INSERT INTO books(title, genre, author, pages, isbn, year) VALUE('${title}', '${genre}', '${author}', ${pages}, '${isbn}', ${year})`;
    return db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    });
  }

  return res.status(400).json({ success: false });
};

const updateBookById = (req, res) => {
  const {
    db,
    params: { id },
    body: { title, isbn, pages, author, genre, year },
  } = req;

  if (!id) {
    return res.status(400).json({ success: false });
  }

  const query = `UPDATE books SET title = '${title}', genre = '${genre}', author = '${author}', pages = ${pages}, isbn = '${isbn}', year = ${year} WHERE id=${id}`;

  db.query(query, (err, records) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false });
    }

    return res.json({ success: true });
  });
};

const deleteBookById = (req, res) => {
  const {
    db,
    params: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ success: false });
  }

  db.query(`DELETE FROM books WHERE id="${id}"`, (err, records) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false });
    }

    return res.json({ success: true });
  });
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
