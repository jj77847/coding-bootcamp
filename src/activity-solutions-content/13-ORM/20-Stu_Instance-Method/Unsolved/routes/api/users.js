const { Router } = require('express');

const {
  getUserById,
  createUser,
  updateUserById,
  login,
} = require('../../controllers/api/users.js');

const router = Router();

// GET one user
router.get('/:id', getUserById);

// POST create a new user
router.post('/', createUser);

// PUT update a user
router.put('/:id', updateUserById);

// POST user login route
router.post('/login', login);

module.exports = router;
