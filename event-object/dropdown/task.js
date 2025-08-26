const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.addEventListener("click", function() {
    dropdownList.classList.toggle("dropdown__list_active");
});

const array = Array.from(document.querySelectorAll(".dropdown__item"));

array.forEach((item, i) => {
    item.onclick = function() {
        dropdownValue.textContent = array[i].textContent;
        dropdownList.classList.remove("dropdown__list_active");
        return false;
    }
});