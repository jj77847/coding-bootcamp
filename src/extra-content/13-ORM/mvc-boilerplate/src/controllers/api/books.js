const { Book } = require('../../models');

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get books - ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (book) {
      return res.json({
        success: true,
        data: book,
      });
    }
    return res.status(404).json({
      success: false,
      error: 'Book not found',
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get book - ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pages, isbn, edition, isPaperback } = req.body;

    const newBook = await Book.create({
      title,
      author,
      pages,
      isbn,
      edition,
      isPaperback,
    });

    return res.json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create book - ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pages, isbn, edition, isPaperback } = req.body;

    await Book.update(
      {
        title,
        author,
        pages,
        isbn,
        edition,
        isPaperback,
      },
      {
        where: {
          id,
        },
      }
    );

    const newBook = await Book.findByPk(id);

    return res.json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to update book - ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({
      where: {
        id,
      },
    });
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete book - ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
};
