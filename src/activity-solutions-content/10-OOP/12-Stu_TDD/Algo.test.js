const Algo = require('./Algo');

describe('Algo', () => {
  describe('reverse', () => {
    test('should reverse a given string', () => {
      const algo = new Algo();

      const expected = 'rab oof';
      const actual = algo.reverse('foo bar');

      expect(actual).toEqual(expected);
    });

    test('should reverse an empty string', () => {
      const algo = new Algo();

      const expected = '';
      const actual = algo.reverse('');

      expect(actual).toEqual(expected);
    });

    test('should return an empty string when no arguments are passed', () => {
      const algo = new Algo();

      const expected = '';
      const actual = algo.reverse();

      expect(actual).toEqual(expected);
    });
  });

  describe('isPalindrome', () => {
    test('should return true for "noon"', () => {
      const algo = new Algo();

      const expected = true;
      const actual = algo.isPalindrome('noon');

      expect(actual).toEqual(expected);
    });

    test('should return false for "moon"', () => {
      const algo = new Algo();

      const expected = false;
      const actual = algo.isPalindrome('moon');

      expect(actual).toEqual(expected);
    });

    test('should return false when no arguments are passed', () => {
      const algo = new Algo();

      const expected = false;
      const actual = algo.isPalindrome();

      expect(actual).toEqual(expected);
    });
  });

  describe('capitalise', () => {
    test('should return capitalised string when lowercase', () => {
      const algo = new Algo();

      const expected = 'Foo Bar';
      const actual = algo.capitalise('foo bar');

      expect(actual).toEqual(expected);
    });

    test('should return capitalised string when uppercase', () => {
      const algo = new Algo();

      const expected = 'Foo Bar';
      const actual = algo.capitalise('FOO BAR');

      expect(actual).toEqual(expected);
    });

    test('should return capitalised string when mixed case', () => {
      const algo = new Algo();

      const expected = 'Foo Bar';
      const actual = algo.capitalise('fOo BaR');

      expect(actual).toEqual(expected);
    });

    test('should return an empty string when an empty string is passed', () => {
      const algo = new Algo();

      const expected = '';
      const actual = algo.capitalise('');

      expect(actual).toEqual(expected);
    });

    test('should return an empty string when no arguments are passed', () => {
      const algo = new Algo();

      const expected = '';
      const actual = algo.capitalise();

      expect(actual).toEqual(expected);
    });
  });
});
