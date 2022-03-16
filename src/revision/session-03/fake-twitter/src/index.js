const {
  filterTweets,
  sortTweets,
  transformTweets,
  calculateLikes,
} = require('./utils');

const transformTwitterData = ({ tweets }) => {
  const filteredTweets = filterTweets(tweets);
  const sortedTweets = sortTweets(filteredTweets);
  const transformedTweets = transformTweets(sortedTweets);

  return {
    tweets: transformedTweets,
    likes: calculateLikes(transformedTweets),
  };
};

module.exports = { transformTwitterData };
