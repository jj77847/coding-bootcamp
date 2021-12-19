const Book = require('../../models/Book');

const cleanupPayload = (payload) => {
  const editableFields = [
    'title',
    'author',
    'isbn',
    'pages',
    'edition',
    'is_paperback',
  ];

  // go through payload and check if each field exists in editableFields

  return Object.entries(payload).reduce((acc, [key, value]) => {
    if (editableFields.includes(key)) {
      return {
        ...acc,
        [key]: value,
      };
    }

    return acc;
  }, {});
};

const getBooks = async (req, res) => {
  try {
    // get all books from DB
    const books = await Book.findAll();

    // send the books in the response
    return res.json(books);
  } catch (error) {
    console.log(`[ERROR]: Failed to get books | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getPaperbacks = async (req, res) => {
  try {
    // get all books from DB for certain conditions
    const books = await Book.findAll({
      where: {
        is_paperback: true,
      },
      order: ['title'],
      attributes: {
        exclude: ['is_paperback', 'edition'],
      },
    });

    // send the books in the response
    return res.json(books);
  } catch (error) {
    console.log(`[ERROR]: Failed to get paperback books | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    // get a specific book using the book id
    const book = await Book.findByPk(req.params.id);

    if (book) {
      // send the books in the response
      return res.json(book);
    }

    return res
      .status(404)
      .json({ success: false, message: 'Book does not exist' });
  } catch (error) {
    console.log(`[ERROR]: Failed to get book by id | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    // get new book data from request body
    const book = req.body;

    // insert book in the DB
    const newBook = await Book.create(book);

    // send response
    return res.json(newBook);
  } catch (error) {
    console.log(`[ERROR]: Failed to create book | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateBookById = async (req, res) => {
  try {
    // get the fields to update from the req body
    const payload = cleanupPayload(req.body);

    console.log(req.body);
    console.log(payload);

    // validate payload
    if (Object.keys(payload).length) {
      // update the book in the DB
      await Book.update(payload, {
        where: {
          book_id: req.params.id,
        },
      });

      // send response
      return res.json({ success: true });
    }

    // send the bad request response
    return res
      .status(400)
      .json({ success: false, error: 'Please provide a valid payload' });
  } catch (error) {
    console.log(`[ERROR]: Failed to update book | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteBookById = async (req, res) => {
  try {
    // delete the book by id from DB
    await Book.destroy({
      where: {
        book_id: req.params.id,
      },
    });

    // send response
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete book | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getBooks,
  getPaperbacks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
