const getPrice = async (req, res) => {
  try {
    const data = await req.db
      .collection("authorList")
      .find({
        "information.price": { $lt: 10 },
      })
      .toArray((err, results) => {
        if (!err) {
          return res.json({ success: true, data: results });
        }

        throw new Error("Failed to get data from DB");
      });
  } catch (error) {
    console.log(`[ERROR]: Failed to get prices data | ${error.message}`);
  }
};

const getFeaturedAuthors = async (req, res) => {
  try {
    const data = await req.db
      .collection("authorList")
      .find({
        "authors.featured": true,
      })
      .toArray((err, results) => {
        if (!err) {
          return res.json({ success: true, data: results });
        }

        throw new Error("Failed to get data from DB");
      });
  } catch (error) {
    console.log(`[ERROR]: Failed to get featured authors | ${error.message}`);
  }
};

module.exports = {
  getPrice,
  getFeaturedAuthors,
};
