const { Router } = require("express");

const { signUp, login, logout } = require("../../controllers/api/users");

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
