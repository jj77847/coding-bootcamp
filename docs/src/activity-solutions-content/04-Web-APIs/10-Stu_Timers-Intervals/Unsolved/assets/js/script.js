const timerEl = document.getElementById('countdown');
const mainEl = document.getElementById('main');

const message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';

const words = message.split(' '); // ['Some', 'say', 'the', 'world', ... , 'suffice.']

let index = 0;

// count down
// timer starting from 5 4 3 2 1 0

const startCountDown = function () {
  let count = 5;

  // declare timer callback function
  const countDown = function () {
    // display the count value in HTML
    timerEl.textContent = count + ' seconds remaining';

    // decrement the count value
    count--;

    if (count < -1) {
      // kill timer
      clearInterval(timer);
      timerEl.textContent = '';

      displayMessage();
    }
  };

  // set interval for 1s
  const timer = setInterval(countDown, 1000);
};

// display each message from the words array at an interval of 500ms

const displayMessage = function () {
  // declare the timer callback function
  const callback = function () {
    if (index < words.length) {
      mainEl.textContent = words[index];
      index++;
    } else {
      mainEl.textContent = '';
    }
  };

  // set interval for 500ms
  const timer = setInterval(callback, 200);
};

startCountDown();
