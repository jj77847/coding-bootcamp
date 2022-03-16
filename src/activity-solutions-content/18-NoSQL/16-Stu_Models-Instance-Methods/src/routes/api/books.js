const { Router } = require("express");

const { getAllBooks, getOneBook } = require("../../controllers/api/books");

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getOneBook);

module.exports = router;
