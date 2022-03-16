const { Router } = require("express");

const {
  renderSignUpPage,
  renderLoginPage,
  renderSingleProjectPage,
  renderHomePage,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/sign-up", renderSignUpPage);
router.get("/login", renderLoginPage);
router.get("/projects/:id", renderSingleProjectPage);
router.get("/", renderHomePage);

module.exports = router;
