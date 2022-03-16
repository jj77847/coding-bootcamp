const { transformTwitterData } = require('.');
describe('transformTwitterData', () => {
  test('should return transformed twitter data for an array of tweets', () => {
    const expected = {
      tweets: [
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
      ],
      likes: 58720,
    };

    const actual = transformTwitterData({
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
    });

    expect(actual).toEqual(expected);
  });

  test('should return transformed twitter data for invalid tweets', () => {
    const expected = {
      tweets: [],
      likes: 0,
    };

    const actual = transformTwitterData({});

    expect(actual).toEqual(expected);
  });
});
