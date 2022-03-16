const grades = [56, 78, 99, 85];

const findAverage = (accumulator, currentValue, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + currentValue) / array.length;
  }
  return accumulator + currentValue;
};

const gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);
