const passwordBtnEl = $('#password-btn');
const passwordDisplayEl = $('#password-display');

const getPasswordCharacter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
};

const passwordGenerator = function (num) {
  let password = '';
  for (let i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
};

const generatePassword = function () {
  const newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
};

// add single click event listener to button
passwordBtnEl.on('click', generatePassword);
