// declare a function using function declaration
function equalityCheck(val1, val2) {
  if (val1 === val2) {
    return 'They are equal in type and value';
  } else if (val1 == val2) {
    return 'They are equal in value';
  } else {
    return 'The values are not equal';
  }
}

// declare a function using function expression
// var equalityCheck = function (val1, val2) {
//   if (val1 === val2) {
//     return 'They are equal in type and value';
//   } else if (val1 == val2) {
//     return 'They are equal in value';
//   } else {
//     return 'The values are not equal';
//   }
// };

// test for equal value and type
var result1 = equalityCheck(5, 5);
console.log(result1);

// test for equal value only
var result2 = equalityCheck('5', 5);
console.log(result2);

// test for not equal type or value
var result3 = equalityCheck(4, '5');
console.log(result3);
