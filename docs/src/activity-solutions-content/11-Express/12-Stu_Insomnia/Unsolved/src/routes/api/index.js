const { Router } = require('express');

const { getDataFromJSON } = require('../../controllers/api');

const router = Router();

router.get('/', getDataFromJSON);

module.exports = router;
