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
    const listItem = $(
      '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    ).text(shoppingItem);

    // append the remove button to list item
    listItem.append(
      '<button class="btn btn-danger btn-small delete-item-btn" name="delete-btn">Remove</button>'
    );

    // append list item to shoppingListEl
    shoppingListEl.append(listItem);

    // clear form input value
    shoppingInputEl.val('');
  }
};

const removeListItem = function (event) {
  // get the target element and convert to jQuery
  const target = $(event.target);

  // check if click is from button with name delete-btn
  if (target.is('button[name="delete-btn"]')) {
    // get the list item
    const listItem = target.parent();

    // remove the list item
    listItem.remove();
  }
};

// add event listener on ul element
shoppingListEl.on('click', removeListItem);

// add form submit event listener
shoppingFormEl.on('submit', handleSubmit);
