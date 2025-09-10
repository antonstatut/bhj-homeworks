const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
fontSize.forEach(element => {
    element.addEventListener("click", () => {
        fontSize.forEach(item => item.classList.remove("font-size_active"));
        event.preventDefault();
        element.classList.add("font-size_active");
        if(element.classList.contains("font-size_small")){
            book.classList.remove("book_fs-big")
            book.classList.add("book_fs-small")
        }else if(element.classList.contains("font-size_big")){
            book.classList.remove("book_fs-small")
            book.classList.add("book_fs-big")
        }else{
             book.classList.remove("book_fs-small", "book_fs-big")
        }
    });
})

const colorBlack = document.querySelector(".text_color_black");
const colorGray = document.querySelector(".text_color_gray");
const colorWhitesmoke = document.querySelector(".text_color_whitesmoke");
colorGray.addEventListener("click", () => {
    event.preventDefault();
    colorGray.classList.add("color_active")
    colorBlack.classList.remove("color_active")
    colorWhitesmoke.classList.remove("color_active")
    const colorText = colorGray.dataset.textColor;
    book.style.color = colorText;
});
colorWhitesmoke.addEventListener("click", () => {
    event.preventDefault();
    colorWhitesmoke.classList.add("color_active")
    colorBlack.classList.remove("color_active")
    colorGray.classList.remove("color_active")
    const colorText = colorWhitesmoke.dataset.textColor;
    book.style.color = colorText;
});
colorBlack.addEventListener("click", () => {
    event.preventDefault();
    colorBlack.classList.add("color_active")
    colorGray.classList.remove("color_active")
    colorWhitesmoke.classList.remove("color_active")
    const colorText = colorBlack.dataset.textColor;
    book.style.color = colorText;
});

const bgBlack = document.querySelector(".bg_color_black")
const bgGray = document.querySelector(".bg_color_gray")
const bgWhite = document.querySelector(".bg_color_white")
bgBlack.addEventListener("click", () => {
    event.preventDefault();
    bgBlack.classList.add("color_active")
    bgGray.classList.remove("color_active")
    bgWhite.classList.remove("color_active")
    const colorBg = bgBlack.dataset.bgColor;
    book.style.backgroundColor = colorBg;
});
bgGray.addEventListener("click", () => {
    event.preventDefault();
    bgGray.classList.add("color_active")
    bgBlack.classList.remove("color_active")
    bgWhite.classList.remove("color_active")
    const colorBg = bgGray.dataset.bgColor;
    book.style.backgroundColor = colorBg;
});
bgWhite.addEventListener("click", () => {
    event.preventDefault();
    bgWhite.classList.add("color_active")
    bgBlack.classList.remove("color_active")
    bgGray.classList.remove("color_active")
    const colorBg = bgWhite.dataset.bgColor;
    book.style.backgroundColor = colorBg;
});

