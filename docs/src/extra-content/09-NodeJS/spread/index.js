const names = ['bob', 'john', 'carol'];

const people = ['tom', 'mary'];

const allPeople = [...people, ...names];
console.log(allPeople);

const user = {
  name: 'Bob',
  age: 30,
};

const location = {
  city: 'London',
  country: 'UK',
};

const loggedInUser = {
  ...user,
  ...location,
};

console.log(loggedInUser);

const { name, age, ...bio } = loggedInUser;
console.log(name);
console.log(bio);

const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  color: 'black',
};

const carArray = Object.entries(car);
console.log(carArray);

carArray.forEach(([key, value]) => {
  console.log(key, value);
});
