const { Router } = require('express');
const userViewRoutes = require('./userViewRoutes');
const todoViewRoutes = require('./todoViewRoutes');

const router = Router();

router.use('/users', userViewRoutes);

router.use('/todos', todoViewRoutes);

module.exports = router;
