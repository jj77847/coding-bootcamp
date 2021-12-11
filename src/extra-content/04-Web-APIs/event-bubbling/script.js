// target the element
const questionDiv = document.querySelector('#question-container');

// declare the handler function
const handleClick = function (event) {
  // check if click is from button
  const currentTarget = event.currentTarget;
  const target = event.target;

  // console.log('currentTarget', currentTarget);
  // console.log('target', target.getAttribute('class'));

  if (target.getAttribute('class') === 'answer') {
    console.log(target.getAttribute('data-message'));
    console.log(currentTarget.getAttribute('data-main'));
  }
};

// add event listener
questionDiv.addEventListener('click', handleClick);
