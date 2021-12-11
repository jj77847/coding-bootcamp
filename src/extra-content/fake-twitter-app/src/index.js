const rawTwitterData = {
  tweets: [
    {
      id: 256,
      likes: 2432,
      message: 'This is my first tweet!!',
      username: 'Kate',
      hashtags: ['cars', 'bmw', 'newcar'],
    },
    {
      id: 121,
      likes: 52342,
      message: 'I love my new nissan!!',
      username: 'Bob',
      hashtags: ['cars', 'nissan', 'newcar'],
    },
    {
      id: 300,
      likes: 6378,
      message: 'Kia was over-rated!!',
      username: 'Alice',
      hashtags: ['cars', 'kia', 'newcar'],
    },
  ],
};

// function to construct title
const constructTitle = (username) => `Tweet from ${username}`;

// function to construct hashtags string
const constructHashtags = (hashtags) =>
  hashtags.reduce((acc, each) => `${acc} #${each}`, '');

const fakeTwitterTransformer1 = (data) => {
  // get tweets from data

  // filter out tweets with hashtags of ["honda", "audi", "bmw"]
  const filteredTweets = data.tweets.filter(
    (tweet) =>
      !['honda', 'audi', 'bmw'].some((each) => tweet.hashtags.includes(each))
  );

  // sort the filtered tweets in descending order

  const sortedTweets = filteredTweets.sort((a, b) => b.id - a.id);

  // calculate the total likes of all sorted tweets

  // go through all sorted tweets and for each tweet
  const transformedTweets = sortedTweets.map((tweet) => ({
    id: tweet.id,
    likes: tweet.likes,
    message: tweet.message,
    // construct title
    title: constructTitle(tweet.username),
    // construct hashtags string
    hashtags: constructHashtags(tweet.hashtags),
  }));

  // construct result object

  // return result

  return {
    tweets: transformedTweets,
    likes: 58720,
  };
};

const calculateLikes = (tweets) =>
  tweets.reduce((acc, tweet) => (acc += tweet.likes), 0);

const fakeTwitterTransformer = (data) => {
  const transformedTweets = data.tweets
    .filter(
      (tweet) =>
        !['honda', 'audi', 'bmw'].some((each) => tweet.hashtags.includes(each))
    )
    .sort((a, b) => b.id - a.id)
    .map((tweet) => ({
      id: tweet.id,
      likes: tweet.likes,
      message: tweet.message,
      // construct title
      title: constructTitle(tweet.username),
      // construct hashtags string
      hashtags: constructHashtags(tweet.hashtags),
    }));

  return {
    tweets: transformedTweets,
    likes: calculateLikes(transformedTweets),
  };
};

const result = fakeTwitterTransformer(rawTwitterData);

console.log(result);
