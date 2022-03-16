const { Router } = require('express');

const { getTerm } = require('../../controllers/api/term');

const router = Router();

router.get('/:term', getTerm);

module.exports = router;
