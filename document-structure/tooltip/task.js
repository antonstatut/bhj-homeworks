const toolTips = document.querySelectorAll(".has-tooltip");
const div = document.createElement("div");
div.classList.add("tooltip");
document.body.append(div);
const clickedTitles = [];
toolTips.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        if(clickedTitles.includes(element.title)){
            div.classList.toggle("tooltip_active");
            clickedTitles.splice(element.title);
        }else{
            clickedTitles.push(element.title);
            div.classList.add("tooltip_active");
            if(clickedTitles.length > 1){
                clickedTitles.shift();
            }
        }
        const titleText = element.title;
        div.textContent = titleText;
        const linkRect = element.getBoundingClientRect();
        div.style.top = (linkRect.bottom + 5) + 'px';
        div.style.left = linkRect.left + 'px';
    });
});