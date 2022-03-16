const searchFormEl = $('#search-form');
const searchInputEl = $('#search-input');
const searchFormatEl = $('#search-format');

const handleSubmit = function (event) {
  event.preventDefault();

  // get the search input
  const searchQuery = searchInputEl.val();

  // get the search format
  const format = searchFormatEl.val();

  // construct url parameters
  const urlParams = `q=${searchQuery}&format=${format}`;

  // check if search query is not empty
  if (searchQuery) {
    // redirect to search-results.html
    window.location.assign(`./search-results.html?${urlParams}`);
  }
};

// add form submit event listener
searchFormEl.on('submit', handleSubmit);
