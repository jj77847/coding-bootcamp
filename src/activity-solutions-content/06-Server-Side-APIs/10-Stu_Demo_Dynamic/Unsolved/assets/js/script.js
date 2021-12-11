const fetchButton = $('#fetch-button');
const usersContainer = $('#users');

// async-await
const getDataFromApi = async function (url) {
  // fetch response from url
  const response = await fetch(url);

  // extract the data from the response using the json method
  const data = await response.json();

  // return data
  return data;
};

const constructAndAppendCard = function (user) {
  // construct the card
  const card = `<div class="user-item">
    <div>${user.login}</div>
    <div>
      <a href=${user.html_url} target="_blank"><i class="fab fa-github"></i></a>
    </div>
  </div>`;

  // append card to usersContainer
  usersContainer.append(card);
};

// callback function for click event
const renderUsers = async function () {
  // get data from API
  const users = await getDataFromApi('https://api.github.com/users?per_page=5');

  // for each user construct and append user card to users div
  users.forEach(constructAndAppendCard);
};

// add event listener for button click
fetchButton.on('click', renderUsers);
