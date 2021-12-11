// declare object
var customerObject = {
  name: 'Juice',
  numberOfSugars: 2,
  isReady: false,
};

// log drink name and sugars
var drinkName = customerObject.name;
var drinkSugars = customerObject.numberOfSugars;

var message =
  'Your drink is ' + drinkName + ' with ' + drinkSugars + ' sugars!!';

console.log(message);

// check if ready
if (customerObject.isReady) {
  // log message
  console.log('Ready for pick-up');
} else {
  // log message
  console.log('Still in order queue');
}
