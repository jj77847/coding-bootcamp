const responseText = $('#response-text');

const badRequestUrl = 'https://api.github.com/orgs/nodejs/erpos?per_page=5';

const fetchDataFromApi = async function (url) {
  const response = await fetch(url);
  const statusCode = response.status;
  const message = `Status code error: ${statusCode}`;

  if (statusCode !== 200) {
    // throw an error
    throw new Error(message);
  }

  responseText.text(message);
  const data = await response.json();
  console.log(data);
};

const handleResponse = function (response) {
  // check the status code of response
  const statusCode = response.status;
  const message = `Status code error: ${statusCode}`;

  if (statusCode !== 200) {
    // throw an error
    throw new Error(message);
  }

  responseText.text(message);
  return response.json();
};

const handleData = function (data) {
  console.log(data);
};

const handleError = function (error) {
  // extract error message from error object
  const errorMessage = error.message;
  responseText.text(errorMessage);
};

const onReady = async function () {
  // fetch data from the API
  fetch(badRequestUrl).then(handleResponse).then(handleData).catch(handleError);

  // try {
  //   // fetch data from API async-await
  //   await fetchDataFromApi(badRequestUrl);
  // } catch (error) {
  //   const errorMessage = error.message;
  //   responseText.text(errorMessage);
  // }
};

$(document).ready(onReady);
