const body = document.body;

// create h1
const h1El = document.createElement('h1');
h1El.textContent = 'Welcome to my page';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

// info container div
const infoEl = document.createElement('div');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

// image element
const imgEl = document.createElement('img');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');

// text below image
const kittenEl = document.createElement('div');
kittenEl.textContent = 'This is my kitten 🐱.';
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');

// text below image
const nameEl = document.createElement('div');
nameEl.textContent = 'His name is Jax.';
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');

infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);

// div containing favourite food
const favoriteEl = document.createElement('div');
favoriteEl.textContent = 'My favorite foods are:';
favoriteEl.setAttribute('style', 'font-size:20px;');

// create ol element
const olEl = document.createElement('ol');
olEl.setAttribute('class', 'fav-foods');

const favouriteFoods = ['Steak', 'Burgers', 'Pasta', 'Soup'];

// loop through the array
for (let i = 0; i < favouriteFoods.length; i++) {
  // get the food item from the array
  const foodItem = favouriteFoods[i];

  // create a li element
  const liEl = document.createElement('li');
  const opacity = 1 - (i * 1) / favouriteFoods.length;
  liEl.setAttribute('class', 'list-item');
  liEl.setAttribute(
    'style',
    'background-color: rgba(95, 95, 95, ' + opacity + ')'
  );

  // set the text of li with food item
  liEl.textContent = foodItem;

  // append the li to the ol element
  olEl.appendChild(liEl);
}

// append ol to the favoriteEl element
favoriteEl.appendChild(olEl);

// append all elements to the body element
body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(favoriteEl);
