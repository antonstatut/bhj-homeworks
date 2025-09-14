const tasksList = document.querySelector(".tasks__list");
const btn = document.querySelector(".tasks__add");
const input = document.querySelector(".tasks__input");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const div = document.createElement("div");
    tasksList.append(div);
    div.classList.add("task");
    const divSub = document.createElement("div");
    div.append(divSub);
    divSub.classList.add("task__title");
    divSub.textContent = input.value;
    const a = document.createElement('a');
    a.setAttribute("href", "#");
    a.innerHTML = "&times;";
    a.classList.add("task__remove");
    div.append(a);
    a.addEventListener("click", () => {
        div.remove();
    });
});

