const addGreetingMessage = (name) => {
  let message = 'How are you?';

  if (name.length > 0) {
    let message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

const calloutCounter = () => {
  const callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    const callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let j = 0; j < line.length; j++) {
      const element = line[j];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
