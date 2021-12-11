const url =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc';

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
  fetch(url).then(handleResponse).then(handleData).catch(handleError);
};

$(document).ready(onReady);
