const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

const recoling = function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
};

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', recoling);
