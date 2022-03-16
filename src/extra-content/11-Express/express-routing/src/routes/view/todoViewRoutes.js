const { Router } = require('express');
const { renderTodos } = require('../../controllers/view/render');

const router = Router();

router.get('/', renderTodos);

module.exports = router;
