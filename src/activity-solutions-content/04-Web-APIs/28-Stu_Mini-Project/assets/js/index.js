const startBtn = document.getElementById('start-btn');
const mainElement = document.getElementById('main');

let timerValue = 60;
const word = 'hello';
const guesses = [];

// convert word to array
const wordArray = word.split('');

let remainingValues = wordArray.length;

// function to remove the start container
const removeStartContainer = function () {
  const startContainer = document.getElementById('start-container');

  startContainer.remove();
};

const renderTimer = function () {
  // construct timer
  const h2Element = document.createElement('h2');
  h2Element.setAttribute('class', 'timer');
  h2Element.setAttribute('id', 'timer-container');

  const spanElement = document.createElement('span');
  spanElement.setAttribute('id', 'timer');
  spanElement.textContent = timerValue;

  const text1 = 'Time remaining: ';
  const text2 = ' seconds';

  h2Element.append(text1, spanElement, text2);

  // append h2 to main
  mainElement.appendChild(h2Element);
};

const renderBlankDivs = function (word) {
  // construct word-container div (parent)
  const containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', 'word-container');
  containerDiv.setAttribute('class', 'word-container');

  const createAndAppendLetter = function (_, index) {
    // construct letter div
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute('class', 'letter');
    letterDiv.setAttribute('data-index', index);

    // append to parent
    containerDiv.appendChild(letterDiv);
  };

  // for each letter in word array create and append div to parent
  wordArray.forEach(createAndAppendLetter);

  // append container to main
  mainElement.appendChild(containerDiv);
};

const renderLettersGuessed = function () {
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute('id', 'letters-container');
  parentDiv.setAttribute('class', 'letters-container');

  const h3Element = document.createElement('h3');
  h3Element.textContent = 'Your Guesses';

  const ulElement = document.createElement('ul');
  ulElement.setAttribute('id', 'letters-list');
  ulElement.setAttribute('class', 'letters-list');

  parentDiv.append(h3Element, ulElement);

  mainElement.appendChild(parentDiv);
};

const removeAll = function () {
  // remove timer
  document.getElementById('timer-container').remove();

  // remove blank divs
  document.getElementById('word-container').remove();

  // remove letters guessed
  document.getElementById('letters-container').remove();
};

const renderGameOver = function () {
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'game-container');
  divElement.setAttribute('class', 'game-container');
  divElement.textContent = 'Game Over';

  mainElement.appendChild(divElement);
};

const renderGameSuccess = function () {
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'game-container');
  divElement.setAttribute('class', 'game-container');
  divElement.textContent = 'You Win';

  mainElement.appendChild(divElement);
};

const startTimer = function () {
  const timerSpan = document.getElementById('timer');

  const timerTick = function () {
    // reduce timer value
    timerValue -= 1;

    // update span text with new timer value
    timerSpan.textContent = timerValue;

    if (remainingValues === 0) {
      // stop timer
      clearInterval(timer);

      // remove all elements
      removeAll();

      // render game over container
      renderGameSuccess();
    }

    // if timer has ended
    if (timerValue === 0) {
      // stop timer
      clearInterval(timer);

      // remove all elements
      removeAll();

      // render game over container
      renderGameOver();
    }
  };

  const timer = setInterval(timerTick, 1000);
};

const createAndAppendLi = function (letter, icon) {
  const liElement = document.createElement('li');
  liElement.textContent = icon + ' ' + letter;

  // append to parent
  document.getElementById('letters-list').appendChild(liElement);
};

const handleKeyDown = function (event) {
  // get key and convert to lowercase
  const key = event.key.toLowerCase();

  // verify if key is alphabet
  const validKeys = 'abcdefghijklmnopqrstuvwxyz';

  const isValid = validKeys.includes(key);

  if (isValid) {
    // check if word contains letter
    const hasLetter = wordArray.includes(key);

    if (guesses.indexOf(key) === -1) {
      guesses.push(key);

      if (hasLetter) {
        // update letter guessed
        createAndAppendLi(key, '✔');

        const indexes = [];

        const callback = function (each, index) {
          if (each === key) {
            indexes.push(index);
          }
        };

        wordArray.forEach(callback);

        const updateBlankDiv = function (each) {
          // get the div by data-index
          const divElement = document.querySelector(
            '[data-index="' + each + '"]'
          );
          // update text
          divElement.textContent = key;
        };

        // iterate over indexes and update div with letter pressed
        indexes.forEach(updateBlankDiv);

        remainingValues -= indexes.length;
      } else {
        createAndAppendLi(key, '✘');
      }
    }
  }
};

// callback function to start game when button is clicked
const startGame = function () {
  // remove the start container
  removeStartContainer();

  // render timer container
  renderTimer();

  // render the blank divs
  renderBlankDivs(word);

  // render letters guessed div
  renderLettersGuessed();

  // start timer
  startTimer();

  // add key down event listener
  document.addEventListener('keydown', handleKeyDown);
};

// add start btn click even listener
startBtn.addEventListener('click', startGame);
