## Console Log

```javascript
console.log('Hello');
```

```javascript
console.log(myVariableName);
```

```javascript
console.log('counter', myCounterVariable);
```

## Variables

- How to declare them?

```javascript
var myVariableName = 'hello';

let counter = 0;

const myVariableName = 'hello';
```

If you get this error `Uncaught TypeError: Assignment to constant variable.` it means that you are trying to reassign the `const` variable. In this case it should be a `let` declaration.

- How to get the values from the variables?

By reference (refer the variable by its name and it will give you the value it holds)

If you see this error `Uncaught ReferenceError: hello is not defined` it means that you are trying to get the value of a variable that is not declared.

## Data Types

- string (wrap within quotes)
- number
- boolean
- undefined (falsy)
- null (falsy)
- object
- symbol

## Comparators

- Logical comparators (&&, ||, !)
- Assignment comparators (==, ===, !=, !==)

## Conditional Statements

- `if` for only one branch in your code
- `if/else` for two branches in your code
- `if/else if` for multiple branches in your code

```javascript
if (true) {
  // code to execute when true condition
}

if (true) {
  // code to execute when true condition
} else {
  // code to execute when false condition
}

if (true) {
  // code to execute when true condition
} else if (x < 50) {
  // code to execute when previous condition is false
} else if (true) {
  // code to execute when previous condition is false
} else {
  // code to execute when all conditions are false
}
```

## Arrays

- Lists of data types in JS

```javascript
const arr = [1, 2, 3, 4];

const arr = ['1', '2', '3', '4'];

const arr = [1, '2', 3, '4'];

const arr = [
  ['a', 'b', 'c'],
  [1, 2, 3],
  ['X', 'Y', 'Z'],
];
```

- How to declare an array?

```javascript
const emptyArrayName = []; // this is an empty array

const arrayName = []; // values within square brackets
```

- How to access to an element in an array?

You can access elements in an array using the index number (always starting from 0)

- by index number

```javascript
const arrName = [1, 2, 3];

console.log(arrName[indexNumber]);
```

- pop

```javascript
arrName.pop();
```

- How to insert an element in to an array

  - by index number

```javascript
arrName[indexNumber] = yourValue;
```

- add an extra element

```javascript
arrName.push(yourValue);
```

- How to determine the size of the array

```javascript
arrName.length;
```

## Iterators

### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
  // code for each iteration here
}
```

### While Loop

```javascript
let i = 0;
while (true) {
  // code for each iteration here
  i++;
}
```

## Functions

- Function Declaration

```javascript
function functionName() {
  // code for function here
  return;
}
```

- Function Expression

```javascript
const functionName = function (num1, num2) {
  // code for function here
  return;
};
```

### Steps

- declare a function
- prep the function (define your function parameters)
- return from your function

### How to call/invoke/execute a function?

- call function by its name with parentheses
- if the function expects data to be passed then insert the data (arguments) within the parentheses
- most time you want to store the return value of the function in a variable

```javascript
functionName();

functionName(1, 2);

const result = getResult(2, 4);
```

## Objects

- How to declare an object?

```javascript
const objName = {
  yourKeyName: 'some value here',
  differentKeyName: 'some other value here',
};
```

- How to get from object?

use the DOT Notation to get the value by giving the key name within an object.

`objName.keyName`

```javascript
const obj = {
  name: 'Bob',
  age: 30,
};

// to get age
const age = obj.age;
```

- How to set or insert value in an object?

use the DOT notation to access the object and set the value for a given key

```javascript
const obj = {
  name: 'Bob',
  age: 30,
};

// set age to 40
obj.age = 40;

// set email in object
obj.email = 'bob@email.com';
```

- BRACKET Notation

When the name of the key is stored in a variable then use the bracket notation to access or set the value within an object.

```javascript
const newKey = 'age';

const obj = {
  name: 'Bob',
  age: 30,
};

// get the value of newKey
const result = obj[newKey];

// set the value of newKey
obj[newKey] = 50;
```

## Methods

Functions in an object are called as methods.

```javascript
const user = {
  firstName: 'Bob',
  lastName: 'Smith',
  greet: function () {
    // this is a method of the user object
    // display a welcome message
  },
};
```
