const { MongoClient } = require("mongodb");

const data = [
  {
    title: "Good Omens",
    authors: [
      { name: "Neil Gaiman", featured: true },
      { name: "Terry Pratchett", featured: true },
    ],
    information: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
  },
  {
    title: "Heads You Lose",
    authors: [
      { name: "Lisa Lutz", featured: false },
      { name: "David Hayward", featured: false },
    ],
    information: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
  },
  {
    title: "Between the Lines",
    authors: [
      { name: "Jodi Picoult", featured: true },
      { name: "Samantha Van Leer", featured: false },
    ],
    information: { ISBN: 9781451635751, price: 5, total_in_stock: 5 },
  },
];

// create a new MongoClient using the connection URL and options
const mongoClient = new MongoClient("mongodb://localhost:27017/authorListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const init = async () => {
  // from the new instance of the client use the connect method to establish a connection
  await mongoClient.connect();
  console.log("[INFO]: Database connection successful");

  const db = mongoClient.db();

  await db.collection("authorList").deleteMany({});
  await db.collection("authorList").insertMany(data);

  console.log("[INFO]: Data seeded successfully");
  await mongoClient.close();
};

init();
