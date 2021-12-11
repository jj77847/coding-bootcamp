const getMovies = (req, res) => {
  req.db.query('SELECT * FROM movies', (err, data) => {
    if (err) {
      console.log(`[ERROR]: Failed to get movies | ${err.message}`);
      return res.status(500).json({ success: false });
    }

    return res.json({ success: true, data });
  });
};

const getMovieById = (req, res) => {
  req.db.query(
    `SELECT * FROM movies WHERE id="${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR]: Failed to get movie by id | ${err.message}`);
        return res.status(500).json({ success: false });
      }

      return res.json({ success: true, data });
    }
  );
};

const createMovie = (req, res) => {
  const { movieName } = req.body;

  if (!movieName) {
    return res
      .status(400)
      .json({ success: false, error: 'Please provide a movie name' });
  }

  req.db.query(
    `INSERT INTO movies (movie_name) VALUES ("${movieName}")`,
    (err) => {
      if (err) {
        console.log(`[ERROR]: Failed to create movie | ${err.message}`);
        return res.status(500).json({ success: false });
      }

      return res.json({ success: true });
    }
  );
};

const updateMovieById = (req, res) => {
  const { movieName } = req.body;
  const { movieId } = req.params;

  if (!movieName) {
    return res
      .status(400)
      .json({ success: false, error: 'Please provide a movie' });
  }

  req.db.query(
    `UPDATE movies SET movie_name="${movieName}" WHERE id=${movieId}`,
    (err) => {
      if (err) {
        console.log(`[ERROR]: Failed to update movie | ${err.message}`);
        return res.status(500).json({ success: false });
      }

      return res.json({ success: true });
    }
  );
};

const deleteMovieById = (req, res) => {
  req.db.query(`DELETE FROM movies WHERE id="${req.params.movieId}"`, (err) => {
    if (err) {
      console.log(`[ERROR]: Failed to delete movie | ${err.message}`);
      return res.status(500).json({ success: false });
    }

    return res.json({ success: true });
  });
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
