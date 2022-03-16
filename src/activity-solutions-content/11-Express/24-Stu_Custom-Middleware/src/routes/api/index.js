const { Router } = require('express');

const tips = require('./tips');
const feedback = require('./feedback');

const router = Router();

router.use('/tips', tips);
router.use('/feedback', feedback);

module.exports = router;
