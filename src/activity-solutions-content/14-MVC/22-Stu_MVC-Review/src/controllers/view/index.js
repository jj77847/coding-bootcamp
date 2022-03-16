const { User } = require("../../models");

const renderHomePage = async (req, res) => {
  const { sort = "ASC" } = req.query;

  const usersFromDB = await User.findAll({
    order: [["name", sort]],
  });

  const users = usersFromDB.map((user) => user.get({ plain: true }));

  return res.render("homepage", { users });
};

module.exports = { renderHomePage };
