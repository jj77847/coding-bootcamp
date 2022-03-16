const { add } = require('./math');

describe('add', () => {
  test('should return 5 for input 2 and 3', () => {
    const expected = 5;
    const actual = add(2, 3);

    expect(actual).toEqual(expected);
  });

  test('should return -1 for input 2 and -3', () => {
    const expected = -1;
    const actual = add(2, -3);

    expect(actual).toEqual(expected);
  });

  test('should return 5 for input 5 and 0', () => {
    const expected = 5;
    const actual = add(5, 0);

    expect(actual).toEqual(expected);
  });

  test('should return 5 for input 0 and 5', () => {
    const expected = 50;
    const actual = add(0, 5);

    expect(actual).toEqual(expected);
  });
});
