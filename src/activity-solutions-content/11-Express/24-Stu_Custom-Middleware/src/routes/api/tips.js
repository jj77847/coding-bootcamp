const { Router } = require('express');

const { getTips, createTip } = require('../../controllers/api/tips');

const router = Router();

router.get('/', getTips);
router.post('/', createTip);

module.exports = router;
