const menu = document.querySelector('.header__top-menu');
const burger = document.querySelector('.header__top-burger');
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    burger.classList.toggle('show');
    body.classList.toggle('stop-scroll');
});


body.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('header__top')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        burger.classList.remove('show');
        body.classList.remove('stop-scroll');
    }
})

