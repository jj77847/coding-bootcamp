const moment = require("moment");

const formatDate = (date) => moment(date).add(5, "years").format("M/D/YYYY");

const formatTime = (date) => moment(date).format("HH:mm");

const helpers = {
  formatDate,
  formatTime,
};

module.exports = helpers;
