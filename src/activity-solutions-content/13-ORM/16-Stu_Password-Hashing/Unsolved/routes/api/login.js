const { Router } = require('express');

const { loginUser } = require('../../controllers/api/login');

const router = Router();

router.post('/', loginUser);

module.exports = router;
