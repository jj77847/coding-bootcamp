const isRequired = (input) =>
  input === '' || input.length > 1 ? 'Please enter a single character' : true;

module.exports = { isRequired };
