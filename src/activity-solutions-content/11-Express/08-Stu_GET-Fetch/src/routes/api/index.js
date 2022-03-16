const { Router } = require('express');

const pets = require('./pets');

const router = Router();

router.use('/pets', pets);

module.exports = router;
