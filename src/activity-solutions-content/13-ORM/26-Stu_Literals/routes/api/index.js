const { Router } = require('express');

const readers = require('./readers');
const cards = require('./cards');

const router = Router();

router.use('/readers', readers);
router.use('/cards', cards);

module.exports = router;
