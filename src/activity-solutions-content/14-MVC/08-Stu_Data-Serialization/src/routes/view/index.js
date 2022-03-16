const { Router } = require("express");

const { renderDishPage, renderDishesPage } = require("../../controllers/view");

const router = Router();

router.get("/dishes/:id", renderDishPage);
router.get("/dishes", renderDishesPage);

module.exports = router;
