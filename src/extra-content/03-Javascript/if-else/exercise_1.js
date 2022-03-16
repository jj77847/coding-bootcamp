/**
 * Write a function that accepts someone's age and
 * determines if they are over the legal age
 * If they are 18 and over the function
 * should console log 'No Challenge Required'
 * If they are not then the function
 * should console log 'Challenge Required'
 *
 * NOTE: use the if/else statement
 */

const age = '20';

if (age > 0 && typeof age === 'number') {
  // use if else
  if (age >= 18) {
    // 18 and over
    console.log('No Challenge Required');
  } else {
    // under 18
    console.log('Challenge Required');
  }
} else {
  console.log('Please enter a valid age');
}
