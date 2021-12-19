const { Router } = require('express');

const reviews = require('./reviews');
const upvotes = require('./upvotes');

const router = Router();

router.use('/reviews', reviews);
router.use('/upvotes', upvotes);

module.exports = router;
