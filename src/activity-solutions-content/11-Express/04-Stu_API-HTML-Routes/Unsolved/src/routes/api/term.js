const { Router } = require('express');

const { getTerms } = require('../../controllers/api/term');

const router = Router();

router.get('/', getTerms);

module.exports = router;
