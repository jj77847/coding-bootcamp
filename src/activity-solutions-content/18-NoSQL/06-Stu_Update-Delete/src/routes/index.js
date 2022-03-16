const { Router } = require("express");

const {
  getAllData,
  createData,
  createBulkData,
  deleteDataById,
} = require("../controllers");

const router = Router();

router.get("/read", getAllData);
router.post("/create", createData);
router.post("/create-many", createBulkData);
router.delete("/delete/:id", deleteDataById);

module.exports = router;
