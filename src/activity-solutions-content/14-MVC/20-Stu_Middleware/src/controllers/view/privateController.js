const { Gallery, Painting } = require("../../models");

const renderGalleryPage = async (req, res) => {
  try {
    const galleryFromDB = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            "id",
            "title",
            "artist",
            "exhibition_date",
            "filename",
            "description",
          ],
        },
      ],
    });

    const gallery = galleryFromDB.get({ plain: true });

    return res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(`[ERROR]: Failed to load gallery page | ${err.message}`);
    return res.render("error");
  }
};

const renderPaintingPage = async (req, res) => {
  try {
    const paintingFromDB = await Painting.findByPk(req.params.id);

    const painting = paintingFromDB.get({ plain: true });

    return res.render("painting", { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(`[ERROR]: Failed to load gallery page | ${err.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderGalleryPage,
  renderPaintingPage,
};
