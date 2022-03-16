const { Router } = require("express");

const genres = require("./genres");

const router = Router();

router.use("/genres", genres);

module.exports = router;
