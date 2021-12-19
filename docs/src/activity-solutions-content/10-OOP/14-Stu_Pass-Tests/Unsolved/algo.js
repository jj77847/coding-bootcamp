function Algo() {}

Algo.prototype.reverse = function (string = '') {
  return [...string].reverse().join('');
};

Algo.prototype.isPalindrome = function (string) {
  return string === this.reverse(string);
};

Algo.prototype.capitalise = function (string = '') {
  return string
    ? string
        .toLowerCase()
        .split(' ')
        .map((word) => {
          const [firstLetter, ...rest] = word;
          return [firstLetter.toUpperCase(), ...rest].join('');
        })
        .join(' ')
    : string;
};

module.exports = Algo;
