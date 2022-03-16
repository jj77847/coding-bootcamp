const { Library } = require("../../models");

const getAll = async (req, res) => {
  try {
    const data = await Library.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all books | ${error.message}`);
    return res.status(500).json({ error: "Failed to get all books" });
  }
};

module.exports = { getAll };
