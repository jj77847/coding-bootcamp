const { Book } = require("../models");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    return res.json({ success: true, data: books });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all books | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = { getAllBooks };
