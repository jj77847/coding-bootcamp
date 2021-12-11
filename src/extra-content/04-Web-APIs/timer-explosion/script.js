// declare timer value
let counter = 3;

// target all elements
const counterSpan = document.querySelector('#counter');
const counterDiv = document.querySelector('#counter-div');
const mainElement = document.querySelector('#main');

const renderImage = function () {
  counterDiv.remove();
  const img = document.createElement('img');
  img.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1632936865715-a905d572a98a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  );
  mainElement.append(img);
};

const timerTick = function () {
  if (counter < 0) {
    console.log('BOOM');
    // kill the timer
    clearInterval(timer);
    renderImage();
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};

const timer = setInterval(timerTick, 1000);
