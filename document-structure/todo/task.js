const tasksList = document.querySelector(".tasks__list");
const btn = document.querySelector(".tasks__add");
const input = document.querySelector(".tasks__input");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    if(input.value.trim() === ""){
        alert("Заполните поле вводимой задачи!");
        return
    }else{
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        const div = document.querySelector(".task")
        const a = document.querySelector(".task__remove");
        a.addEventListener("click", () => {
            div.remove();
        });
        input.value = "";
    }
});