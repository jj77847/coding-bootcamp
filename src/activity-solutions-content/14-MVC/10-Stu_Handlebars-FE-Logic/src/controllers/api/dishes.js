const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const Dish = require("../../models/Dish");

const createDish = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["dish_name", "description", "guest_name", "has_nuts"],
      req.body
    );

    if (Object.keys(payload).length !== 4) {
      return res.status(400).json({ error: "Please provide a valid request" });
    }

    const dish = await Dish.create(payload);
    return res.json(dish);
  } catch (err) {
    console.log(`[ERROR]: Failed to create dish | ${error.message}`);
    return res.status(500).json({ error: "Failed to create dish" });
  }
};

const updateDishById = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["dish_name", "description", "guest_name", "has_nuts"],
      req.body
    );

    if (Object.keys(payload).length !== 4) {
      return res.status(400).json({ error: "Please provide a valid request" });
    }

    const { id } = req.params;

    const dishFromDB = await Dish.findByPk(id);

    if (!dishFromDB) {
      return res.status(404).json({ error: "Dish does not exist" });
    }

    const dish = await Dish.update(payload, { where: { id } });
    return res.json({ message: "Dish updated successfully" });
  } catch (err) {
    console.log(`[ERROR]: Failed to update dish | ${error.message}`);
    return res.status(500).json({ error: "Failed to update dish" });
  }
};

module.exports = {
  createDish,
  updateDishById,
};
