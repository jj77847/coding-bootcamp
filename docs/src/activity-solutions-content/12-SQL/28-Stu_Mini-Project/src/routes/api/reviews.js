const { Router } = require('express');

const {
  getReviews,
  createReview,
  updateReviewById,
  deleteReviewById,
} = require('../../controllers/api/reviews');

const router = Router({ mergeParams: true });

router.get('/', getReviews);
router.post('/', createReview);
router.put('/:reviewId', updateReviewById);
router.delete('/:reviewId', deleteReviewById);

module.exports = router;
