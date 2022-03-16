const { Router } = require("express");

const {
  getTravellers,
  createTraveller,
  getTravellerById,
  deleteTravellerById,
} = require("../../controllers/api/travellers");

const router = Router();

router.get("/", getTravellers);
router.post("/", createTraveller);
router.get("/:id", getTravellerById);
router.delete("/:id", deleteTravellerById);

module.exports = router;
