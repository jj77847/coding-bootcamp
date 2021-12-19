const router = require('express').Router();

const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../../controllers/api/users');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

module.exports = router;
