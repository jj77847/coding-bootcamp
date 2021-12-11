const formEl = $('#skills-form');
const nameInputEl = $('#skill-name');
const dateInputEl = $('#datepicker');
const skillsListEl = $('#skills-list');

const printSkills = function (name, date) {
  const listEl = $(`<li class='list-group-item'>${name} on ${date}</li>`);

  listEl.appendTo(skillsListEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  // get the values from the form inputs
  const nameInput = nameInputEl.val();
  const dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

const skillsAutoComplete = function () {
  const skills = [
    'Maths',
    'Science',
    'English',
    'History',
    'Geography',
    'Economics',
  ];

  $('#skill-name').autocomplete({
    source: skills,
  });
};

const datePicker = function () {
  $('#datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
  });
};

// add form submit event listener
formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here
$(skillsAutoComplete);

// Add Datepicker widget here
$(datePicker);
