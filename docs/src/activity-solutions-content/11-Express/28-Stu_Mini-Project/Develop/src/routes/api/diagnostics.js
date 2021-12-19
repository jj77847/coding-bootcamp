const { Router } = require('express');

const {
  getDiagnostics,
  postDiagnostics,
} = require('../../controllers/api/diagnostics.js');

const router = Router();

router.get('/', getDiagnostics);
router.post('/', postDiagnostics);

module.exports = router;
