const submitBtn = document.querySelector('#submit');

const onSubmit = function (event) {
  event.preventDefault();
  console.log(event.target);
  // prevent default
  console.log('FORM SUBMIT');
};

submitBtn.addEventListener('click', onSubmit);
