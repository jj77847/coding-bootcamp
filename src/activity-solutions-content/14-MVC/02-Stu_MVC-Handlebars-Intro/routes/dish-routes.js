const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  // pass the name of the handlebars template you want to render for this route
  res.render("dishes");
});

module.exports = router;
