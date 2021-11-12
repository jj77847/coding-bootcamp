const links = [
  {
    href: 'instagram.com',
    label: 'Instagram',
  },
  {
    href: 'facebook.com',
    label: 'Facebook',
  },
  {
    href: 'linkedin.com',
    label: 'LinkedIn',
  },
];

const constructLinks = function () {
  // div
  const div = document.createElement('div');
  div.setAttribute('class', 'links-container');

  // loop through links and construct a tags and append to div
  for (let i = 0; i < links.length; i++) {
    // create a
    const a = document.createElement('a');

    // set attributes
    a.setAttribute('class', 'link-item');
    a.setAttribute('href', links[i].href);
    a.textContent = links[i].label;

    // append to div
    div.appendChild(a);
  }

  return div;
};

const constructInfo = function () {
  // div
  const div = document.createElement('div');
  div.setAttribute('class', 'about-me-info');

  // h1
  const h1 = document.createElement('h1');
  h1.textContent = 'Bob Smith';

  // h2
  const h2 = document.createElement('h2');
  h2.textContent = 'Crime Fighter';
  // p
  const p = document.createElement('p');
  p.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos hic minus possimus aliquid assumenda, nulla id iusto illo, autem explicabo ab! Sed dolores aperiam repudiandae perferendis eaque deleniti eius.';

  // create links
  const links = constructLinks();
  console.log(links);

  // append all to div
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(links);

  return div;
};

const constructImage = function () {
  // div
  const div = document.createElement('div');
  div.setAttribute('class', 'about-me-image');

  // img
  const img = document.createElement('img');
  img.setAttribute('src', './assets/images/image.jpeg');
  img.setAttribute('alt', 'not a minion');

  // append
  div.appendChild(img);

  return div;
};

const constructCard = function () {
  // div
  const div = document.createElement('div');
  div.setAttribute('class', 'about-me-container');

  // construct image
  const imageItem = constructImage();

  // construct info
  const infoItem = constructInfo();

  // append
  div.appendChild(imageItem);
  div.appendChild(infoItem);

  return div;
};

const parent = document.body;

const card = constructCard();

parent.appendChild(card);
