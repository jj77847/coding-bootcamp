const { Router } = require("express");

const { createDish, updateDishById } = require("../../controllers/api/dishes");

const router = Router();

router.post("/", createDish);
router.put("/:id", updateDishById);

module.exports = router;
