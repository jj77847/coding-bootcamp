// Access toggle switch HTML element
var themeSwitcher = document.querySelector('#theme-switcher');
var container = document.querySelector('#main-container');

// Set default mode to dark
var mode = 'dark';

const onClick = function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
};

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', onClick);
