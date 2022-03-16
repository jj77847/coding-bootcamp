const ulElement = document.querySelector('#users');

const renderUsers = function (users) {
  const constructAndAppendToList = function (user) {
    // get username
    const username = user.login;

    // create a list item (li)
    const listElement = document.createElement('li');
    listElement.textContent = username;

    // append it to ul ??
    ulElement.appendChild(listElement);
  };

  // iterate over users
  users.forEach(constructAndAppendToList);
};

const onLoad = function () {
  const handleResponse = function (response) {
    if (response.status !== 200) {
      throw new Error('something went wrong');
    }
    return response.json();
  };

  const handleError = function (error) {
    console.log(error);
    // redirect to error page
  };

  // get data from API
  fetch('https://api.github.com/users')
    .then(handleResponse)
    .then(renderUsers)
    .catch(handleError);
};

window.addEventListener('load', onLoad);
