const router = require('express').Router();

const {
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../../controllers/api/users');

router.get('/:id', getUserById);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

module.exports = router;
