const math = require('./maths');

const operation = process.argv[2];
const num1 = process.argv[3];
const num2 = process.argv[4];

const isNumbers = (num1, num2) => {
  const number1 = Number(num1);
  const number2 = Number(num2);

  return !isNaN(number1) && !isNaN(number2);
};

if (isNumbers(num1, num2) && operation) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (operation === 'sum') {
    const result = math.sum(number1, number2);
    console.log(`RESULT: ${num1} + ${num2} = ${result}`);
  } else if (operation === 'difference') {
    const result = math.difference(number1, number2);
    console.log(`RESULT: ${num1} - ${num2} = ${result}`);
  } else if (operation === 'product') {
    const result = math.product(number1, number2);
    console.log(`RESULT: ${num1} * ${num2} = ${result}`);
  } else if (operation === 'quotient') {
    const result = math.quotient(number1, number2);
    console.log(`RESULT: ${num1} / ${num2} = ${result}`);
  } else {
    console.log(
      'Invalid operation. Must be sum, difference, product or quotient'
    );
  }
} else {
  console.log('Invalid arguments. Must have operation, number 1 and number 2');
}
