const { Router } = require("express");

const { createTrip, deleteTripById } = require("../../controllers/api/trips");

const router = Router();

router.post("/", createTrip);
router.delete("/:id", deleteTripById);

module.exports = router;
