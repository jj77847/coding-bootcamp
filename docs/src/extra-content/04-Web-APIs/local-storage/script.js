const onLoad = function () {
  console.log('on load');
  // get from LS
  const items = localStorage.getItem('basket');
  console.log(items);

  // parse to JS
  const itemsParsed = JSON.parse(items);
  console.log(itemsParsed);

  // check if items are present
  if (itemsParsed.length === 0) {
    console.log('Basket Empty');
    itemsParsed.push('hello');
    console.log(itemsParsed);
    localStorage.setItem('basket', JSON.stringify(itemsParsed));
  }
};

window.addEventListener('load', onLoad);
