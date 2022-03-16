const express = require('express');

const PORT = 3000;

const app = express();

const auth = (req, res, next) => {
  if (false) {
    req.isLoggedIn = true;
  } else {
    req.isLoggedIn = false;
  }

  next();
};

const logger = (req, res, next) => {
  const httpMethod = req.method;
  const path = req.path;

  console.log(`[${httpMethod}] - ${path}`);

  next();
};

const logHello = (req, res, next) => {
  console.log('HELLO');

  next();
};

app.use(logger);
app.use(logHello);
app.use(auth);

app.get('/', (req, res) => {
  if (req.isLoggedIn) {
    res.json({ message: 'home' });
  } else {
    res.status(401).json({ error: 'go away hacker' });
  }
});

app.get('/users', (req, res) => {
  res.json({ message: 'users' });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
