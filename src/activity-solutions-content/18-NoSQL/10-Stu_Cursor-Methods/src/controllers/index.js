const getAllData = async (req, res) => {
  try {
    await req.db
      .collection("numberList")
      .find({})
      .sort({ number: -1 })
      .skip(5)
      .limit(5)
      .toArray((err, results) => {
        if (!err) {
          return res.json({ success: true, data: results });
        }
        throw new Error("Failed to get data from DB");
      });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

module.exports = {
  getAllData,
};
