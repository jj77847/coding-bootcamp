const requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
const ajaxOptions = {
  url: requestUrl,
  method: 'GET',
};

const handleAjaxResponse = function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
};

$.ajax(ajaxOptions).then(handleAjaxResponse);

// Browser Fetch Method
const handleFetchResponse = function (response) {
  return response.json();
};

const handleFetchData = function (data) {
  console.log('Fetch Response \n-------------');
  console.log(data);
};

fetch(requestUrl).then(handleFetchResponse).then(handleFetchData);

// Browser XMLHttpRequest
const onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = onreadystatechange;
xhr.open('GET', requestUrl);
xhr.send();
