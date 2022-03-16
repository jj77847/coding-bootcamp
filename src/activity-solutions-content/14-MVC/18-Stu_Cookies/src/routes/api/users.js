const { Router } = require("express");

const { login, signup, logout } = require("../../controllers/api/users");

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/", signup);

module.exports = router;
