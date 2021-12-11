const funnyCase = (string) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }

  return newString;
};

console.log(funnyCase("You can't just do whatever you want all the time!"));

const map = (arr, cb) => {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    result.push(cb(currentElement, index));
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = map(numbers, (element) => {
  return element * 2;
});

console.log(doubled);

const filter = (arr, cb) => {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];

    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }

  return result;
};

const evenNumbers = filter(numbers, (currentElement) => {
  return currentElement % 2 === 0;
});

console.log(evenNumbers);

const netflixQueue = {
  queue: [
    'Mr. Nobody',
    'The Matrix',
    'Eternal Sunshine of the Spotless Mind',
    'Fight Club',
  ],
  watchMovie: function () {
    this.queue.pop();
  },
  addMovie: function (movie) {
    this.queue.unshift(movie);
  },
  printQueue: function () {
    let list = '';

    for (let i = this.queue.length - 1; i >= 0; i--) {
      const currentMovie = this.queue[i];
      list += this.queue.length - i + '. ' + currentMovie + '\n';
    }

    console.log(list);
  },
};

console.log('Printing movie queue!\n');
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log('\nWatched a movie!\n');
console.log('Printing movie queue!\n');
netflixQueue.printQueue();
console.log('\nAdding a movie!\n');
netflixQueue.addMovie('Black Swan');
console.log('Printing movie queue!\n');
netflixQueue.printQueue();
