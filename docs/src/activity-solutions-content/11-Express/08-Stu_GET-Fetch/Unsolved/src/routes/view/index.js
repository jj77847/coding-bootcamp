const { Router } = require('express');

const { renderHome } = require('../../controllers/view/render');

const router = Router();

router.get('/', renderHome);

module.exports = router;
