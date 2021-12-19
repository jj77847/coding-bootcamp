const mathObjectCreator = (num1, num2) => {
  const myMathObj = Object.create(mathStore);

  myMathObj.num1 = num1;
  myMathObj.num2 = num2;

  return myMathObj;
};

const mathStoreCreator = () => {
  const add = function () {
    return this.num1 + this.num2;
  };
  const subtract = function () {
    return this.num1 - this.num2;
  };
  const multiply = function () {
    return this.num1 * this.num2;
  };
  const divide = function () {
    return this.num1 / this.num2;
  };
  const modulus = function () {
    return this.num1 % this.num2;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
    modulus,
  };
};

const mathStore = mathStoreCreator();

const user1 = mathObjectCreator(20, 4);
const user2 = mathObjectCreator(50, 10);

console.log("USER 1 RESULTS");
console.log(user1);
console.log(user1.add());
console.log(user1.subtract());
console.log(user1.multiply());
console.log(user1.divide());
console.log(user1.modulus());

console.log("USER 2 RESULTS");
console.log(user2);
console.log(user2.add());
console.log(user2.subtract());
console.log(user2.multiply());
console.log(user2.divide());
console.log(user2.modulus());
