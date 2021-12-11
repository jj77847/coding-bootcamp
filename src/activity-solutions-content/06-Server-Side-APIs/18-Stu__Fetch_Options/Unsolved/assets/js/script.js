const url = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

const fetchOptions = {
  cache: 'reload',
  // method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify({
  //   login: 'bobsmith',
  //   password: 'Password123',
  // }),
};

const handleResponse = function (response) {
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

const handleData = function (data) {
  console.log(data);
};

const handleError = function (error) {
  console.log(error);
};

const onReady = function () {
  fetch(url, fetchOptions)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
};

$(document).ready(onReady);
