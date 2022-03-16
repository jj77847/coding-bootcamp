const { Router } = require("express");

const { getAllBooks } = require("../controllers/index");

const router = Router();

router.get("/all-books", getAllBooks);

module.exports = router;
