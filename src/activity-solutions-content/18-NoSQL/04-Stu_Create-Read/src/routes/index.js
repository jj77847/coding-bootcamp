const { Router } = require("express");

const { getAllData, createData, createBulkData } = require("../controllers");

const router = Router();

router.get("/read", getAllData);
router.post("/create", createData);
router.post("/create-many", createBulkData);

module.exports = router;
