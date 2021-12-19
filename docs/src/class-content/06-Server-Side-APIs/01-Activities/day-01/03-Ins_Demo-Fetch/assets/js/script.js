const tableBody = document.getElementById('repo-table');
const fetchButton = document.getElementById('fetch-button');

const renderData = function () {
  const requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  const dataToJSON = function (response) {
    return response.json();
  };

  const handleResponse = function (data) {
    console.log(data);
    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < data.length; i++) {
      // Creating elements, tablerow, tabledata, and anchor
      var createTableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      var link = document.createElement('a');

      // Setting the text of link and the href of the link
      link.textContent = data[i].html_url;
      link.href = data[i].html_url;

      // Appending the link to the tabledata and then appending the tabledata to the tablerow
      // The tablerow then gets appended to the tablebody
      tableData.appendChild(link);
      createTableRow.appendChild(tableData);
      tableBody.appendChild(createTableRow);
    }
  };

  fetch(requestUrl).then(dataToJSON).then(handleResponse);
};

fetchButton.addEventListener('click', renderData);
