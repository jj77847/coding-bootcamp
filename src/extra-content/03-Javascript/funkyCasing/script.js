/**
 * Funky case the word "I Love JavaScript" to "i lOvE JaVaScRiPt"
 */

// declare the string
const myString = 'I Love JavaScript';
console.log(myString);

// convert string to array
const stringArray = myString.split('');

// declare array for results
const results = [];

// run for loop
for (let i = 0; i < stringArray.length; i++) {
  // get the element from the array
  const element = stringArray[i];

  // if index is even
  if (i % 2 === 0) {
    // convert element to lowercase
    const transformedElement = element.toLowerCase();
    results.push(transformedElement);
  } else {
    // convert element to uppercase
    results.push(element.toUpperCase());
  }
}

// convert array to string
const resultsString = results.join('');

console.log(resultsString);
