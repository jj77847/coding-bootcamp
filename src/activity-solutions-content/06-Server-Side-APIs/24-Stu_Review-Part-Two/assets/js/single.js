const repoNameEl = document.querySelector('#repo-name');
const issueContainerEl = document.querySelector('#issues-container');
const limitWarningEl = document.querySelector('#limit-warning');

const getRepoName = function () {
  const urlParams = new URLSearchParams(document.location.search.substring(1));
  const repoName = urlParams.get('repo');

  if (repoName) {
    repoNameEl.textContent = repoName;

    renderRepoIssues(repoName);
  } else {
    // Under what condition will this run?
    // TODO: Write your answer here
    document.location.replace('./index.html');
  }
};

const renderRepoIssues = async function (repo) {
  try {
    const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    displayIssues(data);

    if (response.headers.get('Link')) {
      displayWarning(repo);
    }
  } catch (error) {
    alert('Error');
  }
};

const displayIssues = function (issues) {
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (let i = 0; i < issues.length; i++) {
    const issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    const titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement('span');

    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

const displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  limitWarningEl.appendChild(linkEl);
};

window.addEventListener('load', (event) => {
  // get the repo name from the URL
  getRepoName();
});
