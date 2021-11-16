import {iosVhFix} from './utils/ios-vh-fix';
import {initInnerMenu} from './modules/init-inner-menu';
import {initMenuBurger} from './modules/init-menu-burger';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initInnerMenu();
  initMenuBurger();

  window.addEventListener('load', () => {

  });
});

