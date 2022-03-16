const { Router } = require('express');

const { getPets } = require('../../controllers/api/pets');

const router = Router();

router.get('/', getPets);

module.exports = router;
