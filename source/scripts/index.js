const navMain = document.querySelector('.nav');
const headerToggle = document.querySelector('.header__toggle');

navMain.classList.remove('nav--nojs');
headerToggle.classList.remove('header__toggle--nojs');

headerToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--open');
    headerToggle.classList.remove('header__toggle--close');
    headerToggle.classList.add('header__toggle--open');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--open');
    headerToggle.classList.remove('header__toggle--open');
    headerToggle.classList.add('header__toggle--close');
  }
});
