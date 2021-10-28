// declare the students array
var students = ['Alice', 'Bob', 'Carol', 'Dave'];

// calculate the length
var numberOfStudents = students.length;

// console log the length
console.log(numberOfStudents);

// target the first element in array
var firstElement = students[0];
// console log message
console.log('Welcome to the class ' + firstElement);

// target the second element in array
var secondElement = students[1];
// console log message
console.log('Welcome to the class ' + secondElement);

// target the third element in array
var thirdElement = students[2];
// console log message
console.log('Welcome to the class ' + thirdElement);

// target the fourth element in array
var fourthElement = students[3];
// console log message
console.log('Welcome to the class ' + fourthElement);

students[0] = 'Paul';

if (students[0] !== 'Alice') {
  console.log(students[0] + ' is in class');
}
