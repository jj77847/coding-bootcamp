const url = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

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
  console.log(error.message);
  //  redirect the user to error page
  window.location.replace(redirectUrl);
};

const onReady = function () {
  console.log(window.location.pathname);
  fetch(url).then(handleResponse).then(handleData).catch(handleError);
};

$(document).ready(onReady);
