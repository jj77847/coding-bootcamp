const { Router } = require('express');

const {
  renderDashboard,
  renderFavourites,
} = require('../../controllers/view/privateController');

const router = Router();

router.get('/dashboard', renderDashboard);
router.get('/favourites', renderFavourites);

module.exports = router;
