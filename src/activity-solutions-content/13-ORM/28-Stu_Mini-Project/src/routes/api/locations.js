const { Router } = require("express");

const {
  getLocations,
  createLocation,
  getLocationById,
  deleteLocationById,
} = require("../../controllers/api/locations");

const router = Router();

router.get("/", getLocations);
router.post("/", createLocation);
router.get("/:id", getLocationById);
router.delete("/:id", deleteLocationById);

module.exports = router;
