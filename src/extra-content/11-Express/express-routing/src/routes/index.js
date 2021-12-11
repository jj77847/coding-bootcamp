const { Router } = require('express');
const apiRoutes = require('./api/apiRoutes');
const viewRoutes = require('./view/viewRoutes');

const router = Router();

router.use('/api', apiRoutes);

router.use('/view', viewRoutes);

module.exports = router;
