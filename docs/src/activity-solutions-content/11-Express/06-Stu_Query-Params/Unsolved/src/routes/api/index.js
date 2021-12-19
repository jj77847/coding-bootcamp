const { Router } = require('express');

const terms = require('./terms');
const term = require('./term');
const categories = require('./categories');

const router = Router();

router.use('/terms', terms);
router.use('/term', term);
router.use('/categories', categories);

module.exports = router;
