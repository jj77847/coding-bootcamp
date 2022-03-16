const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mul = (num1, num2) => num1 * num2;

const div = (num1, num2) => {
  if (num2 === 0) {
    throw new Error('Cannot divide by 0');
  }
  return num1 / num2;
};

// export multiple functions
// named exports
// module.exports = {
//   add: add,
//   sub: sub,
//   mul: mul,
//   div: div,
// };

// object short-hand
module.exports = {
  add,
  sub,
  mul,
  div,
};
