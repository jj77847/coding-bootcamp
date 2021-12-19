// target all HTML elements
const userFormEl = document.querySelector('#user-form');
const languageButtonsEl = document.querySelector('#language-buttons');
const nameInputEl = document.querySelector('#username');
const repoContainerEl = document.querySelector('#repos-container');
const repoSearchTerm = document.querySelector('#repo-search-term');

const getDataFromApi = async function (url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const renderUserRepos = async function (username) {
  try {
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    const data = await getDataFromApi(apiUrl);

    displayRepos(data, username);
  } catch (error) {
    alert('Error');
  }
};

const renderFeaturedRepos = async function (language) {
  try {
    const apiUrl = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;

    const data = await getDataFromApi(apiUrl);

    displayRepos(data.items, language);
  } catch (error) {
    alert('Error');
  }
};

const constructIssues = function (issuesCount) {
  const statusEl = document.createElement('span');
  statusEl.classList = 'flex-row align-center';

  const iconEl = document.createElement('i');
  iconEl.classList = 'fas fa-times status-icon icon-danger';

  statusEl.append(iconEl, `${issuesCount} issues(s)`);

  return statusEl;
};

const constructNoIssues = function () {
  const statusEl = document.createElement('span');
  statusEl.classList = 'flex-row align-center';

  const iconEl = document.createElement('i');
  iconEl.classList = 'fas fa-check-square status-icon icon-success';

  statusEl.append(iconEl);

  return statusEl;
};

const displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (let i = 0; i < repos.length; i++) {
    const repoName = `${repos[i].owner.login}/${repos[i].name}`;

    const repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    const titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    let statusEl;

    // check if the repo has any open issues
    if (repos[i].open_issues_count > 0) {
      statusEl = constructIssues(repos[i].open_issues_count);
    } else {
      statusEl = constructNoIssues();
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

// function to handle form submission
const formSubmitHandler = function (event) {
  event.preventDefault();

  const username = nameInputEl.value.trim();

  if (username) {
    renderUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};

// function to handle which topic you selected
const buttonClickHandler = function (event) {
  // get the language of the button user clicked on
  const language = event.target.getAttribute('data-language');

  // check if language exists
  if (language) {
    // get the repo information
    renderFeaturedRepos(language);

    // empty the text for span
    repoContainerEl.textContent = '';
  }
};

// add event listener for form submission
userFormEl.addEventListener('submit', formSubmitHandler);

// add event listener for language button click
languageButtonsEl.addEventListener('click', buttonClickHandler);
