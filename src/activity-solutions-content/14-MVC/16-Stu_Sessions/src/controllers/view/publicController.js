const { Gallery, Painting } = require("../../models");

const renderLoginPage = (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }

  return res.render("login");
};

const renderHomePage = async (req, res) => {
  try {
    const galleriesFromDB = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ["filename", "description"],
        },
      ],
    });

    const galleries = galleriesFromDB.map((gallery) =>
      gallery.get({ plain: true })
    );

    return res.render("homepage", {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to load home page | ${err.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderLoginPage,
  renderHomePage,
};
