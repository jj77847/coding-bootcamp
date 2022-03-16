const { Router } = require("express");

const router = Router();

const dishes = [
  {
    dish_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
  },
  {
    dish_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
  },
  {
    dish_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
  },
  {
    dish_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
  },
  {
    dish_name: "Pork Gyoza",
    description:
      "Homemade japanese dumplings stuffed with a pork and green onion filling",
  },
  {
    dish_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
  },
  {
    dish_name: "Cape Malay Curry",
    description: "Chicken and vegitable curry dish with basmati rice",
  },
];

// Get all dishes
router.get("/dishes", async (req, res) => {
  return res.render("dishes");
});

// GET dish by ID
router.get("/dishes/:num", (req, res) => {
  // get the num value from the URL
  const { num } = req.params;

  const dishIndex = Number.parseInt(num, 10);

  // validate num
  if (!Number.isNaN(dishIndex) && dishIndex > 0 && dishIndex <= dishes.length) {
    // get dish from dishes array
    const dish = dishes[num - 1];

    return res.render("dish", dish);
  }

  return res.render("no-dish", { dishIndex: num });
});

module.exports = router;
