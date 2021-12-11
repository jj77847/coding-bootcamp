const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');
const shoppingInputEl = $('#shopping-input');

// add form submit event handler function
const handleSubmit = function (event) {
  event.preventDefault();

  // get the shopping item value from input
  const shoppingItem = shoppingInputEl.val();

  // check if input is valid
  if (shoppingItem !== '') {
    // construct list item
    // set the text of list item to input value
    const listItem = $('<li>').text(shoppingItem);
    // append list item to shoppingListEl
    shoppingListEl.append(listItem);

    // clear form input value
    shoppingInputEl.val('');
  }
};

// add form submit event listener
shoppingFormEl.on('submit', handleSubmit);
