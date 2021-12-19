// target HTML elements
const fetchButton = document.getElementById('fetch-button');
const reposList = document.getElementById('repos-list');
const errorMessageContainer = document.getElementById('error-msg');

// event hander function for button click
const renderRepos = function () {
  // get data from response
  const getDataFromResponse = function (response) {
    // check if the response status is 200
    if (response.status !== 200) {
      throw new Error('Something went wrong!!');
    }
    return response.json();
  };

  // get list of repos from response
  const getReposFromData = function (repos) {
    // callback function for map
    const getRepo = function (repo) {
      return {
        name: repo.name,
        url: repo.html_url,
      };
    };

    // map through the repos and return the array of our repos
    return repos.map(getRepo);
  };

  // for each repo create and append list item to ul
  const createAndAppendRepos = function (repos) {
    const constructAndAppend = function (repo) {
      // create li
      const li = document.createElement('li');

      // creat a tag
      const link = document.createElement('a');
      link.setAttribute('href', repo.url);
      link.setAttribute('target', '_blank');
      link.textContent = repo.name;

      // append a to li
      li.append(link);

      // append li to ul
      reposList.appendChild(li);
    };
    // use foreach
    repos.forEach(constructAndAppend);
  };

  const handleError = function (error) {
    // get error message
    const errorMessage = error.message;

    // set the text content to the error message
    errorMessageContainer.textContent = errorMessage;
  };

  // get data from API
  fetch('https://api.github.com/users/surajverma2587/repos')
    .then(getDataFromResponse)
    .then(getReposFromData)
    .then(createAndAppendRepos)
    .catch(handleError);
};

// add click event listener
fetchButton.addEventListener('click', renderRepos);
