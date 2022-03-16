const { Genre } = require("../../models");

const createGenre = async (req, res) => {
  try {
    const { genre } = req.body;
    const data = await Genre.create({ name: genre });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create genre | ${error.message}`);
    return res.status(500).json({ error: "Failed to create genre" });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const data = await Genre.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all genres | ${error.message}`);
    return res.status(500).json({ error: "Failed to get all genres" });
  }
};

const getOneGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Genre.findById(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get genre | ${error.message}`);
    return res.status(500).json({ error: "Failed to get genre" });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Genre.findByIdAndDelete(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete genre | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete genre" });
  }
};

const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { genre } = req.body;
    const data = await Genre.findByIdAndUpdate(
      id,
      { name: genre },
      {
        new: true,
      }
    );
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to update genre | ${error.message}`);
    return res.status(500).json({ error: "Failed to update genre" });
  }
};

module.exports = {
  createGenre,
  getAllGenres,
  getOneGenre,
  deleteGenre,
  updateGenre,
};
