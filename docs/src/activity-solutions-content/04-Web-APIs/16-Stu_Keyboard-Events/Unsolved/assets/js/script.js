// target the HTML elements

const keyPressedSpan = document.querySelector('#key');
const keyCodeSpan = document.querySelector('#code');
const eventStatusSpan = document.querySelector('#status');

// callback function for key down
const handleKeyDown = function (event) {
  // get key pressed data from the event object
  const keyPressed = event.key;
  const keyCode = event.code;

  // set text content of the spans
  keyPressedSpan.textContent = keyPressed;
  keyCodeSpan.textContent = keyCode;
  eventStatusSpan.textContent = 'KEYDOWN Event';
};

// callback function for key up
const handleKeyUp = function (event) {
  eventStatusSpan.textContent = 'KEYUP Event';
};

// add key down event listener
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
