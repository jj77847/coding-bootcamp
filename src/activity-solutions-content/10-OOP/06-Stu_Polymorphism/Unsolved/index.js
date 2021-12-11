// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    if (!grade) {
      throw new Error('no grade provided');
    }

    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof grade === 'number') {
      // if in range between 95 and 100 -> A+
      if (inRange(grade, 95, 100)) return 'A+';
      // if in range between 90 and 94 -> A
      if (inRange(grade, 90, 94)) return 'A';
      // if in range between 85 and 89 -> B+
      if (inRange(grade, 85, 89)) return 'B+';
      // if in range between 80 and 84 -> B
      if (inRange(grade, 80, 84)) return 'B';
      // if in range between 75 and 79 -> C+
      if (inRange(grade, 75, 79)) return 'C+';
      // if in range between 70 and 74 -> C
      if (inRange(grade, 70, 74)) return 'C';
      // if in range between 65 and 69 -> D+
      if (inRange(grade, 65, 69)) return 'D+';
      // if in range between 60 and 64 -> D
      if (inRange(grade, 60, 64)) return 'D';
      // if in range between 0 and 59 -> F
      return 'F';
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof grade === 'string') {
      if (grade.toUpperCase() === 'A+') return '95 - 100';
      if (grade.toUpperCase() === 'A') return '90 - 94';
      if (grade.toUpperCase() === 'B+') return '85 - 89';
      if (grade.toUpperCase() === 'B') return '80 - 84';
      if (grade.toUpperCase() === 'C+') return '75 - 79';
      if (grade.toUpperCase() === 'C') return '70 - 74';
      if (grade.toUpperCase() === 'D+') return '65 - 69';
      if (grade.toUpperCase() === 'D') return '60 - 64';
      return '0 - 59';
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade(95):', John.displayGrade(95));
console.log('John.displayGrade("B"):', John.displayGrade('B'));
