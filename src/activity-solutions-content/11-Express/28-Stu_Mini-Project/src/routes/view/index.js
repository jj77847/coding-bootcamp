const { Router } = require("express");

const {
  renderFeedback,
  renderHome,
  renderError,
} = require("../../controllers/view");

const router = Router();

router.get("/feedback", renderFeedback);
router.get("/", renderHome);
router.get("*", renderError);

module.exports = router;
