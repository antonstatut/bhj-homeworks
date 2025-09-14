const dec = document.querySelectorAll(".product__quantity-control_dec");
const inc = document.querySelectorAll(".product__quantity-control_inc");
const prodValue = document.querySelectorAll(".product__quantity-value");
inc.forEach((element,i) => {
    element.addEventListener("click", () => {
        prodValue[i].textContent++;
    })
});
dec.forEach((element,i) => {
    element.addEventListener("click", () => {
        if(prodValue[i].textContent > 1){
        prodValue[i].textContent--;
        };
    })
});
const productAdd = document.querySelectorAll(".product__add");
const products = document.querySelector(".cart__products");
const product = document.querySelectorAll(".product");
const productImage = document.querySelectorAll(".product__image");
productAdd.forEach((element, i) => {
    element.addEventListener("click", () => {
        const div = document.createElement('div');
        products.append(div);
        div.classList.add("cart__product");
        div.dataset.id = product[i].dataset.id;
        const img = document.createElement('img');
        img.classList.add("cart__product-image");
        img.src = productImage[i].src;
        div.append(img);
        const divCount = document.createElement('div');
        divCount.classList.add("cart__product-count");
        divCount.textContent = prodValue[i].textContent;
        div.append(divCount);
    });
});