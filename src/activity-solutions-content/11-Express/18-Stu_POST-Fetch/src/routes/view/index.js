const { Router } = require('express');

const { renderPage } = require('../../controllers/view');

const router = Router();

router.get('/', renderPage);

module.exports = router;
