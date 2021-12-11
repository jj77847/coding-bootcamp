const express = require('express');

// listening on port 3000
const PORT = 3000;

// create a new express app
const app = express();

const hello = (req, res) => {
  res.send('hello from express');
};

const goodbye = (req, res) => {
  res.send('goodbye from express');
};

// register a GET path for '/'
app.get('/', hello);

// register a GET path for '/goodbye'
app.get('/goodbye', goodbye);

// connect the express app to the desired PORT
app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
