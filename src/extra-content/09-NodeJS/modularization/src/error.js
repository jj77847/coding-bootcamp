const displayError = (error) =>
  error.message ? `Error: ${error.message}` : `Something went wrong!!`;

// export only one function
// default exports
module.exports = displayError;
