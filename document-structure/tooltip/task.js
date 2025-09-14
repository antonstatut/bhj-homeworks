const toolTips = document.querySelectorAll(".has-tooltip");
const div = document.createElement("div");
div.classList.add("tooltip");
document.body.append(div);
toolTips.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const titleText = element.title;
        div.textContent = titleText;
        div.classList.toggle("tooltip_active");
        const linkRect = element.getBoundingClientRect();
        div.style.top = (linkRect.bottom + 5) + 'px';
        div.style.left = linkRect.left + 'px';
    });
});