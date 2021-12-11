const originalArray = [1, 3, 2, 5, 10];

const double = (number) => number * 2;

const doubledArray = originalArray.map(double);

console.log(doubledArray);
console.log(originalArray);

const triple = (number) => number * 3;

const tripledArray = originalArray.map(triple);

console.log(tripledArray);
console.log(originalArray);

const oddOrEven = originalArray.map((number) =>
  number % 2 === 0 ? 'even' : 'odd'
);

console.log(oddOrEven);
console.log(originalArray);
