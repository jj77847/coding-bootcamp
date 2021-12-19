// import express
const express = require('express');
const path = require('path');

// create a new app using express as a function
const app = express();

// declare a PORT to connect my server to
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

const renderPaths = (req, res) => {
  // render paths.html
  // render send.html
  // path to my file to render
  const filePath = path.join(__dirname, '../public/paths.html');
  res.sendFile(filePath);
};

const renderSend = (req, res) => {
  // render send.html
  // path to my file to render
  const filePath = path.join(__dirname, '../public/send.html');
  res.sendFile(filePath);
};

const renderHome = (req, res) => {
  // render index.html
  // path to my file to render
  const filePath = path.join(__dirname, '../public/index.html');
  res.sendFile(filePath);
};

// register our paths
app.get('/paths', renderPaths);

app.get('/send', renderSend);

app.get('/', renderHome);

// connect my app to the PORT and listen to requests
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});
