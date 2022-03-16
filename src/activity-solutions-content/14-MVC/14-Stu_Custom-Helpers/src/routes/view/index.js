const { Router } = require("express");

const {
  renderPaintingPage,
  renderGalleryPage,
  renderHomePage,
} = require("../../controllers/view");

const router = Router();

router.get("/painting/:id", renderPaintingPage);
router.get("/gallery/:id", renderGalleryPage);
router.get("/", renderHomePage);

module.exports = router;
