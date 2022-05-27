var menu = document.querySelector('.header__top-menu');
var burger = document.querySelector('.header__top-burger');
var overlay = document.querySelector('.header__overlay');
var body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    burger.classList.toggle('show');
    body.classList.toggle('stop-scroll');
});


body.addEventListener('click', (event) => {
    var element = event.target;

    if (element.classList.contains('header__top')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        burger.classList.remove('show');
        body.classList.remove('stop-scroll');
    }
})

