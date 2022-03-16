const { Router } = require("express");

const libraries = require("./libraries");

const router = Router();

router.use("/libraries", libraries);

module.exports = router;
