const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { Traveller, Trip, Location } = require("../../models");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({});

    return res.json({ data: locations });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all locations | ${error.message}`);

    return res.status(500).json({ error: "Failed to get all locations" });
  }
};

const createLocation = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(["location_name"], req.body);

    if (Object.keys(payload).length !== 1) {
      return res.status(400).json({ error: "Bad request" });
    }

    await Location.create(payload);

    return res.json({ data: "Successfully created location" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create location | ${error.message}`);

    return res.status(500).json({ error: "Failed to create location" });
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findByPk(id, {
      include: [
        {
          model: Traveller,
          through: Trip,
        },
      ],
    });

    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    return res.json({ data: location });
  } catch (error) {
    console.log(`[ERROR]: Failed to get location | ${error.message}`);

    return res.status(500).json({ error: "Failed to get location" });
  }
};

const deleteLocationById = async (req, res) => {
  try {
    const { id } = req.params;

    await Location.destroy({
      where: {
        id,
      },
    });

    return res.json({ data: "Successfully deleted location" });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete location | ${error.message}`);

    return res.status(500).json({ error: "Failed to delete location" });
  }
};

module.exports = {
  getLocations,
  createLocation,
  getLocationById,
  deleteLocationById,
};
