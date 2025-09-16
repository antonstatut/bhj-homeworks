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

        if(!products.querySelector(`[data-id="${product[i].dataset.id}"]`)){
            products.insertAdjacentHTML('afterbegin', `
                <div class="cart__product" data-id=${product[i].dataset.id}>
                    <img class="cart__product-image" src=${productImage[i].src}>
                    <div class="cart__product-count">${prodValue[i].textContent}</div>
                </div>
            `);
        }else{
            let productCount = document.querySelector(".cart__product-count");
            productCount.textContent = Number(productCount.textContent) + Number(prodValue[i].textContent);
        }
    });
});
