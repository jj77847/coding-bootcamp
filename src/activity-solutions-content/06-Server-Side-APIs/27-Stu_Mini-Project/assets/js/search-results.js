const goBackBtn = $('#go-back-btn');
const searchResultsContainer = $('#search-results-container');
const searchTermSpan = $('#search-term');

// function to return params from url
const getUrlParams = function () {
  const urlParams = new URLSearchParams(document.location.search.substring(1));

  return {
    query: urlParams.get('q'),
    format: urlParams.get('format'),
  };
};

// function to generate the API url
const constructApiUrl = function (urlParams) {
  // check if format exists
  if (urlParams.format) {
    // return url with format and query
    return `https://www.loc.gov/${urlParams.format}/?q=${urlParams.query}&fo=json`;
  }
  // return url with query only
  return `https://www.loc.gov/search/?q=${urlParams.query}&fo=json`;
};

// function to fetch data from the API
const getDataFromApi = async function (apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};

const renderSearchResults = function (searchResults) {
  const constructAndAppendCard = function (searchResult) {
    const date = searchResult.date;
    const subject = searchResult.subject;
    const description = searchResult.description;
    const title = searchResult.title;
    const url = searchResult.url;

    const card = `<div class="card text-center mb-4">
      <div class="card-header">${title}s</div>
      <div class="card-body">
        <h6 class="card-title">Subjects</h6>
        <p class="card-text">${subject}</p>
        <h6 class="card-title">Description</h6>
        <p class="card-text">${description}</p>
        <a href=${url} class="btn btn-primary" target="_blank">Read More</a>
      </div>
      <div class="card-footer text-muted">Date: ${date}</div>
    </div>`;

    searchResultsContainer.append(card);
  };

  searchResults.forEach(constructAndAppendCard);
};

const renderNoResults = function () {
  const alert = `<div class="alert alert-info" role="alert">
    Sorry no results!!
  </div>`;

  searchResultsContainer.append(alert);
};

const onReady = async function () {
  // get params from the url
  const urlParams = getUrlParams();

  // use url params to construct API url
  const apiUrl = constructApiUrl(urlParams);

  const data = await getDataFromApi(apiUrl);

  // set the search result span to query
  searchTermSpan.text(urlParams.query);

  // if results is not empty
  if (data.results.length !== 0) {
    // render search result cards
    renderSearchResults(data.results);
  } else {
    renderNoResults();
  }
};

const goBack = function () {
  window.location.assign('./index.html');
};

// add event listener for go back button
goBackBtn.on('click', goBack);

// add on load event listener
$(document).ready(onReady);
