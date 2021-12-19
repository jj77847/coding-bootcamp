const renderLogin = (req, res) => {
  res.render('login');
};

const renderSignUp = (req, res) => {
  res.render('signup');
};

const renderHome = (req, res) => {
  const { loggedIn } = req.session;
  res.render('home', { loggedIn });
};

module.exports = {
  renderLogin,
  renderSignUp,
  renderHome,
};
