// target HTML elements
const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// declare the initial value of counter to 0
let counter = 0;

const incrementCount = function () {
  counter += 1;
  renderCounter();
};

const decrementCount = function () {
  // decrement until 0
  if (counter > 0) {
    counter -= 1;
  }
  renderCounter();
};

const renderCounter = function () {
  countSpan.textContent = counter;
};

// add event listeners to the buttons
incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);
