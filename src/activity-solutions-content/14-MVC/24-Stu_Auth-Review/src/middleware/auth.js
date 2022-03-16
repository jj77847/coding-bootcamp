const auth = (req, res, next) => {
  if (!req.session.logged_in) {
    return res.redirect("/login");
  } else {
    next();
  }
};

module.exports = auth;
