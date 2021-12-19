const { Router } = require('express');

const { renderTips, renderFeedback } = require('../../controllers/view');

const router = Router();

router.get('/', renderTips);
router.get('/feedback', renderFeedback);

module.exports = router;
