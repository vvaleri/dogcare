const tabs = document.querySelectorAll('.galery__item');
const content = document.querySelectorAll('.galery__img')
const container = document.querySelector('.galery__tabs');

const hideTabs = (i) => {
  content[i].classList.remove('active');
  tabs[i].classList.remove('active');
}

const showTubs = (i = 0) => {
  content[i].classList.add('active');
  tabs[i].classList.add('active');
}
showTubs()


const clickTub = (event) => {
  let target = event.target;

  if(target.classList.contains('galery__item')) {
      tabs.forEach((item, i) => {
          target == item ? showTubs(i) : hideTabs(i);
      })
  }
}

const initTabs = () => {
  container.addEventListener('click', clickTub)
};

export {initTabs};
