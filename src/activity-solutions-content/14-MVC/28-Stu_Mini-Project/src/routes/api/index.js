const { Router } = require("express");

const users = require("./users");
const projects = require("./projects");

const router = Router();

router.use("/users", users);
router.use("/projects", projects);

module.exports = router;
