const { Router } = require("express");

const { renderHomePage } = require("../../controllers/view");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
