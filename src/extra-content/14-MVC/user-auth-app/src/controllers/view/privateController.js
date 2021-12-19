const renderDashboard = (req, res) => {
  res.render('dashboard');
};

const renderFavourites = (req, res) => {
  res.render('favourites');
};

module.exports = {
  renderDashboard,
  renderFavourites,
};
