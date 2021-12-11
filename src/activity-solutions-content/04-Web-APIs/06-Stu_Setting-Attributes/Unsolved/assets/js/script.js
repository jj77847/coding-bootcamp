const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');

// first card

// target h4 and set text
site1El.children[0].textContent = 'Site 1';
// target a and set href
site1El.children[1].setAttribute('href', 'https://google.com');
// target img in a and set src
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);
// target img in a and set alt
site1El.children[1].children[0].setAttribute('alt', 'man working');
// target img in a and set style
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

// second card

// target h4 and set text
site2El.children[0].textContent = 'Site 2';
// target a and set href
site2El.children[1].setAttribute('href', 'https://twitter.com');
// target img in a and set src
site2El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_2.jpg'
);
// target img in a and set alt
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
// target img in a and set style
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

// third card

// target h4 and set text
site3El.children[0].textContent = 'Site 3';
// target a and set href
site3El.children[1].setAttribute('href', 'https://instagram.com');
// target img in a and set src
site3El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_3.jpg'
);
// target img in a and set alt
site3El.children[1].children[0].setAttribute('alt', 'women working');
// target img in a and set style
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

const h4Elements = document.querySelectorAll('h4');

for (let i = 0; i < h4Elements.length; i++) {
  // target current h4 element
  const h4 = h4Elements[i];

  // h4.style.color = 'blue';
  // h4.style.fontSize = '30px';
  // h4.style.fontWeight = 'bold';
  // h4.style.margin = 0;
  // h4.style.paddingLeft = '10px';

  // h4.setAttribute('class', 'card');

  h4.setAttribute(
    'style',
    'color: blue; font-size: 30px; font-weight: bold; margin: 0; padding-left: 10px'
  );
}
