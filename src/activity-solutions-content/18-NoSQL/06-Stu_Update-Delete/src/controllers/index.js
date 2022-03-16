const { ObjectId } = require("mongodb");

const createData = async (req, res) => {
  try {
    const { title, author } = req.body;

    const data = await req.db
      .collection("bookCollection")
      .insertOne({ title, author });

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

const createBulkData = async (req, res) => {
  try {
    const { books } = req.body;

    const data = await req.db.collection("bookCollection").insertMany(books);

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to add many books | ${error.message}`);
  }
};

const getAllData = (req, res) => {
  try {
    req.db
      .collection("bookCollection")
      .find({})
      .toArray((err, results) => {
        if (!err) {
          return res.json({ success: true, data: results });
        }

        throw new Error("Failed to get data from DB");
      });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all books | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const deleteDataById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await req.db
      .collection("bookCollection")
      .deleteOne({ _id: ObjectId(id) });

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete data | ${error.message}`);
  }
};

module.exports = {
  getAllData,
  createData,
  createBulkData,
  deleteDataById,
};
