const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static('public'));

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, '../', 'public/index.html');
  res.sendFile(filePath);
};

const renderAboutUsPage = (req, res) => {
  const filePath = path.join(__dirname, '../', 'public/about-us.html');
  res.sendFile(filePath);
};

app.get('/', renderHomePage);

app.get('/about-us', renderAboutUsPage);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
