const auth = (req, res, next) => {
  if (req.session.loggedIn) {
    console.log(`[INFO]: User ${req.session.user.name} is in session`);
    return next();
  }

  return res.redirect("/login");
};

module.exports = auth;
