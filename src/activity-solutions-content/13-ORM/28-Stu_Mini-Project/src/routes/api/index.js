const { Router } = require("express");

const travellers = require("./travellers");
const locations = require("./locations");
const trips = require("./trips");

const router = Router();

router.use("/travellers", travellers);
router.use("/locations", locations);
router.use("/trips", trips);

module.exports = router;
