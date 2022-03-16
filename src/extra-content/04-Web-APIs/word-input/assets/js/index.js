const wordContainer = document.querySelector('#word-container');
const counterElement = document.querySelector('#counter');

const handleKeyPress = function (event) {
  // get the value of the key pressed
  const keyValue = event.key;

  const textContent = wordContainer.textContent + keyValue;
  counterElement.textContent = textContent.length;

  wordContainer.textContent = textContent;
  // set text content of div
};

document.addEventListener('keypress', handleKeyPress);
