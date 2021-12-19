const { Router } = require('express');

const {
  getBooks,
  getPaperbacks,
  getBookById,
  createBook,
  seedBooks,
  updateBookById,
  deleteBookById,
} = require('../../controllers/api/books');

const router = Router();

router.get('/', getBooks);

// TODO: Add a comment describing the purpose of this route
router.get('/paperbacks', getPaperbacks);

// TODO: Add a comment describing the purpose of this route
router.get('/:id', getBookById);

// CREATE a book
router.post('/', createBook);

// CREATE multiple books
router.post('/seed', seedBooks);

router.put('/:id', updateBookById);

router.delete('/:id', deleteBookById);

module.exports = router;
