const { Router } = require('express');

const {
  getFeedbacks,
  createFeedback,
} = require('../../controllers/api/feedback');

const router = Router();

router.get('/', getFeedbacks);
router.post('/', createFeedback);

module.exports = router;
