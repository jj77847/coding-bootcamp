const { Router } = require("express");

const view = require("./view");
const api = require("./api");

const router = Router();

router.use("/api", api);
router.use("/", view);

module.exports = router;
