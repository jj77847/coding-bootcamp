const { LibraryCard, Reader, Book } = require('../../models');

const getAllCards = async (req, res) => {
  try {
    const libraryCardData = await LibraryCard.findAll({
      include: [
        {
          model: Reader,
          include: {
            model: Book,
          },
        },
      ],
    });
    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCardById = async (req, res) => {
  try {
    const libraryCardData = await LibraryCard.findByPk(req.params.id, {
      include: [
        {
          model: Reader,
          include: {
            model: Book,
          },
        },
      ],
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createCard = async (req, res) => {
  try {
    const locationData = await LibraryCard.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteCardById = async (req, res) => {
  try {
    const libraryCardData = await LibraryCard.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  deleteCardById,
};
