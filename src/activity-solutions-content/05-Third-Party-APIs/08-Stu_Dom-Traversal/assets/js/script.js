// on ready event handler function
const onReady = function () {
  // target all list items and add class of tile
  $('li').addClass('tile');

  // set the text content of row 1 col 1 to O
  $('#item-a1').text('O');

  // set the text content of row 3 col 1 to O
  $('#item-a3').text('O');
};

// add event listener on load
$(document).ready(onReady);
