// const dropdown = document.querySelectorAll('details[open]');

// function closeDropdown(e) {
//     if(e.target.contains('summary-items')) {
//         dropdown.forEach(item => item.open = false)
//     }
    
// }

// document.body.addEventListener('click', closeDropdown)

const tabs = document.querySelectorAll('.galery__item'),
    content = document.querySelectorAll('.galery__img'),
    container = document.querySelector('.galery__tabs');


function hideTabs(i) {
    content[i].classList.remove('active');
    tabs[i].classList.remove('active');
}

function showTubs(i = 0) {
    content[i].classList.add('active');
    tabs[i].classList.add('active');
}
showTubs()

container.addEventListener('click', event => {
    let target = event.target;

    if(target.classList.contains('galery__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                showTubs(i);
            } else {
                hideTabs(i);
            }
        })
    }
})