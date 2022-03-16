const dbMiddleware = (client) => {
  return (req, res, next) => {
    if (!req.db) {
      req.db = client.db();
    }

    next();
  };
};

module.exports = dbMiddleware;
