// target the parent div element
const parentDivContainer = $('#root');

// create a p element
const pElement = $('<p>');

// assign text to p element
pElement.text('~ Carol Dweck');

// set class attribute to p element
pElement.addClass('plain');

// create a h1 element
const h1Element = $('<h1>');

// assign text to h1 element
h1Element.text(
  'Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'
);

// set class attribute to h1 element
h1Element.attr('class', 'fancy');

// append elements to parent div container
h1Element.appendTo(parentDivContainer);
pElement.appendTo(parentDivContainer);

// parentDivContainer.append(h1Element);
// parentDivContainer.append(pElement);
