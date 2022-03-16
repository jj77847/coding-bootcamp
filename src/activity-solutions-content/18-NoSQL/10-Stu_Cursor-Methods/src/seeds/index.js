const { MongoClient } = require("mongodb");

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

// create a new MongoClient using the connection URL and options
const mongoClient = new MongoClient("mongodb://localhost:27017/numbersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const init = async () => {
  // from the new instance of the client use the connect method to establish a connection
  await mongoClient.connect();
  console.log("[INFO]: Database connection successful");

  const db = mongoClient.db();

  await db.collection("numberList").deleteMany({});
  await db.collection("numberList").insertMany(data);

  console.log("[INFO]: Data seeded successfully");
  await mongoClient.close();
};

init();
