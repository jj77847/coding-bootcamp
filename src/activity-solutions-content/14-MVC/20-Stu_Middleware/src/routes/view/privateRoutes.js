const { Router } = require("express");

const {
  renderGalleryPage,
  renderPaintingPage,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/gallery/:id", renderGalleryPage);
router.get("/painting/:id", renderPaintingPage);

module.exports = router;
