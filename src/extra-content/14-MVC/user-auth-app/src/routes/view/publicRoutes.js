const { Router } = require('express');

const {
  renderLogin,
  renderSignUp,
  renderHome,
} = require('../../controllers/view/publicController');

const router = Router();

router.get('/login', renderLogin);
router.get('/sign-up', renderSignUp);
router.get('/', renderHome);

module.exports = router;
