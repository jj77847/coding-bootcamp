// require math modules
// const math = require('./math');
const {
  add: addition,
  sub: subtraction,
  mul: multiplication,
  div: division,
} = require('./math');

// require error modules
const displayError = require('./error');

try {
  const res1 = addition(1, 3);
  console.log(res1);
  const res2 = subtraction(4, 3);
  console.log(res2);
  const res3 = multiplication(3, 3);
  console.log(res3);
  const res4 = division(15, 3);
  console.log(res4);
  const res5 = division(1, 0);
  console.log(res5);
} catch (error) {
  const errorMessage = displayError(error);
  console.log(errorMessage);
}
