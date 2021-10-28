// declare an array of students
var students = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];

// get the number of students
var numberOfStudents = students.length;

// console log the number of students
console.log(numberOfStudents);

// add a for loop to iterate over students
for (var index = 0; index < numberOfStudents; index++) {
  // get value from students using index
  var student = students[index];
  // console log message
  console.log('Great to see you, ' + student + '!');
}

// add a while loop to iterate over students
var i = 0;

while (i < numberOfStudents) {
  // get value from students using i
  var student = students[i];
  // console log message
  console.log('Great to see you, ' + student + '!');
  // increment i by 1
  // same as i = i + 1;
  i += 1;
}
