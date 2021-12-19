const { Router } = require('express');
const bookRoutes = require('./bookRoutes');

const router = Router();

router.use('/books', bookRoutes);

module.exports = router;
