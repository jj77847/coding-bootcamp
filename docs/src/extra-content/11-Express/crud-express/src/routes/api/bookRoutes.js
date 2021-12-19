const { Router } = require('express');
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../../controllers/api/book');

const router = Router();

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post('/', addBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;
