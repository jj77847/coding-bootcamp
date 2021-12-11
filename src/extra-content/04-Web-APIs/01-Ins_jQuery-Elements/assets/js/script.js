// Comments show the vanilla JavaScript equivalent statements
const abilities = [
  'Select',
  'Create',
  'Style',
  'Animate',
  'Traverse',
  'Event Listen',
  'much more',
];

// var rootEl = document.getElementById("root");
var rootEl = $('#root');

// var titleEl = document.createElement("h1");
var titleEl = $('<h1>');

// titleEl.textContent = "Hello friends";
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
rootEl.append('<h2>With jQuery we can:</h2>');

const renderAbilities = function (abilities) {
  // render a list of abilities

  const renderAbility = function (ability) {
    const listItem = `<li class="my-3">${ability}</li>`;
    rootEl.append(listItem);
  };

  abilities.forEach(renderAbility);
};

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    abilityEl.append("<div>" + ability + "</div>");
// })

renderAbilities(abilities);
