const { Router } = require('express');
const { getAllTodos, getTodoById } = require('../../controllers/api/todos');

const router = Router();

router.get('/', getAllTodos);

router.get('/:id', getTodoById);

module.exports = router;
