const navItems = document.querySelectorAll('.js-nav-item');
const navLinks = document.querySelectorAll('.js-nav-link');
const navContents = document.querySelectorAll('.inner-nav');
const allNavActiveEl = document.querySelectorAll('.panel-header__menu a');

const onDocumentKeydown = (e) => {
    const isEscKey = e.key === 'Escape';
    const isTab = e.key === 'Tab';
    const activeElement = document.activeElement;
  
    if (isEscKey) {
      e.preventDefault();
      removeAllActiveState();
    }
  
    if (isTab && !e.shiftKey && activeElement === allNavActiveEl[allNavActiveEl.length - 1]) {
      removeAllActiveState();
    }
  
    if (isTab && e.shiftKey && activeElement === allNavActiveEl[0]) {
      removeAllActiveState();
    }
  };
  
  const onDocumentClick = (e) => {
    if (!e.target.closest('.panel-header__menu')) {
      e.preventDefault();
      removeAllActiveState();
    }
  };
  
  const removeAllActiveState = () => {
    navContents.forEach((el) => {
      el.classList.add('hidden');
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.removeEventListener('keydown', onDocumentKeydown);
      document.removeEventListener('click', onDocumentClick);
    });
  };
  
  const initMouseMoveAction = (el) => {
    const content = el.querySelector('.inner-nav');
    const link = el.querySelector('.js-nav-link');
    el.addEventListener('mouseenter', () => {
      removeAllActiveState();
  
      content.classList.remove('hidden');
      link.classList.add('active');
    });
  
    el.addEventListener('mouseleave', () => {
      removeAllActiveState();
    });
  };
  
  const initFocusAction = (el) => {
    const content = el.parentElement;
    const lasElChild = content.lastElementChild;
    el.addEventListener('focus', () => {
      removeAllActiveState();
      lasElChild.classList.remove('hidden');
      el.classList.add('active');
      document.addEventListener('keydown', onDocumentKeydown);
      document.addEventListener('click', onDocumentClick);
    });
  };
  
  
  const initInnerMenu = () => {
    navItems.forEach((item) => initMouseMoveAction(item));
    navLinks.forEach((link) => initFocusAction(link));
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });

  };
  
  export {initInnerMenu};
  