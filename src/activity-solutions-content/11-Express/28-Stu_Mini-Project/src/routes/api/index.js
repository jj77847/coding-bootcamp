const { Router } = require('express');

const tips = require('./tips');
const feedback = require('./feedback');
const diagnostics = require('./diagnostics');

const router = Router();

router.use('/tips', tips);
router.use('/feedback', feedback);
router.use('/diagnostics', diagnostics);

module.exports = router;
