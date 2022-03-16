const { Router } = require('express');
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');

const router = Router();

router.use('/users', userRoutes);

router.use('/todos', todoRoutes);

module.exports = router;
