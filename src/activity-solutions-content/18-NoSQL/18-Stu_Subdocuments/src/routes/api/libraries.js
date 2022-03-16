const { Router } = require("express");

const { getAll } = require("../../controllers/api/libraries");

const router = Router();

router.get("/", getAll);

module.exports = router;
