const { Router } = require('express');

const {
  getAllCards,
  getCardById,
  createCard,
  deleteCardById,
} = require('../../controllers/api/cards');

const router = Router();

router.get('/', getAllCards);

router.get('/:id', getCardById);

router.post('/', createCard);

router.delete('/:id', deleteCardById);

module.exports = router;
