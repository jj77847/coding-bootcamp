// target the HTML elements
const formElement = document.getElementById('form');
const formTotalInputElement = document.getElementById('total');
const formTipInputElement = document.getElementById('tip-percentage');
const tipSpanElement = document.getElementById('tip-amount');
const totalSpanElement = document.getElementById('new-total');

const calculateTip = function (total, tipPercentage) {
  return (total * tipPercentage) / 100;
};

const calculateTotal = function (total, tipAmount) {
  return total + tipAmount;
};

const renderAmounts = (event) => {
  // prevent the default for submit
  event.preventDefault();

  // get the form input values as numbers
  const inputTotal = parseFloat(formTotalInputElement.value);
  const inputTipPercentage = parseFloat(formTipInputElement.value);

  // validate the form inputs
  if (!isNaN(inputTotal) && !isNaN(inputTipPercentage)) {
    // calculate the tip amount
    const tipAmount = calculateTip(inputTotal, inputTipPercentage);

    // calculate the total
    const total = calculateTotal(inputTotal, tipAmount);

    // render amounts on the page
    tipSpanElement.textContent = tipAmount.toFixed(2);
    totalSpanElement.textContent = total.toFixed(2);
  } else {
    // alert invalid form inputs
    alert('Please enter valid numbers');
  }
};

// add event listeners
formElement.addEventListener('submit', renderAmounts);
