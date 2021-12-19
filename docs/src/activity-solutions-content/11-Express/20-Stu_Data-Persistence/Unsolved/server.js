const express = require('express');
const path = require('path');
const fs = require('fs');

const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to get reviews`);

  // Send a message to the client
  res.json(`${req.method} request received to get reviews`);
});

app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  const { product, review, username } = req.body;

  if (product && review && username) {
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    const reviewsJSON = fs.readFileSync('./db/reviews.json', 'utf-8');

    const reviews = JSON.parse(reviewsJSON);

    reviews.push(newReview);

    fs.writeFile(`./db/reviews.json`, JSON.stringify(reviews), (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for ${newReview.product} has been written to JSON file`
          )
    );

    const response = {
      status: 'success',
      body: newReview,
    };

    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
