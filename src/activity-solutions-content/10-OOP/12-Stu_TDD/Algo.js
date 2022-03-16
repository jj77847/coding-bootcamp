class Algo {
  constructor() {}

  reverse(string = '') {
    return [...string].reverse().join('');
  }

  isPalindrome(string) {
    return string === this.reverse(string);
  }

  capitalise(string = '') {
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
  }
}

module.exports = Algo;
