const diffOfBiggestTwoNumbers = (numbers) => {
  // sort numbers in descending order
  const sortedNumbers = numbers.sort((a, b) => b - a);

  // get the 2 biggest numbers
  const num1 = sortedNumbers[0];
  const num2 = sortedNumbers[1];

  // calculate diff and return diff
  return num1 - num2;
};

console.log(diffOfBiggestTwoNumbers([4, 6, 10, 2]));
