const reviews = require('../../db/reviews');

const getUpvotesByReviewId = (req, res) => {
  console.info(`${req.method} request received to get upvotes for a review`);

  const { reviewId } = req.params;

  if (reviewId) {
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];

      if (currentReview.review_id === reviewId) {
        return res.json({
          message: `The review with ID ${currentReview.review_id} has ${currentReview.upvotes}`,
          upvotes: currentReview.upvotes,
        });
      }
    }
  }

  return res.json('Review ID not found');
};

const createUpvotesByReviewId = (req, res) => {
  console.info(`${req.method} request received to upvote a review`);

  const { reviewId } = req.params;

  if (reviewId) {
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];

      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        return res.json(`New upvote count is: ${currentReview.upvotes}!`);
      }
    }
  }

  return res.json('Failed to update upvote');
};

module.exports = {
  getUpvotesByReviewId,
  createUpvotesByReviewId,
};
