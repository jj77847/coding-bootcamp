const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { Traveller, Trip, Location } = require("../../models");

const getTravellers = async (req, res) => {
  try {
    const travellers = await Traveller.findAll({});

    return res.json({ data: travellers });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all travellers | ${error.message}`);

    return res.status(500).json({ error: "Failed to get all travellers" });
  }
};

const createTraveller = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(["name", "email"], req.body);

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({ error: "Bad request" });
    }

    await Traveller.create(payload);

    return res.json({ data: "Successfully created traveller" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create traveller | ${error.message}`);

    return res.status(500).json({ error: "Failed to create traveller" });
  }
};

const getTravellerById = async (req, res) => {
  try {
    const { id } = req.params;

    const traveller = await Traveller.findByPk(id, {
      include: [
        {
          model: Location,
          through: Trip,
        },
      ],
    });

    if (!traveller) {
      return res.status(404).json({ error: "Traveller not found" });
    }

    return res.json({ data: traveller });
  } catch (error) {
    console.log(`[ERROR]: Failed to get traveller | ${error.message}`);

    return res.status(500).json({ error: "Failed to get traveller" });
  }
};

const deleteTravellerById = async (req, res) => {
  try {
    const { id } = req.params;

    await Traveller.destroy({
      where: {
        id,
      },
    });

    return res.json({ data: "Successfully deleted traveller" });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete traveller | ${error.message}`);

    return res.status(500).json({ error: "Failed to delete traveller" });
  }
};

module.exports = {
  getTravellers,
  createTraveller,
  getTravellerById,
  deleteTravellerById,
};
