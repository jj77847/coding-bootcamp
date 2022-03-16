const { Router } = require("express");

const {
  getAllGenres,
  getOneGenre,
  createGenre,
  updateGenre,
  deleteGenre,
} = require("../../controllers/api/genres");

const router = Router();

router.get("/", getAllGenres);
router.get("/:id", getOneGenre);
router.post("/", createGenre);
router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre);

module.exports = router;
