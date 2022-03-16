const express = require('express');
const { MongoClient } = require('mongodb');

const dbMiddleware = require('./middleware/dbMiddleware');
const routes = require('./routes');

const PORT = 3001;

const mongoClient = new MongoClient('mongodb://localhost:27017/libraryDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(dbMiddleware(mongoClient));
app.use(routes);

const init = async () => {
  try {
    await mongoClient.connect();
    console.log('[INFO]: Database connection successful');

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
