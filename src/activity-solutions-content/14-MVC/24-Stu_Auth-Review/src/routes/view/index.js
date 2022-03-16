const { Router } = require("express");

const { renderLoginPage, renderHomePage } = require("../../controllers/view");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/", auth, renderHomePage);

module.exports = router;
