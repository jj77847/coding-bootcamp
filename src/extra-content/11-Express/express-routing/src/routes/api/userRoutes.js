const { Router } = require('express');
const { getAllUsers, getUserById } = require('../../controllers/api/users');

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

module.exports = router;
