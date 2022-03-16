const express = require('express');
const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(routes);

app.listen(PORT, () =>
  console.log(`Sever running on http://localhost:${PORT}`)
);
