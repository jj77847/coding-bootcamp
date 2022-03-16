const { Router } = require("express");

const dishes = require("./dishes");

const router = Router();

router.use("/dishes", dishes);

module.exports = router;
