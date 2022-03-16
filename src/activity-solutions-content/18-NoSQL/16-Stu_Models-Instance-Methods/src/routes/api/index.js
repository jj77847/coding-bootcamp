const { Router } = require("express");

const books = require("./books");

const router = Router();

router.use("/books", books);

module.exports = router;
