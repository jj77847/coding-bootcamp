// import Router from express
const { Router } = require('express');

const apiRoutes = require('./api');

// create a new router using Router function
const router = Router();

// register the route
router.use('/api', apiRoutes);

// export router
module.exports = router;
