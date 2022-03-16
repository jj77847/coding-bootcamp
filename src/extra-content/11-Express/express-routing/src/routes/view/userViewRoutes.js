const { Router } = require('express');
const { renderUsers } = require('../../controllers/view/render');

const router = Router();

router.get('/', renderUsers);

module.exports = router;
