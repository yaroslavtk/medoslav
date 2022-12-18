let bin_btns = document.querySelectorAll('.btn-add-bin')
let products_number = document.querySelector('.producs-added')
let top_bin = document.querySelector('.top-bin')
let counter = 0;

for (let bin_btn of bin_btns) {
    bin_btn.onclick = function () {
    counter++;
    products_number.textContent = counter;   
    top_bin.classList.add('product_inside')
}
};

