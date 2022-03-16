const { Router } = require("express");

const router = Router();

const dishes = [
  {
    id: 1,
    dish_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
    has_nuts: false,
  },
  {
    id: 2,
    dish_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
    has_nuts: true,
  },
  {
    id: 3,
    dish_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
    has_nuts: false,
  },
  {
    id: 4,
    dish_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
    has_nuts: false,
  },
  {
    id: 5,
    dish_name: "Pork Gyoza",
    description:
      "Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce",
    has_nuts: true,
  },
  {
    id: 6,
    dish_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
    has_nuts: false,
  },
  {
    id: 7,
    dish_name: "Cape Malay Curry",
    description: "Chicken and vegitable curry dish with basmati rice",
    has_nuts: false,
  },
];

// Get all dishes
router.get("/dishes", async (req, res) => {
  return res.render("dishes", { dishes });
});

// GET dish by ID
router.get("/dishes/:id", (req, res) => {
  // get id from URL and convert to number
  const id = Number.parseInt(req.params.id, 10);

  // check if id is a valid number
  if (!Number.isNaN(id)) {
    // find the dish in dishes array
    const dish = dishes.find((each) => each.id === id);

    console.log(dish);

    // if dish does not exist then render no dish template
    if (!dish) {
      return res.render("no-dish", { id });
    }

    // render the single dish
    return res.render("dish", dish);
  }
});

module.exports = router;
