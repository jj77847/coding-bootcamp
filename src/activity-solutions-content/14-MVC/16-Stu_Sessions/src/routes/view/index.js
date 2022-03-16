const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const auth = require("../../middlewares/auth");

const router = Router();

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;
