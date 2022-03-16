const { Router } = require("express");

const { getAllData } = require("../controllers");

const router = Router();

router.get("/read", getAllData);

module.exports = router;
