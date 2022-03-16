const originalArray = [1, 3, 2, 5, 10];

const isEven = (number) => number % 2 === 0;

const evenNumbers = originalArray.filter(isEven);

console.log(evenNumbers);
console.log(originalArray);

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number !== 1;
};

const primeArray = originalArray.filter(isPrime);

console.log(primeArray);
console.log(originalArray);

const isGreaterThan5 = (number) => number > 5;

const moreThan5Array = originalArray.filter(isGreaterThan5);

console.log(moreThan5Array);
console.log(originalArray);
