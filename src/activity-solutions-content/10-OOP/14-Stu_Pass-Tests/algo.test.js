const Algo = require('./Algo');

describe('Algo', () => {
  let algo;

  beforeEach(() => {
    algo = new Algo();
  });

  describe('reverse', () => {
    test('should reverse a given string', () => {
      expect(algo.reverse('foo bar')).toEqual('rab oof');
    });

    test('should reverse an empty string', () => {
      expect(algo.reverse('')).toEqual('');
    });

    test('should return an empty string when no arguments are passed', () => {
      expect(algo.reverse()).toEqual('');
    });
  });

  describe('isPalindrome', () => {
    test('should return true for "noon"', () => {
      expect(algo.isPalindrome('noon')).toEqual(true);
    });

    test('should return false for "moon"', () => {
      expect(algo.isPalindrome('moon')).toEqual(false);
    });

    test('should return false when no arguments are passed', () => {
      expect(algo.isPalindrome()).toEqual(false);
    });
  });

  describe('capitalise', () => {
    test('should return capitalised string when lowercase', () => {
      expect(algo.capitalise('foo bar')).toEqual('Foo Bar');
    });

    test('should return capitalised string when uppercase', () => {
      expect(algo.capitalise('FOO BAR')).toEqual('Foo Bar');
    });

    test('should return capitalised string when mixed case', () => {
      expect(algo.capitalise('fOo BaR')).toEqual('Foo Bar');
    });

    test('should return an empty string when an empty string is passed', () => {
      expect(algo.capitalise('')).toEqual('');
    });

    test('should return an empty string when no arguments are passed', () => {
      expect(algo.capitalise()).toEqual('');
    });
  });
});
