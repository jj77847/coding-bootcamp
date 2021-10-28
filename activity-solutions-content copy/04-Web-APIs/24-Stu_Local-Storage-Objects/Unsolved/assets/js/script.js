// target form input elements
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// target the form element
const formElement = document.querySelector('#sign-up-form');

// target error div element
const errorDivElement = document.querySelector('#msg');

const onSubmit = function (event) {
  event.preventDefault();

  // get all data from input elements
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // check if all form data is complete
  if (firstName && lastName && email && password) {
    // clear form elements
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    // clear error div content
    errorDivElement.textContent = '';

    // construct the object in JS to store in LS
    const userObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // write data in to LS
    localStorage.setItem('user', JSON.stringify(userObject));
  } else {
    errorDivElement.textContent = 'Please complete all the fields!';
  }
};

// add submit event listener
formElement.addEventListener('submit', onSubmit);
