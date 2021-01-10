const tabs = document.querySelectorAll('.galery__item'),
    content = document.querySelectorAll('.galery__img'),
    container = document.querySelector('.galery__tabs'),
    burger = document.querySelector('.header__burger'),
    menu_panel = document.querySelector('.panel-header');



burger.addEventListener('click', () => {
    menu_panel.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('open-menu')
})



function hideTabs(i) {
    content[i].classList.remove('active');
    tabs[i].classList.remove('active');
}

function showTubs(i = 0) {
    content[i].classList.add('active');
    tabs[i].classList.add('active');
}
showTubs()


function clickTub(event) {
    let target = event.target;

    if(target.classList.contains('galery__item')) {
        tabs.forEach((item, i) => {
            target == item ? showTubs(i) : hideTabs(i);
        })
    }
}


container.addEventListener('click', clickTub)
container.addEventListener('focusin', clickTub)

