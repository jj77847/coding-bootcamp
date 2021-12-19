const Vehicle = require('./vehicle');

class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, 'beep');

    this.color = color;
    this.passengers = passengers;
  }

  checkPassengers() {
    const roomLeft = 4 - this.passengers.length;
    if (roomLeft > 0) {
      console.log(`You have room for ${roomLeft} passengers.`);
    } else {
      console.log('This car has only 4 spaces.');
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
