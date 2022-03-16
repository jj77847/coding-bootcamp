const { Router } = require('express');

const {
  getAllReaders,
  getReaderById,
  createReader,
  deleteReaderById,
} = require('../../controllers/api/readers');

const router = Router();

router.get('/', getAllReaders);

router.get('/:id', getReaderById);

router.post('/', createReader);

router.delete('/:id', deleteReaderById);

module.exports = router;
