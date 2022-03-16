const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

const renderGuestData = function (name, comment) {
  const cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  const card = `<div class="card h-100 custom-card">
    <h5 class="card-header custom-card-header">${name}</h5>
    <div class="card-body">
      <p class="card-text">${comment}</p>
    </div>
  </div>`;

  cardColumnEl.append(card);

  guestBookDisplayEl.append(cardColumnEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  // get data from from fields
  const nameInput = nameInputEl.val();
  const commentInput = commentInputEl.val();

  // check if either is present
  if (!nameInput || !commentInput) {
    console.log('You need to fill out the form!');
    return;
  }

  // print card with guest data
  renderGuestData(nameInput, commentInput);

  // reset form fields
  nameInputEl.val('');
  commentInputEl.val('');
};

// add submit event listener
formEl.on('submit', handleFormSubmit);
