/**
 * Prompt the user for a number between 1 and 7 (both including)
 * 1: "Today is Sunday!"
 * 2: "Today is Monday!"
 * 3: "Today is Tuesday!"
 * 4: "Today is Wednesday!"
 * 5: "Today is Thursday!"
 * 6: "Today is Friday!"
 * 7: "Today is Saturday!"
 * 100: "Please enter a valid number between 1 and 7"
 */

// get the number from the user
const dayNumber = prompt('Enter a number:');

// parse the string to a number
const number = parseInt(dayNumber);

// check if number is between 1 and 7 else log
if (number === 1) {
  console.log('Today is Sunday!');
} else if (number === 2) {
  console.log('Today is Monday!');
} else if (number === 3) {
  console.log('Today is Tuesday!');
} else if (number === 4) {
  console.log('Today is Wednesday!');
} else if (number === 5) {
  console.log('Today is Thursday!');
} else if (number === 6) {
  console.log('Today is Friday!');
} else if (number === 7) {
  console.log('Today is Saturday!');
} else {
  console.log('Please enter a valid number between 1 and 7');
}
