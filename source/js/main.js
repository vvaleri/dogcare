import {iosVhFix} from './utils/ios-vh-fix';
import {initInnerMenu} from './modules/init-inner-menu';
import {initMenuBurger} from './modules/init-menu-burger';
import {initTabs} from './modules/init-tabs';
import AOS from './vendor/aos';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initInnerMenu();
  initMenuBurger();
  AOS.init({
    duration: 1000,
  });

  window.addEventListener('load', () => {
    initTabs();
  });
});

