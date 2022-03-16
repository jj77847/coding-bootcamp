const { Router } = require("express");

const {
  renderLoginPage,
  renderHomePage,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

module.exports = router;
