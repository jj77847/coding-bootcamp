const { Router } = require("express");

const auth = require("../../middleware/auth");

const {
  createProject,
  deleteProject,
} = require("../../controllers/api/projects");

const router = Router();

router.post("/", auth, createProject);
router.delete("/:id", auth, deleteProject);

module.exports = router;
