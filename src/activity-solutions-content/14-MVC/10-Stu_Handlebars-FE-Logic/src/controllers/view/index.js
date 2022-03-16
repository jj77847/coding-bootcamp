const { Dish } = require("../../models");

const renderDishPage = async (req, res) => {
  try {
    // get id from req params
    const { id } = req.params;

    // find dish by id in DB
    const dishFromDB = await Dish.findByPk(id);

    // if not exist then redirect to no dish page
    if (!dishFromDB) {
      return res.render("no-dish", { id });
    }

    // if exists then convert the dish to handlebars data object
    const dish = dishFromDB.serialize();

    // const hbDish = {
    //   dish_name: dishFromDB.get("dish_name"),
    //   description: dishFromDB.get("description"),
    //   guest_name: dishFromDB.get("guest_name"),
    //   has_nuts: dishFromDB.get("has_nuts"),
    // };

    // render template with HB data object
    return res.render("dish", dish);
    // return res.render("dish", hbDish);
  } catch (error) {
    // if anything goes wrong res status 500
    console.log(`[ERROR]: Failed to get dish | ${error.message}`);
    return res.render("error");
  }
};

const renderDishesPage = async (req, res) => {
  try {
    // find all dishes in DB
    const dishesFromDB = await Dish.findAll();

    // serialise each dish in the dishes array
    const dishes = dishesFromDB.map((dish) => dish.serialize());

    // render template with HB data object
    return res.render("dishes", { dishes });
    // return res.render("dish", hbDish);
  } catch (error) {
    // if anything goes wrong res status 500
    console.log(`[ERROR]: Failed to get dishes | ${error.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderDishPage,
  renderDishesPage,
};
