const { Reader, LibraryCard, Book } = require('../../models');

const getAllReaders = async (req, res) => {
  try {
    const readerData = await Reader.findAll({
      include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getReaderById = async (req, res) => {
  try {
    const readerData = await Reader.findByPk(req.params.id, {
      include: [{ model: LibraryCard }, { model: Book }],
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createReader = async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteReaderById = async (req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllReaders,
  getReaderById,
  createReader,
  deleteReaderById,
};
