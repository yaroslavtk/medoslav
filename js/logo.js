let logo = document.querySelector('.logo');

window.onscroll = function () {
    if (window.pageYOffset > 1) {
    logo.classList.add('logo-active');
    }
};