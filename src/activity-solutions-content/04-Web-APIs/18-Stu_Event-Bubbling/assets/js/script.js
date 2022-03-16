// target HTML elements
const carousel = document.querySelector('.carouselbox');
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');

// declare global variables
const images = [
  'https://i.picsum.photos/id/464/300/200.jpg?hmac=c3tWTbxJUSWSbMYqDyp0Ugteuv4v94-RcMYSj6I1SuU',
  'https://i.picsum.photos/id/191/300/200.jpg?hmac=-Ucbse-Ipihv7ZPvbpLB1sI9QyCw7s4Kc-JDq-vJfGc',
  'https://i.picsum.photos/id/604/300/200.jpg?hmac=FHV43JQiiRJ1RL89l2uhUAuriQf8fota4kx_JO2_aAw',
  'https://i.picsum.photos/id/420/300/200.jpg?hmac=cPuKqwwdRbEWUFib42oVBguxkg_eSnevKAu1qXARZ2g',
];

let index = 0;
let currentImage;

const navigate = function (direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
};

const handleCarouselClick = function () {
  console.log('carousel click');
  window.location.href = images[index];
};

const handleNext = function (event) {
  event.stopPropagation();

  navigate(1);
};

const handlePrev = function (event) {
  event.stopPropagation();

  navigate(-1);
};

// register event listeners
carousel.addEventListener('click', handleCarouselClick);
next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev);

navigate(0);
