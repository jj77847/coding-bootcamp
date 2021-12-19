const { Router } = require('express');

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
} = require('../../controllers/api/books');

const router = Router();

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post('/', createBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBookById);

module.exports = router;
