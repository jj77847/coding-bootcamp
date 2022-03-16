const { Gallery, Painting } = require("../../models");

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

    return res.render("homepage", { galleries });
  } catch (err) {
    console.log(`[ERROR]: Failed to load home page | ${err.message}`);
    return res.render("error");
  }
};

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

    return res.render("gallery", { gallery });
  } catch (err) {
    console.log(`[ERROR]: Failed to load gallery page | ${err.message}`);
    return res.render("error");
  }
};

const renderPaintingPage = async (req, res) => {
  try {
    const paintingFromDB = await Painting.findByPk(req.params.id);

    const painting = paintingFromDB.get({ plain: true });

    return res.render("painting", { painting });
  } catch (err) {
    console.log(`[ERROR]: Failed to load gallery page | ${err.message}`);
    return res.render("error");
  }
};

module.exports = { renderHomePage, renderGalleryPage, renderPaintingPage };
