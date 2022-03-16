const { Router } = require("express");

const { getPrice, getFeaturedAuthors } = require("../controllers");

const router = Router();

router.get("/price-less-than-10", getPrice);
router.get("/featured-authors", getFeaturedAuthors);

module.exports = router;
