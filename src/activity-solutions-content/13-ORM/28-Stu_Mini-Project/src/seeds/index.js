const connection = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const travellersData = require("./travellers.json");
const locationsData = require("./locations.json");

const seedDatabase = async () => {
  await connection.sync({ force: true });

  console.log("DB sync successful");

  const travellers = await Traveller.bulkCreate(travellersData);

  console.log("Travellers seed successful");

  const locations = await Location.bulkCreate(locationsData);

  console.log("Locations seed successful");

  for (let i = 0; i < 10; i++) {
    const { id: randomTravellerId } =
      travellers[Math.floor(Math.random() * travellers.length)];

    const { id: randomLocationId } =
      locations[Math.floor(Math.random() * locations.length)];

    const newTrip = {
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    };

    await Trip.create(newTrip);
  }

  console.log("Trips seed successful");

  process.exit(0);
};

seedDatabase();
