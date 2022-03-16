const {
  filterTweets,
  sortTweets,
  constructHashtags,
  constructTitle,
  transformTweets,
  calculateLikes,
} = require('./utils.js');

describe('filterTweets', () => {
  test('should return an array of filtered tweets', () => {
    const expected = [
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
    ];

    const actual = filterTweets([
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
    ]);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array when undefined is passed', () => {
    const expected = [];

    const actual = filterTweets(undefined);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array for an empty array of tweets', () => {
    const expected = [];

    const actual = filterTweets([]);

    expect(actual).toEqual(expected);
  });
});

describe('sortTweets', () => {
  test('should return an array of sorted tweets', () => {
    const expected = [
      {
        id: 300,
        likes: 6378,
        message: 'Kia was over-rated!!',
        username: 'Alice',
        hashtags: ['cars', 'kia', 'newcar'],
      },
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
    ];

    const actual = sortTweets([
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
    ]);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array when undefined is passed', () => {
    const expected = [];

    const actual = sortTweets(undefined);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array for an empty array of tweets', () => {
    const expected = [];

    const actual = sortTweets([]);

    expect(actual).toEqual(expected);
  });
});

describe('constructHashtags', () => {
  test('should return a string of hashtags for an array of hashtags', () => {
    const expected = '#cars #nissan #newcar';
    const actual = constructHashtags(['cars', 'nissan', 'newcar']);

    expect(actual).toEqual(expected);
  });

  test('should return an empty string when undefined is passed', () => {
    const expected = '';
    const actual = constructHashtags(undefined);

    expect(actual).toEqual(expected);
  });

  test('should return an empty string for an empty array of hashtags', () => {
    const expected = '';
    const actual = constructHashtags([]);

    expect(actual).toEqual(expected);
  });
});

describe('constructTitle', () => {
  test('should return a string of title for a given username', () => {
    const expected = 'Tweet from Alice';
    const actual = constructTitle('Alice');

    expect(actual).toEqual(expected);
  });

  test('should return an empty string when undefined is passed', () => {
    const expected = '';
    const actual = constructTitle(undefined);

    expect(actual).toEqual(expected);
  });
});

describe('transformTweets', () => {
  test('should return transformed tweets for an array of tweets', () => {
    const expected = [
      {
        id: 300,
        likes: 6378,
        message: 'Kia was over-rated!!',
        title: 'Tweet from Alice',
        hashtags: '#cars #kia #newcar',
      },
      {
        id: 121,
        likes: 52342,
        message: 'I love my new nissan!!',
        title: 'Tweet from Bob',
        hashtags: '#cars #nissan #newcar',
      },
    ];

    const actual = transformTweets([
      {
        id: 300,
        likes: 6378,
        message: 'Kia was over-rated!!',
        username: 'Alice',
        hashtags: ['cars', 'kia', 'newcar'],
      },
      {
        id: 121,
        likes: 52342,
        message: 'I love my new nissan!!',
        username: 'Bob',
        hashtags: ['cars', 'nissan', 'newcar'],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array when undefined is passed', () => {
    const expected = [];
    const actual = transformTweets(undefined);

    expect(actual).toEqual(expected);
  });

  test('should return an empty array for an empty array of tweets', () => {
    const expected = [];
    const actual = transformTweets([]);

    expect(actual).toEqual(expected);
  });
});

describe('calculateLikes', () => {
  test('should return total number of likes for an array of tweets', () => {
    const expected = 58720;

    const actual = calculateLikes([
      {
        id: 300,
        likes: 6378,
        message: 'Kia was over-rated!!',
        title: 'Tweet from Alice',
        hashtags: '#cars #kia #newcar',
      },
      {
        id: 121,
        likes: 52342,
        message: 'I love my new nissan!!',
        title: 'Tweet from Bob',
        hashtags: '#cars #nissan #newcar',
      },
    ]);

    expect(actual).toEqual(expected);
  });

  test('should return 0 when undefined is passed', () => {
    const expected = 0;
    const actual = calculateLikes(undefined);

    expect(actual).toEqual(expected);
  });

  test('should return 0 for an empty array of tweets', () => {
    const expected = 0;
    const actual = calculateLikes([]);

    expect(actual).toEqual(expected);
  });
});
