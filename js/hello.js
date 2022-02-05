let brand_name = document.querySelector('.brand-name');
let hello_1 = document.querySelector('.hello-1');
let hello_2 = document.querySelector('.hello-2');

window.onscroll = function () {
    if (window.pageYOffset > 20) {
    brand_name.classList.add('brand-active');
    hello_1.classList.add('hello-1-active');
    hello_2.classList.add('hello-2-active');
    }
};
