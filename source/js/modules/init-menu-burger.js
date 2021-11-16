const menuBurger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.panel-header');
const navList = document.querySelector('.panel-header__inner');

const breakpointMd = window.matchMedia('(min-width:600px)');

const openMenu = () => {
  menuBurger.ariaPressed = 'true';
  mobileMenu.classList.add('active');
  menuBurger.classList.add('active');
  window.disableBodyScroll(navList);
};

const closeMenu = () => {
  menuBurger.ariaPressed = 'false';
  mobileMenu.classList.remove('active');
  menuBurger.classList.remove('active');
  window.enableBodyScroll(navList);
};

const toggleMenu = () => {
  if (menuBurger) {
    breakpointMd.addListener(closeMenu);
    if (menuBurger.ariaPressed === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  }
};

const initMenuBurger = () => {
  if (menuBurger) {
    menuBurger.addEventListener('click', toggleMenu);
  }
};

export {initMenuBurger};