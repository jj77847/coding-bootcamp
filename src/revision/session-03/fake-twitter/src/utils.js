const filterTweets = (tweets = []) =>
  tweets.filter(({ hashtags }) =>
    hashtags.every((hashtag) => !['bmw', 'honda', 'audi'].includes(hashtag))
  );

const sortTweets = (tweets = []) => tweets.sort((a, b) => b.id - a.id);

const constructHashtags = (hashtags = []) =>
  hashtags.map((hashtag) => `#${hashtag}`).join(' ');

const constructTitle = (username) =>
  !username ? '' : `Tweet from ${username}`;

const transformTweets = (tweets = []) =>
  tweets.map((tweet) => ({
    id: tweet.id,
    likes: tweet.likes,
    message: tweet.message,
    title: constructTitle(tweet.username),
    hashtags: constructHashtags(tweet.hashtags),
  }));

const calculateLikes = (tweets = []) =>
  tweets.reduce((acc, tweet) => (acc = acc + tweet.likes), 0);

module.exports = {
  filterTweets,
  sortTweets,
  constructHashtags,
  constructTitle,
  transformTweets,
  calculateLikes,
};
