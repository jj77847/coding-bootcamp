// target form
const formElement = document.querySelector('#login-form');

// target form inputs
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// target the feedback message
const msgDiv = document.querySelector('#msg');

// target the last registered user elements
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');

const renderLastRegisteredUser = function (lastRegisteredUser) {
  userEmailSpan.textContent = lastRegisteredUser.email;
  userPasswordSpan.textContent = lastRegisteredUser.password;
};

const getDataFromLocalStorage = function () {
  // get data from LS by key name
  const data = JSON.parse(localStorage.getItem('lastRegisteredUser'));
  if (!data) {
    // set local storage with default value {} return {}
    localStorage.setItem('lastRegisteredUser', JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from local storage
    return data;
  }
};

const renderError = function (errorMessage) {
  msgDiv.textContent = errorMessage;
  msgDiv.style.visibility = 'visible';
};

// on submit event handler function
const handleSubmit = function (event) {
  event.preventDefault();

  // get data from local storage
  const lastRegisteredUser = getDataFromLocalStorage();

  // get the user input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // validation
  if (!email) {
    // render error message
    renderError('Please enter a valid email');
    return;
  }

  if (!password) {
    // render error message
    renderError('Please enter a valid password');
    return;
  }

  // make msg div invisible
  msgDiv.style.visibility = 'hidden';
  emailInput.value = '';
  passwordInput.value = '';

  // update the data from local storage
  lastRegisteredUser.email = email;
  lastRegisteredUser.password = password;

  // set local storage with updated data
  localStorage.setItem(
    'lastRegisteredUser',
    JSON.stringify(lastRegisteredUser)
  );

  // render last registered user with local storage data
  renderLastRegisteredUser(lastRegisteredUser);
};

// on load event handler function
const handleLoad = function () {
  // get data from local storage
  const lastRegisteredUser = getDataFromLocalStorage();

  // render only if object is not empty
  if (lastRegisteredUser.email && lastRegisteredUser.password) {
    // render last registered user with local storage data
    renderLastRegisteredUser(lastRegisteredUser);
  }
};

// add event listener on form for submit event
formElement.addEventListener('submit', handleSubmit);

// add event listener for window load
window.addEventListener('load', handleLoad);
