// function to fetch data from API
const fetchDataFromAPI = function (url) {
  // fetch data from url

  // convert response to data
  const getDataFromResponse = function (response) {
    // get data from response using json method
    const data = response.json();

    // return data to next promise chain
    return data;
  };

  // log info from issues
  const getInfoFromData = function (data) {
    // callback function for forEach
    const logInfo = function (each) {
      // get url
      const url = each.url;
      // get username
      const username = each.user.login;
      const message = `Issue from ${username} - ${url}`;
      console.log(message);
    };

    // slice to 5 items and iterate over data and extract info
    data.slice(0, 5).forEach(logInfo);
  };

  fetch(url).then(getDataFromResponse).then(getInfoFromData);
};

fetchDataFromAPI('https://api.github.com/repos/twitter/chill/issues');
