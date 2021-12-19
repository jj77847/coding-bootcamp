const { Router } = require('express');

const termRoutes = require('./term');

const router = Router();

router.use('/terms', termRoutes);

module.exports = router;
