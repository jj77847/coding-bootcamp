const { Router } = require('express');

const {
  getAllReviews,
  getReviewById,
  createReview,
} = require('../../controllers/api/reviews');

const router = Router();

router.get('/', getAllReviews);
router.get('/:reviewId', getReviewById);
router.post('/', createReview);

module.exports = router;
