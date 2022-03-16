const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { Trip } = require("../../models");

const createTrip = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["traveller_id", "location_id"],
      req.body
    );

    if (Object.keys(payload).length < 2) {
      return res.status(400).json({ error: "Bad request" });
    }

    await Trip.create(payload);

    return res.json({ data: "Successfully created trip" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create trip | ${error.message}`);

    return res.status(500).json({ error: "Failed to create trip" });
  }
};

const deleteTripById = async (req, res) => {
  try {
    const { id } = req.params;

    await Trip.destroy({
      where: {
        id,
      },
    });

    return res.json({ data: "Successfully deleted trip" });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete trip | ${error.message}`);

    return res.status(500).json({ error: "Failed to delete trip" });
  }
};

module.exports = { createTrip, deleteTripById };
