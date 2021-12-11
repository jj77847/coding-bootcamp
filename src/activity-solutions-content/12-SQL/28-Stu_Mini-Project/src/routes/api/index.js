const { Router } = require('express');

const movies = require('./movies');
const reviews = require('./reviews');

const router = Router();

router.use('/movies', movies);
router.use('/movies/:movieId/reviews', reviews);

module.exports = router;
