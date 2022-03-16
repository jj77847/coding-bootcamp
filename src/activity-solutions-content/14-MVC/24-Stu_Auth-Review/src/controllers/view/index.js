const { User } = require("../../models");

const renderLoginPage = (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }

  return res.render("login");
};

const renderHomePage = async (req, res) => {
  try {
    const usersFromDB = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = usersFromDB.map((user) => user.get({ plain: true }));

    return res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to render home page | ${err.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderLoginPage,
  renderHomePage,
};
